// In this code im use ES6 Moudle 



export function checkEligibility(age) {
  if (age >= 18) {
    return "You are eligible to apply for a driving license.";
  } else if (age >= 16) {
    return "You are eligible for a learner's permit.";
  } else {
    return "Sorry, you are not eligible for a driving license or learner's permit yet.";
  }
}
