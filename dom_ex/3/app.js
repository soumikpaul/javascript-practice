function def(e)
{
  e.preventDefault();
}
function validate()
{
  def(event);
  var x = document.forms["registration"]["fname"].value;
  console.log(x);
  if (x == "") {
    alert("Name must be filled out");
    return false;
  }
}
