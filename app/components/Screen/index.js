/**
 * ./app/components/App
 */

import React, { Component } from 'react';
import { Container, Header, Right, Button, Icon, StyleProvider, Text } from 'native-base';
import { View } from 'react-native';
import { style } from './style';

export default class Screen extends Component{
    render(){
        return (
            <View style={{flex: 2}}>
                <Header style={style.header} androidStatusBarColor={style.statusBar}>
                    <Right hasText>
                        <Text style={style.text}>
                            {this.props.number.length == 0 ? '0' : this.props.number}
                      </Text>
                    </Right>
                </Header>
            </View>
        )
    }
}
