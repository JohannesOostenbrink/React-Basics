// import React, { Component } from 'react'

// class EventBind extends Component {

//     constructor(props){
//         super(props)

//         this.state = {
//             message:"hello"
//         }
//         this.clickHandler = this.clickHandler.bind(this)
//     }

//     clickHandler() { ////////////////////you can also pass this as function to have event execute!
//          this.setState({
//              message: 'Goodbye!'
//      })
//     console.log(this)
//     }


// // different ways to bind eventhandlers
// // its suggested to bind event handlers in constructors 

//   render() {
//     return (
//       <div>
//         <div>{this.state.message}</div>
//         {/* <button onClick = {this.clickHandler.bind(this)}>Click</button> */}
//         {/* <button onClick = {() => this.clickHandler()}>Click</button> */}
//         <button onClick = {this.clickHandler}>Click</button>
//       </div>
//     )
//   }
// }

// export default EventBind
