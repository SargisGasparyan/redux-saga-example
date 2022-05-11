import { useSelector,useDispatch } from 'react-redux';
import { increaseCount,decreaseCount,getLatestNews } from './redux/actions/actionCreator';
import React from 'react';
import './App.css';


function App() {
  const store = useSelector(store=>store.Counter.count)
  const dispatch = useDispatch()
  const [count,setCount] = React.useState(0)
  const handleDecrease=()=>{
    //setCount(prev=>prev-1)
    dispatch(increaseCount())
  }
  const handleIncrease=()=>{
    //setCount(prev=>prev+1)
    dispatch(decreaseCount())
  }
  const handleNews=()=>{
    //setCount(prev=>prev+1)
    dispatch(getLatestNews())
  }
  return (
    <div className="App">
    <button onClick={handleIncrease}>+1</button>
    <button onClick={handleDecrease}>-1</button>
    <button onClick={handleNews}>Get news</button>
    <h1>{JSON.stringify(store)}</h1>
    </div>
  );
}

export default App;
