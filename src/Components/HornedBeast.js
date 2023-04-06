import React from "react";
import { Card,Button,Row,Col } from "react-bootstrap";
// import './../App.css';

class HornedBeast extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            numOfClick: 0
        }
    }
    increaseOne = () => {
        this.setState({
            numOfClick: this.state.numOfClick + 1

        })
    }





    render() {
        return (


            <>
            {/* <Card style={{ width: '18rem', margin:'20px'}}>
            <Card.Img variant="top" src={this.props.img} style={{width:'18rem' , height:'200px'}} />
            <Card.Body>
              <Card.Title>{this.props.title}</Card.Title>
            
              <Card.Text>
              ❤️{this.state.numOfClick}
              </Card.Text>
              <Card.Text>
              {this.props.description}
              </Card.Text>
              <Button variant="primary"onClick={this.increaseOne}> vote</Button>
            </Card.Body>
          </Card> */}
            
      


      <Col>
          <Card style={{ width: '15rem', margin:'5px'}}>
            <Card.Img variant="top" src={this.props.img} />
            <Card.Body>
              <Card.Title>{this.props.title}</Card.Title>
              <Card.Text>
              ❤️{this.state.numOfClick} Favorite
              </Card.Text>
              <Card.Text>
              {this.props.description}
              </Card.Text>
              <Button variant="primary"onClick={this.increaseOne}> vote</Button>

            </Card.Body>
          </Card>
        
          </Col>

 


                {/* <img src= />
                <h2> </h2>
                <p></p>
                <p> </p> */}
            </>
        )
    }
}

export default HornedBeast;