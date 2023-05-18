import React, { Component } from 'react'

export default class SocialMedia extends Component {
  render() {
    return (

    
      <div style={{width:"20%",height:190,backgroundColor:"black",justifyContent:"center",alignItems:'center',display:'flex',flexDirection:"column",borderRadius:10}}>
       
        <div >
            <img style={{width:"20%",}}  src={this.props.img}/>
        </div>

        <div>
            <h1 style={{color:"white",fontSize:17}}>
                {this.props.social}
            </h1>
            <h2 style={{color:"white",fontSize:15}}>{this.props.size}</h2>
        </div>
        
        
        </div>


    )
  }
}
