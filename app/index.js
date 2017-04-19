import React from 'react';
import {
    AppRegistry,
    Text,
    Image,
    StyleSheet
} from 'react-native';
import { StackNavigator, TabNavigator } from 'react-navigation';
import HomeActivity from "./HomeActivity";
import HistoryActivity from "./HistoryActivity";

const MainNavigator = TabNavigator({
    CheckPNR: { screen: HomeActivity },
    History: { screen: HistoryActivity },
},
    {
        tabBarOptions: {
            activeTintColor: '#FFFFFF',
            inactiveTintColor: '#FFB6AF',
            indicatorStyle: {
                backgroundColor: '#FFFFFF'
            },
            labelStyle: {
                fontSize: 12,
                fontWeight: "bold"
            },
            style: {
                backgroundColor: '#D42614',
            },
        }
    }
);

MainNavigator.navigationOptions = {
    title: 'PNR Status',
};

const PNR_Status = StackNavigator({
    CheckPNR: { screen: MainNavigator }
});

AppRegistry.registerComponent('PNR_Status', () => PNR_Status);

const styles = StyleSheet.create({
    caption: {
        color : "red",
        fontFamily: "Proxima Nova"
    },
    icon: {
        width: 26,
        height: 26,
    },
});