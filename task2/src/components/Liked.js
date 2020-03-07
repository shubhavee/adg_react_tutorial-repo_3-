import React,{Component} from 'react';
// import nextId from 'react-id-generator';

class Liked extends Component {

changeState=(x)=>{
  console.log(x);
  const fas=document.getElementById(x);
  fas.classList.toggle("fa-thumbs-down");
}

  render(){

    return(
      <div>
      <i className="fa fa-thumbs-up" id={this.props.keyy} onClick={this.changeState.bind(this,this.props.keyy)}></i>
  {/*}  // <input type="checkbox" onChange={this.props.markLike.bind(this,this.props.key)}/>{' '}*/}
      </div>
    )
  }
}

export default Liked;
