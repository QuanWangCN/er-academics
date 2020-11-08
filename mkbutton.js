// ==UserScript==
// @name         pubmeder
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @include      https://www.zhihu.com/question/*
// @grant        none
// @require      https://cdn.jsdelivr.net/npm/jquery@3.4.1/dist/jquery.slim.min.js
// ==/UserScript==

(function () {
  "use strict";
  function createEle(eleName, text, attrs) {
    let ele = document.createElement(eleName);
    ele.innerText = text;
    for (let k in attrs) {
      ele.setAttribute(k, attrs[k]);
    }
    return ele;
  }

  function updateClipboard(newClip) {
    // 把内容复制到剪贴板. then 是代表回调的意思
    navigator.clipboard.writeText(newClip).then(
      function () {
        // 一切都没问题的话会执行 alert 操作
        alert("succeed copy");
      },
      function (err) {
        // 失败时执行的函数
        /* clipboard write failed */
        console.info("failed copy", err);
        alert("faild copy");
      }
    );
  }

  const added = [];
  const btnStyle =
    "background-color: #0084ff; margin-top: 15px; margin-bottom: 15px; margin-left:-5px; cursor:pointer; color: #fff; border-radius: 3px; border: 1px solid; padding: 3px 6px";

  // 加转载按钮
  function addBtn() {
    const all = document.querySelectorAll('div[class="List-item"]');
    for (let item of all) {
      // 定位到节点的节点
      const meta = item.querySelector('div[class="ContentItem-meta"]');
      const who = meta
        .querySelector('meta[itemprop="url"]')
        .getAttribute("content")
        .split("/")
        .pop();
      // added 是一个全局变量, 用来保存已经添加过按钮的节点.
      // 这步的作用是, 已经添加按钮节点不重复添加
      if (added.indexOf(who) > -1) {
        continue;
      }
      // createEle 是我封住的一个工具函数, 可以生成一个节点.
      const btn = createEle("button", "转载按钮", { style: btnStyle });
      // text 是我们选中的文本.
      const text = item.querySelector('div[class="RichContent-inner"]')
        .innerText;
      // 给 btn 节点添加一个鼠标点击事件
      // 当 btn 节点接听到鼠标事件后, 会触发后面的方法
      // ()=>{}, 这种是箭头函数, 是 ES6 的语法.
      btn.addEventListener("click", () => {
        updateClipboard(text);
      });
      // 把创建好的 btn 节点添加到 meta 后面.
      meta.append(btn);
      // 添加了 btn后的推到 added 列表, 不再重复添加.
      added.push(who);
    }
  }

  // 给 window 对象添加一个滚动事件, 当滚动时触发就执行对应的操作.
  window.addEventListener("scroll", addBtn);
})();
