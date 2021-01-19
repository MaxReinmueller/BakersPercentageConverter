import React from "react"
import Clock from "./components/Clock"


class Title extends React.Component{
  render(){
    return(
      <div>
        <h1>
          Zestys Oven
        </h1>
        <h2>Great to see you {this.props.name}</h2>
      </div>
    )
  }
}





export default class App extends React.Component{


  render(){
    return(
      <div>
        <Title 
        name="Max"
        />
        <Clock />
      </div>
    )
  }
}