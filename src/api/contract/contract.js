import { request } from '../../util/request'
// 签约管理列表
export function contractList() {
    return request({
        url: '/contract-refund-pay',
        method: 'get',
    })
}

//   退签管理 创建
export function addSign(data) {
    return request({
        url: '/customer/contract-refund/request',
        method: 'post',
        data: data
    })
}