import React from 'react';
import {connect } from 'dva'
function Acount(props){
    let {count,dispatch}=props
    return (
        <div>
        <h3>异步加减法</h3>
        <p>{count}</p>
        <button onClick={()=>dispatch({type:"counter/asyncadd"})}>+</button>
        <button onClick={()=>dispatch({type:"counter/asyncsub"})}>-</button>
       </div>
    )
}
const mapStateToProps=state=>({
    count:state.counter.count
})
export default connect(mapStateToProps)(Acount)