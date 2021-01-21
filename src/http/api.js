import request from "./request";

//封装业务的各种接口

/**
 * 获取轮播图
 */

export function banner() {
  return request({
    url: "/api/app/banner",
    method: "get"
  });
}
//名师列表
export function tearchList() {
  return request({
    url: "/api/app/recommend/appIndex",
    method: "get"
  });
}


//登录接口

export function login(data) {
  return request({
    url: "/api/app/login",
    method: "post",
    data

  })
}

// 验证码登录
export function smsCode(data) {
  return request({
    url: "/api/app/smsCode",
    method: "post",
    data

  })
}

// 个人信息接口

export function info(token) {
  return request({
    url: "/api/app/userInfo",
    method: "get",
    headers: {
      authorization: token
    }
  })
}

//特色课接口
export function oto(token, data) {
  return request({
    url: "/api/app/courseClassify",
    method: "get",
    headers: {
      authorization: token
    },
    data

  })
}



//特色课

export function courseBasis(params) {
  let token = localStorage.getItem("token")

  return request({
    url: '/api/app/courseBasis?',
    method: "get",
    headers: {
      Authorization: token
    },
    params
  })
}



// 老师详情、


export function teacher(id) {
  let token = localStorage.getItem("token")
  return request({
    url: `/api/app/teacher/${id}`,
    headers: {
      Authorization: token
    },
    method: "get",



  })
}
//讲师信息

export function teacherinfo(id) {
  let token = localStorage.getItem("token")
  return request({
    url: `/api/app/teacher/info/${id}`,
    headers: {
      Authorization: token
    },
    method: "get",





  })
}

//主讲课程
//主讲课程
export function mainCourse(data) {

  return request({
    url: `/api/app/teacher/mainCourse`,
    method: "post",
    data




  })
}


export function cart() {

  return request({
    url: `/api/app/courseClassify`,
    method: "get",

  })
}




//评价接口






export function comment(data) {
  let token = localStorage.getItem("token")
  return request({
    url: `/api/app/teacher/comment`,
    method: "post",
    headers: {
      Authorization: token
    },
    data
  })
}



//课程详情接口

//头部

export function courseInfo(id) {
  let token = localStorage.getItem("token")
  return request({
    url: `/api/app/courseInfo/basis_id=${id}`,
    method: "get",
    headers: {
      Authorization: token
    },
  })
}

// //课程大纲

export function courseChapter(data) {

  return request({
    url: `/api/app/courseChapter`,
    method: "post",
    data



  })
}


// 评论


export function courseComment(data) {

  return request({
    url: `/api/app/courseComment`,
    method: "post",
    data,

  })
}

//关注
export function flag(id) {
  let token = localStorage.getItem("token")

  return request({
    url: `/api/app/teacher/collect/${id}`,
    headers: {
      Authorization: token
    },
    method: "get",
  })
}

// 关注列表
export function collect(params) {
  let token = localStorage.getItem("token")

  return request({
    url: `/api/app/collect`,
    headers: {
      Authorization: token
    },
    method: "get",
    params
  })
}

// 取消关注
export function cancel(id) {
  let token = localStorage.getItem("token")

  return request({
    url: `/api/app/collect/cancel/${id}/2`,
    headers: {
      Authorization: token
    },
    method: "put",

  })
}

// 点击收藏


export function collectme(data) {
  let token = localStorage.getItem("token")

  return request({
    url: `/api/app/collect`,
    headers: {
      Authorization: token
    },
    method: "post",
    data
  })
}

// 取消收藏
export function cancelme(id) {
  let token = localStorage.getItem("token")

  return request({
    url: `/api/app/collect/cancel/${id}/1`,
    headers: {
      Authorization: token
    },
    method: "put",

  })
}


//立即报名



export function downOrder(data) {
  let token = localStorage.getItem("token")

  return request({
    url: `/api/app/order/downOrder`,
    headers: {
      Authorization: token
    },

    method: "post",
    data

  })
}

//花钱的报名


export function shopInfo(data) {
  let token = localStorage.getItem("token")

  return request({
    url: `/api/app/order/shopInfo`,
    headers: {
      Authorization: token
    },

    method: "post",
    data

  })
}

// 视频前面的页面

export function myStudy(id) {
  let token = localStorage.getItem("token")

  return request({
    url: `/api/app/myStudy/course/${id}`,
    headers: {
      Authorization: token
    },

    method: "get",
  

  })
}
 

// 视频TOKEN


export function video(videotoken) {
  let token = localStorage.getItem("token")
  console.log(videotoken)
  return request({
    url: `/api/app/getPlayToken/video_id=${videotoken.video_id}/course_id=${videotoken.course_id}`,
    headers: {
      Authorization: token
    },

    method: "get",
  

  })
}

//上传头像


export function img(data) {
  let token = localStorage.getItem("token")

  return request({
    url: `/api/app/public/img`,
    headers: {
      Authorization: token
    },

    method: "post",
    data

  })
}

// 设置头像
export function getimg(data) {
  let token = localStorage.getItem("token")

  return request({
    url: `/api/app/user`,
    headers: {
      Authorization: token
    },
    method: "put",
    data
  })
}


// 预约课程



export function invite(data) {
  let token = localStorage.getItem("token")

  return request({
    url: `/api/app/teacher/invite`,
    headers: {
      Authorization: token
    },

    method: "post",
    data

  })
}


// 搜索



export function search(params) {

  let token = localStorage.getItem("token")
  return request({
    url: `/api/app/courseBasis`,
    headers: {
      Authorization: token
    },

    method: "get",
    params

  })
}


//题库选择分类



export function classify() {
  let token = localStorage.getItem("token")

  return request({
    url: `/api/app/wap/classify`,
    headers: {
      Authorization: token
    },

    method: "get",
  

  })
}

// 题库

export function quesBank(id) {
  let token = localStorage.getItem("token")

  return request({
    url: `/api/app/wap/quesBank/${id}`,
    headers: {
      Authorization: token
    },

    method: "get",
  

  })
}



// 套卷练习分类接口

export function paper_package() {
  let token = localStorage.getItem("token")

  return request({
    url: `/api/app/exam/classify`,
    headers: {
      Authorization: token
    },

    method: "get",
  

  })
}



//t题库练习



export function examPoint(item) {
  let token = localStorage.getItem("token")
  console.log(item)
  return request({
    url: `/api/app/examPoint/${item.classify_id}/${item.id}`,
    headers: {
      Authorization: token
    },

    method: "get",
  

  })
}




export function ques(id) {
  let token = localStorage.getItem("token")

  return request({
    url: `/api/app/examPoint/questions/${id}/15`,
    headers: {
      Authorization: token
    },
    method: "get",
  

  })
}





export function point(id) {
  let token = localStorage.getItem("token")

  return request({
    url: `/api/app/point/info/${id}`,
    headers: {
      Authorization: token
    },

    method: "get",
  

  })
}


export function collec(data) {
  let token = localStorage.getItem("token")

  return request({
    url: `/api/app/collect`,
    headers: {
      Authorization: token
    },

    method: "post",
    data
  

  })
}