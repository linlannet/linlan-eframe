import request from '@/utils/request'
export default {
    
    //通过传参获取路径get
    getUrlEntry(params, url) {
        return request({
            url: url,
            method: 'get',
            params: params
        })
    },
    //通过传参获取路径post
    postUrlOp(data, url) {
        return request({
            url: url,
            method: 'post',
            data: data
        })
    },
}
