import { request } from '../../util/request'
// 妈妈日志列表
export function motherList() {
    return request({
        url: '/manager/mother/logs-items',
        method: 'get',
    })
}
//   妈妈日志添加
export function addMother(data) {
    return request({
        url: '/manager/mother/logs-items',
        method: 'post',
        data: data
    })
}
//   妈妈日志更新
export function editMother(data,id) {
    return request({
        url: `/manager/mother/logs-items/${id}`,
        method: 'post',
        data: data
    })
}