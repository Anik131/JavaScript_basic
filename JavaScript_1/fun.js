function average(a1,a2,a3,a4,a5){
  let sum =0;
  sum = a1+a2+a3+a4+a5;
  let average = sum/5;
  return average;
}
// console.log(average(1,2,3,4,5));
function average_n (){
  // console.log(arguments);
  let sum =0
  for (i=0;i<arguments.length;i++){
    // console.log(arguments[i]);
    sum = sum + arguments[i];
    // console.log(sum);
  }
  // console.log("sum "+sum);
  let average = sum/arguments.length;
  return average;
}
// console.log(average_n(1,2,3,4,5));


function average_fe(){
  let sum =0;
  let count =0;
  for(let i in arguments){
    sum = sum +arguments[i];
    count++;
  }
  let average = sum / count;
  return average;
}
  let result = average_fe(1,2,3,4,5)
// console.log(result);

const calculator = {
  add: function (a,b){
    return a + b;
  },
  sub: function(a,b) {
    return a - b;
  }
}
// console.log(calculator.add(2,4));
// console.log(calculator.sub(5,2));

const calculator_v2 = {
  a: 1,
  b: 2,
  add: function (){
    return this.a+ this.b;
  },
  sub: function() {
    return this.b-this.a;
  },
  change_a:function (x) {
    this.a = x;
  }
}
// console.log(calculator_v2.a);
calculator_v2.change_a(100);//x ar value insert korlam;
// console.log(calculator_v2.a);
// console.log(calculator_v2.add());


function calculate_cgpa(s1,s2,s3,s4){
  this.a1 = s1;
  this.a2 = s2;
  this.a3 = s3;
  this.a4 = s4;
  this.cgpa = (this.a1+this.a2+this.a3+this.a4)/4;
}
const cgpObj = new calculate_cgpa(4,3.4,2.4,2.5);
console.log(cgpObj);
