function change() {
    var s = document.getElementById('text1').value;
    var heading1 = document.getElementsByTagName(s);
    console.log(heading1);

    var ulEl = document.createElement("ul")
    for (var x = 0; x < heading1.length; x++) {
        var liEl = document.createElement("li")
        liEl.textContent = heading1[x].textContent
        ulEl.appendChild(liEl)

    }
    var element = document.getElementById('div1');
    element.appendChild(ulEl)
}