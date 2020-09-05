// 0-mines
// 1-culture
// 2-health
// 3-defence
// 4-HOME AFFAIRS
// 5-total


let i_d = [],
    ans = 0,
    starred_q = 0,
    data = [],
    total = 0,
    ques_in_health = 0,
    tot = [],
    no_of_q_in_cul = 0,
    no_star_q_cul = 0;
var ques = [0, 0, 0, 0, 0];
var star = [0, 0, 0, 0, 0];
var q0 = 0,
    q1 = 0,
    q2 = 0,
    q3 = 0,
    q4 = 0;
var s0 = 0,
    s1 = 0,
    s2 = 0,
    s3 = 0,
    s4 = 0;
fetch('http://localhost:5000/rajyasabha')
    .then(function(response) {
        return response.json();
    })
    .then(function(myJson) {
        jsn = JSON.stringify(myJson);
        jsn = JSON.parse(jsn);
        //console.log(jsn);
        //console.log(jsn.rajyasabha[0].id)
        //console.log(JSON.stringify(myJson));
        console.log(jsn);

        var array=jsn.rajyasabha;
        console.log(array);
        document.write(array);
        // var x=_.groupBy(array,"ministry");
        // console.log(x);
        // document.write(x);
         for (var x = 0; x < jsn.length; x++) {
            //console.log(jsn[x].id);
            if (tot.indexOf(jsn[x].ministry) == -1) {
                tot.push(jsn[x].ministry);
            }
            total = tot.length;
            if (jsn[x].ministry == "MINES") {
                ans += 1;
                i_d.push(jsn[x].id);
                //if(jsn[x].question_type=="STARRED")
            }
            if (jsn[x].ministry == "HEALTH AND FAMILY WELFARE" && jsn[x].question_type == "STARRED") {
                starred_q += 1;
            }
            if (jsn[x].ministry == "CULTURE") {
                no_of_q_in_cul++;
                if (jsn[x].question_type == "STARRED") {
                    no_star_q_cul++;
                }
            }

        }
        ques[0] = ans;

        console.log(i_d + "   " + ans);
        console.log("STARRED from HEALTH AND FAMILY  " + starred_q);
        data.push(ans);
        data.push(starred_q);
        data.push(total);
        console.log(data);
        document.write(ans + "  abcd  " + total);
        document.write("Hello" + data);


        data=[10,20,30];
        createchart(data);


       
    });

function createchart(data)
{
   d3.select(".chart")
            .selectAll("div")
            .data(data)
            .enter()
            .append("div")
            .style("width", function(d) { return d + "px"; })
            .text(function(d) { return d; });

}


document.write("Hi"+data);
console.log(data);