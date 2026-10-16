// Employee Login System
let Password = prompt("enter Password");
let isPasswordCorrect = Password === "12345";
if (isPasswordCorrect) {
  console.log("Login Successfull");
} else {
  console.log("Incorrect Password");
}

// Online Order Approval
let isPaymentDone = true;
if (isPaymentDone) {
  console.log("Approve the order");
} else {
  console.log("Reject the order");
}

// Student Result System
let marks = +prompt("Enter Marks");
if (marks >= 50) {
  console.log("Pass");
} else {
  console.log("Fail");
}

// Office Attendance Check
let isPresent = confirm("Are you present today?");
if (isPresent) {
  console.log("Attendance Marked");
} else {
  console.log("Attendance Not Marked");
}

// Discount Eligibility
let totalPurchase = +prompt("Enter Total Purchase Amount");
if (totalPurchase >= 1000) {
  console.log("Eligible for Discount");
} else {
  console.log("Not Eligible for Discount");
}

// Step 7: Multiple Conditions (else if)
// Industry Scenario:
// Employee performance rating system:
let performanceScore = +prompt("Enter Performance Score");
if (performanceScore >= 90) {
  console.log("Excellent");
} else if (performanceScore >= 70) {
  console.log("Good");
} else if (performanceScore >= 50) {
  console.log("Average");
} else {
  console.log("Poor");
}
