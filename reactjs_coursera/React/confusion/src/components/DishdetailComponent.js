import React,{Component} from 'react';
import {Card,CardImg,CardImgOverlay,CardText,CardBody,CardTitle} from 'reactstrap';

class Dishdetail extends Component{
  constructor(props){
    super(props);
  }

  renderComment(comments){
    if(comments!= null){
      const cmnts=comments.map(comment=>{
        return(
          <li key={comment.id}>
            <p>{comment.comment}</p>
            <p>-- {comment.author},{comment.date}</p>
          </li>
        );
      })

      return(
        <div className='col-12 col-md-5 m-1'>
          <h3>Comments</h3>
          <ul className='list-unstyled'>
            {cmnts}
          </ul>
        </div>
      );

    }else{
      return(
        <div></div>
      );
    }
  }

  renderDish(dishh){
    if(dishh!= null){
      return(
        <div className='col-12 col-md-5 m-1'>
        <Card>
          <CardImg width="100%" src={dishh.image} alt={dishh.name} />
          <CardBody>
            <CardTitle>{dishh.name}</CardTitle>
            <CardText>{dishh.description}</CardText>
          </CardBody>
        </Card>
        </div>
      );
    }else{
      return(
        <div></div>
      );
    }
  }

  render(){
    const dishh=this.props.dishh;
    if(dishh==null)
    {
      return(
        <div></div>
      );
    }
    const dishItem=this.renderDish(dishh);
    const commentItem=this.renderComment(dishh.comments);

    return(
      <div className="row">
          {dishItem}
          {commentItem}
      </div>
    );
  }

}

export default Dishdetail;
