$(document).ready(readyNow);

let allEmployees = [];

function readyNow() {
    //console.log('JQ READY');
    $('#submitInfo').on('click', addEmployee);
}

function addEmployee() {
    
    let firstNameEmployee = $('#firstName').val();
    let lastNameEmployee = $('#lastName').val();
    let idNumberEmployee = $('#idNumber').val();
    let jobTitleEmployee = $('#jobTitle').val();
    let annualSalaryEmployee = $('#annualSalary').val();

    let employeeObject = {
        fName: firstNameEmployee,
        lName: lastNameEmployee,
        id: idNumberEmployee,
        title: jobTitleEmployee,
        salary: annualSalaryEmployee
    };

    allEmployees.push(employeeObject);

}

console.log(allEmployees);