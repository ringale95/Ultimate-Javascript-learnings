//finding the elmenst by:
//document.getElementById("")
//document.getElementByBody("")
//document.getElementByTagName("p")
//document.getElementByClassName("intro")
//HTML element by css selectors:document.queryselectorAll("p.intro")

const box1 = document.getElementById('box-1');
box1.innerHTML = "Helloworlld";

box1.style.backgroundColor = "blue"
//box1.src=""; for image

//for loop
const boxes = document.getElementsByClassName('box');
for(let i=0; i<boxes.length;i++){
    boxes[i].classList.add('round-border');
}

//to remove class element
box1.classList.remove('box');

//create element
const newpara = document.createElement('p');
newpara.innerText = "This is brand new"
newpara.classList.add('box')

const container = document.getElementById('container');
container.appendChild(newpara);

function myfunction(){
    console.log("This is clicked")
}

const myfunc2 = () =>{
    console.log("Mousoer")
}

function keypress(){
    console.log("Key was pressed")
}

//Event listener////
//Recommended to use event listener since handled in js html can only be then used ot give structure
//here it is not overrided rather both th efunctions are triggered whereas in html
//they are overriden and only lsast one is called
const box2 = document.getElementById('box-3');
box2.addEventListener('click', ()=>{
    console.log("Clicked by eventlistener")
})
box2.addEventListener('click', ()=>{
    console.log("Clicked by eventlistener by 2")
})
//can be helpful to give minute detail of event
box2.addEventListener('click', (e)=>{
    console.log("event object", e)
})

//to access mouse x nd y position
box2.addEventListener('mousemove', (e)=>{
    console.log("event object", e.clientX, e.clientY)
})

//which key is pressed can be knowne:
const nameinput = document.getElementById('nameinput')
nameinput.addEventListener('keypress',(e)=>{
    console.log('key', e.key); //but thing is backspace, arrowup and arrow down is not catched
})
//to access backspace, up arrow ,space,tab key use 'key down'
const nameinput2 = document.getElementById('nameinput')
nameinput2.addEventListener('keydown',(e)=>{
    console.log('key', e.key);
})

//capture: if parameter is true : capture, if false takes bubbling
const nameinput2 = document.getElementById('nameinput')
nameinput2.addEventListener('keydown',(e)=>{
    console.log('key', e.key);
}, true)
 
