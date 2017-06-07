import React from 'react';
const blockStyle={
backgroundColor:"#87CEFA",
width:"51px",
height:"51px",
textAlign:"center",
margin:"4px 4px 4px 4px",
cursor:"pointer",
fontSize:"24px"
};
class OperatorButton extends React.Component{
    constructor(props){
        super(props);        
        this.btnClick=this.btnClick.bind(this);
        this.state={ButtonValue:props.value};
    }
    render(){
        let symbol=this.props.value;
        return (
            <div style={blockStyle} onClick={this.btnClick}>{symbol}</div>
        )
    };    
    btnClick(){      
        this.props.func(this.props.value);
    }    
}

module.exports= OperatorButton;