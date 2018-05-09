/**
 * ./app/components/App
 */

import React, { Component } from 'react';
import { Container, Header, Right, Button, Icon, StyleProvider, Text } from 'native-base';
import { View, Dimensions } from 'react-native';
import { style } from './style';

export default class Screen extends Component{
    constructor(props){
        super(props);
        this.state = {
            window: Dimensions.get('window')
        }
    }
    dimhandler = dimensions => this.setState(dimensions);
    componentWillMount(){
        Dimensions.addEventListener('change', this.dimhandler)
    }
    componentWillUnmount(){
        Dimensions.removeEventListener('change', this.dimhandler)
    }
    render(){
        const {width, height} = this.state.window;
        const component_height = height > width ? 106 : 58;
        const comp_style = style(component_height);

        return (
            <View style={{flex: 2}}>
                <Header style={comp_style.header} androidStatusBarColor={comp_style.statusBar}>
                    <Right hasText>
                        <Text style={comp_style.text}>
                            {this.props.number.length == 0 ? '0' : this.props.number}
                      </Text>
                    </Right>
                </Header>
            </View>
        )
    }
}
