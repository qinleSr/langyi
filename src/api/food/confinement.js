import { request } from '../../util/request'
// 月子菜单列表
export function confinementList() {
    return request({
        url: '/food/month-schedule',
        method: 'get',
    })
}
