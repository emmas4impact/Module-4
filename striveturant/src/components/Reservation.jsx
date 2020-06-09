import React, {Component} from 'react';
import ListGroup from 'react-bootstrap/ListGroup'


class Reservations extends Component{
    state ={
        reservations: []
        
    }
    
    componentDidMount= async () =>{ 
        //perfect place for fetches /async operation
        console.log('I am in component did match method')
        try{
            let response = await fetch("https://striveschool.herokuapp.com/api/reservation")
            let reservations = await response.json()
            console.log("reservation are: ", reservations)
            this.setState({
                reservations
            })
        }catch (err) {
            console.log("error", err)
            
        }
        
    }
    
    render(){
        return(
            <div className="mt-2">
                <ListGroup>
                {this.state.reservations.length >0 &&
                    this.state.reservations.map((reservation, i) =>{
                        return(
                            <ListGroup.Item key={i}>
                                From: {reservation.name},  for: {reservation.numberOfPersons} People
                                at: {reservation.dateTime}
                            
                            </ListGroup.Item>
                            
                        )
                    })
                }
                    
 
                </ListGroup>
                {
                    this.state.reservations.length ===0 && (<div>No reservations for your resturant</div>)
                }
            
            
            </div>
            
        )
    }
}
export default Reservations