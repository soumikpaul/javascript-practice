var rawData = "";
var c = [];
var st = [];
fetch('http://localhost:3000/rajyasabha').then(function(response) { return response.json(); })
.then(function(myJson) {
    rawData = JSON.stringify(myJson)

});
function pre(e) {
    e.preventDefault();
}
function q1() {

     let dat = JSON.parse(rawData);

    let tot = dat.map((obj)=>obj.ministry);
    tot=[...new Set(tot)];

    const colData=tot.map(ministry=>{
        const starq=dat.filter(obj=>obj.ministry==ministry&&obj.question_type=="STARRED");
        const unstrq=dat.filter(obj=>obj.ministry==ministry&&obj.question_type=="UNSTARRED");
        const minsObj={
            name:ministry,
            val:unstrq.length,
            //unstar:unstrq.length,
            //totalq:starq.length+unstrq.length
        };
        return minsObj;
        //console.log(minsObj);
    });
    make_graph(colData);
    
}
function q2() {

    let dat = JSON.parse(rawData);

    let tot = dat.map((obj)=>obj.ministry);
    tot=[...new Set(tot)];
    console.log(tot);
    const colData=tot.map(ministry=>{
        const starq=dat.filter(obj=>obj.ministry==ministry&&obj.question_type=="STARRED");
        const unstrq=dat.filter(obj=>obj.ministry==ministry&&obj.question_type=="UNSTARRED");
        const minsObj={
            name:ministry,
            val:starq.length,
            //unstar:unstrq.length,
            //totalq:starq.length+unstrq.length
        };
        return minsObj;
        //console.log(minsObj);
    });
    make_graph(colData);
    
}

function q3() {
    
    let dat = JSON.parse(rawData);
    let tot = dat.map((obj)=>obj.ministry);
    tot=[...new Set(tot)];
    let n=dat.map((obj)=>{
        const my={
            name:obj.question_by,
            min:obj.ministry
        }
        return my;

    });
    //console.log(n);

    var byMin = n.slice(0);
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

    var tab = document.createElement("table");
    tab.setAttribute("class", "mytab");
    var headrow = document.createElement("tr");
    headrow.setAttribute("class", "hdrow");
    var thead1 = document.createElement("th");
    thead1.textContent = "Ministry";
    var thead2 = document.createElement("th");
    thead2.textContent = "Name";
    var thead3 = document.createElement("th");
    thead3.textContent = "Count";
    headrow.appendChild(thead1);
    headrow.appendChild(thead2);
    headrow.appendChild(thead3);
    tab.appendChild(headrow);
    var output;

    const colData=tot.map(ministry=>{
        const starq=dat.filter(obj=>obj.ministry==ministry&&obj.question_type=="STARRED");
        const unstrq=dat.filter(obj=>obj.ministry==ministry&&obj.question_type=="UNSTARRED");
        const minsObj={
            name:ministry,
            val:starq.length,
            unstar:unstrq.length,
            totalq:starq.length+unstrq.length,
            //max:dat.filter(obj=>)
        };
        return minsObj;
        
    });
     // for (let x = 0; x < tot.length; x++) {
     //    let inp = tot[x];
        
     var ans=[];
        tot.forEach(function(item,x){
        ans = byMin.filter((obj)=>item==obj.min);
        ans=ans.map((obj)=>obj.name);
        console.log(ans);

        


   //         return arr1.sort((a,b) =>
    //               arr1.filter(v => v===a).length
    //             - arr1.filter(v => v===b).length
    //         ).pop();
    //     }

    // let fc=ans.reduce((accu,res){
    //     res+=ans.filter((obj)=>1);
    //     accu=accu>res>accu:res;
    // },0);
    //     var item=mode(ans);
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
        var tabrow = document.createElement("tr");
        var tabdata1 = document.createElement("td");
        tabdata1.textContent = tot[x];
        var tabdata2 = document.createElement("td");
        tabdata2.textContent = fval;
        var tabdata3 = document.createElement("td");
        tabdata3.textContent = fc;
        tabrow.appendChild(tabdata1);
        tabrow.appendChild(tabdata2);
        tabrow.appendChild(tabdata3);
        tab.appendChild(tabrow);
        //console.log(tot[x] + "  " + fval + "  " + fc);
        //console.log(fc);
    
    });
    var element = document.getElementById('div3');
    element.appendChild(tab);
}

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

    let tot = dat.map((obj)=>obj.ministry);
    tot=[...new Set(tot)];

    
    let str_q = new Array(tot.length).fill(0);
    let ques_t = new Array(tot.length).fill(0);
   
    const colData=tot.map(ministry=>{
        const starq=dat.filter(obj=>obj.ministry==ministry&&obj.question_type=="STARRED");
        const unstrq=dat.filter(obj=>obj.ministry==ministry&&obj.question_type=="UNSTARRED");
        const minsObj={
            name:ministry,
            val:(y=="UNSTARRED"?unstrq.length:starq.length)
            //unstar:unstrq.length,
            //totalq:starq.length+unstrq.length
        };
        return minsObj;
        
    });
    
    make_graph(colData);

}

function make_graph(obj) {
    //document.getElementById("s").innerHTML = "";
    document.getElementById("g").innerHTML = "";
    const margin = { top: 20, right: 20, bottom: 30, left: 40 };
    const width = 1160 - margin.left - margin.right;
    const height = 400 - margin.top - margin.bottom;
    const axisOffset=16;
    const labelOffset=320;

    const xScale = d3.scaleBand()
        .range([0, width])
        .round(true)
        .paddingInner(0.1); // space between bars (it's a ratio)
    console.log(xScale);
    const yScale = d3.scaleLinear()
        .range([height, 0]);

    const xAxis = d3.axisBottom()
        .scale(xScale)
        .tickSize(0)
        

    const yAxis = d3.axisLeft()
        .scale(yScale)
        //.ticks(10, '%');

    const svg = d3.select('section')
        .append('svg')
        .attr('width', width + margin.left + margin.right+100)
        .attr('height', height+300 + margin.top + margin.bottom)
        .append('g')
        .attr('transform', `translate(${margin.left}, ${margin.right})`);


    const tooltip = d3.select('section').append('div')
        .attr('class', 'tooltip')
        .style('opacity', 0);

    xScale
        .domain(obj.map(d => d.name));
    
    yScale
        .domain([0, d3.max(obj, d => d.val)]);

    svg.append('g')
        .attr('class', 'x axis')
        .attr('transform', `translate(0, ${height})`)
        .call(xAxis)
        .attr('yScale',axisOffset)
        .selectAll("text")
        .style("text-anchor",'start')
        .attr('transform', 'rotate(65)');
       
    svg.append('g')
        .attr('class', 'y axis')
        .call(yAxis)
        .attr('xScale',-axisOffset)
        .append('text','rotate(-90)')
        .attr('transform', 'rotate(-90)')
        .attr('y', 6)
        .attr('dy', '.71em')
        .style('text-anchor', 'end')
        .text('name','rotate(-90)');

    svg.append("text")
        .attr("x", (width / 2))             
        .attr("y", 20 - (margin.top / 2))
        .attr("text-anchor", "middle")  
        .style("font-size", "26px") 
        .text("Parliament Charts");

    svg.selectAll('.bar').data(obj)
        .enter()
        .append('rect')
        .attr('class', 'bar')
        .attr('x', d => xScale(d.name))
        .attr('width', xScale.bandwidth())
        .attr('y', d => yScale(d.val))
        .attr('height', d => height - yScale(d.val))
        .on('mouseover', (d) => {
            tooltip.transition().duration(200).style('opacity', 0.9);
            tooltip.html(`ministry: <span>${d.name+": "}${d.val}</span>`)
                .style('left', `${d3.event.layerX}px`)
                .style('top', `${(d3.event.layerY - 28)}px`);
        })
        .on('mouseout', () => tooltip.transition().duration(500).style('opacity', 0));
    
}