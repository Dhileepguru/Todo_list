var text=document.getElementById("inputid");
var list=document.getElementById("todolist");
let arr=[];
function display()
{
    arr.push(text.value);
    listDisplay(text.value);
}
function listDisplay(txt)
{
  let para=document.createElement("p");
  para.innerText=txt;
  list.appendChild(para);
}