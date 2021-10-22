import axios from 'axios'

export function request(config){
    const instance = axios.create({
        baseURL: 'http://123.207.32.32:8000',
        timeout: 5000
    })
    instance.interceptors.response.use(res => {
        return res.data
    }, err => {
        console.log(err)
    })
    return instance(config)
}
// 老师的新接口
export function requestHome(config){
    const instance = axios.create({
        baseURL: 'http://152.136.185.210:7878/api/hy66',
        timeout: 5000
    })
    instance.interceptors.response.use(res => {
        return res.data
    }, err => {
        console.log(err)
    })
    return instance(config)
}