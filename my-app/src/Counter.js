import React from 'react';

class Counter extends React.Component {
 state ={
  count:27
 }
 increment = () => {
  this.setState({
   count: this.state.count +1
  })
 }
  decrement = () => {
   this.setState({
    count:this.state.count -1
   })
  }
  reset = () => {
   this.setState({
    count:0
   })
  }

 render(){
  return(
   <div className="button">
    <button onClick={this.increment} className="in">+</button>
    <button onClick={this.decrement} className="de">-</button>
    <button onClick={this.reset} className="r">R</button>
  <span>{this.state.count}</span>
   </div>
  )
 }
}
export default Counter;