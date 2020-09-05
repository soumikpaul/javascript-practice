function minmax() {
    var arr = document.getElementById("text1").value;
    var arr = arr.split(",");
    var x, max = arr[0],
        med, min = arr[0],
        sum = 0;
    for (x = 0; x < arr.length; x++) {
        if (arr[x] > max) {
            max = arr[x];
        }
        if (arr[x] < min) {
            min = arr[x];
        }

    }
    document.writeln(`max is ${max}`);
    document.writeln(`min is ${min}`);

}