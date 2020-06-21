import React, { Component } from 'react'

export default class DepthInfo extends Component {
    render() {
        const info = this.props.info;
        return (
            <div>
                <h3>{info.description}</h3>
               
            </div>
        )
    }
}
