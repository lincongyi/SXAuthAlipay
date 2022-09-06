import request from "@/utils/request";
import { loadEnv } from "@/utils/index";

const { VITE_DEMO_BASE_URL } = loadEnv();

interface IResponse extends Promise<any> {
  retCode?: number;
  retMessage?: string;
}

/**
 * 获取accessToken
 */
interface IGetAccessTokenParams {
  clientId: string;
  clientSecret: string;
}
export function getAccessToken(params: IGetAccessTokenParams): IResponse {
  return request({
    baseURL: VITE_DEMO_BASE_URL,
    url: "/getaccesstoken",
    method: "get",
    params,
  });
}

/**
 * 获取certToken
 */
export function getCertToken(data: object): IResponse {
  return request({
    baseURL: VITE_DEMO_BASE_URL,
    url: "/authreq",
    method: "post",
    data,
  });
}
