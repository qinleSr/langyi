import { request } from '../../util/request'
// 定向服务列表
export function directList() {
    return request({
        url: '/manager/direct/service',
        method: 'get',
    })
}

//  定向服务添加
export function addDirect(data) {
    return request({
        url: '/manager/direct/service',
        method: 'post',
        data: data
    })
}

// 定向服务更新
export function editDirect(data, id) {
    return request({
        url: `/manager/direct/service/${id}`,
        method: 'post',
        data: { data, id }
    })
}