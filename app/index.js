import React from 'react';
import {
    AppRegistry,
    Text,
    Image,
    StyleSheet
} from 'react-native';
import { StackNavigator, TabNavigator } from 'react-navigation';
import PNRActivity from "./PNRActivity";
import HistoryActivity from "./HistoryActivity";
import DetailActivity from "./DetailActivity";

const MainNavigator = TabNavigator({
    CheckPNR: { screen: PNRActivity },
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
    CheckPNR: { screen: MainNavigator },
    Detail: {
        path: 'number/:number',
        screen: DetailActivity,
    }
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