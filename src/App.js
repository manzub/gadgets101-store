/* eslint-disable eqeqeq */
/* eslint-disable no-unused-vars */
// import axios from 'axios';
import $ from 'jquery';
import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import { useRecoilState } from 'recoil';
import Home from './pages/Home';
import Shop from './pages/Shop';
import Single from './pages/Single';
import {api_key, filters} from './states';

const url = window.location.protocol+"//"+window.location.host+'/0e454ae__script_045_backend.min.php';

export default class APP extends React.Component{
  componentDidMount(){
    $.ajax({
      url:url,
      type:'POST',
      data:{api_key:api_key,req_option:'initApp'},
      success:(data) => {
        const {filter1,filter1_0} = data.data;
        sessionStorage.setItem('filter1',JSON.stringify(filter1))
        let filter1_0_arr = [];
        for (let i=1;i<filter1.length+1;i++) {
          let arr = []
          filter1_0.forEach(element => {
            if (parseInt(element.filter1)==i) {
              arr.push(element)
            }
          });
          filter1_0_arr.push(arr)
        }
        sessionStorage.setItem('filter1_0',JSON.stringify(filter1_0_arr))
      }
    })
    $.ajax({
        url:url,
        type:'POST',
        data:{api_key:api_key,req_option:'allProducts'},
        success:function(result) {
            sessionStorage.setItem('allProducts',JSON.stringify(result.data))
        }
    })
  }
  render(){
    return(<Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/shop" component={Shop} />
      <Route exact path="/single" component={Single} />
      <Route exact path="/home" render={()=><Redirect to="/" />} />
    </Switch>)
  }
}