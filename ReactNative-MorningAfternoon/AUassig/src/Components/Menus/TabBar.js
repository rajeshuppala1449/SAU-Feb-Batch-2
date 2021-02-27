import React, { useState } from 'react';
import { View, Text, StyleSheet, Dimensions } from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import Tab from './Tab';
import AllColors from '../../assets/AllColors';

const { width } = Dimensions.get('screen');
const TabBar = ({ state, navigation }) => {
    const [selected, setSelected] = useState('Popular');
    const { routes } = state;
    const renderStyle = (currentTab) => (currentTab === selected ? {
        text: { color: AllColors.red, fontSize: 17 }, container: {
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center',
            padding: 5,
            backgroundColor: AllColors.tabBarBgColor,
            borderRadius: 20,
            margin: 2,
            padding: 5
        }
    } : {
            text: { color: AllColors.red }, container: {
                flex: 1,
                alignItems: 'center',
                justifyContent: 'center',
                padding: 5,
            }
        });
    const handlePress = (activeTab, index) => {
        if (state.index != index) {
            navigation.navigate(activeTab, { type: activeTab });
            setSelected(activeTab)
        }

    }
    return (
        <View style={styles.wrapper}>
            <View style={styles.container}>
                {routes.map((route, index) => (
                    <Tab
                        tab={route}
                        // icon={}
                        onPress={() => handlePress(route.name, index)}
                        style={renderStyle(route.name)}
                        key={route.key}
                    />
                ))}
            </View>
        </View>

    )
}
const styles = StyleSheet.create({
    wrapper: {
        position: 'absolute',
        bottom: 20,
        width,
        height: 50,
        alignItems: 'center',
        justifyContent: 'center'
    },
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        backgroundColor: '#fff',
        width: 250,
        elevation: 10,
        padding: 5,
        borderRadius: 100
    }

})

export default TabBar;
