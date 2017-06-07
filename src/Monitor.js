import React from 'react';
const blockStyle={
backgroundColor:"#90EE90",
width:"180px",
height:"40px",
textAlign:"center",
margin:"4px 4px 4px 4px",
fontSize:"32px"
};
class Monitor extends React.Component{
    render(){
        let number=this.props.value;
        return (
            <div style={blockStyle}>{number}</div>
        )
    }    
}
module.exports= Monitor;