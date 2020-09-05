function count() {
    var s = document.getElementById("text1").value;


    var x, count_a = 0,
        count_e = 0,
        count_o = 0,
        count_i = 0,
        count_u = 0;
    for (x = 0; x < s.length; x++) {
        if (s[x] == "a" || s[x] == "A")
            count_a++;
        if (s[x] == "e" || s[x] == "E")
            count_e++;
        if (s[x] == "i" || s[x] == "I")
            count_i++;
        if (s[x] == "o" || s[x] == "O")
            count_o++;
        if (s[x] == "u" || s[x] == "U")
            count_u++;
    }
    var total = count_a + count_e + count_i + count_o + count_u;
    document.writeln("a " + count_a + "\n");
    document.write("  e " + count_e);
    document.write("  i " + count_i);
    document.writeln("  o " + count_o);
    document.writeln("  u " + count_u);
    document.writeln("   total " + total);
}