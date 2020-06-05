import React, {Component} from 'react';
import {Container, Row, Col, Carousel } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import items from "../data/menu.json";
import DishComments from "./DishComments";
import Reservations from "./Reservation";
import ReservationForm from "./Form";



class Home extends Component{
    constructor(props){
        super(props);
        this.state={
            title: "Welcome to Strivesturant!",
            selectedDish: null,
        };
    }
    
    selectNewDish = ((dish) =>{
        this.setState({selectedDish: dish})
    });
    
    render(){
        return(
            
            <Container>
                <Row className="justify-content-center mt-3 ">
                    <Col xs={6} className="D-flex">
                        <h1> {this.state.title}</h1>
                        <p className="lead">The best Italian dishes around </p>
                        <hr className="mt-2"></hr>
                        <p>Come visit us, we can only cook Posta</p>
                        <Carousel>
                            {items.map((dish)=>{
                                return(
                                    <Carousel.Item key={dish.id}>
                                        <img
                                        className="d-block w-100"
                                        src={dish.image}
                                        alt={dish.name}
                                        onClick={() => this.selectNewDish(dish)}
                                        />
                                        <Carousel.Caption>
                                        <h3>{dish.name}</h3>
                                        <p>{dish.description}</p>
                                        </Carousel.Caption>
                                    </Carousel.Item>
                                );
                            })
                                
                            }
                            
                          
                        </Carousel>
                    
                    </Col>
                </Row>
                <Row className="mb-5">
                    <Col xs={12}>
                        <DishComments selectedDish={this.state.selectedDish} />
                    </Col>
                </Row>
                <Row className="mb-5">
                    <Col xs={12}>
                        <ReservationForm />
                    </Col>
                </Row>
                <Row className="mb-5">
                    <Col xs={12}>
                        <Reservations />
                    </Col>
                </Row>
          </Container>
        );
        
    }
    
}
export default Home