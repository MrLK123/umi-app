import React from 'react';
import {connect} from 'dva'
import router from 'umi/router'
import Link from 'umi/link'
  interface Props {
    count: Number;
    dispatch:Function;
}
function Counter(props){
    let {count,dispatch}=props 
    return (
        <div>
          <button onClick={()=>{
            router.push('/')
          }}>回首页</button>
          <h3>count页面</h3>
          <Link to="/">link to 首页</Link>
          <hr/>
          <Link to="/user">link to User</Link>
          <hr/>
          <Link to="/async">link to async</Link>
        <div>{count}</div>
        <button onClick={()=>dispatch({type:"counter/add"})}>+</button><button onClick={()=>dispatch({type:"counter/sub"})}>-</button>
        </div>
    )
}
interface State {
  counter: {
    count:Number;
  };
}
const mapStateToProps=(state)=>{
  return {
    count:state.counter.count
  }
}

export default connect(mapStateToProps)(Counter)