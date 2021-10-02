import React from "react";
import { Component } from "react";
export default class Button extends Component{
    state ={}

    render(){
        return (
          <button onClick = {() => this.props.imgRenderInside()}>Load More</button>
        )
    }
}