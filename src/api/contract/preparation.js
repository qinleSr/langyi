import { request } from "../../util/request";
// 入住通知
export function addPreparation(data) {
    return request({
        url: `/room/indoor/ready?id=100&car_waiter=asd&room_checker=asd `,
        method: "post",
        data: {
            data,
        },
    });
}

//入住办理列表
export function inHandleList() {
    return request({
        url: `/room/indoor/check_in`,
        method: "get",
    });
}

//入住办理新增
export function addInHandle(form) {
    return request({
        url: `/room/indoor/checkout`,
        method: "post",
        data: form,
    });
}

//出所服务列表
export function outInHandleList() {
    return request({
        url: `/room/outdoor`,
        method: "get",
    });
}

//客房检查列表
export function checkroomList() {
    return request({
        url: `/room/outdoor-checkout`,
        method: "get",
    });
}
// 维护跟踪列表
export function outdoorList() {
    return request({
        url: `/room/outdoor-trace/1`,
        method: "get",
    });
}
