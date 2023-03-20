// Write that prompts the user to input student marks. The input should be between 0 and 100. Then output the correct grade:

// A > 79, B - 60 to 79, C -  59 to 49, D - 40 to 49, E - less 40.

let marks = 50
function getGrade(marks) {
  let grade;
  if (marks >= 80) {
    grade = "A";
  } else if (marks >= 60) {
    grade = "B";
  } else if (marks >= 50) {
    grade = "C";
  } else if (marks >= 40) {
    grade = "D";
  } else {
    grade = "E";
  }

  return grade;
}

// Output the grade
console.log(`student grade is ${getGrade(marks)}.`);

// Write a program that takes as input the speed of a car e.g 80. If the speed is less than 70, it should print “Ok”. Otherwise, for every 5 km/s above the speed limit (70), it should give the driver one demerit point and print the total number of demerit points.
// For example, if the speed is 80, it should print: “Points: 2”. If the driver gets more than 12 points, the function should print: “License suspended”.

function checkSpeed(speed) {
  const speedLimit = 70;
  const kpd = 5;

  if (speed <= speedLimit) {
    console.log("Ok");
  } else {
    const dp = Math.floor((speed - speedLimit) / kpd);
    if (dp > 12) {
      console.log("License suspended");
    } else {
      console.log("Points: " + dp);
    }
  }
}

//   Write a program whose major task is to calculate an individual’s Net Salary by getting the inputs of basic salary and benefits. Calculate the payee (i.e. Tax), NHIFDeductions, NSSFDeductions, gross salary, and net salary.

//   NB: Use KRA, NHIF, and NSSF values provided in the link below.

//   https://www.aren.co.ke/payroll/taxrates.htm

//   Links to an external site.

//   https://www.kra.go.ke/en/individual/calculate-tax/calculating-tax/paye

//  tax rates and thresholds


const salary = 50000;
const personalRelief = 2400;
// nssf rate
const nssfRate = 0.06;

const taxableIncome = salary + personalRelief;

const payeAmount = calculatePaye(salary) * taxableIncome;

const nhifAmount = calculatenhif(salary);

const nssfAmount = salary * nssfRate;

const netSalary =
  salary + personalRelief - (payeAmount + nhifAmount + nssfAmount);
// nhif rates

console.log(`Gross Salary: ${salary}`);
console.log(`Reliefs: ${personalRelief}`);
console.log(`PAYE Deduction: ${payeAmount}`);
console.log(`NHIF Deduction: ${nhifAmount}`);
console.log(`NSSF Deduction: ${nssfAmount}`);
console.log(`Net salary: ${netSalary}`);

function calculatenhif(salary) {
  let tax;
  if (salary <= 5999) {
    tax = 150;
  } else if (salary >= 6000 && salary <= 7999) {
    tax = 300;
  } else if (salary >= 8000 && salary <= 11999) {
    tax = 400;
  } else if (salary >= 12000 && salary <= 14999) {
    tax = 500;
  } else if (salary >= 15000 && salary <= 19999) {
    tax = 600;
  } else if (salary >= 20000 && salary <= 24999) {
    tax = 750;
  } else if (salary >= 25000 && salary <= 29999) {
    tax = 850;
  } else if (salary >= 30000 && salary <= 34999) {
    tax = 900;
  } else if (salary >= 35000 && salary <= 39999) {
    tax = 950;
  } else if (salary >= 40000 && salary <= 44999) {
    tax = 1000;
  } else if (salary >= 45000 && salary <= 49999) {
    tax = 1100;
  } else if (salary >= 50000 && salary <= 59999) {
    tax = 1200;
  } else if (salary >= 60000 && salary <= 69999) {
    tax = 1300;
  } else if (salary >= 70000 && salary <= 79999) {
    tax = 1400;
  } else if (salary >= 80000 && salary <= 89999) {
    tax = 1500;
  } else if (salary >= 90000 && salary <= 99999) {
    tax = 1600;
  } else {
    tax = 1700;
  }
  return tax;
}

//PAYE
function calculatePaye(salary) {
  let rate;
  if (salary <= 24000) {
    rate = 0.1;
  } else if (salary >= 24001 && salary <= 32333) {
    rate = 0.25;
  } else if (salary >= 32334) {
    rate = 0.3;
  }
  return rate;
}
