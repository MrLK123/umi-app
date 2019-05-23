import axios from 'axios'
export default {
    state:{
        userList:null,
        error:null,
        isLoading:false
    },
    reducers:{
        "feach/start"(state,action){
            return {
                userList:null,
                error:null,
                isLoading:!state.isLoading
            }
        },
        "feach/success"(state,action){
            return {
                userList:action.data,
                error:null,
                isLoading:false
            }
        },
        "feach/error"(state,action){
            return {
                userList:null,
                error:null,
                isLoading:action.data
            }
        }
    },
    effects:{
        *feach({payload},{put,call}){
            yield put({type:"feach/start"});
            try{
                const data=yield call(axios.get,'/api/feach/list')
                
                yield put({type:"feach/success",data:data.data.data})
            }catch(e){
                yield put({type:"feach/error",data:e.message})
            }
        }
    }
}