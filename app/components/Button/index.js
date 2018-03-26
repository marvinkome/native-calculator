

import React, { Component } from 'react';
import { View, Text, TouchableWithoutFeedback, Alert } from 'react-native';
import { style } from './style';
import { Content } from 'native-base';

export default class Button extends Component{
    handleNumberClick = (number) => {
        this.props.number_handler(number);
    }
    handleOperatorClick = (operator) => {
        this.props.operator_handler(operator)
    }
    handleClearClick = () => {
        this.props.clear_handler()
    }
    handleSolveClick = () => {
        this.props.solve_handler()
    }
    handleUndoClick = () => {
        this.props.undo_handler()
    }
    render(){
        return(
            <View style={{flex: 8}}>

                <View style={style.row}>
                    <TouchableWithoutFeedback onPress={this.handleClearClick}>
                        <View style={{...style.column, flex: 2}}>
                                <Text style={style.text}>clear</Text>
                        </View>
                    </TouchableWithoutFeedback>
                    
                    <TouchableWithoutFeedback onPress={this.handleUndoClick}>
                        <View style={{...style.column, ...style.operator, flex: 1}}>
                            <Text style={style.text}>C</Text>
                        </View>
                    </TouchableWithoutFeedback>

                    <TouchableWithoutFeedback onPress={() => this.handleOperatorClick('divide')}>
                        <View style={{...style.column, ...style.operator, flex: 1}}>
                            <Text style={style.text}>÷</Text>
                        </View>
                    </TouchableWithoutFeedback>
                </View>

                <View style={style.row}>
                    <TouchableWithoutFeedback onPress={() => this.handleNumberClick('7')}>
                        <View style={{...style.column, flex: 1}}>
                            <Text style={style.text}>7</Text>
                        </View>
                    </TouchableWithoutFeedback>

                    <TouchableWithoutFeedback onPress={() => this.handleNumberClick('8')}>
                        <View style={{...style.column, flex: 1}}>
                            <Text style={style.text}>8</Text>
                        </View>
                    </TouchableWithoutFeedback>

                    <TouchableWithoutFeedback onPress={() => this.handleNumberClick('9')}>
                        <View style={{...style.column, flex: 1}}>
                            <Text style={style.text}>9</Text>
                        </View>
                    </TouchableWithoutFeedback>

                    <TouchableWithoutFeedback onPress={() => this.handleOperatorClick('times')}>
                        <View style={{...style.column, ...style.operator, flex: 1}}>
                            <Text style={style.text}>x</Text>
                        </View>
                    </TouchableWithoutFeedback>
                </View>

                <View style={style.row}>
                    <TouchableWithoutFeedback onPress={() => this.handleNumberClick('6')}>
                        <View style={{...style.column, flex: 1}}>
                            <Text style={style.text}>6</Text>
                        </View>
                    </TouchableWithoutFeedback>

                    <TouchableWithoutFeedback onPress={() => this.handleNumberClick('5')}>
                        <View style={{...style.column, flex: 1}}>
                            <Text style={style.text}>5</Text>
                        </View>
                    </TouchableWithoutFeedback>

                    <TouchableWithoutFeedback onPress={() => this.handleNumberClick('4')}>
                        <View style={{...style.column, flex: 1}}>
                            <Text style={style.text}>4</Text>
                        </View>
                    </TouchableWithoutFeedback>

                    <TouchableWithoutFeedback onPress={() => this.handleOperatorClick('minus')}>
                        <View style={{...style.column, ...style.operator, flex: 1}}>
                            <Text style={style.text}>-</Text>
                        </View>
                    </TouchableWithoutFeedback>
                </View>

                <View style={style.row}>
                    <TouchableWithoutFeedback onPress={() => this.handleNumberClick('3')}>
                        <View style={{...style.column, flex: 1}}>
                            <Text style={style.text}>3</Text>
                        </View>
                    </TouchableWithoutFeedback>

                    <TouchableWithoutFeedback onPress={() => this.handleNumberClick('2')}>
                        <View style={{...style.column, flex: 1}}>
                            <Text style={style.text}>2</Text>
                        </View>
                    </TouchableWithoutFeedback>

                    <TouchableWithoutFeedback onPress={() => this.handleNumberClick('1')}>
                        <View style={{...style.column, flex: 1}}>
                            <Text style={style.text}>1</Text>
                        </View>
                    </TouchableWithoutFeedback>

                    <TouchableWithoutFeedback onPress={() => this.handleOperatorClick('add')}>
                        <View style={{...style.column, ...style.operator, flex: 1}}>
                            <Text style={style.text}>+</Text>
                        </View>
                    </TouchableWithoutFeedback>
                </View>

                <View style={style.row}>
                    <TouchableWithoutFeedback onPress={() => this.handleNumberClick('0')}>
                        <View style={{...style.column, flex: 1}}>
                            <Text style={style.text}>0</Text>
                        </View>
                    </TouchableWithoutFeedback>

                    <TouchableWithoutFeedback onPress={this.handleSolveClick}>
                        <View style={{...style.column, ...style.operator, flex: 3}}>
                            <Text style={style.text}>=</Text>
                        </View>
                    </TouchableWithoutFeedback>
                </View>

            </View>
        )
    }
}