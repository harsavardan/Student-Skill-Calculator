var count;
function cou()
{
  count=document.forms["myform"]["count"].value;
 $(document).ready(function(){
$("#con1").css("display","none");

for(var i=0;i<count;i++)
{
  $("#con2").append("<input type='text'>");
}
 });
}
function cou1()
{
  $("#con1").css("display","block");
  $("#con2").empty();
}