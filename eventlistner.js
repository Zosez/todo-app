const comp=document.getElementById("comp");
const pen=document.getElementById("pen");



comp.addEventListener("click",function(){
    let status=pen.textContent;
    pen.textContent=comp.textContent;
    comp.textContent=status;
});

checkboxClick=(checkbox)=>{
    if (checkbox.style.backgroundColor!="green"){
    checkbox.style.backgroundColor="green";
    }else{
        checkbox.style.backgroundColor="white";
    }
}

buttonclick=(button)=>{
    if(button.textContent=="Medium"){
        button.textContent="High";
        button.style.color="Red";
        button.style.backgroundColor="#d18f8ff6";
    }else if(button.textContent=="High"){
        button.textContent="Low";
        button.style.color="Blue";
        button.style.backgroundColor="#b6a3e2f6";
    }else{
        button.textContent="Medium";
        button.style.color="darkgoldenrod";
        button.style.backgroundColor="#dadb93f6";
    }

}


