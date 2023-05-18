import React, { Component } from 'react'
import Topnav from './topnav'
import Main1 from './main1'
import SocialMedia from './SocialMedia'
import Event from './Event'


export default class Home extends Component {
  render() {
    return (

        


        <div style={{justifyContent:'space-between',display:"flex",flexDirection:'column'}}>
        <div style={{ justifyContent: "center", alignItems: "center", flexDirection: "column", display: "flex", width: "100vw", height: "97vh" }}>
        
        <Topnav />
      
        <div style={{ width: "100%", height: "100%", backgroundImage:"url('https://blog.paperspace.com/content/images/2020/01/Intro-HELLO-FUTURE-1920x1080_v2.gif')",backgroundRepeat:"no-repeat", display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column" }}>
          <h1 style={{ color: "white", textAlign: "center",fontSize:62 ,borderWidth:3,borderColor:"greenyellow"}}>We Are The Future Era !!!</h1>
          
          <h1 style={{ color: "white", textAlign: "center",cursor:"pointer" }} onClick={()=>{alert("Wait for the Moment... It's Coming Soon")}}>Get in to our Club!</h1>
        </div>
      

      </div>
        
        <div style={{justifyContent:"center",alignItems:"center",marginTop:"5%"}}>

      <Main1/>
      <div style={{display:"flex",flexDirection:"row",justifyContent:"space-between",marginTop:"3%",marginLeft:"2%",marginRight:"2%",}}>
      

        <SocialMedia social={"Discord Community"} size={"250+"} img={"https://cdn-icons-png.flaticon.com/512/906/906361.png?w=826&t=st=1684394857~exp=1684395457~hmac=5621fa664c7d108c34ff5a6f098757811c6e047fbcb93a65ae7ad5e6dd44e8d1"}/>
        <SocialMedia social={"Whatsapp Community"} size={"250+"} img={"https://cdn-icons-png.flaticon.com/512/220/220236.png?w=826&t=st=1684398015~exp=1684398615~hmac=dd34d6a169f55dae0b19235384c408ef1fd0d080fc71e03ef9be9ab105490471"}/>
        <SocialMedia social={"Linkedin Community"} size={"250+"} img={"https://cdn-icons-png.flaticon.com/512/174/174857.png?w=826&t=st=1684398123~exp=1684398723~hmac=e9926ebea484a9fba55990f21902df5509038bacabd1e2dc0155f2f638ee411d"}/>
        <SocialMedia social={"Members "} size={"250+"} img={"https://img.freepik.com/free-vector/hands-assembling-puzzle-concept-illustration_114360-13274.jpg?w=826&t=st=1684398212~exp=1684398812~hmac=8a3b4c95a0bc6a4602a1da9a8c16e825d8050f9f10e99dda51c35ab8088fa13b"}/>
      </div>

      </div>
    
      
      
        <h1 style={{marginTop:"7%",marginBottom:"4%",fontSize:32}}>EVENTS IN AI-CLUB</h1>

        <div style={{display:"flex",flexDirection:"row",justifyContent:"space-between",marginTop:"3%",marginLeft:"2%",marginRight:"2%",}}>
            
       
            <Event img={"https://res.cloudinary.com/dxhmtgtpg/image/upload/v1684401889/IMG20230329115332_ygymjr.jpg"} title={"Explore the Team Inoguration"} cont={" Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed aliquet elit id leo ultrices, id volutpat massa rhoncus."}/>
            <Event img={"https://res.cloudinary.com/dxhmtgtpg/image/upload/v1684401889/IMG20230210142042_lq2zjw.jpg"} title={"NON-TECHNICAL Events"} cont={" Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed aliquet elit id leo ultrices, id volutpat massa rhoncus."}/>
            <Event img={"https://res.cloudinary.com/dxhmtgtpg/image/upload/v1684402065/IMG20230329121138_kjaax7.jpg"} title={"PSY-CHORE Hackathon"} cont={" Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed aliquet elit id leo ultrices, id volutpat massa rhoncus."}/>
           
           
        </div>

        <div style={{width:"100%",height:60,marginTop:"4%",backgroundColor:'aliceblue',justifyContent:"center",alignItems:"center"}}>
        
        <div>
            <h4>Made with @Ai-Club</h4>
            </div>
        
        <div>
            <img src=''/>
        </div>
        
        </div>
        
      </div>
      
    )
  }
}


