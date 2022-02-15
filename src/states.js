import { atom } from 'recoil';

export const api_key = '0e454ae__script_045_backend';
export const cartState = atom({
    key:'cart',
    default:{cart_total:0,cart_item:[]}
})

export const singlePr = atom({
    key:'singlePr',
    default:''
})