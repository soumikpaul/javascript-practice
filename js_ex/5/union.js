let myarr1 = [];
let myarr2 = [];
const btns = document.querySelectorAll("button");
console.log(btns);
btns[0].onclick = addtoarray1;

function addtoarray1() {
    myarr1.push(document.getElementById("userinput").value);
    console.log(myarr1);
}

btns[1].onclick = addtoarray2;

function addtoarray2() {
    myarr2.push(document.getElementById("userinput").value);
    console.log(myarr2);
}

//we can use indexof in array instead of for loop for searching the presence of an element

var x, y, flag;
btns[2].onclick = union1;

function union1() {
    let union = [];
    for (x = 0; x < myarr1.length; x++) {
        union.push(myarr1[x]);

    }
    console.log(union)
    for (x = 0; x < myarr2.length; x++) {
        flag = 0;
        for (y = 0; y < union.length; y++) {
            if (union[y] == myarr2[x]) {
                flag = 1;
                break;
            }
        }
        if (flag == 0) {
            union.push(myarr2[x]);
        }
    }
    console.log(union);
}
btns[3].onclick = intersection;
//union1(myarr1,myarr2);
function intersection() {
    let inter = [];
    for (x = 0; x < myarr1.length; x++) {
        for (y = 0; y < myarr2.length; y++) {
            if (myarr1[x] == myarr2[y]) {
                inter.push(myarr1[x]);
                break;
            }
        }
    }
    console.log(inter);
}