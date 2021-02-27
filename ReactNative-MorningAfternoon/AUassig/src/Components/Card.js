import React from 'react';
import { Text, View, Image, TouchableOpacity } from "react-native";
import AllColors from '../assets/AllColors';


export default class Card extends React.Component {
    state = {
        uri: null
    }
    componentDidMount() {
        fetch("https://api.themoviedb.org/3/movie/" + this.props.movie.id + "/images?api_key=fe9d22e75d70883407093de1daed3c8b")
            .then((response) => response.json())
            .then((json) => {
                this.setState({ uri: json.backdrops[0].file_path, links: json })
                // console.log(this.state)
            }).catch(err => console.log(err))
    }
    render() {

        return (
            //  <View style={{ flex: 1, alignItems: "flex-start", justifyContent: "flex-start" }}>\
            <TouchableOpacity onPress={() => { this.props.navigation.navigate('Details', { id: this.props.movie.id, links: this.state.links }) }}>
                <View style={{ backgroundColor: AllColors.CardBgColor, borderRadius: 10, overflow: "hidden", margin: 15, borderColor: "white", borderWidth: 0.5 }}>
                    <View>
                        {this.state.uri ? <Image
                            source={{ uri: "https://image.tmdb.org/t/p/w500/" + this.state.uri }}
                            style={{
                                height: 100,
                                width: 130
                            }}
                        /> : <Image
                                source={require('../assets/ispinner.jpg')}
                                style={{
                                    height: 100,
                                    width: 130
                                }}
                            />}
                    </View>
                    <View style={{ padding: 10, width: 130, height: 50 }}>
                        <Text style={{ color: AllColors.white }}>{this.props.movie.title}</Text>
                        {/* <Text style={{ color: "#eee", paddingTop: 5 }}>
                        {this.props.movie.release_date}
                    </Text> */}
                    </View>
                </View>
            </TouchableOpacity>


        );
    }
}



