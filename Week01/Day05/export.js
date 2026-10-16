
export const studentName = "Ali";
export const studentMarks = 85;

export function calculateResult(marks) {
    if (marks >= 50) {
        return "Pass";
    } else {
        return "Fail";
    }
}

console.log("This data is export file")