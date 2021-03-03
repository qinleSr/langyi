import {request} from '../util/request'
 // 客户信息创建
 export function addManage(data) {
    return request({
      url: '/customer/contract-product',
      method: 'post',
      data:data
    }) 
  }
//   退签管理 创建
export function addSign(data){
    return request({
        url:'/customer/contract-refund/request',
        method:'post',
        data:data
    })
}