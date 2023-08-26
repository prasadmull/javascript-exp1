const inputElement=document.querySelector("#name");
const imageElement=document.getElementsByTagName("img")[0];
const loader=document.getElementsByClassName("loader")[0];
const button=document.getElementById("btn");
let added=false;
const addLoader=()=>{
    if(added) return;
    imageElement.src="https://tse2.mm.bing.net/th?id=OIP.pegKpLFGimYrtilO_ndlIwHaE7&pid=Api&P=0&h=220";
    let newDivElementRef=document.createElement("div");
    newDivElementRef.className="loader";
    let insertedElement=button.insertBefore(newDivElementRef,button.children[2]);
    let lastElement=button.children[1];
    lastElement.remove();
    setTimeout(()=>{
        button.appendChild(lastElement);
        document.body.appendChild(button);
    },30000);
    const newElement=document.createElement("div");
    newElement.className="container";
    let p1=document.createElement("p");
    p1.innerText="Hii Prasad";
    let b1=document.createElement("b");
    b1.innerText="How are you?";
    let b2=document.createElement("b");
    b2.innerText="Where are you from?";
    p1.appendChild(b1);
    p1.appendChild(b2);
    newElement.appendChild(p1);
    document.body.appendChild(newElement);
    added=true;
}

function clicked(){
    console.log("mouce clicked");
}
function mouseEntered(){
    console.log("mouce entered");
}
function mouseLeaved(){
    console.log("mouce leaved");
}
function doubleClicked(){
    console.log("double clicked");
}

const bt=document.getElementById("bt");
function listener1(){
    console.log("listener1")
}
function listener2(){
    console.log("listener2")
}
bt.addEventListener("click",listener1);
bt.addEventListener("click",listener2);

const remove=document.getElementById("remove");
remove.addEventListener("click",()=>{
    bt.removeEventListener("click",listener1);
})
const changeColor=document.getElementById("changeC");
const colorChanging=(event)=>{
    console.log(event.target);
    changeColor.style.backgroundColor="blue";
    changeColor.addEventListener("click",colorChanging);
}
changeColor.addEventListener("click",colorChanging);
const parentElement=document.getElementsByClassName("parent")[0];
const childElement=document.getElementsByClassName("child")[0];
parentElement.addEventListener("click",(event)=>{
    console.log("parent listener");
})
childElement.addEventListener("click",(event)=>{
    console.log("child listener");
    event.stopPropagation();
})