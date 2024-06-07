const studentID  = 173316
let studentEmail = "xyz@gmail.com"
var studentPassword = "121212"
studentCity = "Surat"
let studentState;

// studentID = 3 // not allowed

studentEmail = "abc@gmail.com"
studentPassword = "2121212"
studentCity = "Anand"

// console.log(accountID);
console.table([studentID,studentEmail,studentPassword,studentCity,studentState]);

/*
key-points to note:
prefer not to use Var
because of issue in block scope and fuctional scope
*/