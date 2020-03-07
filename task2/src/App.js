import {Component} from 'react';
// import {BrowserRouter as Router,Route} from 'react-router-dom';
import React from 'react';
import Library from './components/Library';
import Liked from './components/Liked';

class App extends Component{

  state = {
    books: [
      {   id:1,
          name:'Harry Potter and the Chamber of Secrets',
          author:'JK Rowling',
          liked:false
      },
      {   id:2,
          name:'The Da Vinci Code',
          author:'Dan Brown',
          liked:false
      },
      {   id:6,
          name:'Harry Potter and the Half Blood Prince',
          author:'JK Rowling',
          liked:false
      },
      {   id:3,
          name:'The Fault In Our Stars',
          author:'John Green',
          liked:false
      },
      {   id:4,
          name:'The Handmaids Tale',
          author:'Margaret Atwood',
          liked:false
      },
      {   id:5,
          name:'Hunger Games',
          author:'Suzanne Collins',
          liked:false
      }
  ]
};


markLike=(id)=>{

  this.setState({books: this.state.books.map(book=>{
    if(book.id===id){
      book.liked=!book.liked
    }
    return book;
  })});
}

  render(){
    console.log(this.state.books)
    return (
      <div className="App">
      <div className="table">
        <h2 align="center">LIST OF BOOKS</h2>
          <Library books={this.state.books} markLike={this.markLike} className="table"/>
      </div>
      </div>
    );
  }
}

export default App;
