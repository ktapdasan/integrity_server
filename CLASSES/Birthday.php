<?php
require_once('../../CLASSES/ClassParent.php');
class Birthday_theme extends ClassParent {

    var $pk = NULL;
    var $month = NULL;
    var $location = NULL;
    var $archived = NULL;


    public function __construct(
                                    $pk='',
                                    $month='',
                                    $location='',
                                    $archived=''
                                ){
        
        $fields = get_defined_vars();
        
        if(empty($fields)){
            return(FALSE);
        }

        //sanitize
        foreach($fields as $k=>$v){
            $this->$k = pg_escape_string(trim(strip_tags($v)));
        }

        return(true);
    }

    public function get_birthday_theme($data){

         foreach($data as $k=>$v){
            $data[$k] = pg_escape_string(trim(strip_tags($v)));
        }

        $str=$data['searchstring'];

        if ($str){
            $where = " AND (month ILIKE '$str%')";
        }
        
        $sql = <<<EOT
                select 
                    pk,
                    month,
                    location
                from birthday_theme
                where archived = $this->archived
                $where
                order by pk
                ;
EOT;

        return ClassParent::get($sql);
    }


    public function update_birthday_theme(){


        $sql = <<<EOT
                UPDATE birthday_theme set
                (
                    month,
                    location
                )
                =
                (
                    '$this->month',
                    '$this->location'
                )
                WHERE pk = $this->pk
                ;
EOT;

        return ClassParent::update($sql);
    }

    public function add_birthday_theme(){
     
        
        $sql = <<<EOT
                insert into birthday_theme
                (
                    month,
                    location
                )
                values
                (
                    '$this->month',
                    '$this->location'
                )
                ;
EOT;
        

        return ClassParent::insert($sql);
    }

     public function delete_birthday_theme(){

        $sql = <<<EOT
                update birthday_theme set 
                archived = 'true'
                where pk = $this->pk;
EOT;

          return ClassParent::update($sql);
    }

    
    public function reactivate(){

        $sql = <<<EOT
                update birthday_theme set 
                archived = false
                where pk = $this->pk;
EOT;

          return ClassParent::update($sql);
    }

   
    public function get_birthday(){

         $sql = <<<EOT
                select 
                pk,
                (select last_name ||', '|| first_name ||' '|| middle_name) as name,
                to_char((employees.details->'personal'->>'birth_date')::date,'Mon DD')AS birthday,
                to_char(now()::date,'Mon DD')AS now
                from employees
                where
                to_char((employees.details->'personal'->>'birth_date')::date,'MM')=
                to_char(now()::date,'MM')
                order by employees.details->'personal'->'birth_date'
                ;
EOT;
            return ClassParent::get($sql);

    }


    public function current_month(){


         $sql  = <<<EOT
                select 
                    pk,
                    month,
                    location,
                    to_char(now()::date,'Month') as now
                from birthday_theme
                where archived = 'false'
                and month = '$this->month' 
                order by pk desc 
                limit 1
                ;
EOT;

        return ClassParent::get($sql);
    }
}

?>