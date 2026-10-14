
// Question No 01

// let arr = [10,20,30,40];

// arr.sort( function(a,b) {
//     return b-a;
// })
// console.log(arr[0])



// Question No 02

// let arr = [10,20,30,40];

// arr.sort( function(a,b) {
//     return a-b;
// })
// console.log(arr[0])


// Question No 03 and 04

// let arr = [10,20,30,40];
// let sum = 0;
// for (let i = 0; i < arr.length; i++) {
//      sum +=arr[i];
// }
// console.log("Total Sum :",sum)
// console.log("Average :",sum / arr.length)

// Question No 05
// let arr = [10,20,30,40];
// let passed = arr.filter(function(marks) {
//     return marks >= 50;
// }).length;
// console.log("Passed Students:", passed);

// Question No 06
// let arr = [10,20,30,40];

// let failed = arr.filter(function(marks) {
//     return marks < 50;
// }).length;

// console.log("Failed Students:", failed);


// Question No 07
// let std = ["Ali","Hamza","Huzaifa","Umer"];
// console.log(std[3]);
// std.push("Zohaib")
// console.log(std)
// std.pop()
// console.log(std);



// Task 2

// const students = [
//     { name: "Ali", marks: 78 },
//     { name: "Ahmed", marks: 62 },
//     { name: "Sara", marks: 89 },
//     { name: "Huzaifa", marks:40}
// ];

// // Total Student
// console.log("Total Student:",students.length)


// // Passed Students
// function passedStudents(students) {
//     return students.filter(function(student) {
//         return student.marks >= 50;
//     });
// }
// console.log("Passed Students:", passedStudents(students));


// // Failed Students
// function failedStudents(students) {
//     return students.filter(function(student) {
//         return student.marks < 50;
//     });
// }
// console.log("Failed Students:", failedStudents(students));


// // Highest Marks
// function highestMarks(students) {
//     return Math.max(...students.map(function(student) {
//         return student.marks;
//     }));
// }
// console.log("Highest Marks:", highestMarks(students));


// // Lowest Marks
// function lowestMarks(students) {
//     return Math.min(...students.map(function(student) {
//         return student.marks;
//     }));
// }
// console.log("Lowest Marks:", lowestMarks(students));


// //  Average Marks
// function averageMarks(students) {
//     let total = students.reduce(function(sum, student) {
//         return sum + student.marks;
//     }, 0);

//     return total / students.length;
// }
// console.log("Average Marks:", averageMarks(students));


// // Student Grade
// function studentGrade(marks) {

//     if (marks >= 80) {
//         return "A";
//     } 
//     else if (marks >= 70) {
//         return "B";
//     } 
//     else if (marks >= 60) {
//         return "C";
//     } 
//     else if (marks >= 50) {
//         return "D";
//     } 
//     else {
//         return "F";
//     }
// }




// // Grade of every student
// students.forEach(function(student) {
//     console.log(
//         student.name,
//         "Marks:", student.marks,
//         "Grade:", studentGrade(student.marks)
//     );
// });
