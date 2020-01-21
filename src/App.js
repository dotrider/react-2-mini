import React, { Component } from 'react';

// Components
import EditToggle from './components/EditToggle';
import ColorChanger from './components/ColorChanger';
import SizeChanger from './components/SizeChanger';
import FamilyChanger from './components/FamilyChanger';
import TextContainer from './components/TextContainer';


class App extends Component {
//step 1
// constructor
  constructor(){
  super()//call super
  this.state = {//create initial state object
    fontColor: 'black',
    fontSize: 12,
    fontFamily: 'monospace',
    allowEdit: 'true'

  }
  //3) bind this to our methods in the constructor method (gives function context)
  this.updateColor = this.updateColor.bind(this);
  this.updateSize = this.updateSize.bind(this);
  this.updateFamily = this.updateFamily.bind(this);
  this.updateEditStatus = this.updateEditStatus.bind(this);

}
  
  // updateColor
  updateColor(val){
    this.setState({
      fontColor: val
    })
  }

  // updateSize
  updateSize(val){
    this.setState({
      fontSize: val
    })
  }

  // updateFamily
  updateFamily(val){
    this.setState({
      fontFamily: val
    })
  }

  // updateEditStatus

  updateEditStatus(val){
    this.setState({
      allowEdit: val
    })
  }

  render() {
    const {allowEdit, fontColor, fontFamily, fontSize} = this.state
    return (
      <div>
        <div className="headerBar">
          <EditToggle update={this.updateEditStatus}/>
          <ColorChanger update={this.updateColor} allowEdit={allowEdit}/>
          <SizeChanger update={this.updateSize} allowEdit={allowEdit}/>
          <FamilyChanger update={this.updateFamily} allowEdit={allowEdit}/>
        
        </div>
        <div className="textArea"><TextContainer 
        fontColor={fontColor} 
        fontSize={fontSize} 
        fontFamily={fontFamily}/>
        </div>
      </div>
    );
  }
}

export default App;
