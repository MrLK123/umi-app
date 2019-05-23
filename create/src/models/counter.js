let delay =time=> new Promise(result=>setTimeout(result,time))
export default {
    state:{
        count:100
    },
    reducers:{
        "add"(state,action){
            return {
                count:state.count+1
            }
        },
        "sub"(state,action){
            return {
                count:state.count-1
            }
        }
    },
    effects:{
        *asyncadd({payload},{call,put}){
            yield call(delay,2000);
            yield put({type:"add"});
        },

        *asyncsub({payload},{call,put}){
            yield call(delay,2000);
            yield put({type:"sub"})
        }
    }
}