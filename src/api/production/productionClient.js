import { request } from '../../util/request'
// 产康客户管理列表
export function productionClientList(size, page, name, mobile, channel, end_at, start_at, user_type) {
    return request({
        url: '/index.php/api/products/list',
        method: 'post',
        data: { size, page, name, mobile, channel, end_at, start_at, user_type }
    })
}
