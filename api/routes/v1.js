var express = require("express");
var router = express();

const employeeController = require("../controller/v1/UserController");

router.get("/employee/getall", employeeController.GetAllEmployee);
router.post("/employee/getbyid", employeeController.GetEmployeeById);
router.post("/employee/add", employeeController.AddEmployee);
router.put("/employee/edit", employeeController.EditEmployee);
router.post("/employee/delete", employeeController.DeleteEmployee);
router.get("/department/getall", employeeController.GetAllDepartment);
router.post("/department/getall/employee", employeeController.GetEmployeeByDepartment);

router.all("*", function (req, res, next) {
    res.send("Invalid Url");
});

module.exports = router;