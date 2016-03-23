import { Component } from 'react'

export class HelloMessage extends Component {

  render() {
    return (
      <div>Hello {this.props.name}</div>
    );
  }

}
