import React, { Component } from 'react'

export default class Topnav extends Component {

  Wait=()=>{
    alert("ggg")
  }
  render() {
    return (
      <div style={{width:'100%'}}>
        
        <div style={{display:"flex",flexDirection:"row",backgroundColor:"ButtonFace"}}>  
      
      <div style={{justifyContent:'center',alignItems:"center"}}>
        <img style={{width:50,height:50}} src='https://img.freepik.com/free-icon/adobe-illustrator_318-1496.jpg?w=826&t=st=1684403089~exp=1684403689~hmac=f6e20f28357c4e19961172e44a607715108a85e441dcfd189f36332244a4ce51'/>
      </div>

          
          <div style={{justifyContent:'space-around',alignItems:"center",flexDirection:"row",display:"flex",width:"50%",marginLeft:"auto"}}>
            <h1 style={{fontSize:17,padding:"2%",color:'Highlight',cursor:"pointer"}} onClick={()=>{alert("Coming Soon !!!")}}>About Us</h1>
            <h1 style={{fontSize:17,padding:"2%",color:'Highlight',cursor:"pointer"}} onClick={()=>{alert("Coming Soon !!!")}}>Members</h1>
            <h1 style={{fontSize:17,padding:"2%",color:'Highlight',cursor:"pointer"}} onClick={()=>{alert("Coming Soon !!!")}}>Events</h1>

            </div>

           
            
        </div>


      </div>
    )
  }
}
