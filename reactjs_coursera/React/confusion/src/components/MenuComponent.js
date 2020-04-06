import React,{Component} from 'react';
import {Card,CardImg,CardImgOverlay,CardText,CardBody,CardTitle} from 'reactstrap';
import Dishdetail from './DishdetailComponent';

class Menu extends Component{
  constructor(props){
    super(props);

    this.state={
      selectedDish:null
    }
    console.log('MenuComponent constructor was invoked');
  }

  componentDidMount(){
    console.log('MenuComponent componentDidMount was invoked');

  }

  onDishSelect(dishh){
    this.setState({selectedDish:dishh});
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
    console.log('MenuComponent render was invoked');


    return(
      <div className="container">
        <div className="row">
            {menu}
        </div>
          <Dishdetail dishh={this.state.selectedDish} />
      </div>
    );
  }
}

export default Menu;
