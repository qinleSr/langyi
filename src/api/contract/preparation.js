import { request } from '../../util/request'
// 入住通知
export function addPreparation(data) {
    return request({
        url: `/room/indoor/ready?id=100&car_waiter=asd&room_checker=asd `,
        method: 'post',
        data: {
            data
        }
    })
}

//入住办理新增
export function addInHandle(form) {
    return request({
        url: `/room/indoor/checkout`,
        method: 'post',
        data: form

    })
}
