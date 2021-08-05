function getExamGrade(grade) {
    if (grade >= 80 && grade <= 100) {
        console.log('You got: A+');

    }
    else if (grade >= 70 && grade < 80) {
        console.log('You got: A');
    }

    else if (grade >= 60 && grade < 70) {
        console.log('You got: B+');
    }

    else if (grade >= 50 && grade < 60) {
        console.log('You got: C');
    }
    else if (grade >= 40 && grade < 50) {
        console.log('You got: D+');
    }

    else if (grade >= 33 && grade < 40) {
        console.log('You passed');
    }

    else {
        console.log('Sorry You Failed');
    }
    return grade;
}
let result = getExamGrade(80);
console.log('Your marks:', result);

let result2 = getExamGrade(79);
console.log('Your marks:', result2);


let result3 = getExamGrade(65);
console.log('Your marks:', result3);

let result4 = getExamGrade(50);
console.log('Your marks:', result4);



let result5 = getExamGrade(33);
console.log('Your marks:', result5);

let result6 = getExamGrade(32);
console.log('Your marks:', result6);

