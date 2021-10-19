import {request} from "./request";

export function getHomedata() {
    return request({
        url: '/home/multidata'   
    })
} 
// export function getHomedata2 .....