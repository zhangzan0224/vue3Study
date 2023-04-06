/*
 * @Description: 用于音乐播放器的
 * @Version: 2.0
 * @Author: ZhangZan
 * @Date: 2023-03-04 22:50:07
 * @LastEditors:Zhangzan
 * @LastEditTime: 2023-03-05 17:23:18
 */
/**
 * 处理原始的歌词去处理每一条数据,返回的是歌曲的歌词的数组
 */

function parseLrc(){
  var songArr = []
  var tempArr =  song.split('\n')
  tempArr.forEach(item => {
    const tempObj = {
      time:parseTime(item.split(']')[0].substring(1)),
      word: item.split(']')[1]
    }
    songArr.push(tempObj)
  })
  return songArr
}
// 将时间格式化
/**
 * @description: 时间格式化函数
 * @param {*} time
 * @return {*}
 * @author: ZhangZan
 */
function parseTime(time){
  return +time.split(':')[0]*60 + +time.split(':')[1]
}
// 获取 dom 元素
const dom = {
  audio : document.querySelector('audio'),
  container : document.querySelector('.container'),
  ul : document.querySelector('.container ul')
}
const songArr =  parseLrc()
/**
 * 
 * @param {*} time 根据时间去获取激活的 index
 * @returns 激活的 index
 */
function getIndex(){
  var currTime = dom.audio.currentTime
  for(var i =0 ;i < songArr.length; i++){
    if(currTime < songArr[i].time){
      return i - 1
    }
  }
  // 当时间大于歌词的时间时间时,展示长度
  return songArr.length
}

// 将歌词添加到页面中
/**
 * @description: 
 * @return {*}
 * @author: ZhangZan
 */
function createHtml(){
  var frag = document.createDocumentFragment()
  for(let i = 0 ; i < songArr.length; i++){
    var li =   document.createElement('li')
    li.textContent = songArr[i].word
    frag.appendChild(li)
  }
  dom.ul.appendChild(frag)
}
createHtml()
// 计算偏移量
// ul 最大的高度
var containerHeight = dom.container.clientHeight; // 容器的告诉
var maxOffset = dom.ul.clientHeight - containerHeight; // 最大的偏移高度
var liHeight = dom.ul.children[0].clientHeight;


/**
 * @description: 
 * @return {*}
 * @author: ZhangZan
 */
function offsetH(){
  var index  = getIndex()
  var offsetHeight =   index * liHeight + liHeight / 2 -  containerHeight/ 2
  // o秒的时候处理
  if(offsetHeight < 0){
    offsetHeight = 0
  }
  if(offsetHeight > maxOffset){
    offsetHeight = maxOffset
  }
  // 首先取消其他的激活的
  var li = dom.ul.querySelector('.active')
  if(li){
    li.classList.remove('active')
  }
  // 设置激活
  li = dom.ul.children[index]
    if(li) {
      li.classList.add('active')
    }
    // 设置偏移
    dom.ul.style.transform = `translateY(-${offsetHeight}.px)`
}

dom.audio.addEventListener('timeupdate',(e)=>{
  // console.log(e.target.currentTime) // 当前时间
  // 根据当前时间去获取激活的歌词的index
  offsetH()
})
offsetH()

