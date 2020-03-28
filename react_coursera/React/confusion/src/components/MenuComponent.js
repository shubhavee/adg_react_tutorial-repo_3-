import React,{Component} from 'react';
import {Card,CardImg,CardImgOverlay,CardText,CardBody,CardTitle,Media} from 'reactstrap';

class Menu extends Component{
  constructor(props){
    super(props);

    this.state={
      selectedDish:null
    }
  }

  onDishSelect(dishh){
    this.setState({selectedDish:dishh});
  }

  renderDish(dishh){
    if(dishh!= null){
      return(
        <Card>
          <CardImg width="100%" src={dishh.image} alt={dishh.name} />
          <CardBody>
            <CardTitle>{dishh.name}</CardTitle>
            <CardText>{dishh.description}</CardText>
          </CardBody>
        </Card>
      );
    }else{
      return(
        <div></div>
      );
    }
  }

  render(){

    const menu=this.props.dishes.map((dishh)=>{
      return(
        <div key={dishh.id} className="col-12 col-md-5 m-1">
          <Card onClick={()=>this.onDishSelect(dishh)}>
              <CardImg width="100%" src={dishh.image} alt={dishh.name} />
            <CardImgOverlay>
              <CardTitle>{dishh.name}</CardTitle>
            </CardImgOverlay>
          </Card>
        </div>
      );
    });

    return(
      <div className="container">
        <div className="row">
            {menu}
        </div>
        <div className="row">
          {this.renderDish(this.state.selectedDish)}
        </div>
      </div>
    );
  }
}

export default Menu;
