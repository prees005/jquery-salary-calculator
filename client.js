$(document).ready(readyNow);

let allEmployees = [];
let monthlyCosts = 0;

function readyNow() {
    //console.log('JQ READY');
    $('#submitInfo').on('click', addEmployee);
}

function addEmployee() {
    
    //gets user input and stores all values in separate variables
    let firstNameEmployee = $('#firstName').val();
    let lastNameEmployee = $('#lastName').val();
    let idNumberEmployee = $('#idNumber').val();
    let jobTitleEmployee = $('#jobTitle').val();
    let annualSalaryEmployee = $('#annualSalary').val();

    //adds all information inputed as an object
    let employeeObject = {
        fName: firstNameEmployee,
        lName: lastNameEmployee,
        id: idNumberEmployee,
        title: jobTitleEmployee,
        salary: annualSalaryEmployee
    };

    //pushes employee object to global array
    allEmployees.push(employeeObject);

    displayEmployee();

}

function displayEmployee() {
    let tableElement = $('#oneEmployeeRow')

    tableElement.empty();

    for (let employee of allEmployees) {
        tableElement.append('<tr class="employeesInfo"><td>' + employee.fName + '</td><td>' + employee.lName + '</td><td>' + employee.id + '</td><td>' + employee.title + '</td><td>' + employee.salary + '</td><td><button class="clickDeleteButton">Delete</button></tr>');
    }

    $('#firstName').val('');
    $('#lastName').val('');
    $('#idNumber').val('');
    $('#jobTitle').val('');
    $('#annualSalary').val('');
}

function totalMonthlyCost() {
    for (let i = 0; i < allEmployees.length; i++) {
        let monthlySalary = allEmployees[i].salary / 12;
        monthlyCosts += monthlySalary;
    }

    $('#totalCosts').empty();
    $('#totalCosts').append(monthlyCosts);
}