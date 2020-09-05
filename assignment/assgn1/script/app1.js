// //window.onload=function(){
//   fetch('http://localhost:5000/rajyasabha')
//     .then(function(response) {
//         return response.json();
//     })
//     .then(function(myJson) {
//         jsn = JSON.stringify(myJson);
//         jsn = JSON.parse(jsn);
//         //console.log(jsn);
//         //console.log(jsn.rajyasabha[0].id)
//         //console.log(JSON.stringify(myJson));
//         console.log(jsn);

var data = [30, 10, 100, 281, 303, 365];
createchart(data);
function createchart(data){
d3.select(".chart")
  .selectAll("div")
  .data(data)
    .enter()
    .append("div")
    .style("width", function(d) { return d + "px"; })
    .text(function(d) { return d; });
  }

