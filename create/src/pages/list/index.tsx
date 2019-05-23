import React from 'react'
import {connect} from 'dva'
const List=(props)=>{
    let {list,dispatch}=props;
    console.log(list);
    let data='';
    if(list.isLoading){
        data="loading";
    }else if(list.error){
        data=list.error
    }else if(list.userList){
        console.log(list.userList)
        data=list.userList.map((item,index)=>(
            <div key={index}>
                姓名：{item.name}
                email:{item.email}
                年龄：{item.value}
                性别：{item.type==1?"男":"女"}
            </div>
        ))
    }else{
        data="暂无数据....  "
    }
    return (
        <div>
            <h3>用户列表</h3>
            <button onClick={()=>dispatch({type:"list/feach"})}>点击获取用户</button>
            {data}
        </div>
    )
}
const mapStateToProps=state=>({
    list:state.list
})
export default connect(mapStateToProps)(List);