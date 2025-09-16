const comp=document.getElementById("comp");
const pen=document.getElementById("pen");

comp.addEventListener("click",function(){
    let status=pen.textContent;
    pen.textContent=comp.textContent;
    comp.textContent=status;
});
