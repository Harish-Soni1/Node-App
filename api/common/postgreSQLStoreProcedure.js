var StoreProcedure = {
    GetAllEmployee: 'select * from GetAllEmployee();',
    GetEmployeeById: 'select * from GetEmployeeById($1);',
    AddEmployee: 'select * from AddEmployee(array[($1,$2,$3,$4,$5,$6)]::empl[])',
    EditEmployee: 'select * from EditEmployee($1,$2,$3,$4,$5,$6);',
    DeleteEmployee: 'select * from DeleteEmployee($1);',
    GetEmployeeByDepartment: 'select * from GetEmployeeByDepartment($1,$2,$3);',
    GetAllDepartment: 'select * from GetAllDepartment();',
}

module.exports = StoreProcedure;