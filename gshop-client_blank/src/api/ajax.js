
//发送ajax请求

import axios from 'axios'

export default function ajax(url,data={},methods = 'GET') {

  return new Promise((resolve,reject)=>{
    let promise
    if(methods === 'GET'){
      let queryStr = ''
      Object.keys(data).forEach(key =>{
        const value = data[key]
        queryStr += `${key}=${value}&`
      })
      if(queryStr !== ''){
        queryStr = queryStr.substring(0,queryStr.length-1)
        url += '?'+queryStr
      }
      promise = axios.get(url)
    }else{
      promise = axios.post(url,data)
    }
    promise
      .then(response=>{
        //取到的是返回来的包括头等一系列数组，只需要包含code的data对象
        resolve(response.data)
        //console.log(response.data)
      })
      .catch(error=>{
        reject(error)
      })
  })
}
