import React, { Component } from 'react'

export default class Event extends Component {
  render() {
    return (
      <div style={{width:"28%",height:450,backgroundColor:"ButtonFace",borderRadius:"4%",marginLeft:"5%"}}>
        

            <div style={{justifyContent:'center',alignItems:"center"}}>
                <img style={{width:"80%",height:260,marginTop:'10%'}} src={this.props.img}/>
            </div>

            <div>
                <h1 style={{fontSize:17}}>{this.props.title}</h1>
                <p style={{justifyContent:"center",alignItems:"center",textAlign:"left",paddingLeft:"5%"
            }}>
           {this.props.cont}
            </p>

            </div>
      </div>
    )
  }
}
