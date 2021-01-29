var student={
  name : "",
  type : "student"
};
document.addEventListener('DOMContentLoaded', contentLoaded);

function contentLoaded(event){
  document.getElementById('name').addEventListener("keyup",keyUp);
}

function keyUp(event)
{
  nameAsciiCalculator();
}

function nameAsciiCalculator(){
  student.name=document.getElementById('name').value;

  var totalnamevalue=0;
  for(var i=0; i < student.name.length;i++){
    totalnamevalue+=student.name.charCodeAt(i);
  }

  var output="Total numeric value is "+ totalnamevalue;
  document.getElementById('output').innerText=output;
}
