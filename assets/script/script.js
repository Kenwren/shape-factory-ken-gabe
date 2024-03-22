import Shapes from './shapes.js';
//Constants
const shapeSelect = document.getElementById('shape');
const colorSelect = document.getElementById('color');
const createButton = document.getElementById('createButton');
const display = document.getElementById('display');
const info = document.querySelectorAll('.info');
const infoText = document.querySelector('.info-text');
const box = document.querySelector('.create-box');


//Array
const shapeArray = [];
const events = [];

// class Shapes {
//   constructor(color,form,id){
//     this.color = color;
//     this.form = form;
//     this.id = id;
//   }
  
//   getInfo(){
//     return (`${this.color} ${this.form}`)
//   }
//   getInfoP(){
//     console.log('printing',this.color, this.form);
//   }
// }


//Display Info about Shape
function print(obj){
  color = obj.srcElement.classList[0];
  position = obj.srcElement.classList[2];
  shape = obj.srcElement.classList[1];
  infoText.innerText = (`Position ${position}, Color ${color}, Shape ${shape}`)
}


//Creating an Object
function createShape(id){
  const newShape = new Shapes (
    colorSelect.value, shapeSelect.value, (`item${id}`)
  );
  return newShape;
}

//Display the Object Shape
function displayObj(pos){
  console.log(pos);
  console.log(shapeArray);
  let obj = shapeArray[pos-1];
  let colorClass = obj.color;
  let shapeClass = obj.form;
  let id = obj.id;
  const newDiv = document.createElement('div');
  newDiv.classList.add(colorClass);
  newDiv.classList.add(shapeClass);
  newDiv.classList.add(id);
  newDiv.addEventListener('click', print);
  display.appendChild(newDiv);

}

//Check if Selection is Valid
//Otherwise nothing is added to the array
function validSelection(){
  if(colorSelect.value === '0' || shapeSelect.value ==='0'){
    return false;
  }
  return true;
}

//Start the Creation Process Button
createButton.addEventListener('click',function(){
  if (shapeArray.length < 24 && validSelection()){
    shapeArray.push(createShape(shapeArray.length));
    events.push(displayObj(shapeArray.length));
  }

});

