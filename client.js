$(document).ready(readyNow);

let allEmployees = [];
let maxCost = 20000;

function readyNow() {
    //console.log('JQ READY');
    //event listener when submit button is clicked.
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

    //calls displayEmployee function in order to show info on the DOM.
    displayEmployee();
    //totalMonthlyCost();

}

function displayEmployee() {
    //access table element
    let tableElement = $('#oneEmployeeRow')

    //empties current information
    tableElement.empty();

    //loops through allEmployees array and appends new information to the DOM in table format.
    for (let employee of allEmployees) {
        tableElement.append('<tr class="employeesInfo"><td class="inputedRows">' + employee.fName + '</td><td class="inputedRows">' + employee.lName + '</td><td class="inputedRows">' + employee.id + '</td><td class="inputedRows">' + employee.title + '</td><td class="inputedRows salaryClass">' + '$' + employee.salary + '</td><td class="buttonSpot"><button class="clickDeleteButton">Delete</button></tr>');
    }

    //clears all input values
    $('#firstName').val('');
    $('#lastName').val('');
    $('#idNumber').val('');
    $('#jobTitle').val('');
    $('#annualSalary').val('');

    //calls totalMonthlyCosts function 
    totalMonthlyCost();

    //calls deleteEmployee function
    deleteEmployee();
}

function totalMonthlyCost() {

    //sets monthlyBudget to 0
    let monthlyBudget = 0;

    //loops through allEmployees array (all the employees added to the roster)
    for (let i = 0; i < allEmployees.length; i++) {
        //gets the value of each employees annual salary and divides it by 12. Then adds this number to the totalMonthly budget.  
        monthlyBudget += Number(allEmployees[i].salary) / 12;
    }
    //if monthlyBudget exceeds maxCost, the text is changed to red. 
    if(monthlyBudget > maxCost) {
        $('#totalCosts').css('color', 'red');
        $('.total').css('color', 'red');
    }

    //empties previous total monthly costs and appends new. 
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
        
        //console.log(subtractMonthlySalary);

        //gets the current total monthly costs and turns it into a number
        let currentMonthlyCosts = Number($('#totalCosts').text());

        //subtracts the deleted employee's monthly salary from the total monthly costs. 
        let newTotal = currentMonthlyCosts - subtractMonthlySalary;
        
        //console.log(newTotal);

        //empties previous monthly costs
        $('#totalCosts').empty();

        //appends new monthly costs (the deleted employees salary will no longer be included in the total)
        $('#totalCosts').append(newTotal);

    })
}
