import {request,requestHome} from "./request";

export function getHomedata() {
    return request({
        url: '/home/multidata'   
    })
} 
// export function getHomedata2 .....
export function getHomeGoods(type,page) {
    return requestHome({
        url: '/home/data',
        params: {
            type,
            page
        }   
    })
} 