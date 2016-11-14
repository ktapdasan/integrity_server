/*****
employees table new jsonb fields
*****/

create table employees
(
	pk serial primary key,
	details jsonb,
	leave_balances jsonb,
	date_created timestamptz default now(),
	archived boolean default false
);
alter table employees owner to chrs;

create table salary_types
(
	pk serial primary key,
	type text not null,
	archived boolean default false
);
alter table salary_types owner to chrs;

insert into salary_types
(
	type
)
values
(
	'bank'
),
(
	'cash'
),
(
	'wire'
);

create table employee_types
(
    pk serial primary key,
    type text not null,
    archived boolean default false
);
alter table employee_types owner to chrs;

insert into employee_types
(
    type
)
values
(
    'Exempt'
),
(
    'Non-Exempt'
);

create table employment_statuses
(
    pk serial primary key,
    status text not null,
    archived boolean default false
);
alter table employment_statuses owner to chrs;

insert into employment_statuses
(
    status
)
values
(
    'Probationary'
),
(
    'Trainee'
),
(
    'Contractual'
),
(
    'Regular'
),
(
    'Consultant'
);

create table rate_types
(
    pk serial primary key,
    type text not null,
    archived boolean default false
);
alter table rate_types owner to chrs;

insert into rate_types
(
    type
)
values
(
    'Hourly'
),
(
    'Daily'
),
(
    'Monthly'
);

create table pay_periods
(
    pk serial primary key,
    period text not null,
    archived boolean default false
);
alter table pay_periods owner to chrs;

insert into pay_periods
(
    period
)
values
(
    'Daily'
),
(
    'Weekly'
),
(
    'Semi-Monthly'
),
(
    'Monthly'
),
(
    'Annually'
);


/*IMPORTANT!*/
-- For Profile Pic Go the Integrity Folder and Open Terminal Type sudo mkdir ASSETS/uploads/profile
-- After Type on Terminal sudo chmod 777 -R ASSETS/uploads/profile :)

/*start of details fields*/
/*
personal - {
	first_name
	middle_name
	last_name
	birthday
	gender
	religion
	civil_statuses_pk - Single/Married/Widowed	
}

company - {
	start_date
	employment_statuses_pk - Regular/Probationary/Contractual/Consultant/Trainee
	employment_types_pk - Exempt/Non-exempt
	salary - {
		salary_types_pk

		//if type is bank//
		details - {
			bank
			account_number
			amount
		}
		//end of if type is bank//
		
		//if type is cash//
		details - {
			amount
		}
		//end of if type is cash//

		//if type is wire transfer//
		details - {
			mode_of_payment
			account_number
			amount
		}
		//end of if type is wire transfer//

		allowances - {
			allowances_pk - amount * can be multiple
		}
	}
	work_schedule - {
		sunday : {
			in 
			out
		}
		monday : {
			in 
			out
		}
		tuesday : {
			in 
			out
		}
		wednesday : {
			in 
			out
		}
		thursday : {
			in 
			out
		}
		friday : {
			in 
			out
		}
		saturday : {
			in 
			out
		}
	}
}

government - {
	sss
	pagibig
	philhealth
	tin
}

education - {
	doctoral - {
		school
		major
		location
		from
		to
	},
	masteral - {
		school
		major
		location
		from
		to
	},
	tertiary - {
		school
		course
		location
		from
		to
	},
	secondary - {
		school
		location
		from
		to
	},
	primary - {
		school
		location
		from
		to
	}
}
*/

/*
EXAMPLES
update employees set
details = jsonb_set(details, '{company}', ' {
    "departments_pk": "26",
    "employee_id": "201400072",
    "date_started": "03-01-2016",
    "levels_pk": "7",
    "titles_pk": "14",
    "supervisor": "28",
    "employee_status_pk": "3",
    "employment_type_pk": "2",
    "business_email_address": "ken.tapdasan@chrsglobal.com",
    "salary": {
        "salary_type": "2",
        "rate_type_pk": "2",
        "pay_period_pk": "2",
        "details": {
            "amount": "12000"
        }
    },
    "work_schedule": {
        "friday": {
            "in": "09:00",
            "out": "18:00",
            "flexible": "true"
        },
        "monday": {
            "in": "09:00",
            "out": "18:00",
            "flexible": "true"
        },
        "sunday": null,
        "saturday": null,
        "tuesday": {
            "in": "09:00",
            "out": "18:00",
            "flexible": "true"
        },
        "thursday": {
            "in": "09:00",
            "out": "18:00",
            "flexible": "true"
        },
        "wednesday": {
            "in": "09:00",
            "out": "18:00",
            "flexible": "true"
        }
    }
}
', true)
where pk = 12;


update employees set
details = jsonb_set(details, '{government}', ' 
{
    "data_sss": "N/A",
    "data_tin": "N/A",
    "data_phid": "N/A",
    "data_pagmid": "N/A"
}
', true);

update employees set
details = jsonb_set(details, '{personal}', ' 
{
"gender": "Male",
"religion": "Catholic",
"last_name": "Tapdasan",
"birth_date": "7-27-1995",
"first_name": "Ken",
"civilstatus": "Single",
"middle_name": "Villanueva",
"email_address": "ktapdasan.chrs@gmail.com",
"contact_number": "09504151950",
"landline_number": "5340368",
"present_address": "Mandaluyong",
"profile_picture": "./ASSETS/img/blank.gif",
"permanent_address": "Dasmarinas",
"emergency_contact_name": "Clarissa Mae Fortuno",
"emergency_contact_number": "09504151950"
}
', true)
where pk = 12;

update employees set
details = jsonb_set(details, '{education}', ' 
{
    "school_type": [
        {
            "educ_level": "Primary",
            "school_name": "San Miguel Elementary School",
            "date_to_school": "2008-06-03",
            "school_location": "Dasmarinas Salitran III",
            "date_from_school": "2009-03-16"
        },
        {
            "educ_level": "Tertiary",
            "school_name": "Saint John Bosco Institute of Arts and Sciences",
            "date_to_school": "2013-03-01",
            "school_location": "Mandaluyong Daang Bakal",
            "date_from_school": "2015-03-16"
        }
    ]
}
', true)
where pk = 12;

*/
/*
Example: When All Data is Completly Inserted or Updated
(JSON DATA)
{
    "company": {
        "salary": {
            "details": {
                "amount": "12000"
            },
            "salary_type": "cash",
            "rate_type_pk": "2",
            "pay_period_pk": "2"
        },
        "levels_pk": "7",
        "titles_pk": "14",
        "supervisor": "28",
        "employee_id": "201400072",
        "date_started": "03-01-2016",
        "work_schedule": {
            "friday": {
                "in": "09:00",
                "out": "18:00",
                "flexible": "true"
            },
            "monday": {
                "in": "09:00",
                "out": "18:00",
                "flexible": "true"
            },
            "sunday": null,
            "tuesday": {
                "in": "09:00",
                "out": "18:00",
                "flexible": "true"
            },
            "saturday": null,
            "thursday": {
                "in": "09:00",
                "out": "18:00",
                "flexible": "true"
            },
            "wednesday": {
                "in": "09:00",
                "out": "18:00",
                "flexible": "true"
            }
        },
        "departments_pk": "26",
        "employee_status_pk": "3",
        "employment_type_pk": "2",
        "business_email_address": "ken.tapdasan@chrsglobal.com"
    },
    "personal": {
        "gender": "Male",
        "religion": "Catholic",
        "last_name": "Tapdasan",
        "birth_date": "7-27-1995",
        "first_name": "Ken",
        "civilstatus": "Single",
        "middle_name": "Villanueva",
        "email_address": "ktapdasan.chrs@gmail.com",
        "contact_number": "09504151950",
        "landline_number": "5340368",
        "present_address": "Mandaluyong",
        "profile_picture": "./ASSETS/img/blank.gif",
        "permanent_address": "Dasmarinas",
        "emergency_contact_name": "Clarissa Mae Fortuno",
        "emergency_contact_number": "09504151950"
    },
    "education": {
        "school_type": [
            {
                "educ_level": "Primary",
                "school_name": "San Miguel Elementary School",
                "date_to_school": "2008-06-03",
                "school_location": "Dasmarinas Salitran III",
                "date_from_school": "2009-03-16"
            },
            {
                "educ_level": "Tertiary",
                "school_name": "Saint John Bosco Institute of Arts and Sciences",
                "date_to_school": "2013-03-01",
                "school_location": "Mandaluyong Daang Bakal",
                "date_from_school": "2015-03-16"
            },
            {
                "educ_level": "Secondary",
                "school_name": "DNNHS",
                "date_to_school": "2222-03-23",
                "school_location": "Dasmarinas Salitran III",
                "date_from_school": "1970-01-01"
            }
        ]
    },
    "government": {
        "data_sss": "N/A",
        "data_tin": "N/A",
        "data_phid": "N/A",
        "data_pagmid": "N/A"
    }
}



