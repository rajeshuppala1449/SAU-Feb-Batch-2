import React from 'react';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import TabBar from './TabBar';
import TopRated from './TopRated';
import Popular from './Popular';
import Upcoming from './Upcoming';
import LoadingDetails from './LoadingDetails';
import Details from '../Details'
const Tab = createBottomTabNavigator();
const TabNavigator = () => {
    return (
        <Tab.Navigator tabBar={(props) => <TabBar {...props} />}>
            <Tab.Screen name='Popular' component={Popular} />
            <Tab.Screen name='Upcoming' component={Upcoming} />
            <Tab.Screen name='Latest' component={TopRated} />
            <Tab.Screen name='Details' component={LoadingDetails} />
        </Tab.Navigator>
    )
}

export default TabNavigator;