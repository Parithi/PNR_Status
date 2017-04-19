import React from 'react';
import { View, Text, Image, StyleSheet, TextInput, Button, Alert } from 'react-native';
import Styles from "./Styles";

const TITLE = "Check PNR";

export default class PNRActivity extends React.Component {
    static navigationOptions = {
        tabBarLabel: TITLE,
        tabBarIcon: ({ tintColor }) => (
            <Image
                source={require('./img/ic_train_black_24dp.png')}
                style={[Styles.icon, { tintColor: tintColor }]}
            />
        ),
    };

    constructor(props) {
        super(props);
        this.state = { text: '' };
    }

    render() {
        onPressLearnMore = () => {
            if (this.state.text.trim() == "") {
                Alert.alert("Enter PNR","Please enter the PNR number");
            } else {
                this.props.navigation.navigate('Detail', { number: this.state.text })
            }
        };

        return (
            <View style={[Styles.fullwidth, Styles.bg_white, { padding: 16 }]}>
                <Text style={[Styles.caption, Styles.centered, Styles.bigText]}>Enter your PNR number below</Text>
                <TextInput style={[Styles.bg_white, { marginTop: 10, height: 50, alignSelf: 'stretch' }]} placeholder="PNR Number" keyboardType="numeric" onChangeText={(text) => this.setState({ text })} />
                <Button onPress={onPressLearnMore} title="Submit" color="#D42614" accessibilityLabel="Submit" />
            </View>
        );
    }
}