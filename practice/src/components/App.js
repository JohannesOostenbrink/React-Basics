//Practice Song Selection 




//// import React from "react";

// function App() {

//   const bird1 = new Audio(
//     "https://upload.wikimedia.org/wikipedia/commons/9/9b/Hydroprogne_caspia_-_Caspian_Tern_XC432679.mp3"
//   );

//   const bird2 = new Audio(
//     "https://upload.wikimedia.org/wikipedia/commons/b/b5/Hydroprogne_caspia_-_Caspian_Tern_XC432881.mp3"
//   );

//   function toggle1() {
//     if (bird1.paused) {
//       bird1.play();
//     } else {
//       bird1.pause();
//     }
//   };

//   function toggle2() {
//    if (bird2.paused) {
//      bird2.play();
//    } else {
//      bird2.pause();
//    }
//  };

//   return (
//     <div>
//       <button onClick={toggle1}>Caspian Tern 1</button>
//       <button onClick={toggle2}>Caspian Tern 2</button>
//     </div>
//   );
// }

// export default App;




// Next Topic 




// This is how I import media packages example;




// import React from "react";
// import ReactPlayer from "react-player/youtube";

// const App = () => {
//   return (
//     <div>
//       <MyVideo />
//     </div>
//   );
// };

// const MyVideo = () => {
//   return (
//     <ReactPlayer url='https://www.youtube.com/watch?v=ysz5S6PUM-U' />
//   );
// };

// export default App;




// Next Topic 





// How to import image in React






// import logo from './Components/Assets/logo.png';

// function App() {
//    return (
//      <div className="App">
//        <h1>Task: Add an image below</h1>

//        <img src {logo} alt = "Picture of Logo" />
       

//      </div>
//    );
//  }
 
//  export default App;
 


// Next Topic




// Routing, Event Binding etc 

// // import React, {Component} from 'react'
// // import FunctionClick from './components/FunctionClick'
// // import ClassClick from './ components/ClassClick'
// // // import Greet from './components/Greet'
// // // import Welcome from './components/Welcome'
// // // import Hello from './components/Hello'
// // // import Message from './components/Message'
// // // import Counter from './components/Counter'
// import EventBind from './components/EventBind';
// import Contact from './components/Contact';
// import {Routes, Route} from 'react-router-dom';

// class App extends Component {
//      render() {
//          return (
//             <div className='App'>
//             <nav>
//              <EventBind />
//              <Link to= "/Contact" className="nav-item" Contact ></Link> 
//            </nav>
            
//             <Routes>
//                <Route path = "/" element = {<Contact/>} />
//                <Route path = "/" element={<EventBind />} />
//             </Routes>
//             </div>
//        )
//     }  }

// // With Routing anchor tag is replaced with routing tag. Routing is used instead of <a> in SPA
// // <Link to="/" className="nav-item" Homepage</Link>




// Importing 



// // import Btn from './Btn';
// import ModeToggler from './ModeToggler';


// function App() {
//   return (
//     <div className="App">
//       <Btn />
//       <ModeToggler />
//     </div>
//   );
// }

// export default App;




//Event Handle 



// import './App.css';

// function App() {
//   function handleClick() { 
//     let randomNum = Math.floor(Math.random() * 3) + 1;
//     console.log(randomNum);
//     let userInput = prompt('type a number'); 
//     alert(`Computer number: ${randomNum}, Your guess: ${userInput}`);
//   }
//   return(
//     <button onClick = {handleClick}>
//       Guess the number between 1 and 3. 
//     </button>
//   )
// }

//   export default App;




// Insert date props to child component




// import Child from "./ Child"

// function App(){
//     const date = new Date()

//     return (

//         <div>

//         <Child message= {date.toLocaleTimeString()} />

//         </div>
//     );
// }

// export default App;





// Change State Within Component




// import React, {useState} from 'react';
// import Heading from './ Heading';
// import './ App.css';

// function App() {
//     const [word, setWord] = React.useState('Eat')

// function handleClick() {
//     setWord('Drink')
// }

// return (
//     <div className= "App">
//         <Heading message={word + " at Little Lemon"} />
//         <button onClick = {handleClick}>Click Here</button>

//     </div>
// )
// }
// export default App;




// Apply Changes to multiple child components via parent component



// import MealsProvider from "./MealsProvider";
// import MealsList from "./ MealsList";
// import Counter from "./ Counter";

// function App(){
// return(
//     <div>
//         <MealsProvider>
//         <MealsList/>
//         <Counter/>
//         </MealsProvider>

//     </div>
// )
// }

// export default App;




// Array Of Fruits with Counter




// import Fruits from "./Fruits";
// import FruitsCounter from "./FruitsCounter";

// function App() {

//    const [fruits] = React.useState([
//         {fruitName: 'apple', id: 1},
//         {fruitName: 'apple', id: 2},
//         {fruitName: 'plum', id: 3},
//     ]);

//   return (
//     <div className="App">
//       <h1>Where should the state go?</h1>
//       <Fruits fruits={fruits} />
//       <FruitsCounter fruits={fruits} />
//     </div>
//   );
// }

// export default App;