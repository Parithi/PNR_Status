import React from 'react';
import {View,Text,Image,StyleSheet} from 'react-native';
import Styles from "./Styles";

const TITLE = "History";

export default class HistoryActivity extends React.Component {
    static navigationOptions = {
        tabBarLabel: TITLE,
        tabBarIcon: ({ tintColor }) => (
            <Image
                source={require('./img/ic_history_black_24dp.png')}
                style={[Styles.icon, { tintColor: tintColor }]}
            />
        ),
    };
    render() {
        return (
            <Text>List of all history</Text>
        );
    }
}