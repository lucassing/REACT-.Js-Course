import {endpoint} from "../Config/config.js"
export function getProducts(){
    return fetch(endpoint+"products/")
    .then(res=>res.json())
}
export function getProduct(id){
    return fetch(endpoint+"products/"+id)
.then(res=>res.json())
}
