import data from './userjson.json'; 
import { delay } from 'roadhog-api-doc';
import mockjs from 'mockjs';
const proxy={
    "GET /api/feach/user":(req,res)=>{
        res.status(200).json({data})},
    "/api/feach/list":mockjs.mock({
        "data|1-20":[{"name":"@cname",'value|1-100': 50, 'type|0-2': 1,email:"@email"}]
    })
}
export default delay(proxy,3000)