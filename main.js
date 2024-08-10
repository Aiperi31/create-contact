const start=document.querySelector(".start");
const create=document.querySelector(".create");
const title=document.querySelector("h1");
const input=document.querySelector(".input");
const button=document.querySelector(".button")
const button2=document.querySelector(".button2")
const list=document.querySelector(".list");
const btn=document.querySelector(".btn");


btn.style.display="none";
list.style.display="none";
button.addEventListener("click",()=>{
    
    if (input.value==="") {
        alert("!!!")
        
    }else{
    
    const item=document.createElement("li");
    item.classList.add("block");
    const textItem=document.createElement("span");
    textItem.textContent=input.value;
    item.append(textItem);
    list.append(item);
    input.value= "";
    console.log(input.value);
    const delBtn=document.createElement("button");
    delBtn.classList.add("delBtn")
    delBtn.innerHTML= "delete";
    
    delBtn.addEventListener("click",() =>{
      list.removeChild(item)
       })
       item.append(delBtn); 
    }
    })
        
     button2.addEventListener("click",()=>{
     list.style.display="block";
     btn.style.display="block";
    }) 

    btn.addEventListener("click",()=>{
        list.style.display="none";
        btn.style.display="none";
    });
    