function getGrade(marks) {
    let grade;

if (marks>=80){
    return"A";
}
else if(marks>=70  && marks<80){
return "B";
}
else if(marks>=60 && marks<70){
return "C";
}
else if(marks>=50 && marks<60){
return "D";
}
else if(marks>=0 && marks<50){
    return "E";
}
    else{return "F"

    }
}

console.log(getGrade(55));