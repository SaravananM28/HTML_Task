let a=Number(prompt("Enter the number for A: "));
document.write(a>0?"<br>Number is positive":"<br>Number is negative");

document.write(a>18?"<br>Eligible":"<br>Not Eligible");

document.write(a>25?"<br>Created":"<br>Not Created");

let score=Number(prompt("Enter the score"));
document.write(score>90?"<br>A Grade":"<br>B Grade");

let height=Number(prompt("Enter the height"));
document.write(height>155?"<br>Tall":"<br>Short");

let b = Number(prompt("Enter the number for B:"));
document.write(a!=b?"<br>Yes":"<br>No");

if(a>0){
    document.write("<br>Number is positive");
}else{
    document.write("<br>Number is negative");
}

if(a>18){
    document.write("<br>Eligible");
}else{
    document.write("<br>Not Eligible");
}
if(a>25){
    document.write("<br>Created");
}else{
    document.write("<br>Not Created");
}

if(score>90){
    document.write("<br>A Grade");
}else{
    document.write("<br>B Grade");
}

if(height>155){
    document.write("<br>Tall");
}else{
    document.write("<br>Short");
}

if(a!=b){
    document.write("<br>Yes");
}else{
    document.write("<br>No");
}