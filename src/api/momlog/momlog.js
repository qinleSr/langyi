import {request} from '../../util/request'
 // 客户信息创建
 export function addMother(data) {
    return request({
      url: '/manager/mother/logs-items',
      method: 'post',
      data:data
    }) 
  }
