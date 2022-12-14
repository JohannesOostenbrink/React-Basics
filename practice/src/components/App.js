// How to import image in React
////////////////////
// import logo from './Components/Images/logo.png';


// function App() {
//    return (
//      <div className="App">
//        <h1>Task: Add an image below</h1>

//        <img src {logo} alt = "Picture of Logo" />
       

//      </div>
//    );
//  }
 
//  export default App;
 



// // import React, {Component} from 'react'
// // import './App.css'
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

// // With Routing anchor tag is replaced with routing tag
// // <Link to="/" className="nav-item" Homepage</Link>

// // import Btn from './Btn';

//import './App.css';
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


// import Child from "./ Child"

// import App(){
//     const date = new Date()

//     return (

//         <div>

//         <Child message= {date.toLocaleTimeString()} />

//         </div>
//     );
// }

// export default App;

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