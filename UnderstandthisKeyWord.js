
// //this keyword =
// //referening the current object that is executing 
// //the function

// //if function is part of an object, we call it a method
// //hence it references that object itself
// // in other words "this" refers to an function within an object


// //if only function then its applied global

// //example

// const video = {
//     title: 'a',
//     play(){
//         console.log(this);
// }
// }

//video.play();

//play is method in video object
//hence this references to video object

// video.stop = function(){
//     console.log(this);
// }

// video.stop();

// .stop is method in video object


// function Video(title){
//     this.title = title;
//     console.log(this);
// }

// const v = new Video('a');

// when you use "new" operator, that operator points the keyword
//"this" toward the new "Video's argument represented by ()"

// const video = {
//     title: 'a',
//     tags: ['a', 'b', 'c'],
//     showTags() {
//         this.tags.forEach(function(tag) {
//             console.log(this.title, tag);
//         }{this.title});
//     }
// };

// video.showTags();

// forEach statement used in arrays have two paramaters
//