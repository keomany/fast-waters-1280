!function(e){function t(e,t){var n,o=t.ownerDocument,l=o.createRange();return l.setStartBefore(t),l.setEnd(e.endContainer,e.endOffset),n=o.createElement("body"),n.appendChild(l.cloneContents()),0==n.innerHTML.replace(/<(br|img|object|embed|input|textarea)[^>]*>/gi,"-").replace(/<[^>]+>/g,"").length}function n(e,t){return parseInt(e.getAttribute(t)||1)}function o(t,o,r){function a(e,t){return e=e.cloneNode(t),e.removeAttribute("id"),e}function c(){var e=0;B=[],l(["thead","tbody","tfoot"],function(r){var a=o.select("> "+r+" tr",t);l(a,function(t,a){a+=e,l(o.select("> td, > th",t),function(e,t){var o,l,c,i;if(B[a])for(;B[a][t];)t++;for(c=n(e,"rowspan"),i=n(e,"colspan"),l=a;a+c>l;l++)for(B[l]||(B[l]=[]),o=t;t+i>o;o++)B[l][o]={part:r,real:l==a&&o==t,elm:e,rowspan:c,colspan:i}})}),e+=a.length})}function d(e,t){var n;return n=B[t],n?n[e]:void 0}function s(e,t,n){e&&(n=parseInt(n),1===n?e.removeAttribute(t,1):e.setAttribute(t,n,1))}function f(e){return e&&(o.hasClass(e.elm,"mceSelected")||e==L)}function u(){var e=[];return l(t.rows,function(t){l(t.cells,function(n){return o.hasClass(n,"mceSelected")||n==L.elm?(e.push(t),!1):void 0})}),e}function m(){var e=o.createRng();e.setStartAfter(t),e.setEndAfter(t),r.setRng(e),o.remove(t)}function g(t){var n;return e.walk(t,function(r){var c;return 3==r.nodeType?(l(o.getParents(r.parentNode,null,t).reverse(),function(e){e=a(e,!1),n?c&&c.appendChild(e):n=c=e,c=e}),c&&(c.innerHTML=e.isIE?"&nbsp;":'<br data-mce-bogus="1" />'),!1):void 0},"childNodes"),t=a(t,!1),s(t,"rowSpan",1),s(t,"colSpan",1),n?t.appendChild(n):e.isIE||(t.innerHTML='<br data-mce-bogus="1" />'),t}function b(){var e=o.createRng();return l(o.select("tr",t),function(e){0==e.cells.length&&o.remove(e)}),0==o.select("tr",t).length?(e.setStartAfter(t),e.setEndAfter(t),r.setRng(e),o.remove(t),void 0):(l(o.select("thead,tbody,tfoot",t),function(e){0==e.rows.length&&o.remove(e)}),c(),row=B[Math.min(B.length-1,E.y)],row&&(r.select(row[Math.min(row.length-1,E.x)].elm,!0),r.collapse(!0)),void 0)}function p(e,t,n,l){var r,a,c,i,d;for(r=B[t][e].elm.parentNode,c=1;n>=c;c++)if(r=o.getNext(r,"tr")){for(a=e;a>=0;a--)if(d=B[t+c][a].elm,d.parentNode==r){for(i=1;l>=i;i++)o.insertAfter(g(d),d);break}if(-1==a)for(i=1;l>=i;i++)r.insertBefore(g(r.cells[0]),r.cells[0])}}function h(){l(B,function(e,t){l(e,function(e,l){var r,a,c;if(f(e)&&(e=e.elm,r=n(e,"colspan"),a=n(e,"rowspan"),r>1||a>1)){for(s(e,"rowSpan",1),s(e,"colSpan",1),c=0;r-1>c;c++)o.insertAfter(g(e),e);p(l,t,a-1,r)}})})}function v(t,n,r){var a,i,f,u,m,g,p,v,t,w,_;if(t?(pos=A(t),a=pos.x,i=pos.y,f=a+(n-1),u=i+(r-1)):(a=E.x,i=E.y,f=k.x,u=k.y),p=d(a,i),v=d(f,u),p&&v&&p.part==v.part){for(h(),c(),p=d(a,i).elm,s(p,"colSpan",f-a+1),s(p,"rowSpan",u-i+1),g=i;u>=g;g++)for(m=a;f>=m;m++)B[g]&&B[g][m]&&(t=B[g][m].elm,t!=p&&(w=e.grep(t.childNodes),l(w,function(e){p.appendChild(e)}),w.length&&(w=e.grep(p.childNodes),_=0,l(w,function(e){"BR"==e.nodeName&&o.getAttrib(e,"data-mce-bogus")&&_++<w.length-1&&p.removeChild(e)})),o.remove(t)));b()}}function w(e){var t,r,c,i,d,u,m,b,p;for(l(B,function(n,o){return l(n,function(n){return f(n)&&(n=n.elm,d=n.parentNode,u=a(d,!1),t=o,e)?!1:void 0}),e?!t:void 0}),i=0;i<B[0].length;i++)if(B[t][i]&&(r=B[t][i].elm,r!=c)){if(e){if(t>0&&B[t-1][i]&&(b=B[t-1][i].elm,p=n(b,"rowSpan"),p>1)){s(b,"rowSpan",p+1);continue}}else if(p=n(r,"rowspan"),p>1){s(r,"rowSpan",p+1);continue}m=g(r),s(m,"colSpan",r.colSpan),u.appendChild(m),c=r}u.hasChildNodes()&&(e?d.parentNode.insertBefore(u,d):o.insertAfter(u,d))}function _(e){var t,r;l(B,function(n){return l(n,function(n,o){return f(n)&&(t=o,e)?!1:void 0}),e?!t:void 0}),l(B,function(l,a){var c,i,d;l[t]&&(c=l[t].elm,c!=r&&(d=n(c,"colspan"),i=n(c,"rowspan"),1==d?e?(c.parentNode.insertBefore(g(c),c),p(t,a,i-1,d)):(o.insertAfter(g(c),c),p(t,a,i-1,d)):s(c,"colSpan",c.colSpan+1),r=c))})}function C(){var t=[];l(B,function(r){l(r,function(r,a){f(r)&&-1===e.inArray(t,a)&&(l(B,function(e){var t,l=e[a].elm;t=n(l,"colSpan"),t>1?s(l,"colSpan",t-1):o.remove(l)}),t.push(a))})}),b()}function T(){function e(e){var t,r,a;t=o.getNext(e,"tr"),l(e.cells,function(e){var t=n(e,"rowSpan");t>1&&(s(e,"rowSpan",t-1),r=A(e),p(r.x,r.y,1,1))}),r=A(e.cells[0]),l(B[r.y],function(e){var t;e=e.elm,e!=a&&(t=n(e,"rowSpan"),1>=t?o.remove(e):s(e,"rowSpan",t-1),a=e)})}var t;t=u(),l(t.reverse(),function(t){e(t)}),b()}function S(){var e=u();return o.remove(e),b(),e}function R(){var e=u();return l(e,function(t,n){e[n]=a(t,!0)}),e}function N(e,t){var n=u(),r=n[t?0:n.length-1],a=r.cells.length;l(B,function(e){var t;return a=0,l(e,function(e){e.real&&(a+=e.colspan),e.elm.parentNode==r&&(t=1)}),t?!1:void 0}),t||e.reverse(),l(e,function(e){var n,l=e.cells.length;for(i=0;l>i;i++)n=e.cells[i],s(n,"colSpan",1),s(n,"rowSpan",1);for(i=l;a>i;i++)e.appendChild(g(e.cells[l-1]));for(i=a;l>i;i++)o.remove(e.cells[i]);t?r.parentNode.insertBefore(e,r):o.insertAfter(e,r)})}function A(e){var t;return l(B,function(n,o){return l(n,function(n,l){return n.elm==e?(t={x:l,y:o},!1):void 0}),!t}),t}function P(e){E=A(e)}function D(){var e,t;return e=t=0,l(B,function(n,o){l(n,function(n,l){var r,a;f(n)&&(n=B[o][l],l>e&&(e=l),o>t&&(t=o),n.real&&(r=n.colspan-1,a=n.rowspan-1,r&&l+r>e&&(e=l+r),a&&o+a>t&&(t=o+a)))})}),{x:e,y:t}}function I(e){var t,n,l,r,a,c,i,d;if(k=A(e),E&&k){for(t=Math.min(E.x,k.x),n=Math.min(E.y,k.y),l=Math.max(E.x,k.x),r=Math.max(E.y,k.y),a=l,c=r,y=n;c>=y;y++)e=B[y][t],e.real||t-(e.colspan-1)<t&&(t-=e.colspan-1);for(x=t;a>=x;x++)e=B[n][x],e.real||n-(e.rowspan-1)<n&&(n-=e.rowspan-1);for(y=n;r>=y;y++)for(x=t;l>=x;x++)e=B[y][x],e.real&&(i=e.colspan-1,d=e.rowspan-1,i&&x+i>a&&(a=x+i),d&&y+d>c&&(c=y+d));for(o.removeClass(o.select("td.mceSelected,th.mceSelected"),"mceSelected"),y=n;c>=y;y++)for(x=t;a>=x;x++)B[y][x]&&o.addClass(B[y][x].elm,"mceSelected")}}var B,E,k,L;c(),L=o.getParent(r.getStart(),"th,td"),L&&(E=A(L),k=D(),L=d(E.x,E.y)),e.extend(this,{deleteTable:m,split:h,merge:v,insertRow:w,insertCol:_,deleteCols:C,deleteRows:T,cutRows:S,copyRows:R,pasteRows:N,getPos:A,setStartCell:P,setEndCell:I})}var l=e.each;e.create("tinymce.plugins.TablePlugin",{init:function(r,a){function c(e){var t=r.selection,n=r.dom.getParent(e||t.getNode(),"table");return n?new o(n,r.dom,t):void 0}function i(){r.getBody().style.webkitUserSelect="",f&&(r.dom.removeClass(r.dom.select("td.mceSelected,th.mceSelected"),"mceSelected"),f=!1)}var d,s,f=!0;l([["table","table.desc","mceInsertTable",!0],["delete_table","table.del","mceTableDelete"],["delete_col","table.delete_col_desc","mceTableDeleteCol"],["delete_row","table.delete_row_desc","mceTableDeleteRow"],["col_after","table.col_after_desc","mceTableInsertColAfter"],["col_before","table.col_before_desc","mceTableInsertColBefore"],["row_after","table.row_after_desc","mceTableInsertRowAfter"],["row_before","table.row_before_desc","mceTableInsertRowBefore"],["row_props","table.row_desc","mceTableRowProps",!0],["cell_props","table.cell_desc","mceTableCellProps",!0],["split_cells","table.split_cells_desc","mceTableSplitCells",!0],["merge_cells","table.merge_cells_desc","mceTableMergeCells",!0]],function(e){r.addButton(e[0],{title:e[1],cmd:e[2],ui:e[3]})}),e.isIE||r.onClick.add(function(e,t){t=t.target,"TABLE"===t.nodeName&&(e.selection.select(t),e.nodeChanged())}),r.onPreProcess.add(function(e,t){var n,o,l,r,a=e.dom;for(n=a.select("table",t.node),o=n.length;o--;)l=n[o],a.setAttrib(l,"data-mce-style",""),(r=a.getAttrib(l,"width"))&&(a.setStyle(l,"width",r),a.setAttrib(l,"width","")),(r=a.getAttrib(l,"height"))&&(a.setStyle(l,"height",r),a.setAttrib(l,"height",""))}),r.onNodeChange.add(function(e,t,n){var o;n=e.selection.getStart(),o=e.dom.getParent(n,"td,th,caption"),t.setActive("table","TABLE"===n.nodeName||!!o),o&&"CAPTION"===o.nodeName&&(o=0),t.setDisabled("delete_table",!o),t.setDisabled("delete_col",!o),t.setDisabled("delete_table",!o),t.setDisabled("delete_row",!o),t.setDisabled("col_after",!o),t.setDisabled("col_before",!o),t.setDisabled("row_after",!o),t.setDisabled("row_before",!o),t.setDisabled("row_props",!o),t.setDisabled("cell_props",!o),t.setDisabled("split_cells",!o),t.setDisabled("merge_cells",!o)}),r.onInit.add(function(o){function r(e,t,n,o){var l,r,a,c=3,i=e.dom.getParent(t.startContainer,"TABLE");return i&&(l=i.parentNode),r=t.startContainer.nodeType==c&&0==t.startOffset&&0==t.endOffset&&o&&("TR"==n.nodeName||n==l),a=("TD"==n.nodeName||"TH"==n.nodeName)&&!o,r||a}function a(t){if(e.isWebKit){var n=t.selection.getRng(),o=t.selection.getNode(),l=t.dom.getParent(n.startContainer,"TD,TH");if(r(t,n,o,l)){l||(l=o);for(var a=l.lastChild;a.lastChild;)a=a.lastChild;n.setEnd(a,a.nodeValue.length),t.selection.setRng(n)}}}function u(t,o){function r(n,o,l){var r=n?"previousSibling":"nextSibling",c=t.dom.getParent(o,"tr"),s=c[r];if(s)return p(t,o,s,n),e.dom.Event.cancel(l),!0;var f=t.dom.getParent(c,"table"),u=c.parentNode,m=u.nodeName.toLowerCase();if("tbody"===m||m===(n?"tfoot":"thead")){var g=a(n,f,u,"tbody");if(null!==g)return i(n,g,o,l)}return d(n,c,r,f,l)}function a(e,n,o,l){var r=t.dom.select(">"+l,n),a=r.indexOf(o);if(e&&0===a||!e&&a===r.length-1)return c(e,n);if(-1===a){var i="thead"===o.tagName.toLowerCase()?0:r.length-1;return r[i]}return r[a+(e?-1:1)]}function c(e,n){var o=e?"thead":"tfoot",l=t.dom.select(">"+o,n);return 0!==l.length?l[0]:null}function i(n,o,l,r){var a=s(o,n);return a&&p(t,l,a,n),e.dom.Event.cancel(r),!0}function d(n,o,l,a,c){var i=a[l];if(i)return f(i),!0;var d=t.dom.getParent(a,"td,th");if(d)return r(n,d,c);var u=s(o,!n);return f(u),e.dom.Event.cancel(c)}function s(e,n){var o=e&&e[n?"lastChild":"firstChild"];return o&&"BR"===o.nodeName?t.dom.getParent(o,"td,th"):o}function f(e){t.selection.setCursorLocation(e,0)}function u(){return _==w.UP||_==w.DOWN}function m(e){var t=e.selection.getNode(),n=e.dom.getParent(t,"tr");return null!==n}function g(e){for(var t=0,o=e;o.previousSibling;)o=o.previousSibling,t+=n(o,"colspan");return t}function b(e,t){var o=0,r=0;return l(e.children,function(e,l){return o+=n(e,"colspan"),r=l,o>t?!1:void 0}),r}function p(e,t,n,o){var l=g(e.dom.getParent(t,"td,th")),r=b(n,l),a=n.childNodes[r],c=s(a,o);f(c||a)}function h(e){var n=t.selection.getNode(),o=t.dom.getParent(n,"td,th"),l=t.dom.getParent(e,"td,th");return o&&o!==l&&v(o,l)}function v(e,n){return t.dom.getParent(e,"TABLE")===t.dom.getParent(n,"TABLE")}var w=e.VK,_=o.keyCode;if(u()&&m(t)){var C=t.selection.getNode();setTimeout(function(){h(C)&&r(!o.shiftKey&&_===w.UP,C,o)},0)}}function m(){var e;for(e=o.getBody().lastChild;e&&3==e.nodeType&&!e.nodeValue.length;e=e.previousSibling);e&&"TABLE"==e.nodeName&&o.dom.add(o.getBody(),"p",null,'<br mce_bogus="1" />')}var g,b,p,h=o.dom;d=o.windowManager,o.onMouseDown.add(function(e,t){2!=t.button&&(i(),b=h.getParent(t.target,"td,th"),g=h.getParent(b,"table"))}),h.bind(o.getDoc(),"mouseover",function(e){var t,n,l=e.target;if(b&&(p||l!=b)&&("TD"==l.nodeName||"TH"==l.nodeName)){n=h.getParent(l,"table"),n==g&&(p||(p=c(n),p.setStartCell(b),o.getBody().style.webkitUserSelect="none"),p.setEndCell(l),f=!0),t=o.selection.getSel();try{t.removeAllRanges?t.removeAllRanges():t.empty()}catch(r){}e.preventDefault()}}),o.onMouseUp.add(function(t){function n(t,n){var l=new e.dom.TreeWalker(t,t);do{if(3==t.nodeType&&0!=e.trim(t.nodeValue).length)return n?o.setStart(t,0):o.setEnd(t,t.nodeValue.length),void 0;if("BR"==t.nodeName)return n?o.setStartBefore(t):o.setEndBefore(t),void 0}while(t=n?l.next():l.prev())}{var o,l,r,a,c,i,d=t.selection;d.getSel()}if(b){if(p&&(t.getBody().style.webkitUserSelect=""),l=h.select("td.mceSelected,th.mceSelected"),l.length>0){o=h.createRng(),a=l[0],i=l[l.length-1],o.setStartBefore(a),o.setEndAfter(a),n(a,1),r=new e.dom.TreeWalker(a,h.getParent(l[0],"table"));do if("TD"==a.nodeName||"TH"==a.nodeName){if(!h.hasClass(a,"mceSelected"))break;c=a}while(a=r.next());n(c),d.setRng(o)}t.nodeChanged(),b=p=g=null}}),o.onKeyUp.add(function(){i()}),o.onKeyDown.add(function(e){a(e)}),o.onMouseDown.add(function(e,t){2!=t.button&&a(e)}),o.plugins.table.fixTableCellSelection=a,o&&o.plugins.contextmenu&&o.plugins.contextmenu.onContextMenu.add(function(e,t,n){var l,r=o.selection,a=r.getNode()||o.getBody();o.dom.getParent(n,"td")||o.dom.getParent(n,"th")||o.dom.select("td.mceSelected,th.mceSelected").length?(t.removeAll(),"A"!=a.nodeName||o.dom.getAttrib(a,"name")||(t.add({title:"advanced.link_desc",icon:"link",cmd:o.plugins.advlink?"mceAdvLink":"mceLink",ui:!0}),t.add({title:"advanced.unlink_desc",icon:"unlink",cmd:"UnLink"}),t.addSeparator()),"IMG"==a.nodeName&&-1==a.className.indexOf("mceItem")&&(t.add({title:"advanced.image_desc",icon:"image",cmd:o.plugins.advimage?"mceAdvImage":"mceImage",ui:!0}),t.addSeparator()),t.add({title:"table.desc",icon:"table",cmd:"mceInsertTable",value:{action:"insert"}}),t.add({title:"table.props_desc",icon:"table_props",cmd:"mceInsertTable"}),t.add({title:"table.del",icon:"delete_table",cmd:"mceTableDelete"}),t.addSeparator(),l=t.addMenu({title:"table.cell"}),l.add({title:"table.cell_desc",icon:"cell_props",cmd:"mceTableCellProps"}),l.add({title:"table.split_cells_desc",icon:"split_cells",cmd:"mceTableSplitCells"}),l.add({title:"table.merge_cells_desc",icon:"merge_cells",cmd:"mceTableMergeCells"}),l=t.addMenu({title:"table.row"}),l.add({title:"table.row_desc",icon:"row_props",cmd:"mceTableRowProps"}),l.add({title:"table.row_before_desc",icon:"row_before",cmd:"mceTableInsertRowBefore"}),l.add({title:"table.row_after_desc",icon:"row_after",cmd:"mceTableInsertRowAfter"}),l.add({title:"table.delete_row_desc",icon:"delete_row",cmd:"mceTableDeleteRow"}),l.addSeparator(),l.add({title:"table.cut_row_desc",icon:"cut",cmd:"mceTableCutRow"}),l.add({title:"table.copy_row_desc",icon:"copy",cmd:"mceTableCopyRow"}),l.add({title:"table.paste_row_before_desc",icon:"paste",cmd:"mceTablePasteRowBefore"}).setDisabled(!s),l.add({title:"table.paste_row_after_desc",icon:"paste",cmd:"mceTablePasteRowAfter"}).setDisabled(!s),l=t.addMenu({title:"table.col"}),l.add({title:"table.col_before_desc",icon:"col_before",cmd:"mceTableInsertColBefore"}),l.add({title:"table.col_after_desc",icon:"col_after",cmd:"mceTableInsertColAfter"}),l.add({title:"table.delete_col_desc",icon:"delete_col",cmd:"mceTableDeleteCol"})):t.add({title:"table.desc",icon:"table",cmd:"mceInsertTable"})}),e.isWebKit&&o.onKeyDown.add(u),e.isIE||(e.isGecko&&o.onKeyDown.add(function(e,n){var o,l,r=e.dom;(37==n.keyCode||38==n.keyCode)&&(o=e.selection.getRng(),l=r.getParent(o.startContainer,"table"),l&&e.getBody().firstChild==l&&t(o,l)&&(o=r.createRng(),o.setStartBefore(l),o.setEndBefore(l),e.selection.setRng(o),n.preventDefault()))}),o.onKeyUp.add(m),o.onSetContent.add(m),o.onVisualAid.add(m),o.onPreProcess.add(function(e,t){var n=t.node.lastChild;n&&1==n.childNodes.length&&"BR"==n.firstChild.nodeName&&e.dom.remove(n)}),e.isGecko&&o.onKeyDown.add(function(t,n){if(n.keyCode===e.VK.ENTER&&n.shiftKey){var o=t.selection.getRng().startContainer,l=h.getParent(o,"td,th");if(l){var r=t.getDoc().createTextNode("﻿");h.insertAfter(r,o)}}}),m(),o.startContent=o.getContent({format:"raw"}))}),l({mceTableSplitCells:function(e){e.split()},mceTableMergeCells:function(e){var t,n,o;o=r.dom.getParent(r.selection.getNode(),"th,td"),o&&(t=o.rowSpan,n=o.colSpan),r.dom.select("td.mceSelected,th.mceSelected").length?e.merge():d.open({url:a+"/merge_cells.htm",width:240+parseInt(r.getLang("table.merge_cells_delta_width",0)),height:110+parseInt(r.getLang("table.merge_cells_delta_height",0)),inline:1},{rows:t,cols:n,onaction:function(t){e.merge(o,t.cols,t.rows)},plugin_url:a})},mceTableInsertRowBefore:function(e){e.insertRow(!0)},mceTableInsertRowAfter:function(e){e.insertRow()},mceTableInsertColBefore:function(e){e.insertCol(!0)},mceTableInsertColAfter:function(e){e.insertCol()},mceTableDeleteCol:function(e){e.deleteCols()},mceTableDeleteRow:function(e){e.deleteRows()},mceTableCutRow:function(e){s=e.cutRows()},mceTableCopyRow:function(e){s=e.copyRows()},mceTablePasteRowBefore:function(e){e.pasteRows(s,!0)},mceTablePasteRowAfter:function(e){e.pasteRows(s)},mceTableDelete:function(e){e.deleteTable()}},function(e,t){r.addCommand(t,function(){var t=c();t&&(e(t),r.execCommand("mceRepaint"),i())})}),l({mceInsertTable:function(e){d.open({url:a+"/table.htm",width:400+parseInt(r.getLang("table.table_delta_width",0)),height:320+parseInt(r.getLang("table.table_delta_height",0)),inline:1},{plugin_url:a,action:e?e.action:0})},mceTableRowProps:function(){d.open({url:a+"/row.htm",width:400+parseInt(r.getLang("table.rowprops_delta_width",0)),height:295+parseInt(r.getLang("table.rowprops_delta_height",0)),inline:1},{plugin_url:a})},mceTableCellProps:function(){d.open({url:a+"/cell.htm",width:400+parseInt(r.getLang("table.cellprops_delta_width",0)),height:295+parseInt(r.getLang("table.cellprops_delta_height",0)),inline:1},{plugin_url:a})}},function(e,t){r.addCommand(t,function(t,n){e(n)})})}}),e.PluginManager.add("table",e.plugins.TablePlugin)}(tinymce);