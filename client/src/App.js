import React from "react"

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


  render(){


    return(
      <div className="App">
        <div className="container">
          <div className="row">
            <h1>
              Bakers Percentage Calculator
            </h1>
          </div>
          <div className="row">
            {/* Input Card */}
            <div className="col">
              <Card>
                <CardHeader>Header</CardHeader>
                <CardBody>
                  <CardTitle tag="h5">Special Title Treatment</CardTitle>
                  <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
                  <Button>Go somewhere</Button>
                </CardBody>
                <CardFooter>Footer</CardFooter>
              </Card>

              <Card>
                <CardHeader tag="h3">Featured</CardHeader>
                <CardBody>
                  <CardTitle tag="h5">Special Title Treatment</CardTitle>
                  <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
                  <Button>Go somewhere</Button>
                </CardBody>
                <CardFooter className="text-muted">Footer</CardFooter>
              </Card>
            </div>
            {/* Converted Card */}
            <div className="col">
              <Card>
                  <CardHeader>Header</CardHeader>
                  <CardBody>
                    <CardTitle tag="h5">Special Title Treatment</CardTitle>
                    <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
                    <Button>Go somewhere</Button>
                  </CardBody>
                  <CardFooter>Footer</CardFooter>
                </Card>

                <Card>
                  <CardHeader tag="h3">Featured</CardHeader>
                  <CardBody>
                    <CardTitle tag="h5">Special Title Treatment</CardTitle>
                    <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
                    <Button>Go somewhere</Button>
                  </CardBody>
                  <CardFooter className="text-muted">Footer</CardFooter>
                </Card>
            </div>
          </div>
        </div>
      </div>
    )
  }
}