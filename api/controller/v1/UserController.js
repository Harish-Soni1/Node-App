var validatorFunction = require('../../common/dataValidator');
var stringConstant = require('../../common/stringConstants');
var userService = require('../../services/userService');
var validator = require("email-validator");

exports.GetAllEmployee = async function(req, res){
    try {

        let employeeInfo = await userService.GetAllEmployee(req, res);

        if (employeeInfo.executed == 1){
            res.json({status: 200, message: stringConstant.COMMAN_SUCCESS_MSG, data: employeeInfo.data})
        }
        else{
            res.json({status: 400, message: stringConstant.NO_DATA_FOUND})
        }
        
    } catch (error) {
        res.json({status: 400, message: error})
    }
}

exports.GetEmployeeById = async function(req, res){
    try {

        let employeeInfo = await userService.GetEmployeeById(req, res);

        if (employeeInfo.executed == 1){
            res.json({status: 200, message: stringConstant.COMMAN_SUCCESS_MSG, data: employeeInfo.data})
        }
        else{
            res.json({status: 400, message: stringConstant.NO_DATA_FOUND})
        }
        
    } catch (error) {
        res.json({status: 400, message: error})
    }
}

exports.AddEmployee = async function(req, res){
    try {

        let employeeInfo = await userService.AddEmployee(req, res);

        if (employeeInfo.executed == 1){
            res.json({status: 200, message: stringConstant.EMPL_ADDED, data: employeeInfo.data})
        }
        else{
            res.json({status: 400, message: stringConstant.EMP_NOT_ADDED})
        }
        
    } catch (error) {
        res.json({status: 400, message: error})
    }
}

exports.EditEmployee = async function(req, res){
    try {

        let employeeInfo = await userService.EditEmployee(req, res);

        if (employeeInfo.executed == 1){
            res.json({status: 200, message: stringConstant.EMP_EDITED, data: employeeInfo.data})
        }
        else{
            res.json({status: 400, message: employeeInfo.message})
        }
        
    } catch (error) {
        res.json({status: 400, message: error})
    }
}

exports.DeleteEmployee = async function(req, res){
    try {

        let employeeInfo = await userService.DeleteEmployee(req, res);

        if (employeeInfo.executed == 1){
            res.json({status: 200, message: stringConstant.EMP_DELETED, data: employeeInfo.data})
        }
        else{
            res.json({status: 400, message: stringConstant.EMP_NOT_DELETED})
        }
        
    } catch (error) {
        res.json({status: 400, message: error})
    }
}

exports.GetEmployeeByDepartment = async function(req, res){
    try {

        let employeeInfo = await userService.GetEmployeeByDepartment(req, res);

        if (employeeInfo.executed == 1){
            res.json({status: 200, message: stringConstant.COMMAN_SUCCESS_MSG, data: employeeInfo.data})
        }
        else{
            res.json({status: 400, message: stringConstant.NO_DATA_FOUND})
        }
        
    } catch (error) {
        res.json({status: 400, message: error})
    }
}

exports.GetAllDepartment = async function(req, res){
    try {

        let employeeInfo = await userService.GetAllDepartment(req, res);

        if (employeeInfo.executed == 1){
            res.json({status: 200, message: stringConstant.COMMAN_SUCCESS_MSG, data: employeeInfo.data})
        }
        else{
            res.json({status: 400, message: stringConstant.NO_DATA_FOUND})
        }
        
    } catch (error) {
        res.json({status: 400, message: error})
    }
}