//this refers to object executing current funciton//

const video ={
    title : 'a',
    play(){
        console.log(this);
    }
};
video.play(); //this refers to video object

video.stop = function(){
    console.log(this);
};
video.stop(); //refers to video object since its a a method

function playvideo(){
    console.log("This is regular function and gives window object")
}
playvideo();

//if we call function using new keyworkd or there is a constructure then refers to new empty object
// function videon(title){
//     this.title=title;
//     console.log(this)
// }
// const v = new videon('b')

//suppose
const videons = {
    title:'a',
    tags : ['a','b','c','d'],
   showtags(){
    this.tags.forEach(function(tag){//here we use this to get current object and its properties
    console.log(tag)
   });
   }
};
videons.showtags();

//to display title of video to next tag
const videonsx = {
    title:'a',
    tags : ['a','b','c','d'],
   showtags(){
    this.tags.forEach(function(tag){//here we use this to get current object and its properties
    console.log(this.title,tag) //here we cant this (this.title) because we are in callback function and not the method of video object
    //here there is only one method of video object which is 'showtags' so it will not refer to global object
   },this ); //here we are in showtags
   }
};
videonsx.showtags();
