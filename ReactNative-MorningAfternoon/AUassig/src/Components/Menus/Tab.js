import React from 'react'
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'

const Tab = ({ style, onPress, tab, icon }) => {
    return (
        tab.name != "Details" ? (
            <View style={style.container} >
                <TouchableOpacity onPress={onPress}>
                    <Text style={style.text}>{tab.name}</Text>
                </TouchableOpacity>
            </View>) : null
    )
}

// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         alignItems: 'center',
//         justifyContent: 'center',
//         padding: 5,
//         backgroundColor: 'grey',
//         borderRadius: 20,
//         margin: 2,
//         padding: 5
//     }
// })
export default Tab
