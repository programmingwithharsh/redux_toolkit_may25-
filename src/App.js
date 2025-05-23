import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement, incrementByAmount } from "./counterSlice";

function App() {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();
  debugger

  return <div>
    <h1>Counter: {count}</h1>
    <button onClick={() => dispatch(decrement())}>Decrement</button>
    <button onClick={() => dispatch(increment())}>Increment</button>
    <button onClick={() => dispatch(incrementByAmount(5))}>incrementByAmount +5</button>
  </div>
}

export default App;