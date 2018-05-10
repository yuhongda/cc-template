import Rx from 'rxjs/Rx'

// var host = __ENV == 'pro' ? 'http://aiscm.jd.com' : 'http://192.168.123.13:8082';
var host = __ENV == 'pro' ? 'http://aiscm.jd.com' : 'http://localhost:3008';

/**
 * 获取userinfo
 */
export function fetchUserinfo() {
    return Rx.Observable.fromPromise($.ajax({
        url: `${host}/api/getUserinfo`,
        dataType: 'json',
        type: 'get',
        cache: false
    }).promise())
}

/**
 * 获取系统菜单
 */
export function fetchSystemMenu() {
    return Rx.Observable.fromPromise($.ajax({
        url: `${host}/api/getSystemMenu`,
        dataType: 'json',
        type: 'get',
        cache: false
    }).promise())
}

/**
 * 登录
 */
export function signIn(params) {
    return Rx.Observable.fromPromise($.ajax({
        url: `${host}/api/signin`,
        data: params,
        dataType: 'json',
        type: 'post',
        cache: false
    }).promise())
}

/**
 * 获取部门
 */
export function fetchDept() {
    return Rx.Observable.fromPromise($.ajax({
        url: `${host}/api/getDept`,
        data: {},
        dataType: 'json',
        type: 'post',
        cache: false
    }).promise())
}

/**
 * 获取Page1数据
 */
export function fetchPage1Data(params) {
    return Rx.Observable.fromPromise($.ajax({
        url: `${host}/api/fetchPage1Data`,
        data: params || {},
        dataType: 'json',
        type: 'post',
        cache: false
    }).promise())
}

/**
 * 获取Page2数据
 */
export function fetchPage2Data(params) {
    return Rx.Observable.fromPromise($.ajax({
        url: `${host}/api/fetchPage2Data`,
        data: params || {},
        dataType: 'json',
        type: 'post',
        cache: false
    }).promise())
}

