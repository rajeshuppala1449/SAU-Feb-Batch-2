import React, { Component } from 'react';
import { Text, View } from 'react-native';
import Card from './Card';

export default class CardRow extends Component {
    render() {
        return (
            <View style={{ flex: 1, alignItems: "center", justifyContent: "center", flexDirection: "row", justifyContent: "space-around" }}>
                {this.props.movies[0] ? <Card movie={this.props.movies[0]} navigation={this.props.navigation}></Card> : null}
                {this.props.movies[1] ? <Card movie={this.props.movies[1]} navigation={this.props.navigation}></Card> : <Card movie={this.props.movies[0]} navigation={this.props.navigation}></Card>}
                {this.props.movies[2] ? <Card movie={this.props.movies[2]} navigation={this.props.navigation}></Card> : <Card movie={this.props.movies[0]} navigation={this.props.navigation}></Card>}
            </View>
        )
    }
}
