import { request } from '../../util/request'
// 人员列表
export function employeeList() {
    return request({
        url: `/product/employee/show`,
        method: 'get',
    })
}
// 人员新增
export function addEmployee() {
    return request({
        url: `/product/employee`,
        method: 'post',
    })
}
// 手工记录
export function manualLog() {
    return request({
        url: `/product/manual-log`,
        method: 'get',
    })
}
// 业绩记录
export function resultsLog() {
    return request({
        url: `/product/results-log`,
        method: 'get',
    })
}
// 部门职位
export function sectorJob() {
    return request({
        url: `/product/sector-job/${id}`,
        method: 'get',
    })
}
