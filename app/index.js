import React from 'react';
import {
  AppRegistry,
  Text,
  Image,
  StyleSheet
} from 'react-native';
import { StackNavigator, TabNavigator } from 'react-navigation';

class HomeActivity extends React.Component {
  static navigationOptions = {
    tabBarLabel: 'Check PNR',
    // Note: By default the icon is only shown on iOS. Search the showIcon option below.
    tabBarIcon: ({ tintColor }) => (
      <Image
        source={require('./img/ic_train_black_24dp.png')}
        style={[styles.icon, {tintColor: tintColor}]}
      />
    ),
  };
  render() {
    return <Text>List of all contacts</Text>;
  }
}

class HistoryActivity extends React.Component {
  static navigationOptions = {
    tabBarLabel: 'History',
    // Note: By default the icon is only shown on iOS. Search the showIcon option below.
    tabBarIcon: ({ tintColor }) => (
      <Image
        source={require('./img/ic_history_black_24dp.png')}
        style={[styles.icon, {tintColor: tintColor}]}
      />
    ),
  };
  render() {
    return (
      <Text>List of all history</Text>
    );
  }
}

const MainNavigator = TabNavigator({
  CheckPNR : { screen: HomeActivity },
  History : { screen: HistoryActivity },
},
 {tabBarOptions: {
  activeTintColor: '#FFFFFF',
  indicatorStyle:{
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

const styles = StyleSheet.create({
  icon: {
    width: 26,
    height: 26,
  },
});

AppRegistry.registerComponent('PNR_Status', () => PNR_Status);
