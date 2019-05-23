import React from 'react';
import {connect} from 'dva'
function User(props){
  let {user,dispatch}=props;
  let data='';
  if(user.isLoading){
      data="loading"
  }else if(user.error){
      data=user.error
  }else if(user.data){
      data=user.data
  }
  return (
        <div>
            <h3>Uesr组件</h3>
            <button onClick={()=>{dispatch({type:"user/feach"})}}>点击获取邮箱</button>
            <p>{data}</p>
        </div>
    )
}

  const mapStateToProps=(state)=>{
    return {
      user:state.user
    }
  }
  
  export default connect(mapStateToProps)(User)