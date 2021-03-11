import { request } from "../../util/request";
// 月子菜单列表
export function confinementList() {
    return request({
        url: "/food/month-schedule",
        method: "get",
    });
}
// 客户营养评估列表
export function NutritionAssessmentList() {
    return request({
        url: "/food/health",
        method: "get",
    });
}

// 客户营养评估创建
export function addNutritionAssessment(contract_id = 1, state = "123") {
    return request({
        url: `/food/health?contract_id=${contract_id}&state=${state}`,
        method: "post",
        data: {
            contract_id,
            state,
        },
    });
}

// 客户营养评估更新
export function updateNutritionAssessment(contract_id, state, id) {
    return request({
        url: `/food/health/${id}`,
        method: "post",
        data: {
            contract_id,
            state,
            id,
        },
    });
}

// 饮食禁忌列表
export function dietaryTaboosList() {
    return request({
        url: "/food/forbiden",
        method: "get",
    });
}
