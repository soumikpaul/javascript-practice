
class Student{
  fullName: string;
  constructor(public firstName:string,public lastName:string,public middleName:string)
  {
    this.fullName=firstName+" "+middleName+" "+lastName;
  }
}
interface Person{
  firstName: string;
  lastName: string;
  
}
function greeter(person: Person) {
    return "Hello, " + person.firstName+" "+person.lastName;
}

//let user = "Jane User";
//let user=[1,2,3];
//let user={firstName:"Soumik", lastName:"Paul"};
let user=new Student("Soumik","abc","Paul");

document.body.textContent = greeter(user);

let t:any="soumik";
console.log(t);
 let strArr:any[]=[1,"soumik","is","a","great","guy"];
 console.log(strArr.length);
