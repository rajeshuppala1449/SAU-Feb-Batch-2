import React, { Component } from 'react'
import { Text, View } from 'react-native'
import Details from '../Details'

export class LoadingDetails extends Component {
    render() {
        return (
            <Details id={this.props.route.params.id} link={this.props.route.params.links}></Details>
        )
    }
}

export default LoadingDetails
