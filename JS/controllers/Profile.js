app.controller('Profile', function(
  										$scope,
                                        SessionFactory,
                                        EmployeesFactory,
                                        LeaveFactory,
                                        md5
  									){


    $scope.profile = {};  
    $scope.titles = {};
    $scope.department = {};
    $scope.level_title = {};
    $scope.leave_types ={};
    $scope.leave_balances = {};
    $scope.employment_typek={};
    $scope.employee_statusk={};
    $scope.rate_type={};
    $scope.pay_period={};
    $scope.employees = {
        education:[{educ_level: "Primary"}]
    };


            


    init();


    function init(){
        var promise = SessionFactory.getsession();
        promise.then(function(data){
            var _id = md5.createHash('pk');
            $scope.pk = data.data[_id];

            get_profile();
            get_positions();
            get_department();
            get_levels();
            leave_types();
            
        })
    }

      function get_positions(){
        var promise = EmployeesFactory.get_positions();
        promise.then(function(data){
            $scope.titles.data = data.data.result;
        })
        .then(null, function(data){
            
        });
    }

    function get_department(){
        var filter = {
            archived : false
        }

        var promise = EmployeesFactory.get_department(filter);
        promise.then(function(data){
            $scope.department.data = data.data.result;
        })
        .then(null, function(data){
            
        });
    }

    function get_levels(){
        var promise = EmployeesFactory.get_levels();
        promise.then(function(data){
            $scope.level_title.data = data.data.result;
        })
        .then(null, function(data){
            
        });
    }

    function get_employment_type(){
        var promise = EmployeesFactory.get_employment_type();
        promise.then(function(data){
            $scope.employment_typek.data = data.data.result;
        })
        .then(null, function(data){

        });
    }

    function get_employment_statuses(){
        var promise = EmployeesFactory.get_employment_statuses();
        promise.then(function(data){
            $scope.employee_statusk.data = data.data.result;
        })
        .then(null, function(data){

        });
    }

    function get_rate_type(){
        var promise = EmployeesFactory.get_rate_type();
        promise.then(function(data){
            $scope.rate_type.data = data.data.result;
        })
        .then(null, function(data){

        });
    }

    function get_pay_period(){
        var promise = EmployeesFactory.get_pay_period();
        promise.then(function(data){
            $scope.pay_period.data = data.data.result;
        })
        .then(null, function(data){

        });
    }
     $scope.addNewChoice = function() {
        if ($scope.employee.school_type == 1){
            $scope.employees.education.push({educ_level: "Primary"});
        }
        else if ($scope.employee.school_type == 2){
            $scope.employees.education.push({educ_level: "Secondary" });
        }
        else if ($scope.employee.school_type == 3){
            $scope.employees.education.push({educ_level: "Tertiary" });
        }
    };

    function leave_types(){
         var filter = {
            archived : false,
            employees_pk : $scope.profile.pk
        };
        
        $scope.leave_types.data = [];
        var promise = LeaveFactory.get_leave_types(filter);
        promise.then(function(data){
            $scope.leave_types.status = true;
            $scope.leave_types.data = data.data.result;

        
        })
        .then(null, function(data){
            
        });
    }

    function get_profile(){
         get_levels();
         get_department();
         get_positions();
         leave_types();
         get_employment_statuses();
         get_employment_type();


        var filters = { 
            'pk' : $scope.pk
        };


        var promise = EmployeesFactory.profile(filters);
        promise.then(function(data){

            $scope.profile = data.data.result[0];
            
            $scope.profile.details = JSON.parse($scope.profile.details);
            $scope.profile.permission = JSON.parse($scope.profile.permission);
            $scope.profile.leave_balances = JSON.parse($scope.profile.leave_balances);

            
            if ($scope.profile.details.personal.profile_picture === undefined || $scope.profile.details.personal.profile_picture === null
                || $scope.profile.details.personal.profile_picture == 'No Data') {
                $scope.profile.details.personal.profile_picture = './ASSETS/img/blank.gif';
            }
            if ($scope.profile.details.personal.contact_number == 'undefined'  || $scope.profile.details.personal.birth_date == undefined){
                $scope.profile.details.personal.contact_number = 'No Data';
            }
            if ($scope.profile.details.personal.present_address == 'Undefined' || $scope.profile.details.personal.present_address == undefined){
                $scope.profile.details.personal.present_address = 'No Data';
                
            }    
            if ($scope.profile.details.personal.permanent_address == 'Undefined' || $scope.profile.details.personal.permanent_address == undefined){
                $scope.profile.details.personal.permanent_address = 'No Data';
            }    
        

            if ($scope.profile.details.personal.religion == 'Undefined' || $scope.profile.details.personal.religion == undefined ){
                 $scope.profile.details.personal.religion = 'No Data';
            }


            if ($scope.profile.details.personal.emergency_contact_name == 'Undefined' || $scope.profile.details.personal.emergency_contact_name == undefined){
                 $scope.profile.details.personal.emergency_contact_name = 'No Data';
            }

            if ($scope.profile.details.personal.emergency_contact_number == 'Undefined' || $scope.profile.details.personal.emergency_contact_number == undefined){
                $scope.profile.details.personal.emergency_contact_number = 'No Data';
            }

            if ($scope.profile.details.personal.birth_date == null){
                $scope.profile.details.personal.birth_date ='No Data';
            }
            else{
                $scope.profile.details.personal.birth_date = new Date($scope.profile.details.personal.birth_date);
            }

            if ($scope.profile.details.personal.email_address == undefined){
                $scope.profile.details.personal.email_address = 'No Data';
            }

            if ($scope.profile.details.company.date_started == undefined){
                $scope.profile.details.company.date_started = 'No data';
            }
            else{
                $scope.profile.details.company.date_started = new Date($scope.profile.details.company.date_started);
            }

            if ($scope.profile.supervisor == undefined){
                $scope.profile.supervisor = 'No Data';
            }

            if ($scope.profile.department == undefined){
                $scope.profile.department = 'No Data';
            }
            if ($scope.profile.level == undefined){
                $scope.profile.level = 'No Data';
            }

            if ($scope.profile.title == undefined){
                $scope.profile.title = 'No Data';
            }

            if ($scope.profile.employee_type == undefined){
                $scope.profile.employee_type = 'No Data';
            }

            if ($scope.profile.employment_status == undefined){
                $scope.profile.employment_status = 'No Data';
            }

            if ($scope.profile.details.company.business_email_address == undefined){
                $scope.profile.details.company.business_email_address = 'No Data';
            }
            
            if ($scope.profile.details.company.employee_id == undefined){
                $scope.profile.details.company.employee_id = 'No Data';
            }

    

            var a = $scope.profile.leave_balances;
            $scope.profile.leave_balances = {};

             for(var i in $scope.leave_types.data){
                if(a[$scope.leave_types.data[i].pk] === undefined){
                    a[$scope.leave_types.data[i].pk] = 0;
                }
                $scope.profile.leave_balances[$scope.leave_types.data[i].name] = a[$scope.leave_types.data[i].pk];
               
            }

            if ($scope.profile.details.company.salary == undefined) {
                $scope.profile.details.company.salary = null;
            }
            else if ($scope.profile.details.company.salary != null) {
            $scope.isShown = function(salarys_type) {

            return salarys_type === $scope.profile.details.company.salary.salary_type;
            };
            }
        
        })   
    } 

    
});