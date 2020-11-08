// ==UserScript==
// @name         pubmeder
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @include      https://pubmed.ncbi.nlm.nih.gov/?term=cancer&ac=no&user_filter=IF10-300&schema=none&sort=date&size=50
// @grant        none
// @require      https://cdn.jsdelivr.net/npm/jquery@3.4.1/dist/jquery.slim.min.js
// ==/UserScript==

var pmids = [];
pmids = $(".search-results-chunk.results-chunk")
  .attr("data-chunk-ids")
  .split(",");
var bibs = {};
var arr = [
  {
    id: "Mol Psychiatry",
    name: "12.384",
  },
  {
    id: "Nat Biotechnol",
    name: "36",
  },
  {
    id: "Nat Commun",
    name: "12",
  },
];

var obj = arr.find(function (x) {
  return x.id === "Nat Biotechnol";
});

alert(obj.name);
