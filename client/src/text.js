water: " ",
yest: " ",
sugar: " ",
salt: " "



}
updateWater(water){
  this.setState({ water })
}
updateYest(yest){
  this.setState({ yest })
}
updateSalt(salt){
  this.setState({ salt })
}
updateSugar(sugar){
  this.setState({ sugar })
}


                                <FormGroup row>
                                <Label for="water" sm={2}>Water</Label>
                                <Col sm={10}>
                                  <Input type="number" name="water" id="water" placeholder="Enter amout of water" 
                                  value={this.state.water}
                                  onChange={(e) => {
                                    this.updateWater(e.target.value)
                                  }}
                                  />
                                  {/* {console.log(this.state.water)} */}
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
                     {console.log(this.state.salt)}
                    </Col>
                  </FormGroup>
                <FormGroup row>
                    <Label for="sugar" sm={2}>Sugar</Label>
                    <Col sm={10}>
                      <Input type="number" name="sugar" id="sugar" placeholder="Enter amout of sugar" 
                      value={this.state.water}
                      onChange={(e) => {
                        this.updateSugar(e.target.sugar)
                      }}
                      />
                      {console.log(this.state.sugar)}
                    </Col>
                  </FormGroup>