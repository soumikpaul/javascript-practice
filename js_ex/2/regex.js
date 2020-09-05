function pre(e)
{
  e.preventDefault();
}
function regex()
{
  pre();
  let nam=document.getElementById("name").value;
  let resname= /^[a-zA-Z]+$/.test(nam);
  console.log(resname);
  let phno=document.getElementById("phn").value;
  let resphn=/^[6-9]\d{9}$/.test(phno);
  console.log(resphn);
  let addr=document.getElementById("addr").value;
  let resadd=/^[a-z][A-Z]+(?:[\s-][a-zA-Z]+)*$/.test(addr);
  console.log(resadd);
  let pin=document.getElementById("pin").value;
  let respin=/^([0-9]{6})?$/.test(pin);
  console.log(respin);
}