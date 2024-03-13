import React from "react";
import { useDispatch, useSelector } from "react-redux"
import { decrease, increase, set_count } from "../redux/slices/counterSlice"


const Counter = () => {
  //import edilen aksiyonları(decrease,increase) çalıştımak için dispatch ile yap
  const dispatch=useDispatch();

  //stora abonelik gerçekleştir
  const state= useSelector((store)=>store.counterSlice);

  console.log(increase());

  return (
    <div className="d-flex gap-4 align-items-center justify-content-center vh-100">
      <button
      onClick={()=>dispatch(decrease())} 
      className="bg-danger rounded-3">Minus</button>
      <span className="fw-bold fs-2 ">{state.count}</span>
      <button
      onClick={()=>dispatch(increase())}
      className="bg-success rounded-3">Plus</button>
      <button 
      onClick={()=>dispatch(set_count(0))}
      className="bg-warning rounded-3"
      >Reset</button>

    </div>
  )
}

export default Counter
