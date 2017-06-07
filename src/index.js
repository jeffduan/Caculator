import React from 'react';
import ReactDom from 'react-dom';
import NumberButton from './NumberButton';
import Monitor from './Monitor';
import OperatorButton from './OperatorButton';
class App extends React.Component{
    constructor(props){
        super(props);
        this.state={numberValue:0,currentOperator:"",sum:0};
        this.NumberClick=this.NumberClick.bind(this);
        this.Calculate = this.Calculate.bind(this);
    }
    render(){
        return (
            <div>
            <div><Monitor value={this.state.numberValue}></Monitor></div> 
            <table>
            <tr><td><NumberButton value="1" func={this.NumberClick} /></td><td><NumberButton value="2" func={this.NumberClick} /></td><td><NumberButton value="3" func={this.NumberClick} /></td></tr>
            <tr><td><NumberButton value="4" func={this.NumberClick} /></td><td><NumberButton value="5" func={this.NumberClick} /></td><td><NumberButton value="6" func={this.NumberClick} /></td></tr>
            <tr><td><NumberButton value="7" func={this.NumberClick} /></td><td><NumberButton value="8" func={this.NumberClick} /></td><td><NumberButton value="9" func={this.NumberClick} /></td></tr>
            <tr><td><OperatorButton value="+" func={this.Calculate} /></td><td><OperatorButton value="-" func={this.Calculate} /></td><td><OperatorButton value="=" func={this.Calculate} /></td></tr>
            </table>            
            </div>
            )
    }
    NumberClick(inputValue){                        
        if(this.state.currentOperator == "+")
             this.setState({sum:this.state.sum + parseInt(inputValue)});             
        else if(this.state.currentOperator == "-")
             this.setState({sum:this.state.sum - parseInt(inputValue)});
        else
           this.setState( {sum:parseInt(inputValue)});     

        this.setState( {numberValue:inputValue});
    }
    Calculate(inputValue){       
       if(inputValue != "="){
          this.setState({currentOperator:inputValue});
       }
       else{
          this.setState({numberValue:this.state.sum});
       }       
    }   
}
ReactDom.render(
    <App />,
    document.getElementById('app')
);