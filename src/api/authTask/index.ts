import request from "@/utils/request";
const baseURL = "https://sfrz.wsbs.shxga.gov.cn";
/**
 * 获取certToken
 */
export function getCertToken(data) {
  return request({
    baseURL:
      process.env.NODE_ENV === "production"
        ? import.meta.env.VITE_DEMO_BASE_URL
        : baseURL,
    url: "/fama/demo/getcerttoken",
    method: "post",
    data,
  });
}

/**
 * 获取用户信息
 */
export function getCertTokenImg(data) {
  return request({
    baseURL:
      process.env.NODE_ENV === "production"
        ? import.meta.env.VITE_DEMO_BASE_URL
        : baseURL,
    url: "/fama/demo/getcerttokenimg",
    method: "post",
    data,
  });
}
