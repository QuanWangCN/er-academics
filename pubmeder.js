// ==UserScript==
// @name        PubMeder
// @version     1.0.3
// @description 显示Pubmed中IF；选中doi搜索sci-hub下载文档; 谷歌学术中显示IF。
// @author      03年小老头
// @namespace   https://greasyfork.org/zh-CN/users/673748-xsan
// @require     http://libs.baidu.com/jquery/1.8.3/jquery.min.js
// @include     *
// @grant       GM_xmlhttpRequest
// @grant       GM_setClipboard
// @grant       GM_addStyle
// @grant       GM_setValue
// @grant       GM_getValue
// @grant       GM_registerMenuCommand
// @grant       unsafeWindow
// @grant       GM_openInTab
// @icon        data:image/ico;base64,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
// @run-at      document-end
// ==/UserScript==

(function () {
  "use strict";
  var $ = $ || window.$;
  var url = window.location.href;
  var host = window.location.host;
  var default_server = "https://sci-hub.st/";
  var jrnl = new Array();
  var pmids = new Array();
  var post_data;
  var doiRegex = new RegExp(
    "(?:^" + '(10[.][0-9]{4,}(?:[.][0-9]+)*/(?:(?![%"#? ])\\S)+)' + "$)"
  );
  if (host == "pubmed.ncbi.nlm.nih.gov") {
    addStyle();
    var pdata = "";
    if (typeofpage() == "single") {
      var html =
        "<div class='pubmedy-impactfactor-container'><p><span><b><a href='//www.novopro.cn/' target='_blank'>一二学术</a></b></span>";
      var jn = $("button#full-view-journal-trigger").text().trim();
      var pmid = $("#full-view-identifiers .identifier.pubmed")
        .text()
        .trim()
        .replace(/\D+/, "");
      var doi = $("#full-view-identifiers .identifier.doi")
        .text()
        .trim()
        .replace(/^DOI:\s*/i, "");
      var jnscore = jn2score(jn);
      if (jnscore == "-") {
        pmids.push(pmid);
        jrnl.push(jn);
        post_data = { jns: jrnl, pmids: pmids };
        pdata = JSON.stringify(post_data);
      }
      html += "<span><b>IF:</b>" + jnscore + "</span>";
      html +=
        "<span><b>Cited: </b><i class='cited-num' data-pmid='" +
        pmid +
        "'>Click to View</i></span>";
      if (doiRegex.test(doi)) {
        html +=
          "<span><a target='_blank' href='" +
          default_server +
          doi +
          "'>Full Text(PDF)</a></span>";
      }
      html +=
        "<span><a class='pubmedy-impactfactor-citation' href='#' data-id='" +
        pmid +
        "'><b>Citation</b></a></span>";
      html += "</p></div>";
      $("#full-view-heading").append(html);
    } else {
      $(".docsum-journal-citation.short-journal-citation").each(function () {
        var html =
          "<div class='pubmedy-impactfactor-container'><p><span><b><a href='//mp.weixin.qq.com/s?__biz=MzI3MDA3NTcwOQ==&mid=2247484558&idx=1&sn=a0eae208689e858048b6478e857e7b3f&chksm=ead7d6dcdda05fca76afea9fe9658e534675f98209fc07ad746efdd71aba16dd9450951ebc00&token=1315295141&lang=zh_CN#rd/' target='_blank'>er-academics</a></b></span>";
        var jn = $(this)
          .text()
          .trim()
          .replace(/\.\s*\d{4}\.$/, "");
        var doi = "";
        doiRegex = new RegExp(
          "(?:" + '(10[.][0-9]{4,}(?:[.][0-9]+)*/(?:(?![%"#? ])\\S)+)' + ")"
        );
        var doiln = $(this).prev().text().trim().match(doiRegex);
        if (doiln) {
          doi = doiln[0];
        }
        var pmid = $(this).next().text().trim().replace(/\D+/, "");
        var jnscore = jn2score(jn);
        if (jnscore == "-") {
          pmids.push(pmid);
          jrnl.push(jn);
        }
        html += "<span><b>IF:</b>" + jnscore + "</span>";
        html +=
          "<span><b>Cited: </b><i class='cited-num' data-pmid='" +
          pmid +
          "'>Click to View</i></span>";
        if (doi) {
          html +=
            "<span><a target='_blank' href='" +
            default_server +
            doi +
            "'>Full Text(PDF)</a></span>";
        }
        html +=
          "<span><a class='pubmedy-impactfactor-citation' href='#' data-id='" +
          pmid +
          "'><b>Citation</b></a></span>";
        html += "</p></div>";
        $(this).parent().append(html);
      });
      post_data = { jns: jrnl, pmids: pmids };
      pdata = JSON.stringify(post_data);
    }
    if (pdata) {
      GM_xmlhttpRequest({
        method: "POST",
        url: "//www.novopro.cn/impactfactor/",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded;charset=utf-8",
        },
        data: "x=" + pdata,
        onload: function (response) {
          console.log("请求成功");
          console.log(response.responseText);
        },
        onerror: function (response) {
          console.log("请求失败");
        },
      });
    }
  } else {
    if ($(".gs_r.gs_or.gs_scl").length) {
      addStyle();
      $(".gs_r.gs_or.gs_scl").each(function (i, e) {
        var title = $(this)
          .children(".gs_ri:first")
          .children("h3:first")
          .text()
          .trim();
        var url = $(this)
          .children(".gs_ri:first")
          .children("h3:first")
          .children("a:first")
          .attr("href");
        if (!url) {
          return true;
        }
        var jnline = $(this)
          .children(".gs_ri:first")
          .children(".gs_a:first")
          .text()
          .trim();
        var m = jnline.match(/\- ([A-Za-z ]*?), \d{4} \- /);
        var jn = "";
        if (m) {
          jn = m[1];
        }
        doiRegex = new RegExp(
          "(?:" + '(10[.][0-9]{4,}(?:[.][0-9]+)*/(?:(?![%"#? ])\\S)+)' + ")"
        );
        var mathedDOI = url.match(doiRegex);
        var doi = "";
        var jnscore = "";
        if (mathedDOI) {
          doi = mathedDOI[1];
        }
        if (jn) {
          jnscore = jn2score(jn);
        }
        var showbar = 0;
        if (jnscore == "" || jnscore == "-") {
          if (doi) {
            jnscore =
              "<i class='pubmedy-view-if' data-doi='" + doi + "'>View</i>";
            showbar = 1;
          }
        } else {
          showbar = 1;
        }
        if (showbar) {
          var html = "<div class='pubmedy-impactfactor-tinybox'><p>";
          html += "<span><b>IF:</b>" + jnscore + "</span>";
          if (doi) {
            html +=
              "<span><a target='_blank' href='" +
              default_server +
              doi +
              "'>Full Text(PDF)</a></span>";
          }
          html += "</p></div>";
          $(this)
            .children(".gs_ri:first")
            .children(".gs_fl:first")
            .append(html);
        }
      });
    }
  }
  $("body").on("click", ".pubmedy-view-if", function () {
    getJnScorefromDOI($(this).attr("data-doi"), this);
  });
  $("body").on("mouseup", function (event) {
    var thetext = getSelectionText();
    var m = thetext.match(doiRegex);
    if (m && event.which == 1) {
      // event.which: 1 left mouse; 3 right mouse
      if (confirm("Sci-Hub Search:" + m[0])) {
        GM_openInTab(default_server + m[0]);
      }
      // addStyle();
      // var revealId = "pubmedy-scihub-show";
      // $('#' + revealId).remove();
      // var loading = '<div id=' + revealId + ' class="reveal-modal">' + "<p class='pubmedy-scihub-search'><a href='"+default_server+m[0]+"' target='_blank'>"+"Sci-Hub search this doi"+"<a class='close-reveal-modal'>×</a>" + '</div>';
      // $('body').append(loading);
      // $('#' + revealId).reveal({animation: "fade", revealId: revealId});
    }
  });
  $("body").on("mousedown", function (event) {
    var thetext = getSelectionText();
    var m = thetext.match(doiRegex);
    if (m && event.which == 1) {
      window.getSelection().removeAllRanges();
    }
  });
  $("i.cited-num").on("click", function () {
    var pmid = $(this).attr("data-pmid");
    getCitationNum(pmid, this);
  });
  $("body").on("click", "a.pubmedy-view-citation-list", function (event) {
    event.preventDefault();
    var citationList = GM_getValue("citationList");
    var clist = jQuery.parseJSON(citationList);
    var listHTML = "<p>" + clist.join("</p><p>") + "</p>";
    var revealId = "pubmedy-citation-show";
    $("#" + revealId).remove();
    var loading =
      "<div id=" +
      revealId +
      ' class="reveal-modal">' +
      "<p class='pubmedy-rtn-citation'>" +
      listHTML +
      "<a class='close-reveal-modal'>×</a>" +
      "</div>";
    $("body").append(loading);
    $("#" + revealId).reveal({ animation: "fade", revealId: revealId });
  });
  $("a.pubmedy-impactfactor-citation").on("click", function (event) {
    event.preventDefault();
    var revealId = "pubmedy-citation-show";
    $("#" + revealId).remove();
    var loading =
      "<div id=" +
      revealId +
      ' class="reveal-modal">' +
      "<p class='pubmedy-rtn-citation'>Loading...</p><a class='close-reveal-modal'>×</a>" +
      "</div>";
    $("body").append(loading);
    $("#" + revealId).reveal({ animation: "fade", revealId: revealId });
    var pmid = $(this).attr("data-id");
    GM_xmlhttpRequest({
      method: "GET",
      url:
        "https://eutils.ncbi.nlm.nih.gov/entrez/eutils/esummary.fcgi?db=pubmed&id=" +
        pmid +
        "&retmode=json",
      headers: {
        "User-agent": "Mozilla/4.0 (compatible)",
        Accept: "application/atom+xml,application/xml,text/xml",
      },
      onload: function (resp) {
        var summary = jQuery.parseJSON(resp["responseText"]);
        var title = summary["result"][pmid]["title"];
        var journal = summary["result"][pmid]["source"];
        var volume = summary["result"][pmid]["volume"];
        var issue = summary["result"][pmid]["issue"];
        var pubdate = summary["result"][pmid]["pubdate"];
        pubdate = pubdate.replace(/(\d{4}).*/, "$1");
        var pages = summary["result"][pmid]["pages"];
        var authLst = summary["result"][pmid]["authors"];
        var authors = new Array();
        for (var i = 0; i < authLst.length; i++) {
          authors.push(authLst[i]["name"]);
        }
        if (authors.length > 6) {
          var xxauthors = authors.slice(0, 6);
          authors = xxauthors.join(", ") + ", et al";
        } else {
          authors = authors.join(", ") + "";
        }
        var d = new Array();
        if (authors) {
          d.push(authors);
        }
        if (title) {
          d.push(title.replace(/\.$/, ""));
        }
        if (journal) {
          d.push("<em>" + journal + "</em>");
        }
        if (pubdate) {
          if (volume && issue) {
            if (pages) {
              d.push(pubdate + ";" + volume + "(" + issue + "):" + pages);
            } else {
              d.push(pubdate + ";" + volume + "(" + issue + ")");
            }
          } else {
            d.push(pubdate);
          }
        }
        var citation = d.join(". ");
        $(".pubmedy-rtn-citation").html(citation);
      },
      onerror: function (response) {
        console.log("请求失败");
      },
    });
  });
})();
function getSelectionText() {
  var selectedText = "";
  if (window.getSelection) {
    // all modern browsers and IE9+
    selectedText = window.getSelection().toString().trim();
  }
  return selectedText;
}
$.fn.reveal = function (options) {
  var defaults = {
    animation: "fadeAndPop",
    //fade, fadeAndPop, none
    animationspeed: 300,
    //how fast animtions are
    closeonbackgroundclick: true,
    //if you click background will modal close?
    dismissmodalclass: "close-reveal-modal", //the class of a button or element that will close an open modal
  };

  //Extend dem' options
  options = $.extend({}, defaults, options);

  return this.each(function () {
    var modal = $(this),
      topMeasure = parseInt(modal.css("top")),
      topOffset = modal.height() + topMeasure,
      locked = false,
      modalBG = $(".reveal-modal-bg");

    if (modalBG.length == 0) {
      modalBG = $('<div class="reveal-modal-bg" />').insertAfter(modal);
    }

    //Entrance Animations
    modal.bind("reveal:open", function () {
      modalBG.unbind("click.modalEvent");
      $("." + options.dismissmodalclass).unbind("click.modalEvent");
      if (!locked) {
        lockModal();
        if (options.animation == "fadeAndPop") {
          modal.css({
            top: $(document).scrollTop() - topOffset,
            opacity: 0,
            visibility: "visible",
          });
          modalBG.fadeIn(options.animationspeed / 2);
          modal.delay(options.animationspeed / 2).animate(
            {
              top: $(document).scrollTop() + topMeasure + "px",
              opacity: 1,
            },
            options.animationspeed,
            unlockModal()
          );
        }
        if (options.animation == "fade") {
          modal.css({
            opacity: 0,
            visibility: "visible",
            top: $(document).scrollTop() + topMeasure,
          });
          modalBG.fadeIn(options.animationspeed / 2);
          modal.delay(options.animationspeed / 2).animate(
            {
              opacity: 1,
            },
            options.animationspeed,
            unlockModal()
          );
        }
        if (options.animation == "none") {
          modal.css({
            visibility: "visible",
            top: $(document).scrollTop() + topMeasure,
          });
          modalBG.css({
            display: "block",
          });
          unlockModal();
        }
      }
      modal.unbind("reveal:open");
    });

    //Closing Animation
    modal.bind("reveal:close", function () {
      if (!locked) {
        lockModal();
        if (options.animation == "fadeAndPop") {
          modalBG.delay(options.animationspeed).fadeOut(options.animationspeed);
          modal.animate(
            {
              top: $(document).scrollTop() - topOffset + "px",
              opacity: 0,
            },
            options.animationspeed / 2,
            function () {
              modal.css({
                top: topMeasure,
                opacity: 1,
                visibility: "hidden",
              });
              unlockModal();
            }
          );
        }
        if (options.animation == "fade") {
          modalBG.delay(options.animationspeed).fadeOut(options.animationspeed);
          modal.animate(
            {
              opacity: 0,
            },
            options.animationspeed,
            function () {
              modal.css({
                opacity: 1,
                visibility: "hidden",
                top: topMeasure,
              });
              unlockModal();
            }
          );
        }
        if (options.animation == "none") {
          modal.css({
            visibility: "hidden",
            top: topMeasure,
          });
          modalBG.css({
            display: "none",
          });
        }
      }
      modal.unbind("reveal:close");
    });

    //Open Modal Immediately
    modal.trigger("reveal:open");

    //Close Modal Listeners
    var closeButton = $("." + options.dismissmodalclass).bind(
      "click.modalEvent",
      function () {
        modal.trigger("reveal:close");
      }
    );

    if (options.closeonbackgroundclick) {
      modalBG.css({
        cursor: "pointer",
      });
      modalBG.bind("click.modalEvent", function () {
        modal.trigger("reveal:close");
      });
    }
    $("body").keyup(function (e) {
      if (e.which === 27) {
        modal.trigger("reveal:close");
      } // 27 is the keycode for the Escape key
    });

    function unlockModal() {
      locked = false;
    }

    function lockModal() {
      locked = true;
    }
  }); //each call
};

function typeofpage() {
  if ($("#article-details").length > 0) {
    return "single";
  } else {
    return "list";
  }
}

function getJnScorefromDOI(doi, ele) {
  GM_xmlhttpRequest({
    method: "GET",
    url:
      "https://www.ebi.ac.uk/europepmc/webservices/rest/search?query=doi:" +
      doi +
      "&resultType=lite&cursorMark=*&pageSize=5&format=json",
    headers: {
      "User-agent": "Mozilla/4.0 (compatible)",
      Accept: "application/atom+xml,application/xml,text/xml",
    },
    onload: function (resp) {
      var epmcObj = jQuery.parseJSON(resp["responseText"]);
      // console.log(epmcObj);
      var num = epmcObj["hitCount"];
      if (num == 1) {
        var journalTitle = epmcObj.resultList.result[0].journalTitle;
        var jnscore = jn2score(journalTitle);
        $(ele).text(jnscore);
      }
    },
    onerror: function (response) {
      //   console.log("请求失败");
    },
  });
}

function getCitationNum(pmid, ele) {
  // https://docs.ropensci.org/europepmc/
  var num = 0;
  GM_xmlhttpRequest({
    method: "GET",
    url:
      "https://www.ebi.ac.uk/europepmc/webservices/rest/MED/" +
      pmid +
      "/citations?page=1&pageSize=100&format=json",
    headers: {
      "User-agent": "Mozilla/4.0 (compatible)",
      Accept: "application/atom+xml,application/xml,text/xml",
    },
    onload: function (resp) {
      var epmcObj = jQuery.parseJSON(resp["responseText"]);
      // console.log(epmcObj);
      num = epmcObj["hitCount"];
      $(ele).text(num);
      if (num > 0) {
        var citationList = new Array();
        for (var i = 0; i < epmcObj.citationList.citation.length; i++) {
          var d = new Array();
          var xx = epmcObj.citationList.citation[i];
          d.push(xx.authorString.replace(/\.$/, ""));
          d.push(xx.title.replace(/\.$/, ""));
          d.push("<em>" + xx.journalAbbreviation + "</em>");
          if (xx.volume) {
            if (xx.pageInfo) {
              d.push(xx.pubYear + ";" + xx.volume + ":" + xx.pageInfo);
            } else {
              d.push(xx.pubYear + ";" + xx.volume);
            }
          } else {
            d.push(xx.pubYear);
          }
          d.push(
            "PMID:<a href='//pubmed.ncbi.nlm.nih.gov/" +
              xx.id +
              "'>" +
              xx.id +
              "</a>"
          );
          citationList.push(d);
        }
        GM_setValue("citationList", JSON.stringify(citationList));
        $(ele).after(
          '<a href="#" class="pubmedy-view-citation-list"><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAABmJLR0QA/wD/AP+gvaeTAAAA6ElEQVRoge2WMQ7CMAxFv8sNmMNhEBtHQMy5U1ckTsDAxmXagZUL9DMgQp10QKpEAP23ubWd5+0DQgghxA9j42J9uG3NrAUYAAJgD2O87JfncV/YnbZGtIAF4NFZrDNfs3yuqDn133/qByzi9bhJPo1r9/KAMRBos62oI28gLBgG59P4ISf/HFvlB9SRTzif/AAnn+oJKskX8/kBfS5PsJuQ7yvKOx9/gDES6MbyDRnzAzA0EbDXok/KG0ofIYSohrKQstDb8gllIWWhWfLKQkKIr0JZSFnobfmEspCy0Cx5ZSEhhBD/xB2ua/w0gBzosQAAAABJRU5ErkJggg=="/></a>'
        );
      }
    },
    onerror: function (response) {
      //   console.log("请求失败");
    },
  });
}

function addStyle() {
  var innnerCss = `
    .pubmedy-impactfactor-container {display: block;background: #f3f9d2;border: 1px solid #cae8b6;-webkit-border-radius: 3px;border-radius: 3px;font-size: 14px;color: #08c;}
    .pubmedy-impactfactor-container p {margin: 5px 0;padding: 0;}
    .pubmedy-impactfactor-container span {margin-left: 30px;}
	.pubmedy-impactfactor-container img{width: 14px;}
    .pubmedy-impactfactor-container a{text-decoration: none;color:#08c;}
    .pubmedy-impactfactor-tinybox{font-size: 14px;margin: 0;padding: 0;background: #f3f9d2;border: 1px solid #cae8b6;-webkit-border-radius: 3px;border-radius: 3px;display: inline-block;}
    .pubmedy-impactfactor-tinybox p {margin: 0;padding: 0 10px;}
    .pubmedy-impactfactor-tinybox p:before {content: "NovoPro";color: #08c;font-weight: 700;}
    .pubmedy-impactfactor-tinybox span {margin-left: 10px;color: #08c;}
    i.pubmedy-view-if {cursor: pointer;color: #08c;font-style: normal;}
	.pubmedy-rtn-citation{font-size: 14px;}
	.pubmedy-highlight {background: #e3e4dd  !important;border: 1px solid #eee;border-radius: 5px;-moz-border-radius: 5px;-webkit-border-radius: 5px;padding: 5px  !important;}
	.reveal-modal-bg { position: fixed; height: 100%;width: 100%;background: #000;background: rgba(0,0,0,.5);z-index: 100;display: none;top: 0;left: 0; }
	.reveal-modal {visibility: hidden;top: 100px; left: 50%;margin-left: -300px;width: 520px;background: #eee;position: absolute;z-index: 101;padding: 30px 40px 34px;-moz-border-radius: 5px;-webkit-border-radius: 5px;border-radius: 5px;-moz-box-shadow: 0 0 10px rgba(0,0,0,.4);-webkit-box-shadow: 0 0 10px rgba(0,0,0,.4);-box-shadow: 0 0 10px rgba(0,0,0,.4);}
	.reveal-modal.small { width: 200px; margin-left: -140px;}
	.reveal-modal.medium { width: 400px; margin-left: -240px;}
	.reveal-modal.large { width: 600px; margin-left: -340px;}
	.reveal-modal.xlarge { width: 800px; margin-left: -440px;}
	.reveal-modal .close-reveal-modal {font-size: 22px;line-height: .5;position: absolute;top: 8px;right: 11px;color: #aaa;text-shadow: 0 -1px 1px rbga(0,0,0,.6);font-weight: bold;cursor: pointer;}
    a.pubmedy-view-citation-list {vertical-align: middle;margin-left: 10px;}
	.pmid-sci-hub, .cited-num{cursor: pointer;}
	`;
  $("body").prepend("<style>" + innnerCss + "</style>");
}
