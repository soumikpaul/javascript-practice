function runlength() {
    var input1 = document.getElementById("text1").value;
    var x, y, count, ans = "";
    for (x = 0; x < input1.length;) {
        console.log(input1);
        count = 1;
        for (y = x + 1; y < input1.length; y++) {
            if (input1[x] == input1[y]) {
                count++;
            } else
                break;
        }

        if (count > 1)
            ans += input1[x].toString() + count.toString();
        else
            ans += input1[x].toString();
        x = y;
    }
    document.write(ans);
    console.log(ans);
}