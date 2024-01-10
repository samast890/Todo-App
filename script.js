const inputBox=document.getElementById("input-box");
const listContainer=document.getElementById("list-container");

console.log(inputBox.value);
console.log(listContainer.value);
function addTask(){
    
   // let len=inputBox.len();
    console.log(inputBox.value);

    if(inputBox.value==='')
    {
        console.log(inputBox.value);
        alert("Write something");

    }
    else{
       let li =document.createElement("li");
       li.innerHTML=inputBox.value;
       listContainer.appendChild(li);
       let span=document.createElement("span");
       span.innerHTML="\u00d7";
       li.appendChild(span);

    }
    //Reset the text field as blank.
    inputBox.value='';
    saveData();


}
listContainer.addEventListener("click",function(e)
{
    if(e.target.tagName==="LI"){
        e.target.classList.toggle("checked");
        saveData();
    }
    else if(e.target.tagName==="SPAN")
    {
        e.target.parentElement.remove();
        saveData();

    }

},false);

//To save the task while we refresh the web.

function saveData()
{
    localStorage.setItem("data",listContainer.innerHTML);
}

function showData()
{
    listContainer.innerHTML=localStorage.getItem("data");
}
showData();