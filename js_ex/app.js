/*alert("Hello World");
console.log("I like writing hello world");
var myname="Soumik";
console.log(myname);
var surname=prompt("What is your surname?");
console.log("Welcome "+myname+" "+surname);
console.log(`using template literal
  Welcome ${myname} ${surname}`);
document.write("Soumik")*/
// var temp=String([1,2,3,4]);
// console.log(temp);
// var a=5,b=10;
// //console.log(a+++c);
// function square(g){
//   return g*g;
//}
/*function cube(number){
  //document.write(cube(6));
  number=5;
  console.log(number*number*number);
  // number*number*number;
}

const btns=document.querySelectorAll("button");
console.log(btns);
btns[0].onclick=cube;
*/
//console.log(cube(8));
//document.write(cube(6));
//var sq=square(5);
//console.log(sq);
/*var s=prompt("please input the string");
console.log(s[0]);
 console.log(`Inputed string is ${s}`);*/
//let myarr2=[];
//var s="";
// const btns=document.querySelectorAll("button");
// console.log(btns);
// var s=(document.getElementById("userinput").value);
// btns[0].onclick=runlength;*/


function runlength(){
  var input1=document.getElementById("text1").value;
  var x,y,count,ans="";
for( x=0;x<input1.length;)
{
  console.log(input1);
   count=1;
  for(y=x+1;y<input1.length;y++)
  {
    if(input1[x]==input1[y])
    {
      count++;
    }
    else
      break;
  }
  //console.log(s[x]+count);
  if(count>1)
    ans+=input1[x].toString()+count.toString();
  else
    ans+=input1[x].toString();
  x=y;
}
document.write(ans);
console.log(ans);
}