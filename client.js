$(document).ready(readyNow);

let allEmployees = [];

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
    //totalMonthlyCost();

}

function displayEmployee() {
    let tableElement = $('#oneEmployeeRow')

    tableElement.empty();

    for (let employee of allEmployees) {
        tableElement.append('<tr class="employeesInfo"><td class="inputedRows">' + employee.fName + '</td><td class="inputedRows">' + employee.lName + '</td><td class="inputedRows">' + employee.id + '</td><td class="inputedRows">' + employee.title + '</td><td class="inputedRows salaryClass">' + '$' + employee.salary + '</td><td class="buttonSpot"><button class="clickDeleteButton">Delete</button></tr>');
    }

    $('#firstName').val('');
    $('#lastName').val('');
    $('#idNumber').val('');
    $('#jobTitle').val('');
    $('#annualSalary').val('');

    totalMonthlyCost();
    deleteEmployee();
}

function totalMonthlyCost() {

    let monthlyBudget = 0;

    for (let i = 0; i < allEmployees.length; i++) {
        monthlyBudget += Number(allEmployees[i].salary) / 12;
    }

    if(monthlyBudget > 20000) {
        $('#totalCosts').css('color', 'red');
        $('.total').css('color', 'red');
    }

    $('#totalCosts').empty();
    $('#totalCosts').append(monthlyBudget);
    
}

function deleteEmployee() {
    
    //event listener for the delete button
    $('.clickDeleteButton').on('click', function() {
        
        //deletes the entire row of the delete button
        $(this).closest('tr').remove();

        //gets the salary info from the deleted item
        let item = $(this).closest('tr').find('.salaryClass').text();

        //turns the deleted salary into a number
        item = Number(item.slice(1));
        //console.log(item);

        //turns the salary into monthly
        let subtractMonthlySalary = item / 12;
        
        console.log(subtractMonthlySalary);

        //gets the current total monthly costs and turns it into a number
        let currentMonthlyCosts = Number($('#totalCosts').text());

        let newTotal = currentMonthlyCosts - subtractMonthlySalary;
        
        console.log(newTotal);
    
        $('#totalCosts').empty();
        $('#totalCosts').append(newTotal);

    })
}
