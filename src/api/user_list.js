import { request } from '../util/request'
// 查询用户列表
export function listUser(data) {
  return request({
    url: `/customer/customers/show`,
    method: 'post',
    data: data
  })
}

// 客户信息创建
export function addUser(data) {
  return request({
    url: '/customer/customers',
    method: 'post',
    data: data
  })
}

// 客户信息更新
export function editUser(id) {
  return request({
    url: `/customer/customers/${id}`,
    method: 'post',
    data: id
  })
}

// 客户追踪信息新增
export function addUserTrack(data) {
  return request({
    url: '/customer/member/trace',
    method: 'post',
    data: data
  })
}

// 合同管理列表
export function ContractList(data) {
  return request({
    url: '/customer/contract',
    method: 'get',
    data: data
  })
}

// 孕期课程活动列表
export function pregnancyList() {
  return request({
    url: '/customer/belly/course',
    method: 'get'
  })
}

// 孕期课程活动创建
export function addPregnancy(form) {
  return request({
    url: '/customer/belly/course',
    method: 'post',
    data: form
  })
}

// 个性产康列表
export function individualityList() {
  return request({
    url: `/customer/belly/notify`,
    method: 'get'
  })
}

// 个性产康新增
export function addIndividuality(data) {
  return request({
    url: `/customer/belly/notify`,
    method: 'post',
    data: data
  })
}
// 孕期回访列表
export function customerList() {
  return request({
    url: `/customer/bellyreview`,
    method: 'get'
  })
}

// 孕期回访新增
export function addCustomer(form) {
  return request({
    url: `/customer/bellyreview`,
    method: 'post',
    data: form
  })
}