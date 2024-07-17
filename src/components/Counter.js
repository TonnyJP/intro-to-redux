import classes from './Counter.module.css';
import { Component } from "react";
import { useSelector, useDispatch, connect } from "react-redux"
import { counterActions } from '../store';

const Counter = () => {

  const counter = useSelector(state => state.counter.counter);
  const showCounter = useSelector(state => state.counter.showCounter);
  const dispatch = useDispatch();
  const handleIncrement = () => {
    dispatch(counterActions.increment())
  }
  const handleDecrement = () => {
    dispatch(counterActions.decrement())
  }

  const handleIncreaseByFive = () => {
    dispatch(counterActions.increase(5))
  }

  const toggleCounterHandler = () => {
    dispatch(counterActions.toggleCounter())
  };

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {showCounter && <div className={classes.value}>{counter}</div>}
      <div>
        <button onClick={handleDecrement}>Decrement</button>
        <button onClick={handleIncrement}>Increment</button>
        <button onClick={handleIncreaseByFive}>Increase by 5</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};


class CounterClass extends Component {
  handleIncrement = () => {
    this.props.increment()
  }
  handleDecrement = () => {
    this.props.decrement()
  }
  toggleCounterHandler = () => { };
  render() {
    return (
      <main className={classes.counter}>
        <h1>Redux Counter</h1>
        <div className={classes.value}>{this.state.counter}</div>
        <div>
          <button onClick={this.handleDecrement}>Decrement</button>
          <button onClick={this.handleIncrement}>Increment</button>
        </div>
        <button onClick={this.toggleCounterHandler}>Toggle Counter</button>
      </main>
    );
  }
}

const mapStateToProps = state => {
  return {
    counter: state.counter
  }
}

const mapDispatchToProps = dispatch => {
  return {
    increment: () => dispatch({ type: "increment" }),
    decrement: () => dispatch({ type: "decrement" })
  }
}

export const ConnectedCounterClass = connect(mapStateToProps, mapDispatchToProps)(CounterClass)
export default Counter;
