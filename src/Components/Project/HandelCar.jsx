import React , { useState }from 'react'
import './style1.css'
function HandelCar() {
    const intailNum = 0;
    const [counter, setCounter] = useState(intailNum)
    const HandelDecrement=()=>{
        if(counter > 0){
            setCounter((counter)=>counter - 1)
        }else{
            return 0;
        }
    }
    return (
        <div className="btns-wrapper">
            <button onClick={() => setCounter((counter) => counter + 1)}> + </button>
            <span>{counter}</span>
            <button onClick={HandelDecrement}> - </button>
        </div>
    )
}
export default HandelCar;