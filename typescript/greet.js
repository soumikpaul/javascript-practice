var Student = /** @class */ (function () {
    function Student(firstName, lastName, middleName) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.middleName = middleName;
        this.fullName = firstName + " " + middleName + " " + lastName;
    }
    return Student;
}());
function greeter(person) {
    return "Hello, " + person.firstName + " " + person.lastName;
}
//let user = "Jane User";
//let user=[1,2,3];
//let user={firstName:"Soumik", lastName:"Paul"};
var user = new Student("Soumik", "abc", "Paul");
document.body.textContent = greeter(user);
var t = "soumik";
console.log(t);
var strArr = [1, "soumik", "is", "a", "great", "guy"];
console.log(strArr.length);
