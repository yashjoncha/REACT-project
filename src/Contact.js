// // import React, { useEffect,  useMemo,  useState } from 'react'

// // const Contact = () => {
// //     const[num1,setnum1]=useState(0);
// //    //  const[num2,setnum2]=useState(0);
// //     const increment=()=>{
// //        setnum1(num1 + 1)
// //     }
// //     const decrement=()=>{
// //        setnum1(num1 - 1)
// //     }
// //     const reset=()=>{
// //        setnum1(0)
// //     }
   
// //     const num=useMemo(()=>{
// //       return num1
// //     },[num1])
// //   return (
// //     <div>
// //     <p>{num}</p>
// //      <button onClick={increment}> + </button>
// //      <button onClick={decrement}> - </button>
// //      <button onClick={reset}> 0</button>
// //     </div>
// //   )
// // }

// // export default Contact

// import React, { useReducer } from 'react'

// const reducer=(state,action)=>{
//   switch(action.type){
//     case"INCREMENT":
//     return {counter: state.counter +1}
//     case"DECREMENT":
//     return {counter: state.counter -  1}
//     case"RESET":
//     return {counter: 0}

//     default:
//       return  state;
//   }
// }

// const Contact = () => {
//   let initialstate={
//     counter:0
//   }
//   const[state,dispatch]= useReducer(reducer,initialstate);
//   let action={type:"INCREMENT"};
//   const handleclick=()=>{
//     dispatch(action);
//   }
//   // const[state,dispatch]= useReducer(reducer,initialstate);
//   let actions={type:"DECREMENT"};
//   const handleclicks=()=>{
//     dispatch(actions);
//   }
//   // const[state,dispatch]= useReducer(reducer,initialstate);
//   let actionr={type:"RESET"};
//   const handleclickr=()=>{
//     dispatch(actionr);
//   }

//   return (
//     <div>
//       {state.counter}
// <button onClick={handleclick}>ooo papaji +</button>
// <button onClick={handleclicks}  >ooo papaji -  </button>
// <button onClick={handleclickr}  >ooo papaji 0  </button>

//     </div>
//   )
// }

// export default Contact

import React, { Component } from 'react'

export default class Contact extends Component {
  constructor(){
    super();
    this.state={count:0}
    // concole.log("ok")
  }
  componentDidMount(){
    console.log("componentDidMount");
  }
  handleclick=()=>{
    this.setState({count:this.state.count +1});
     }
  handleclickminus=()=>{
    this.setState({count:this.state.count -1});
     }
  render() {
    return (
      <div>
        {this.state.count}
        <button onClick={this.handleclick}>ok</button>
        <button onClick={this.handleclickminus}>ok-</button>
      </div>
    )
  }
}
