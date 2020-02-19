import React,{Component} from 'react';

class Counter extends Component {

  render(){
    let{title,job}=this.props;
  return (
    <div>
      <button id="one" type="button" className="btn btn-info" onClick={job}>
        {title}
      </button>

    </div>
  );
}
}

export default Counter;
