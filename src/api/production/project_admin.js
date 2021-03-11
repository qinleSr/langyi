import { request } from '../../util/request'
// 产康客户预约消单
export function projectReserv(end_the_time, status, id) {
    return request({
        url: `/product/project-reserv/${id}`,
        method: 'post',
        data: { end_the_time, status }
    })
}

// 产康客户项目新增
export function addProject(form) {
    return request({
        url: `/product/project`,
        method: 'post',
        data: form
    })
}

// 产康客户项目列表
export function projectList() {
    return request({
        url: `/product/project/show`,
        method: 'get',
    })
}

// 产康客户预约新增
export function addProjectReserv(form) {
    return request({
        url: `/product/project-reserv-signed`,
        method: 'post',
        data: form
    })
}
// 产康客户预约列表
export function projectReservList() {
    return request({
        url: `/product/project-reserv-list`,
        method: 'get'
    })
}

// 产康客户项目类型
export function projectType() {
    return request({
        url: `/product/project-reserv/${id}`,
        method: 'get'
    })
}

// 产康客户项目预约
export function projectReserva() {
    return request({
        url: `/product/project-reserv/${id}`,
        method: 'post'
    })
}