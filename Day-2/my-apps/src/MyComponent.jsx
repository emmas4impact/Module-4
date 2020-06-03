import React from 'react'

class MyComponent extends React.Component{
    
   // NOW I CAN USE THE STATE
  state = {
    counter: 0,
    show: true
  }

  increase = () => {
    // DON'T DO THIS --> this.state.counter = this.state.counter + 1
    this.setState({
      counter: this.state.counter + 1
    })
  }
    render(){
        console.log('PROPS OBJECT', this.props)
        console.log('STATE', this.state)
        return (
          <div style={{ border: '2px solid white', padding: '1rem' }}>
            {this.props.rocket === 'SOME TEXT' && (
              <>
                <button onClick={this.increase}>INCREASE</button>
                <p>MY COUNTER FROM THE STATE IS {this.state.counter}</p>
              </>
            )}
            <h1>THIS IS {this.props.spaceship}</h1>
            <h2 className="title">{this.props.rocket || 'NO TITLE PROVIDED, READ DOCS!!'}</h2>
          </div>
        )
        
    }
}

/* const MyComponent =(props)=>{
    console.log('PROPS OBJECT', props)
    return(
        <div style={{border: '2px solid white', padding: 1rem}}>
             <h1>THIS IS A NUMBER {props.spaceship}</h1>
             <h1>THIS IS A NUMBER {props.rocket || 'NO TITLE PROVIDED, READ DOCS!!'}</h1>
        
        
        </div>
       
    )
} */
export default MyComponent