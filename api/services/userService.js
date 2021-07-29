var storeProcedure = require('../common/postgreSQLStoreProcedure');
var database = require('../common/database');
const stringConstants = require('../common/stringConstants');

let userService = {
    GetAllEmployee: function(req, res){
        return new Promise((resolve, reject) => {
            try {

                database.executeQuery(storeProcedure.GetAllEmployee,
                    [], res, function(rows){
                        if (rows.rowCount > 0){
                            resolve({executed: 1, data: rows.rows})
                        }
                        else{
                            resolve({executed: 0})
                        }
                    })
                
            } catch (error) {
                res.json({status: 400, message: error})
            }
        })
    },
    GetEmployeeById: function(req, res){
        return new Promise((resolve, reject) => {
            try {

                database.executeQuery(storeProcedure.GetEmployeeById,
                    [req.body.employeeId], res, function(rows){
                        if (rows.rowCount > 0){
                            resolve({executed: 1, data: rows.rows})
                        }
                        else{
                            resolve({executed: 0})
                        }
                    })
                
            } catch (error) {
                res.json({status: 400, message: error})
            }
        })
    },
    AddEmployee: function(req, res){
        return new Promise((resolve, reject) => {
            try {

                let empId = generateEmployeeId()

                database.executeQuery(storeProcedure.AddEmployee,
                    [empId,
                     req.body.firstName,
                     req.body.lastName,
                     req.body.designation,
                     req.body.salary,
                     req.body.departmentId], res, function(rows){
                        if (rows.rowCount > 0){
                            resolve({executed: 1, data: rows.rows})
                        }
                        else{
                            resolve({executed: 0})
                        }
                    })
                
            } catch (error) {
                res.json({status: 400, message: error})
            }
        })
    },
    EditEmployee: function(req, res){
        return new Promise( async (resolve, reject) => {
            try {

                let empData = await userService.GetEmployeeById(req, res);
                
                if (empData.executed == 1){

                    let employee = empData.data

                    employee.firstName = (req.body.firstName && req.body.firstName != '') ? req.body.firstName : employee.firstName
                    employee.lastName = (req.body.lastName && req.body.lastName != '') ? req.body.lastName : employee.lastName
                    employee.designation = (req.body.designation && req.body.designation != '') ? req.body.designation : employee.designation
                    employee.salary = (req.body.salary && req.body.salary != '') ? req.body.salary : employee.salary
                    employee.departmentId = (req.body.departmentId && req.body.departmentId != '') ? req.body.departmentId : employee.departmentId

                    database.executeQuery(storeProcedure.EditEmployee,
                        [req.body.employeeId,
                         employee.firstName,
                         employee.lastName,
                         employee.designation,
                         employee.salary,
                         employee.departmentId],
                        res, function(rows){
                            if (rows.rowCount > 0){
                                resolve({executed: 1, data: rows.rows})
                            }
                            else{
                                resolve({executed: 0, message: stringConstants.EMP_NOT_EDITED})
                            }
                        })
                }
                else{
                    resolve({executed: 0, message: stringConstants.EMPL_NOT_FOUND})
                }
                
            } catch (error) {
                res.json({status: 400, message: error})
            }
        })
    },
    DeleteEmployee: function(req, res){
        return new Promise((resolve, reject) => {
            try {

                database.executeQuery(storeProcedure.DeleteEmployee,
                    [req.body.employeeId], res, function(rows){
                        if (rows.rows[0].res == 1){
                            resolve({executed: 1})
                        }
                        else{
                            resolve({executed: 0})
                        }
                    })
                
            } catch (error) {
                res.json({status: 400, message: error})
            }
        })
    },
    GetEmployeeByDepartment: function(req, res){
        return new Promise((resolve, reject) => {
            try {

                database.executeQuery(storeProcedure.GetEmployeeByDepartment,
                    [req.body.departmentId,
                     req.body.startDate,
                     req.body.endDate], res, function(rows){
                        if (rows.rowCount > 0){
                            resolve({executed: 1, data: rows.rows})
                        }
                        else{
                            resolve({executed: 0})
                        }
                    })
                
            } catch (error) {
                res.json({status: 400, message: error})
            }
        })
    },
    GetAllDepartment: function(req, res){
        return new Promise((resolve, reject) => {
            try {

                database.executeQuery(storeProcedure.GetAllDepartment,
                    [], res, function(rows){
                        if (rows.rowCount > 0){
                            resolve({executed: 1, data: rows.rows})
                        }
                        else{
                            resolve({executed: 0})
                        }
                    })
                
            } catch (error) {
                res.json({status: 400, message: error})
            }
        })
    }
}

function generateEmployeeId(){

    let id = "BLSY-EMP-"
    let ch = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789"

    for (let i=0; i<8; i++){
        id += ch[Math.floor(Math.random() * ch.length)];
    }

    return id

}

module.exports = userService;