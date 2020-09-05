var rawData = "";
var c1 = c2 = c3 = c4 = c5 = c6 = 0;
var st1 = st2 = st3 = st4 = st5 = st6 = 0;
var c = [];
var st = [];
fetch('http://localhost:3000/rajyasabha').then(function(response) { return response.json(); }).then(function(myJson) {
    rawData = JSON.stringify(myJson)
});

function pre(e) {
    e.preventDefault();
}

function q1() {

    let dat = JSON.parse(rawData);

    let tot = [];

    for (let x = 0; x < dat.length; x++) {
        if (tot.indexOf(dat[x].ministry.trim()) == -1) {
            tot.push(dat[x].ministry.trim());
        }
    }
    console.log(tot);
    let king = new Array(tot.length).fill(0);
    var queen = new Array(tot.length).fill(0);
    for (let x = 0; x < tot.length; x++) {

        for (var i = 0; i < dat.length; i++) {

            if (tot[x] == dat[i].ministry) {
                king[x]++;
                if (dat[i].question_type == "STARRED") {
                    queen[x]++;
                }
            }
            
        }

    }

     let data = king;
    d3.select(".chart")
        .selectAll("div")
        .data(data)
        .enter()
        .append("div")
        .style("width", function(d) { return d + "px"; })
        .text(function(d) { return d; });

};


function q2() {

    let dat = JSON.parse(rawData);

    let tot = [];

    for (let x = 0; x < dat.length; x++) {
        if (tot.indexOf(dat[x].ministry) == -1) {
            tot.push(dat[x].ministry);
        }
    }
    var queen = new Array(tot.length).fill(0);
    for (let x = 0; x < tot.length; x++) {

        for (var i = 0; i < dat.length; i++) {

            if (tot[x] == dat[i].ministry) {
                if (dat[i].question_type == "STARRED") {
                    queen[x]++;
                }
            }
            
        }

    }
    let data=queen;
    d3.select(".chart2")
        .selectAll("div")
        .data(data)
        .enter()
        .append("div")
        .style("width", function(d) { return d + "px"; })
        .text(function(d) { return d; });
}
// function create(name, min, count) {
//     this.name = name;
//     this.min = min;
//     this.count = count;
// }

function q3() {
    let tot = [];
    let dat = JSON.parse(rawData);
    for (let x = 0; x < dat.length; x++) {
        if (tot.indexOf(dat[x].ministry) == -1) {
            tot.push(dat[x].ministry);
        }
    }
    console.log(tot);
    let my = [];
    for (let x = 0; x < dat.length; x++) {
        my.push({
            name: dat[x].question_by,
            min: dat[x].ministry
        })
    }

    var byMin = my.slice(0);
    byMin.sort(function(a, b) {
        var x = a.min.toLowerCase();
        var y = b.min.toLowerCase();
        if (x == y) {
            var c = a.name.toLowerCase();
            var d = b.name.toLowerCase();
            return c < d ? -1 : 1;
        }
        return x < y ? -1 : x > y ? 1 : 0;
    });
    

    var p = byMin.indexOf(inp);
    console.log(typeof(inp));
    //var ulEl = document.createElement("ul")

    var tab=document.createElement("table");
    tab.setAttribute("class","mytab");
    var headrow=document.createElement("tr");
    headrow.setAttribute("class","hdrow");
    var thead1=document.createElement("th");
    thead1.textContent="Ministry";
    var thead2=document.createElement("th");
    thead2.textContent="Name";
    var thead3=document.createElement("th");
    thead3.textContent="Count";
    headrow.appendChild(thead1);
    headrow.appendChild(thead2);
    headrow.appendChild(thead3);
    tab.appendChild(headrow);
    var output;
    for (let x = 0; x < tot.length; x++) {
        var inp = tot[x];
        let ans = [];
        for (var z = 0; z < byMin.length; z++) {
            // if(ans.indexOf(byname.name)==-1)
            if (byMin[z].min == inp)
                ans.push(byMin[z].name);
        }

        var c = 1,
            val = ans[0],
            fc = 1,
            fval = ans[0];
        var past = ans[0];
        for (i = 1; i < ans.length; i++) {
            if (ans[i] == past) {
                c++;
            } else {
                c = 1;
                past = ans[i];
            }
            if (c > fc) {
                fc = c;
                fval = ans[i];
            }
        }
        var tabrow=document.createElement("tr");
        var tabdata1=document.createElement("td");
        tabdata1.textContent=tot[x];
        var tabdata2=document.createElement("td");
        tabdata2.textContent=fval;
        var tabdata3=document.createElement("td");
        tabdata3.textContent=fc;
        tabrow.appendChild(tabdata1);
        tabrow.appendChild(tabdata2);
        tabrow.appendChild(tabdata3);
        tab.appendChild(tabrow);
        // var liEl = document.createElement("li");
        // liEl.textContent = tot[x] + "     " + fval + "     " + fc;
        // ulEl.appendChild(liEl)
        //output+='<td>'+tot[x] + "  " + fval + "  " + fc+'</td>';
        console.log(tot[x] + "  " + fval + "  " + fc);
        console.log(fc);
    }

    var element = document.getElementById('div3');
    //element.appendChild(ulEl)
    element.appendChild(tab);
    


}
/* let arr= [
             {"name":'Soumik',"min":'Sports',"count":1}

         ];
 console.log(arr);
 var dataset = {};
 let dat = JSON.parse(rawData);

 for(let x=0;x<dat.length;x++)
 {

     for(let y=0;y<arr.length;y++)
     {
         if(    (arr[y][name]==dat[x].question_by) && (arr[y][min]==dat[x].ministry) )
         {

             arr[y].count++;
         }
         else
         {
             let obj={};
             arr.push(
                 {"name":dat[x].question_by,
                 "min":dat[x].ministry,
                 'count':1}
                 );
             obj["name"] = dat[x].question_by;
             obj["min"] = dat[x].ministry;
             obj["count"]=1;
             arr.push(obj);
         }
     }
     console.log(arr);

 }
 console.log(arr);*/
// var mines = new Map();
// var culture = new Map();
// var defence = new Map();
// var home = new Map();

// for (let x = 0; x < dat.length; x++) {
//     if (dat[x].ministry == "MINES") {
//         if (mines.has(dat[x].question_by))
//             mines.set(dat[x].question_by, mines.get(dat[x].question_by) + 1);
//         else
//             mines.set(dat[x].question_by, 1);
//     }
//     if (dat[x].ministry == "CULTURE") {
//         if (culture.has(dat[x].question_by))
//             culture.set(dat[x].question_by, culture.get(dat[x].question_by) + 1);
//         else
//             culture.set(dat[x].question_by, 1);
//     }
//     if (dat[x].ministry == "DEFENCE") {
//         if (defence.has(dat[x].question_by))
//             defence.set(dat[x].question_by, defence.get(dat[x].question_by) + 1);
//         else
//             defence.set(dat[x].question_by, 1);
//     }
//     if (dat[x].ministry == "HOME AFFAIRS") {
//         if (home.has(dat[x].question_by))
//             home.set(dat[x].question_by, home.get(dat[x].question_by) + 1);
//         else
//             home.set(dat[x].question_by, 1);
//     }

// }
// console.log(mines);
// function compare(value, key, mines) {
//     console.log(mines[key]+" : "+mines[value]);
// }
// mines.forEach(compare);

// console.log(mines.get(0));
// console.log(culture);
// console.log(home);
// console.log(defence);
// var max = 0;
// var index = 0;
// // for (let x = 0; x < mines.length; x++) {
//     if (mines[x].value() > max) {
//         max = mines[x].value;
//         index = x;
//     }
// }
// console.log("MINES " + mines[index] + " : " + max);

//}

function q4() {
    let dat = JSON.parse(rawData);

    document.getElementById("c4").innerHTML = "";

    var y;
    if (document.getElementById('r1').checked)
        y = document.getElementById('r1').value;
    else
        y = document.getElementById('r2').value;
    console.log(y);

    let data = [];
    let tot = [];

    for (let x = 0; x < dat.length; x++) {
        if (tot.indexOf(dat[x].ministry) == -1) {
            tot.push(dat[x].ministry);
        }
    }
    let queen = new Array(tot.length).fill(0);
    let king = new Array(tot.length).fill(0);
    for (let x = 0; x < tot.length; x++) {

        for (var i = 0; i < dat.length; i++) {

            if (tot[x] == dat[i].ministry) {
                king[x]++;
                if (dat[i].question_type == "STARRED") {
                    queen[x]++;
                }
            }
            
        }

    }
    if (y == "UNSTARRED")
        data = king;
    if (y == "STARRED")
        data = queen;

    d3.select(".chart4")
        .selectAll("div")
        .data(data)
        .enter()
        .append("div")
        .style("width", function(d) { return d + "px"; })
        .text(function(d) { return d; });

}