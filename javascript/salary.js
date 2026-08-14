document.write("<br>-------------- 1st Task-----------------------<br>");
let w_price = 2000;
let qty = 20;
let t_price = w_price * qty;
let gst = t_price * (18 / 100);
let total_price = t_price + gst;
document.write("<br>Watch price is "+w_price);
document.write("<br>Quantity is "+qty);
document.write("<br>Total price is "+t_price);
document.write("<br> with GST 18% payable amount is "+total_price);

document.write("<br><br>-------------- 2nd Task-----------------------<br>");

let watch = Number(prompt("Enter the price of watch"));
let Qty = Number(prompt("Enter the quantity"));
let total_price1 = watch * Qty;
let gst1 = total_price1 * (18 / 100);
let payable_amount = total_price1 + gst1;
let discount = payable_amount * (5 / 100);
let final_amount = payable_amount - discount;
document.write("<br>Watch price is "+watch);
document.write("<br>Quantity is "+Qty);
document.write("<br>Total price is "+total_price1);
document.write("<br> with GST 18% payable amount is "+payable_amount);
document.write("<br>Discount is "+discount);
document.write("<br>Final amount to be paid is "+final_amount);

document.write("<br><br>-------------- 3rd Task-----------------------<br>");

let salary = 576;
let days = 10;
let total_salary = salary * days;
document.write("<br>Salary per day is "+salary);
document.write("<br>Number of days is "+days);
document.write("<br>Total salary is "+total_salary);

document.write("<br><br>-------------- 4th Task-----------------------<br>");
let salary1 = 576;
let days1 = 10;
let total_salary1 = salary1 * days1;
let deduction = total_salary1 * (5 / 100);
document.write("<br>Salary per day is "+salary1);
document.write("<br>Number of days is "+days1);
document.write("<br>Total salary is "+total_salary1);
document.write("<br>Deduction is "+deduction);
payable_salary = total_salary1 - deduction;
document.write("<br>Payable salary is "+payable_salary);

document.write("<br><br>-------------- Mark Calculation Task-----------------------<br>");

let tamil = Number(prompt("Enter the marks of Tamil"));
let english = Number(prompt("Enter the marks of English"));
let maths = Number(prompt("Enter the marks of Maths"));
let physics = Number(prompt("Enter the marks of Physics"));
let chemistry = Number(prompt("Enter the marks of Chemistry"));
let biology = Number(prompt("Enter the marks of Biology"));

let total_marks = tamil + english + maths + physics + chemistry + biology;
let percentage = (total_marks / 600) * 100;
document.write("<br>Total marks is "+total_marks);
document.write("<br>Percentage is "+percentage);

let cutoff = (maths + (physics + chemistry)/2 );
document.write("<br>Cutoff is "+cutoff);