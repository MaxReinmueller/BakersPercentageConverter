import React from "react"
import { Card, Button, CardHeader, CardBody,
  CardTitle,FormGroup, Label, Col, Input} from 'reactstrap';

export default class App extends React.Component{
  constructor(props){
    super(props)
    
    this.state = {
      flour: " ",
      water: " ",
      yest: " ",
      sugar: " ",
      salt: " "
    };
  }

  updateFlour(flour){
    this.setState({ flour })
  }
  updateWater(water){
    this.setState({ water })
  }
  updateYest(yest){
    this.setState({ yest })
  }

  render(){


    return(
      <div className="App">
        <div className="container">
          <div className="row text-aling-center">
            <CardTitle className="text-align-center">
              Bakers Percentage Calculator
            </CardTitle>
          </div>
          <div className="row">
            {/* Input Card */}
            <div className="col">
              <Card>
                <CardHeader>Receipe in grams</CardHeader>
                <CardBody>
                <FormGroup row>
                    <Label for="flour" sm={2}>Flour</Label>
                    <Col sm={10}>
                      <Input type="number" name="flour" id="flour" placeholder="Enter amout of flour" 
                      value={this.state.flour}
                      onChange={(e) => {
                        this.updateFlour(e.target.value)
                      }}
                      />
                      {console.log(this.state.flour)}
                    </Col>
                  </FormGroup>
                <FormGroup row>
                    <Label for="water" sm={2}>Water</Label>
                    <Col sm={10}>
                      <Input type="number" name="water" id="water" placeholder="Enter amout of water" 
                      value={this.state.water}
                      onChange={(e) => {
                        this.updateWater(e.target.value)
                      }}
                      />
                      {console.log(this.state.water)}
                    </Col>
                  </FormGroup>
                <FormGroup row>
                    <Label for="yest" sm={2}>Yest</Label>
                    <Col sm={10}>
                      <Input type="number" name="yest" id="yest" placeholder="Enter amout of yest" 
                      value={this.state.yest}
                      onChange={(e) => {
                        this.updateYest(e.target.yest)
                      }}
                      />
                    </Col>
                  </FormGroup>
                <FormGroup row>
                    <Label for="salt" sm={2}>Salt</Label>
                    <Col sm={10}>
                      <Input type="number" name="salt" id="salt" placeholder="Enter amout of salt" 
                        value={this.state.salt}
                        onChange={(e) => {
                          this.updateSalt(e.target.salt)
                        }}
                      />
                    </Col>
                  </FormGroup>
                <FormGroup row>
                    <Label for="Water" sm={2}>Sugar</Label>
                    <Col sm={10}>
                      <Input type="number" name="sugar" id="sugar" placeholder="Enter amout of sugar" />
                    </Col>
                  </FormGroup>
                </CardBody>
                  <Button>Calculate percentages</Button>
              </Card>
            </div>
            {/* Converted Card */}
            {/* <div className="col-md-6">
              <Card>
                  <CardHeader>Header</CardHeader>
                  <CardBody>
                    <CardTitle tag="h5">Special Title Treatment</CardTitle>
                    <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
                    <Button>Go somewhere</Button>
                  </CardBody>
                  <CardFooter>Footer</CardFooter>
                </Card>
            </div> */}
          </div>
        </div>
      </div>
    )
  }
}