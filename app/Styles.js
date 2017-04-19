import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

export default styles = StyleSheet.create({
    caption: {
        color: "red",
        fontFamily: "Proxima Nova"
    },
    centered: {
        alignItems: 'center',
    },
    fullwidth: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    bg_white: {
        backgroundColor: "#FFFFFF"
    },
    bold: {
        fontWeight: "bold"
    },
    bigText: {
        fontSize: 16,
    },
    icon: {
        width: 26,
        height: 26,
    },
});