// import React, { Component } from 'react'

// class Counter extends Component {

//     constructor(props) {
//         super(props)
      
//         this.state = {
//            count:0
//         }
//       }
      
//       Increment() {
//     //       this.setState({
//     //           count: this.state.count + 1
//     //       }, => {console.log('Callback value', this.state.count)
//     //   })
//          this.setState((prevState,) => ({
//             count: prevState.count + 1
//          }) )
//       }

//       IncrementFive() {
//         this.Increment()
//         this.Increment()
//         this.Increment()
//         this.Increment()
//         this.Increment()
//       }


//   render() {
//     return (
//       <div>
//         <div>count - {this.state.count}</div>
//         <button onClick = {() => this.IncrementFive()} >Increment</button>
//       </div>
//     )
//   }
// }

// export default Counter



// import { useMealsListContext } from "./MealsProvider";

// const Counter = () => {

//     const { meals } = useMealsListContext();
//     return (
//         <div>
//             <h3>Number of meals today: {meals.lenght}</h3>
//         </div>
//     )
// }

// export default Counter;