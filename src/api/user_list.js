import {request} from '../util/request'
// 查询用户列表
export function listUser() {
    return request({
      url: '/customer/customers',
      method: 'get',
    }) 
  }
  // 客户信息创建
  export function addUser(data) {
    return request({
      url: '/customer/customers',
      method: 'post',
      data:data
    }) 
  }

  // 客户追踪信息新增
  export function addUserTrack(data) {
    return request({
      url: '/customer/member/trace',
      method: 'post',
      data:data
    }) 
  }

  // 合同管理列表
  export function ContractList(data) {
    return request({
      url: '/customer/contract',
      method: 'get',
      data:data
    }) 
  }