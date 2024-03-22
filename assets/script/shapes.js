class Shapes {
  constructor(color,form,id){
    this.color = color;
    this.form = form;
    this.id = id;
  }
  
  getInfo(){
    return (`${this.color} ${this.form}`)
  }
  getInfoP(){
    console.log('printing',this.color, this.form);
  }
}
export default Shapes;