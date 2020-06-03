import React, {Component} from 'react';
import {Container, Row, Col, Carousel } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import items from "../data/menu.json";



class Home extends Component{
    constructor(props){
        super(props);
        this.state={
            title: "Welcome to Strivesturant!",
        };
    }
    
    render(){
        return(
            
            <Container>
                <Grid.Row className="justify-content-center mt-3 rol-cols">
                    <Col xs={6} className="D-flex">
                        <h1> Welcome to Strivestrurant</h1>
                        <p className="lead">The best Italian dishes around </p>
                        <hr className="mt-2"></hr>
                        <p>Come visit us, we can only cook Postal</p>
                        <Carousel>
                            {items.map((item)=>{
                                return(
                                    <Carousel.Item key={item.id}>
                                        <img
                                        className="d-block w-100"
                                        src={item.image}
                                        alt={item.name}
                                        />
                                        <Carousel.Caption>
                                        <h3>{item.name}</h3>
                                        <p>{item.description}</p>
                                        </Carousel.Caption>
                                    </Carousel.Item>
                                );
                            })
                                
                            }
                            
                          
                        </Carousel>
                    
                    </Col>
                </Grid.Row>
          </Container>
        );
        
    }
    
}
export default Home