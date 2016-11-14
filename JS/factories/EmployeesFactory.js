app.factory('EmployeesFactory', function($http){
    var factory = {};           
    
    factory.fetch = function(data){
        var promise = $http({
            url:'./FUNCTIONS/Employees/fetch.php', 
            method: 'POST',
            headers: {'Content-Type': 'application/x-www-form-urlencoded'},
            transformRequest: function(obj) {
                var str = [];
                for(var p in obj)
                str.push(encodeURIComponent(p) + "=" + encodeURIComponent(obj[p]));
                return str.join("&");
            },
            data : data
        }) 

        return promise;
    };

    factory.fetch_all = function(data){
        var promise = $http({
            url:'./FUNCTIONS/Employees/fetch_all.php',
            method: 'POST',
            headers: {'Content-Type': 'application/x-www-form-urlencoded'},
            transformRequest: function(obj) {
                var str = [];
                for(var p in obj)
                str.push(encodeURIComponent(p) + "=" + encodeURIComponent(obj[p]));
                return str.join("&");
            },
            data : data
        })

        return promise;
    };


    factory.profile = function(data){
        var promise = $http({
            url:'./FUNCTIONS/Employees/profile.php',
            method: 'POST',
            headers: {'Content-Type': 'application/x-www-form-urlencoded'},
            transformRequest: function(obj) {
                var str = [];
                for(var p in obj)
                str.push(encodeURIComponent(p) + "=" + encodeURIComponent(obj[p]));
                return str.join("&");
            },
            data : data
        })

        return promise;
    };

    factory.auth = function(data){
        var promise = $http({
            url:'./FUNCTIONS/Employees/authentication.php',
            method: 'POST',
            headers: {'Content-Type': 'application/x-www-form-urlencoded'},
            transformRequest: function(obj) {
                var str = [];
                for(var p in obj)
                str.push(encodeURIComponent(p) + "=" + encodeURIComponent(obj[p]));
                return str.join("&");
            },
            data : data
        })

        return promise;
    };

    factory.change_password = function(data){
        var promise = $http({
            url:'./FUNCTIONS/Employees/change_password.php',
            method: 'POST',
            headers: {'Content-Type': 'application/x-www-form-urlencoded'},
            transformRequest: function(obj) {
                var str = [];
                for(var p in obj)
                str.push(encodeURIComponent(p) + "=" + encodeURIComponent(obj[p]));
                return str.join("&");
            },
            data : data
        })

        return promise;
    };

    factory.submit_comment = function(data){
        var promise = $http({
            url:'./FUNCTIONS/Footer/submit_comment.php',
            method: 'POST',
            headers: {'Content-Type': 'application/x-www-form-urlencoded'},
            transformRequest: function(obj) {
                var str = [];
                for(var p in obj)
                str.push(encodeURIComponent(p) + "=" + encodeURIComponent(obj[p]));
                return str.join("&");
            },
            data : data
        })

        return promise;
    }; 

    factory.get_positions = function(data){
        var promise = $http({
            url:'./FUNCTIONS/Employees/get_positions.php',
            method: 'POST',
            headers: {'Content-Type': 'application/x-www-form-urlencoded'},
            transformRequest: function(obj) {
                var str = [];
                for(var p in obj)
                str.push(encodeURIComponent(p) + "=" + encodeURIComponent(obj[p]));
                return str.join("&");
            },
            data : data
        })

        return promise;
    };

    factory.get_department = function(data){
        var promise = $http({
            url:'./FUNCTIONS/Employees/get_department.php',
            method: 'POST',
            headers: {'Content-Type': 'application/x-www-form-urlencoded'},
            transformRequest: function(obj) {
                var str = [];
                for(var p in obj)
                str.push(encodeURIComponent(p) + "=" + encodeURIComponent(obj[p]));
                return str.join("&");
            },
            data : data
        })

        return promise;
    };

    factory.get_levels = function(data){
        var promise = $http({
            url:'./FUNCTIONS/Employees/get_levels.php',
            method: 'POST',
            headers: {'Content-Type': 'application/x-www-form-urlencoded'},
            transformRequest: function(obj) {
                var str = [];
                for(var p in obj)
                str.push(encodeURIComponent(p) + "=" + encodeURIComponent(obj[p]));
                return str.join("&");
            },
            data : data
        })

        return promise;
    };

    
    factory.submit_employees = function(data){
        var promise = $http({
            url:'./FUNCTIONS/Employees/submit_employees.php',
            method: 'POST',
            headers: {'Content-Type': 'application/x-www-form-urlencoded'},
            transformRequest: function(obj) {
                var str = [];
                for(var p in obj)
                str.push(encodeURIComponent(p) + "=" + encodeURIComponent(obj[p]));
                return str.join("&");
            },
            data : data
        })

        return promise;
    };

    factory.delete_employees = function(data){
        var promise = $http({
            url:'./FUNCTIONS/Employees/delete_employees.php',
            method: 'POST',
            headers: {'Content-Type': 'application/x-www-form-urlencoded'},
            transformRequest: function(obj) {
                var str = [];
                for(var p in obj)
                str.push(encodeURIComponent(p) + "=" + encodeURIComponent(obj[p]));
                return str.join("&");
            },
            data : data
        })

        return promise;
    };

    factory.activate_employees = function(data){
        var promise = $http({
            url:'./FUNCTIONS/Employees/activate_employees.php',
            method: 'POST',
            headers: {'Content-Type': 'application/x-www-form-urlencoded'},
            transformRequest: function(obj) {
                var str = [];
                for(var p in obj)
                str.push(encodeURIComponent(p) + "=" + encodeURIComponent(obj[p]));
                return str.join("&");
            },
            data : data
        })

        return promise;
    };

    factory.edit_employees = function(data){
        var promise = $http({
            url:'./FUNCTIONS/Employees/update_employees.php',
            method: 'POST',
            headers: {'Content-Type': 'application/x-www-form-urlencoded'},
            transformRequest: function(obj) {
                var str = [];
                for(var p in obj)
                str.push(encodeURIComponent(p) + "=" + encodeURIComponent(obj[p]));
                return str.join("&");
            },
            data : data
        })

        return promise;
    };

    factory.get_supervisors = function(){
        var promise = $http({
            url:'./FUNCTIONS/Employees/get_supervisors.php',
            method: 'GET'         
        })

        return promise;
    };

    factory.get_max_employee_id = function(){
        var promise = $http({
            url:'./FUNCTIONS/Employees/get_max_employee_id.php',
            method: 'GET'         
        })

        return promise;
    };

    factory.get_employment_type = function(){
        var promise = $http({
            url:'./FUNCTIONS/Employees/get_employment_type.php',
            method: 'GET'         
        })

        return promise;
    };

    factory.get_employment_statuses = function(){
        var promise = $http({
            url:'./FUNCTIONS/Employees/get_employment_statuses.php',
            method: 'GET'         
        })

        return promise;
    };

    factory.get_pay_period = function(){
        var promise = $http({
            url:'./FUNCTIONS/Employees/get_pay_period.php',
            method: 'GET'         
        })

        return promise;
    };

    factory.get_rate_type = function(){
        var promise = $http({
            url:'./FUNCTIONS/Employees/get_rate_type.php',
            method: 'GET'         
        })

        return promise;
    };

    factory.edit_supervisor = function(data){
        var promise = $http({
            url:'./FUNCTIONS/Employees/edit_supervisor.php',
            method: 'POST',
            headers: {'Content-Type': 'application/x-www-form-urlencoded'},
            transformRequest: function(obj) {
                var str = [];
                for(var p in obj)
                str.push(encodeURIComponent(p) + "=" + encodeURIComponent(obj[p]));
                return str.join("&");
            },
            data : data
        })

        return promise;
    };

    factory.get_myemployees = function(data){
        var promise = $http({
            url:'./FUNCTIONS/Employees/get_myemployees.php',
            method: 'POST',
            headers: {'Content-Type': 'application/x-www-form-urlencoded'},
            transformRequest: function(obj) {
                var str = [];
                for(var p in obj)
                str.push(encodeURIComponent(p) + "=" + encodeURIComponent(obj[p]));
                return str.join("&");
            },
            data : data
        })

        return promise;
    };

    factory.update_permissions = function(data){
        var promise = $http({
            url:'./FUNCTIONS/Employees/update_permissions.php',
            method: 'POST',
            headers: {'Content-Type': 'application/x-www-form-urlencoded'},
            transformRequest: function(obj) {
                var str = [];
                for(var p in obj)
                str.push(encodeURIComponent(p) + "=" + encodeURIComponent(obj[p]));
                return str.join("&");
            },
            data : data
        })

        return promise;
    };

    factory.count = function(data){
        var promise = $http({
            url:'./FUNCTIONS/Employees/count.php',
            method: 'POST',
            headers: {'Content-Type': 'application/x-www-form-urlencoded'},
            transformRequest: function(obj) {
                var str = [];
                for(var p in obj)
                str.push(encodeURIComponent(p) + "=" + encodeURIComponent(obj[p]));
                return str.join("&");
            },
            data : data
        }) 

        return promise;
    };

    factory.accepted_count = function(data){
        var promise = $http({
            url:'./FUNCTIONS/Timesheet/count.php',
            method: 'POST',
            headers: {'Content-Type': 'application/x-www-form-urlencoded'},
            transformRequest: function(obj) {
                var str = [];
                for(var p in obj)
                str.push(encodeURIComponent(p) + "=" + encodeURIComponent(obj[p]));
                return str.join("&");
            },
            data : data
        }) 

        return promise;
    };

    factory.accepted_list = function(data){
        var promise = $http({
            url:'./FUNCTIONS/Timesheet/list.php',
            method: 'POST',
            headers: {'Content-Type': 'application/x-www-form-urlencoded'},
            transformRequest: function(obj) {
                var str = [];
                for(var p in obj)
                str.push(encodeURIComponent(p) + "=" + encodeURIComponent(obj[p]));
                return str.join("&");
            },
            data : data
        }) 

        return promise;
    };
    
    return factory;
    
});