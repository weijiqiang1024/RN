
import { fork,call, put, take, select } from 'redux-saga/effects';
import axios from 'axios';
import Qs from 'qs'
const config={
    //请求的接口，在请求的时候，如axios.get(url,config);这里的url会覆盖掉config中的url
    //url: '/user',

    // 请求方法同上
    //method: 'get', // default
    // 基础url前缀
    baseURL: 'http://192.168.10.139:3300',


    transformRequest: [function (data) {
        // 这里可以在发送请求之前对请求数据做处理，比如form-data格式化等，这里可以使用开头引入的Qs（这个模块在安装axios的时候就已经安装了，不需要另外安装）
        data = Qs.stringify({});
        return data;
    }],

    transformResponse: [function (data) {
        // 这里提前处理返回的数据

        return data;
    }],

    // 请求头信息
    headers: {'X-Requested-With': 'XMLHttpRequest'},

    //parameter参数
    params: {
        ID: 12345
    },
    mode : 'cors' , //实现跨域
    //post参数，使用axios.post(url,{},config);如果没有额外的也必须要用一个空对象，否则会报错
    // data: {
    //     firstName: 'Fred'
    // },

    //设置超时时间
    timeout: 5000,
    //返回数据类型
    responseType: 'json', // default
    withCredentials:true


};
// var instance = axios.create({
//     baseURL: 'http://192.168.10.139'
// });
function* load() {
    try {
        debugger;
        axios.post('/sys/dic/listJson',{},config)
            .then(function(res){
                debugger;
                console.log(res);
            })
            .catch(function(error){
                debugger;
                if(error.response){
                    //请求已经发出，但是服务器响应返回的状态吗不在2xx的范围内
                    console.log(error.response.data);
                    console.log(error.response.status);
                    console.log(error.response.header);
                }else {
                    //一些错误是在设置请求的时候触发
                    debugger;
                    console.log('Error',error.message);
                }

            });
        // const result = yield call(fetch, UrlMap.loadData);
        //
        // yield put({
        //     type: LOAD_DATA_SUCCESS,
        //     payload: result,
        // });
    } catch (e) {

    }
}
export default function* rootSaga() {
    while (true) {
        yield take('LOGIN_SUBMIT');
        debugger;
        yield take('DECREASE');
        yield fork(load);
    }
}