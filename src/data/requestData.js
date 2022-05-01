

//expected data format from api
import React from 'react';
import axios from 'axios';


export default function ok() {
  let ans = axios.get(`http://localhost:5000/api/customer/signIn/arti`)
      .then(res => {
        // console.log("res.data.data.incomingRequest ->", res.data.data.incomingRequest)
        return [res.data.data.incomingRequest];
      }).catch((e)=>{
        console.log(e);
      })
  return ans
}

  