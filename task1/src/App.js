import React,{Component} from 'react';
import Counter from './components/Counter';
import './App.css';

class App extends Component{

  state={
     count:0
  }

  increment=()=>{
    this.setState({
      count:this.state.count + 1
    })
  }

  decrement=()=>{
    if (this.state.count === 0){
    this.setState({
      count:0
    })
  }
  if (this.state.count !== 0){
  this.setState({
    count:this.state.count - 1
  })
}
  }

  render() {
    let {count}=this.state;
  // console.log(this.state.counter)
  return (
    <div className="App">
      <h2>COUNT: {count}</h2>
      <div  className="buttons">
        <Counter title='Increment' job={()=>this.increment()}/>
          <Counter title='Decrement' job={()=>this.decrement()}/>
      </div>

    </div>
  );
}
}

export default App;
