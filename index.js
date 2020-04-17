// 🌟🌟🌟 M V P 🌟🌟🌟//

// 🏡 Task 1: Variables
/* Create variables for principal, interest rate, and years. Assign them the values 200000, 0.05, and 30 respectively. Create another value called name and give it the value of your own name.
*/
var prince =200000;
var interest= .05;
var years=30;
var name= 'esaul';



// 🏡 Task 1.5: Simple Math
/* To create a monthly mortgage rate calculator, we need to know the number of years in months and the monthly interest rate. 

Create a variable called `monthlyInterestRate` and give it the value of interest rate divided by 12. 

Create another variable called `periods` and give it the value of years*12.
*/
var mir= interest/12;
var periods= years*12;



// 🏡 Task 2: Harder Math
/* Create your calculator! Use the formula in the ReadMe to run calculations on your numbers. Save the final value into a variable called monthlyRate.

Hint: while these calculations can be done in one line, it might be helpful to create a variable called "numerator" to calculate the numerator, and another called "denominator" to calculate the denominator 

Hint #2: you'll need to use the `math` object for parts of this calculation!

When your math is correct, monthlyRate will equal 1073.64
*/
var den= Math.pow((1+mir),periods) -1;
var num=mir*Math.pow((1+mir),periods);
var monthlyRate=prince*(num/den);



// 🏡 Task 3: Function
/* Create a function called `mortgageCalculator` that combines all of the steps from task 1 and 2 and returns a sentence "{Name}, your monthly rate is ${monthlyRate}"

If your name is `Oscar` mortgageCalculator() should return "Oscar, your monthly rate is 1073.64"
*/
function mortgageCalculatoro(name){
    var prince =200000;
    var interest= .05;
    var years=30;
  
    var mir= interest/12;
    var periods= years*12;
  
  
    var den= Math.pow((1+mir),periods) -1;
    var num=mir*Math.pow((1+mir),periods);
    var monthlyRate=prince*(num/den);
  
  
    
    return name + " your monthly rate is $" +monthlyRate; 
    
  }
  console.log('task 3 '+ mortgageCalculatoro(name));




// 🏡 Task 4: Arguments and Parameters
/* Substitute the variables in your functions for parameters such that you can substitute `P`, `I`, and `N` when you call the function.

For example,
mortgageCalculator(2000000, 0.05, 30); <-- should return 1,073.64
*/
function mortgageCalculator(i,p,n,name) {

    var den= Math.pow((1+i),n) -1;
    var num=i*Math.pow((1+i),n);
    var monthlyRate=p*(num/den);
  
    
    return name + " your monthly rate is $" +monthlyRate; 
  }
  console.log("Task 4"+mortgageCalculator(mir,prince,periods,name))
  




// 🏡 Task 5: Conditionals
/* Add another paramter to your function called credit score. This parameter will be a number between 0 and 800 (a credit score).

Then, add control flow within your function such that IF creditScore is above 740, interest rate drops by 0.5%, if credit score is below 660, interest rate increases by 0.5% and if credit score is anywhere between 660 and 740 interest rate doesn't change.
*/

function mortgageCalculator2(i,p,n,name,credit){
    if(credit>740) {
      i= i-(.005/12);
    }else if(credit<660){
      i= i+(.005/12);
    }else{
      i=i;
    }
    var den= Math.pow((1+i),n) -1;
    var num=i*Math.pow((1+i),n);
    var monthlyRate=p*(num/den);
  
    
    return name + " your monthly rate is $" +monthlyRate; 
    
  }
  console.log("Task 5",mortgageCalculator2(mir,prince,periods,name,630))
  



// 🏡 Task 6: Loops
/* Write a new function called variableInterestRate. This function should be the same as mortgageCalculator, except it should console.log the monthly payment for 10 different interest rates at 0.5% increments plus or minus 2% from the inputted interest rate. Complete these calculations using a for loop.

For example, variableInterestRate(200000, 0.04, 30) should console.log:

"{Name}, with an interest rate of 0.02, your monthly rate is $739"
"{Name}, with an interest rate of 0.025, your monthly rate is $790"
"{Name}, with an interest rate of 0.03, your monthly rate is $843"
"{Name}, with an interest rate of 0.035, your monthly rate is $898"
"{Name}, with an interest rate of 0.04, your monthly rate is $955"
"{Name}, with an interest rate of 0.045, your monthly rate is $1013"
"{Name}, with an interest rate of 0.05, your monthly rate is $1074"
"{Name}, with an interest rate of 0.055, your monthly rate is $1136"
"{Name}, with an interest rate of 0.06, your monthly rate is $1199"
*/
function variableInterestRate(prince,inte,periods){
    var i=0.005;
    let lb=inte-.025;
    let up=inte+.015;

    for(let x=.015;x<=.055;){
    x=x+i;
    console.log(name , "with an interest rate of ", x,mortgageCalculator(x/12,prince,periods,name) );
    }
}
variableInterestRate(prince,.04,periods)
// 🌟🌟🌟 STRETCH 🌟🌟🌟//

/* Attempt any of the stretch goals below once you have finished the work above. Remember as always, these may require additional research beyond what you learned today */

/*  🏡 Add  `Property Tax`, `Homeowner's insurance` and `HOA fees` as parameters in your function to calculate total monthly spending on housing */
function mortgageCalculator2(i,p,n,name,credit,tax,insure,hoa){
    if(credit>740) {
      i= i-(.005/12);
    }else if(credit<660){
      i= i+(.005/12);
    }else{
      i=i;
    }
    var den= Math.pow((1+i),n) -1;
    var num=i*Math.pow((1+i),n);
    var monthlyRate=(p*(num/den))+tax+insure+hoa;
  
    
    return name + " your monthly rate is $" +monthlyRate; 
    
  }

/* 🏡 Build a calculator function that accepts `monthly payment` and `interest rate` and returns the maximum loan that a person could afford */
function mortgageCalculatorStretch3(i,mr) {
    //we are finding monthly p
    let p = mr*12*30;
    let name= "esaul";
    let n=30*12;
    i=i/12;

    var den= Math.pow((1+i),n) -1;
    var num=i*Math.pow((1+i),n);
    var monthlyRate=p*(num/den);
    let total= monthlyRate*12*30;
    
    return name + " your maximum loan is " + total; 
  }
  console.log("Task 8"+mortgageCalculatorStretch3(.05, 500))
  

/* 🏡 Explore using `window.prompt()` to allow a user to input parameters in the browser */

function mortgageCalculatorStretch4(i,mr) {
    //we are finding monthly p
    let p = mr*12*30;
    let name= "esaul";
    let n=30*12;
    i=i/12;

    var den= Math.pow((1+i),n) -1;
    var num=i*Math.pow((1+i),n);
    var monthlyRate=p*(num/den);
    let total= monthlyRate*12*30;
    
    return name + " your maximum loan is " + total; 
  }
function buttonFunc(){
    var mr =prompt("please enter Monthly Rate");
    var inte= prompt("please enter interest rate")
    let ans=mortgageCalculatorStretch4(inte,mr);
    document.getElementById("pop").innerHTML=ans;
}

/* 🏡  Refactor your `variableInterestRate()` function to accept an array of interest rates (make sure to copy and paste as to not lose your work!) */
function variableInterestRate2(prince,arr,periods){

    for(let x=0;x<=arr.length-1;){
        i=arr[x];
        console.log("Last Stretch",name , "with an interest rate of ", i,mortgageCalculator(i/12,prince,periods,name) );
        x+=1;
    }
}
example=[.05,.055]
variableInterestRate2(prince,example,periods)