import React from 'react';
import { View, Text, Image, StyleSheet, Alert } from 'react-native';
import Styles from "./Styles";

const TITLE = "PNR Status of ";

export default class DetailActivity extends React.Component {

    // Setting title
    static navigationOptions = ({ navigation }) => ({
        title: TITLE + `${navigation.state.params.number}`,
        tabBarIcon: ({ tintColor }) => (
            <Image
                source={require('./img/ic_history_black_24dp.png')}
                style={[Styles.icon, { tintColor: tintColor }]}
            />
        ),
    });

    //http://api.railwayapi.com/pnr_status/pnr/4130796395/apikey/bpc2zsje/
    constructor(props) {
        super(props);
        this.state = {
            pnrData: ''
        }
        fetch('http://api.railwayapi.com/pnr_status/pnr/4130796395/apikey/uq9br2pd/')
            .then((response) => response.json())
            .then((responseJson) => {
                this.setState({ pnrData: responseJson });
            })
            .catch((error) => {
                console.error(error);
            });
    }

    render() {
        return (
            <Text>{JSON.stringify(this.state.pnrData)}</Text>
        );
    }
}