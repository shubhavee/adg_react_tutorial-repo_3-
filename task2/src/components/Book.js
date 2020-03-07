import React,{Component} from 'react';

class Book extends Component {

  render(){
    return(
          <div>
            {this.props.book_data}
          </div>
    )
  }
}

export default Book;
