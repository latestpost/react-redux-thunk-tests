import React from "react";
import Button from './Button';
import { addInput, multiplyInput } from '../actions/calculatorActions';
import { connect } from 'react-redux';

class CalculatorContainer extends React.Component {
  render() {
    return (
        <div>
            <Button onClick={this.props.handleAdd} buttonValue='Add 300'></Button><br />
            <Button onClick={this.props.handleMultiply} buttonValue='Multiply by 10'></Button><br />
            <div>{this.props.state.output}</div>
        </div>
    )
  }
} 
const mapStateToProps =  (state) => {
  return {state};
}

const mapDispatchToProps = (dispatch) => {
  return {
    handleAdd(e) {
      dispatch(addInput(300));
    },
    handleMultiply(e) {
      dispatch(multiplyInput(10));
    }
  }
};

const Calculator = connect(mapStateToProps, mapDispatchToProps)(CalculatorContainer);
export default Calculator;