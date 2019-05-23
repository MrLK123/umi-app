import axios from 'axios'
export default {
    namespace:"user",
    state:{
        isLoading:false,
        error:null,
        data:null
    },
    reducers:{
        "feach/start"(state,action){
            return {
                isLoading:!state.isLoading,
                error:null,
                data:null
            }
        },
        "feach/error"(state,action){
            return {
                isLoading:false,
                error:action.data,
                data:null
            }
        },
        "feach/success"(state,action){
            return {
                isLoading:false,
                error:null,
                data:action.data
            }
        }
    },
    effects:{
        *feach({payload},{call,put}){
            yield put({type:"feach/start"});
            try{
                const data= yield axios.get('/api/feach/user');
               
                yield put({type:"feach/success",data:data.data.data[0].email})
            }catch(e){
                yield put({type:"feach/error",data:e.message})
            }
        }
    }
}