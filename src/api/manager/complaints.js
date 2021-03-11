import { request } from "../../util/request";
// 客户申诉列表
export function complaintsList() {
    return request({
        url: "/manager/reports",
        method: "get",
    });
}

//  客户申诉添加
export function addComplaints(data) {
    return request({
        url: "/manager/report",
        method: "post",
        data: data,
    });
}

// 客户申诉更新
export function editComplaints(data, id) {
    return request({
        url: `/manager/report/${id}`,
        method: "post",
        data: { data, id },
    });
}
