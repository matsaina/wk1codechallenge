// Write that prompts the user to input student marks. The input should be between 0 and 100. Then output the correct grade: 

// A > 79, B - 60 to 79, C -  59 to 49, D - 40 to 49, E - less 40.

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

// Output the grade
console.log(`student grade is ${grade}.`);


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
const TAX_THRESHOLDS = [24000, 40000, 80000, 180000, 1000000];
const TAX_RATES = [0.1, 0.15, 0.20, 0.25, 0.3];
const TAX_RELIEF = 2400;

//  NHIF and NSSF rates
const NHIF_RATES = [150, 300, 400, 500, 600, 750];
const NSSF_RATE = 0.06;

// Calculate gross salary
const grossSalary = basicSalary + benefits;

// Calculate taxable income
const taxableIncome = Math.max(grossSalary - NHIF_RATES[0], 0) - TAX_RELIEF;

// Calculate payee (tax)
let payee = 0;
let taxDue = 0;
for (let i = 0; i < TAX_THRESHOLDS.length; i++) {
  if (taxableIncome <= TAX_THRESHOLDS[i]) {
    payee = taxableIncome * TAX_RATES[i];
    break;
  } else {
    taxDue += (TAX_THRESHOLDS[i] - (i == 0 ? 0 : TAX_THRESHOLDS[i-1])) * TAX_RATES[i];
  }
}
if (payee == 0) {
  payee = taxDue + ((taxableIncome - TAX_THRESHOLDS[TAX_THRESHOLDS.length - 1]) * TAX_RATES[TAX_RATES.length - 1]);
}
payee = Math.max(payee, 0);

// Calculate NHIF deductions
let nhifDeductions = 0;
for (let i = 0; i < NHIF_RATES.length; i++) {
  if (grossSalary <= (i+1) * NHIF_RATES[0]) {
    nhifDeductions = NHIF_RATES[i];
    break;
  }
}
nhifDeductions = Math.min(nhifDeductions, NHIF_RATES[NHIF_RATES.length - 1]);

// Calculate NSSF deductions
const nssfDeductions = grossSalary * NSSF_RATE;

// Calculate net salary
const netSalary = grossSalary - payee - nhifDeductions - nssfDeductions;

// Display results
console.log(`Gross salary: ${grossSalary}`);
console.log(`Payee (tax): ${payee}`);
console.log(`NHIF deductions: ${nhifDeductions}`);
console.log(`NSSF deductions: ${nssfDeductions}`);
console.log(`Net salary: ${netSalary}`);



