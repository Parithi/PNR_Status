import React from 'react';
import {View,Text,Image,StyleSheet} from 'react-native';
import Styles from "./Styles";

const TITLE = "Check PNR";

export default class HomeActivity extends React.Component {
    static navigationOptions = {
        tabBarLabel: TITLE,
        tabBarIcon: ({ tintColor }) => (
            <Image
                source={require('./img/ic_train_black_24dp.png')}
                style={[Styles.icon, { tintColor: tintColor }]}
            />
        ),
    };
    render() {
        return (
        <View>
            <Text style={Styles.caption}>List of all contacts</Text>
        </View>
        );
    }
}