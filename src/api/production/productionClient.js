import { request } from '../../util/request'
// 产康客户管理列表
export function productionClientList() {
    return request({
        url: '/product/customer/show',
        method: 'get',
        data: {}
    })
}

// 产康客户管理新增
export function addProductionClient(form) {
    return request({
        url: '/product/customer',
        method: 'post',
        data: form
    })
}

// 产康客户管理来电登记
export function registerProductionClient(form) {
    return request({
        url: '/product/customer',
        method: 'post',
        data: form
    })
}

// 产康客户管理到访登记
export function visitProductionClient(form) {
    return request({
        url: '/product/customer',
        method: 'post',
        data: form
    })
}

// 产康客户签单
export function productionSignBillBut(form,id) {
    return request({
        url: `/product/customer-signed-order/${id}`,
        method: 'post',
        data: form
    })
}

// 产康客户分类列表
export function productionClientTypeList() {
    return request({
        url: '/product/customer-type-list',
        method: 'get',
        data: {}
    })
}

// 回访列表
export function productReturnList() {
    return request({
        url: '/product/customer-review-list',
        method: 'get',
        data: {}
    })
}

// 回访新增
export function addProductReturn() {
    return request({
        url: '/product/customer-review',
        method: 'post',
        data: {}
    })
}