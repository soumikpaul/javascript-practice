var count=0;
var a='';
function abc(n) {
    return new Promise(function(resolve, reject) {
        let x = setInterval(() => {
            count++;
            a += "*";
            console.log(a);
            if (count == n)
                clearInterval(x);
        }, 1000);
    });
}