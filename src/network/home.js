import {request} from "./request";

export function getHomedata() {
    return request({
        url: '/home/multidata'   
    })
} 
// export function getHomedata2 .....
export function getHomeGoods(type,page) {
    return request({
        url: '/home/data',
        params: {
            type,
            page
        }   
    })
} 