/*
 * @Author: Damom
 * @Date: 2020-09-12 10:17:33
 * @LastEditors: Damom
 * @LastEditTime: 2020-09-12 10:24:54
 * @Description: file content
 */

import { APIHOST } from './config'
import { paramsToUrl } from './index'
class HTTP {

    static request(config) {
        let token = wx.getStorageSync('token')
        let header = {
            'Content-Type': 'application/json;charset=UTF-8'
        }
        if (!config.method) config.method = 'GET'
        if (token) header['token'] = token
        if (config.isForm) header['Content-Type'] = 'application/x-www-form-urlencoded;charset=UTF-8'

        return new Promise((resolve,reject)=>{
            wx.showNavigationBarLoading();
            wx.onNetworkStatusChange((result) => {
                !result.isConnected && wx.showToast({
                  title: '请先检查您的网络是否正常！',
                })
            
            })
            wx.request({
                url: `${APIHOST}${config.url}`,
                method:config.method,
                data:config.data,
                header:config.header,
                success:(response) =>{
                    let code = response.statusCode.toString()
                    // 路由历史
                    let routeHistory = getCurrentPages();
                    let routeLength = routeHistory.length;
                    let { route, opitons:params } = routeHistory[length-1] 
                    let paramsStr = paramsToUrl(opitons)
                    if(code.startsWith('2')){
                        let requestUrl = config.url;
                        let {data:res,code:status,message:msg} = response 
                        switch(status) {
                            case '400'||'500':
                                wx.showToast({
                                  title: msg,
                                })
                                reject()
                                break;
                     
                            default:
                                resolve(res)
                        }
                    }
                    else{
                        reject()
                    }
                }
            })
        })
    }
}