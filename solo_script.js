function Employee(array) {
    this.Employee = array[0];
    this.ID = array[1];
    this.salary = array[2];
    this.score = array[3];
}

var arrayAtticus = ["Atticus", "2405", "47000", 3];
var arrayJem = ["Jem", "62347", "63500", 4];
var arrayBoo = ["Boo", "11435", "54000", 3];
var arrayScout = ["Scout", "6243", "74750", 5];

var atticus = new Employee(arrayAtticus);
var jem = new Employee(arrayJem);
var boo = new Employee(arrayBoo);
var scout = new Employee(arrayScout);
var employeeList = [atticus, jem, boo, scout];
//Create variables used to write to the DOM
var newEl, newText, position;
//Capture the position of insertion into the DOM
position = document.getElementById('content');
Employee.prototype.calculateSTI = function() {
    bonus = this.getBaseSTI(this.score) + this.getYearAdjustment(this.ID) -
        this.getIncomeAdjustment(this.salary);
    if (bonus > 0.13) {
        bonus = 0.13;
    }
    this.totalCompensation = Math.round((1 + bonus) * this.salary);
    this.bonusPercent = bonus * 100 + "%";
    this.bonusAmount = Math.round(bonus * this.salary);
}
Employee.prototype.getBaseSTI = function(reviewScore) {
    var basePercent;
    switch (reviewScore) {
        case 1:
            basePercent = 0;
            break;
        case 2:
            basePercent = 0;
            break;
        case 3:
            basePercent = 0.04;
            break;
        case 4:
            basePercent = 0.06;
            break;
        case 5:
            basePercent = 0.10;
            break;
    }
    return basePercent;
}
Employee.prototype.getYearAdjustment = function(employeeNumber) {
    var yearAdjustment = 0;
    if (employeeNumber.length == 4) {
        yearAdjustment = 0.05;
    }
    return yearAdjustment;
}
Employee.prototype.getIncomeAdjustment = function(salary) {
    var incomeAdjustment = 0;
    salary = parseInt(salary);
    if (salary > 65000) {
        incomeAdjustment = 0.01;
    }
    return incomeAdjustment;
}
Employee.prototype.toString = function() {
    return [this.Employee + ": bonus Percent: " + this.bonusPercent +
        " Total Compensation: " + this.totalCompensation +
        " bonus amount: " + this.bonusAmount
    ];
}
var printEmployees = function(employeeList) {
    for (var i = 0; i < employeeList.length; i++) {
        employeeList[i].calculateSTI();
        newEl = document.createElement('li');
        newText = document.createTextNode(employeeList[i].toString());
        newEl.appendChild(newText);
        position.appendChild(newEl);
    }
}
printEmployees(employeeList);