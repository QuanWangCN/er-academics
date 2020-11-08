// ==UserScript==
// @name         旋转图片
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @include      https://pubmed.ncbi.nlm.nih.gov/?term=cancer&ac=no&user_filter=IF10-300&schema=none&sort=date&size=50
// @grant        none
// @require      https://cdn.jsdelivr.net/npm/jquery@3.4.1/dist/jquery.slim.min.js
// ==/UserScript==

(function () {
  "use strict";
  $("head").append(
    $(`
  <!-- CSS部分 -->
  <style>
  .ha-image {
    position: relative;
  }
  .mybutton {
    position: relative;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 130px;
    height: 50px;
    line-height: 90px;
    text-align: center;
    color: #fff;
    font-size: 12px;
    text-transform: uppercase;
    text-decoration: none;
    font-family: sans-serif;
    box-sizing: border-box;
    background: linear-gradient(90deg, #03a9f4, #f441a5, #ffeb3b, #03a9f4);
    background-size: 400%;
    border-radius: 60px;
    z-index: 1;}
  .ha-button {
      display: none;
      top: 0;
      left: 0;
      position: relative;
      z-index: 1;
  }
  .ha-image:hover>.ha-button  {
    display: inline-block;
  }
  </style>`)
  );
  /* 给图片增加一个父元素，方便操作 */
  let divApp = $(`
     <div class="ha-image"></div>
  `);
  /* 按钮部分 */
  let rotateButton = $(`
    <div class="ha-button">
      <button class="mybutton">旋转90度</button>
      <button class="mybutton">旋转180度</button>
      <button class="mybutton">旋转270度</button>
      <button class="mybutton">还原</button>
    </div>
  `);
  $("docsum-wrap").append(rotateButton);
  $(".mybutton").click(function () {
    let image = $(this).parent().parent().children("img");
    image.css("transform", "rotate(90deg)");
    return false; //阻止事件冒泡
  });
})();
