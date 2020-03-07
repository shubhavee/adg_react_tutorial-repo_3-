import React,{Component} from 'react';
import Book from './Book';
import Liked from './Liked';


class Library extends Component {

  render(){
    return(
      <table class="table table-striped">
      <thead>
        <tr>
          <th>Name</th>
          <th>Author</th>
          <th>Liked</th>
        </tr>
      </thead>
      <tbody>
      {this.props.books.map((book)=>{
        return <tr>
        <td>
        <Book book_data={book.name} key={book.id} />
        </td>
        <td>
        <Book book_data={book.author} key={book.id} />
        </td>
        <td>
          <Liked book_data={book.liked} markLike={this.props.markLike} keyy={book.id} />
        </td>
        </tr>
      })}
    </tbody>
      </table>
    );
  }
}

export default Library;
