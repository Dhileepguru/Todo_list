var text=document.getElementById("inputid");
var list=document.getElementById("todolist");
let arr=[];
window.onload=()=>
{
 arr=JSON.parse(localStorage.getItem("value"))|| [];
 arr.forEach((ele)=>{
   displaystore(ele)
 })
}
function display()
{
    if(text.value.trim() !="") 
    {
      arr.push(text.value);
      let id=arr.length-1;
      liveele(arr,id);
      localStorage.setItem("value",JSON.stringify(arr));
      text.value=" ";
    }    
}
function liveele(arr,id)
{
  list.innerHTML +=` <li style="margin-left=-100px;" id="${id}">${text.value.trim()} <button style="margin:10px;" onclick="deletemethod(${id})">Delete</button> </li>`
}
function displaystore(arr,id)
{
  list.innerHTML +=` <li style="margin-left=-100px;" id="${id}">${arr} <button style="margin:10px;" onclick="deleteold(${id})">Delete</button> </li>`
}

function deleteold(id)
{
 
}
function deletemethod(id)
{ 
  console.log("clicked");
  let item=document.getElementById(id);
  item.style.display= "none";
  //localStorage.setItem("value",JSON.stringify(arr));
}