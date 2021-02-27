import React, { Component } from 'react';
import { Text, View, FlatList, ScrollView } from 'react-native';
import CardRow from '../CardRow';
import getMovies from '../getMovies';
import AllColors from '../../assets/AllColors'

export default class Popular extends Component {

    state = {
        movielist: [],
    };

    componentDidMount() {
        page = 1;
        for (page = 1; page < 5; page++) {

            fetch("https://api.themoviedb.org/3/movie/popular?api_key=fe9d22e75d70883407093de1daed3c8b&language=en-US&page=" + page)
                .then((response) => response.json())
                .then((json) => {
                    mov = json.results;
                    arr = []
                    for (i = 0; i < mov.length / 3; i++) {
                        arr.push(mov.slice(i * 3, i * 3 + 3))
                    }
                    //console.log(mov, arr);
                    arr = this.state.movielist.concat(arr);
                    this.setState({ movielist: arr })
                }).catch(err => console.log(err))

        }

        // arr = []
        // for (i = 0; i < this.state.nmovielist.length / 3; i++) {
        //     arr.push(this.state.nmovielist.slice(i * 3, i * 3 + 3))
        // }
        // this.setState({ movielist: arr });

    }


    render() {
        return (
            <View style={{ flex: 1, backgroundColor: AllColors.blacK }}>

                {this.state.movielist.length != 0 ? <FlatList data={this.state.movielist} renderItem={({ item }) => <CardRow keyExtractor={(item, index) => item[0]} movies={item} navigation={this.props.navigation}></CardRow>} /> : null}

            </View >
        )
    }


}
