import React from 'react';
import ReactDom from 'react-dom';
import NumberButton from './NumberButton';
import Monitor from './Monitor';
import OperatorButton from './OperatorButton';
class App extends React.Component{
    constructor(props){
        super(props);
        this.state={numberValue:0};
        this.NumberClick=this.NumberClick.bind(this);
    }
    render(){
        return (
            <div>
            <div><Monitor value={this.state.numberValue}></Monitor></div> 
            <table>
            <tr><td><NumberButton value="1" func={this.NumberClick} /></td><td><NumberButton value="2" func={this.NumberClick} /></td><td><NumberButton value="3" func={this.NumberClick} /></td></tr>
            <tr><td><NumberButton value="4" func={this.NumberClick} /></td><td><NumberButton value="5" func={this.NumberClick} /></td><td><NumberButton value="6" func={this.NumberClick} /></td></tr>
            <tr><td><NumberButton value="7" func={this.NumberClick} /></td><td><NumberButton value="8" func={this.NumberClick} /></td><td><NumberButton value="9" func={this.NumberClick} /></td></tr>
            <tr><td><OperatorButton value="+" func={this.NumberClick} /></td><td><OperatorButton value="-" func={this.NumberClick} /></td><td><NumberButton value="=" func={this.NumberClick} /></td></tr>
            </table>            
            </div>
            )
    }
    NumberClick(inputValue){
        this.setState({numberValue:inputValue});
    }
    Calculate(){

    }   
}
ReactDom.render(
    <App />,
    document.getElementById('app')
);