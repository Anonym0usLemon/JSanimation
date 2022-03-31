/*
CIS213 Week 3 Graded Exercise 1
Dominic DiModugno
February 12th, 2022
*/

//declare and fill array of jackhammer man image filenames
var jackhammers = ["jackhammer0.gif", "jackhammer1.gif", "jackhammer2.gif",
 "jackhammer3.gif", "jackhammer4.gif", "jackhammer5.gif", "jackhammer6.gif",
 "jackhammer7.gif", "jackhammer8.gif", "jackhammer9.gif", "jackhammer10.gif"];

 var curJackhammer = 0;

 function bounce() {
   curJackhammer = (curJackhammer === 10) ? 0 : ++curJackhammer;
   var imgHolder = document.getElementById("imgJackhammer");
   imgHolder.src = jackhammers[curJackhammer];
 }

 setInterval(bounce, 30);
