import React, {Component, useState} from 'react';
// import React, {Component} from 'react';
import './App.css';

const App = () => {
  const [count, setCount] = useState(0);
  const incrementItem = () => setCount(count+1);

  const [email, setEmail] =useState("");
  const updateEmail = e => {
    const {
      target: {value}
    } = e;
    setEmail(value);
  }
  return (
    <>
      {count}
      <button onClick={incrementItem}>Increment</button>
      <button onClick={()=>setCount(count-1)}>Decrement</button>
      <input placeholder="Email" value={email} onChange={updateEmail}/>
    </>
  )
}

// # V2.
// class App extends Component {
//   state = {
//     count: 0
//   };
  
//   incrementItem = () => {
//     this.setState(state => {
//       return {
//         count: state.count + 1
//       };
//     });
//   };

//   render() {
//     const {count} = this.state;
//     return (
//       <>
//       <div>{count}</div>
//       <button onClick={this.incrementItem}>Increment</button>
//       </>
//     );
//   }
// }


// #V1.
// class App extends Component {
//   state = {
//     count: 0
//   };
  
//   modify = n => {
//     this.setState({
//       count: n
//     });
//   };

//   render() {
//     const {count} = this.state;
//     return (
//       <>
//       <div>{count}</div>
//       <button onClick={()=> this.modify(count+1)}>Increment</button>
//       </>
//     );
//   }
// }

export default App;
