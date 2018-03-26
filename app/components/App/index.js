/**
 * ./app/components/App
 */

import React, { Component } from 'react';
import Screen from '../Screen/';
import Button from '../Button';
import { View, Alert, ToastAndroid } from 'react-native';
import { Container } from 'native-base';

export default class Main extends Component{
    constructor(props){
        super(props);
        this.state = {
            number: '',
            tmp_num: '',
            operator: '',
            expression: '',
            maxlength: false
        }
    }
    handle_number = (number) => {
        if (this.state.number.length < 12){
            this.setState({
                number: this.state.number + number,
                expression: this.state.expression + number
            });
        } else {
            this.setState({
                maxlength: true
            });
            ToastAndroid.show('Max lenght reached', ToastAndroid.SHORT)
        }
    }
    handle_operator = (operator) => {
        if (operator == 'divide'){
            this.setState({
                tmp_num: this.state.number,
                expression: this.state.expression + '÷',
                number: '',
                operator
            });
        } else if ( operator == 'times'){
            this.setState({
                tmp_num: this.state.number,
                expression: this.state.expression + 'x',
                number: '',
                operator
            });
        } else if (operator == 'minus'){
            this.setState({
                tmp_num: this.state.number,
                expression: this.state.expression + '-',
                number: '',
                operator
            });
        } else if( operator == 'add'){
            this.setState({
                tmp_num: this.state.number,
                expression: this.state.expression + '+',
                number: '',
                operator
            });
        }
    }
    handle_clear = () => {
        this.setState({
            number: '',
            tmp_num: '',
            operator: '',
            expression: '',
            maxlength: false
        })
    }
    handle_undo = () => { 
        const number_state = this.state.number.substring(0, this.state.number.length - 1)
        const expression_state = this.state.expression.substring(0, this.state.expression.length - 1)
        const operators = ['+','-','x','÷']
        if (operators.indexOf(this.state.expression.slice(-1)) !== -1){
            this.setState({
                expression: expression_state,
                operator: ''
            });
        } else {
            this.setState({
                number: number_state,
                expression: number_state
            });
        }
    }
    handle_solve = () => {
        if( this.state.operator == 'divide' ){
            let result = Number(this.state.tmp_num) / Number(this.state.number)
            result = String(result).length > 9 ? String(result.toExponential(6)) : String(result)
            this.setState({
                number: result,
                expression: result,
            });
        } else if ( this.state.operator == 'times' ){
            let result = Number(this.state.tmp_num) * Number(this.state.number)
            result = String(result).length > 9 ? String(result.toPrecision(6)) : String(result)
            this.setState({
                number: result,
                expression: result
            });
        } else if ( this.state.operator == 'minus' ){
            let result = Number(this.state.tmp_num) - Number(this.state.number)
            result = String(result)
            this.setState({
                number: result,
                expression: result
            });
        } else if ( this.state.operator == 'add' ){
            let result = Number(this.state.tmp_num) + Number(this.state.number)
            result = String(result)
            this.setState({
                number: result,
                expression: result
            });
        }
    }
    render(){
        return (
            <View style={{flex: 1}}>
                <Screen
                  number={this.state.expression}/>
                <Button 
                  number_handler={this.handle_number}
                  operator_handler={this.handle_operator}
                  clear_handler={this.handle_clear}
                  undo_handler={this.handle_undo}
                  solve_handler={this.handle_solve}/>
            </View>
        )
    }
}