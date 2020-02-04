import React, { Component } from 'react'

class BasicIncrement extends Component {
    constructor(props) {
        super(props)
        this.state = {
            value:1
        }
        this.onButton = this.onButton.bind(this)
    }
    
    render() {
        return (
            <div>
                <div>
                    <input type="number" value={this.state.value} disabled></input>
                </div>
                <div>
                    <button onClick = {this.onButton}>Increment</button>
                </div>
            </div>
        )
    }

    onButton() {
        this.setState({
            value : this.state.value+1
        })
    }
}

export default BasicIncrement
