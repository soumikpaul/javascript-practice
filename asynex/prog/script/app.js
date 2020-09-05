document.addEventListener('DOMContentLoaded', (event) => {

    let bodyEle = document.body;
    let newSec = document.createElement('section');
    newSec.textContent = "This is from a section";
    bodyEle.appendChild(newSec);
    let count = 0;
    document.getElementById('prg').value = 0;
    // setVal(count)
    //     .then(function(value) {
    //         console.log(value);
    //     });
    usingCallBack(count,disp);
});

// function setVal(count) {
//     return new Promise(function(resolve, reject) {
//         let inter = setInterval(() => {
//             count++;
//             document.getElementById('prg').value = count * 10;

//             if (count == 10) {
//                 clearInterval(inter);
//                 resolve("success");
//                 return;
//             }
//             console.log("Inside Interval");
//         }, 2000);
//     });
// }

function usingCallBack(count,callback)
{
  let inter = setInterval(() => {
            count++;
            document.getElementById('prg').value = count * 10;
            console.log("Inside Interval");
            if (count == 10) {
                clearInterval(inter);
                callback();
                return;
            }
        }, 2000);

}
function disp(){
  console.log("Finished");
}