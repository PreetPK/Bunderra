/*
 * @Author: qian tang
 * @Date: 2022-04-07 11:25:08
 * @LastEditTime: 2022-04-08 13:55:42
 * @LastEditors: qian tang
 * @Description:
 * @FilePath: \Bunderra-New\index.js
 * All rights reserved
 */

window.scrollTo({ top: 0, left: 0, behavior: 'smooth' })

const goTop = () => {
  document.body.scrollTop = 0 // For Safari
  document.documentElement.scrollTop = 0
}

const btn = document.getElementById('toTopBtn')
console.log(btn)
btn.addEventListener('click', goTop)

window.onscroll = function () {
  scrollFunction()
}

function scrollFunction() {
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    btn.style.display = 'block'
  } else {
    btn.style.display = 'none'
  }
}
