import React from 'react';

class NameSettingPanel extends React.Component {
  
  render() {
    return <div className='name-setting'>
      <input id='name-input' type='text' defaultValue={this.props.name} onChange={this.nameChanged.bind(this)}/>
      <button onClick={this.applyChange.bind(this)}>Set name</button>
    </div>;
  }

  nameChanged(event) {
    this.newName = event.target.value;
  }

  applyChange() {
    if (this.newName) {
      this.props.setName(this.newName);
    }
  }
}

export default NameSettingPanel;
