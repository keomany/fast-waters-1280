function preinit(){var e;(e=tinyMCEPopup.getParam("external_link_list_url"))&&document.write('<script language="javascript" type="text/javascript" src="'+tinyMCEPopup.editor.documentBaseURI.toAbsolute(e)+'"></script>')}function changeClass(){var e=document.forms[0];e.classes.value=getSelectValue(e,"classlist")}function init(){tinyMCEPopup.resizeToInnerSize();var e,t=document.forms[0],o=tinyMCEPopup.editor,n=o.selection.getNode(),i="insert";if(document.getElementById("hrefbrowsercontainer").innerHTML=getBrowserHTML("hrefbrowser","href","file","advlink"),document.getElementById("popupurlbrowsercontainer").innerHTML=getBrowserHTML("popupurlbrowser","popupurl","file","advlink"),document.getElementById("targetlistcontainer").innerHTML=getTargetListHTML("targetlist","target"),e=getLinkListHTML("linklisthref","href"),""==e?document.getElementById("linklisthrefrow").style.display="none":document.getElementById("linklisthrefcontainer").innerHTML=e,e=getAnchorListHTML("anchorlist","href"),""==e?document.getElementById("anchorlistrow").style.display="none":document.getElementById("anchorlistcontainer").innerHTML=e,isVisible("hrefbrowser")&&(document.getElementById("href").style.width="260px"),isVisible("popupurlbrowser")&&(document.getElementById("popupurl").style.width="180px"),n=o.dom.getParent(n,"A"),null==n){var l=o.dom.create("p",null,o.selection.getContent());1===l.childNodes.length&&(n=l.firstChild)}if(null!=n&&"A"==n.nodeName&&(i="update"),t.insert.value=tinyMCEPopup.getLang(i,"Insert",!0),setPopupControlsDisabled(!0),"update"==i){var r=o.dom.getAttrib(n,"href"),s=o.dom.getAttrib(n,"onclick");setFormValue("href",r),setFormValue("title",o.dom.getAttrib(n,"title")),setFormValue("id",o.dom.getAttrib(n,"id")),setFormValue("style",o.dom.getAttrib(n,"style")),setFormValue("rel",o.dom.getAttrib(n,"rel")),setFormValue("rev",o.dom.getAttrib(n,"rev")),setFormValue("charset",o.dom.getAttrib(n,"charset")),setFormValue("hreflang",o.dom.getAttrib(n,"hreflang")),setFormValue("dir",o.dom.getAttrib(n,"dir")),setFormValue("lang",o.dom.getAttrib(n,"lang")),setFormValue("tabindex",o.dom.getAttrib(n,"tabindex","undefined"!=typeof n.tabindex?n.tabindex:"")),setFormValue("accesskey",o.dom.getAttrib(n,"accesskey","undefined"!=typeof n.accesskey?n.accesskey:"")),setFormValue("type",o.dom.getAttrib(n,"type")),setFormValue("onfocus",o.dom.getAttrib(n,"onfocus")),setFormValue("onblur",o.dom.getAttrib(n,"onblur")),setFormValue("onclick",s),setFormValue("ondblclick",o.dom.getAttrib(n,"ondblclick")),setFormValue("onmousedown",o.dom.getAttrib(n,"onmousedown")),setFormValue("onmouseup",o.dom.getAttrib(n,"onmouseup")),setFormValue("onmouseover",o.dom.getAttrib(n,"onmouseover")),setFormValue("onmousemove",o.dom.getAttrib(n,"onmousemove")),setFormValue("onmouseout",o.dom.getAttrib(n,"onmouseout")),setFormValue("onkeypress",o.dom.getAttrib(n,"onkeypress")),setFormValue("onkeydown",o.dom.getAttrib(n,"onkeydown")),setFormValue("onkeyup",o.dom.getAttrib(n,"onkeyup")),setFormValue("target",o.dom.getAttrib(n,"target")),setFormValue("classes",o.dom.getAttrib(n,"class")),null!=s&&-1!=s.indexOf("window.open")?parseWindowOpen(s):parseFunction(s),selectByValue(t,"dir",o.dom.getAttrib(n,"dir")),selectByValue(t,"rel",o.dom.getAttrib(n,"rel")),selectByValue(t,"rev",o.dom.getAttrib(n,"rev")),selectByValue(t,"linklisthref",r),"#"==r.charAt(0)&&selectByValue(t,"anchorlist",r),addClassesToList("classlist","advlink_styles"),selectByValue(t,"classlist",o.dom.getAttrib(n,"class"),!0),selectByValue(t,"targetlist",o.dom.getAttrib(n,"target"),!0)}else addClassesToList("classlist","advlink_styles")}function checkPrefix(e){e.value&&Validator.isEmail(e)&&!/^\s*mailto:/i.test(e.value)&&confirm(tinyMCEPopup.getLang("advlink_dlg.is_email"))&&(e.value="mailto:"+e.value),/^\s*www\./i.test(e.value)&&confirm(tinyMCEPopup.getLang("advlink_dlg.is_external"))&&(e.value="http://"+e.value)}function setFormValue(e,t){document.forms[0].elements[e].value=t}function parseWindowOpen(e){var t=document.forms[0];-1!=e.indexOf("return false;")?(t.popupreturn.checked=!0,e=e.replace("return false;","")):t.popupreturn.checked=!1;var o=parseLink(e);if(null!=o){t.ispopup.checked=!0,setPopupControlsDisabled(!1);var n=parseOptions(o.options),i=o.url;t.popupname.value=o.target,t.popupurl.value=i,t.popupwidth.value=getOption(n,"width"),t.popupheight.value=getOption(n,"height"),t.popupleft.value=getOption(n,"left"),t.popuptop.value=getOption(n,"top"),-1!=t.popupleft.value.indexOf("screen")&&(t.popupleft.value="c"),-1!=t.popuptop.value.indexOf("screen")&&(t.popuptop.value="c"),t.popuplocation.checked="yes"==getOption(n,"location"),t.popupscrollbars.checked="yes"==getOption(n,"scrollbars"),t.popupmenubar.checked="yes"==getOption(n,"menubar"),t.popupresizable.checked="yes"==getOption(n,"resizable"),t.popuptoolbar.checked="yes"==getOption(n,"toolbar"),t.popupstatus.checked="yes"==getOption(n,"status"),t.popupdependent.checked="yes"==getOption(n,"dependent"),buildOnClick()}}function parseFunction(e){document.forms[0],parseLink(e)}function getOption(e,t){return"undefined"==typeof e[t]?"":e[t]}function setPopupControlsDisabled(e){var t=document.forms[0];t.popupname.disabled=e,t.popupurl.disabled=e,t.popupwidth.disabled=e,t.popupheight.disabled=e,t.popupleft.disabled=e,t.popuptop.disabled=e,t.popuplocation.disabled=e,t.popupscrollbars.disabled=e,t.popupmenubar.disabled=e,t.popupresizable.disabled=e,t.popuptoolbar.disabled=e,t.popupstatus.disabled=e,t.popupreturn.disabled=e,t.popupdependent.disabled=e,setBrowserDisabled("popupurlbrowser",e)}function parseLink(e){e=e.replace(new RegExp("&#39;","g"),"'");var t=e.replace(new RegExp("\\s*([A-Za-z0-9.]*)\\s*\\(.*","gi"),"$1"),o=templates[t];if(o){for(var n=o.match(new RegExp("'?\\$\\{[A-Za-z0-9.]*\\}'?","gi")),i="\\s*[A-Za-z0-9.]*\\s*\\(",l="",r=0;r<n.length;r++)i+=-1!=n[r].indexOf("'${")?"'(.*)'":"([0-9]*)",l+="$"+(r+1),n[r]=n[r].replace(new RegExp("[^A-Za-z0-9]","gi"),""),r!=n.length-1?(i+="\\s*,\\s*",l+="<delim>"):i+=".*";i+="\\);?";var s=[];s._function=t;for(var p=e.replace(new RegExp(i,"gi"),l).split("<delim>"),r=0;r<n.length;r++)s[n[r]]=p[r];return s}return null}function parseOptions(e){if(null==e||""==e)return[];e=e.toLowerCase(),e=e.replace(/;/g,","),e=e.replace(/[^0-9a-z=,]/g,"");for(var t=e.split(","),o=[],n=0;n<t.length;n++){var i=t[n].split("=");2==i.length&&(o[i[0]]=i[1])}return o}function buildOnClick(){var e=document.forms[0];if(!e.ispopup.checked)return e.onclick.value="",void 0;var t="window.open('",o=e.popupurl.value;t+=o+"','",t+=e.popupname.value+"','",e.popuplocation.checked&&(t+="location=yes,"),e.popupscrollbars.checked&&(t+="scrollbars=yes,"),e.popupmenubar.checked&&(t+="menubar=yes,"),e.popupresizable.checked&&(t+="resizable=yes,"),e.popuptoolbar.checked&&(t+="toolbar=yes,"),e.popupstatus.checked&&(t+="status=yes,"),e.popupdependent.checked&&(t+="dependent=yes,"),""!=e.popupwidth.value&&(t+="width="+e.popupwidth.value+","),""!=e.popupheight.value&&(t+="height="+e.popupheight.value+","),""!=e.popupleft.value&&(t+="c"!=e.popupleft.value?"left="+e.popupleft.value+",":"left='+(screen.availWidth/2-"+e.popupwidth.value/2+")+',"),""!=e.popuptop.value&&(t+="c"!=e.popuptop.value?"top="+e.popuptop.value+",":"top='+(screen.availHeight/2-"+e.popupheight.value/2+")+',"),","==t.charAt(t.length-1)&&(t=t.substring(0,t.length-1)),t+="');",e.popupreturn.checked&&(t+="return false;"),e.onclick.value=t,""==e.href.value&&(e.href.value=o)}function setAttrib(e,t,o){var n=document.forms[0],i=n.elements[t.toLowerCase()],l=tinyMCEPopup.editor.dom;("undefined"==typeof o||null==o)&&(o="",i&&(o=i.value)),"style"==t&&(o=l.serializeStyle(l.parseStyle(o),"a")),l.setAttrib(e,t,o)}function getAnchorListHTML(e,t){var o,n,i,l=tinyMCEPopup.editor,r=l.dom.select("a"),s="";for(n=0,i=r.length;i>n;n++)""!=(o=l.dom.getAttrib(r[n],"name"))&&(s+='<option value="#'+o+'">'+o+"</option>");return""==s?"":s='<select id="'+e+'" name="'+e+'" class="mceAnchorList" onchange="this.form.'+t+'.value=this.options[this.selectedIndex].value"><option value="">---</option>'+s+"</select>"}function insertAction(){var e,t,o,n=tinyMCEPopup.editor;if(e=n.selection.getNode(),checkPrefix(document.forms[0].href),e=n.dom.getParent(e,"A"),!document.forms[0].href.value)return o=n.selection.getBookmark(),n.dom.remove(e,1),n.selection.moveToBookmark(o),tinyMCEPopup.execCommand("mceEndUndoLevel"),tinyMCEPopup.close(),void 0;if(null==e)for(n.getDoc().execCommand("unlink",!1,null),tinyMCEPopup.execCommand("mceInsertLink",!1,"#mce_temp_url#",{skip_undo:1}),t=tinymce.grep(n.dom.select("a"),function(e){return"#mce_temp_url#"==n.dom.getAttrib(e,"href")}),o=0;o<t.length;o++)setAllAttribs(e=t[o]);else setAllAttribs(e);(1!=e.childNodes.length||"IMG"!=e.firstChild.nodeName)&&(n.focus(),n.selection.select(e),n.selection.collapse(0),tinyMCEPopup.storeSelection()),tinyMCEPopup.execCommand("mceEndUndoLevel"),tinyMCEPopup.close()}function setAllAttribs(e){var t=document.forms[0],o=t.href.value.replace(/ /g,"%20"),n=getSelectValue(t,"targetlist");setAttrib(e,"href",o),setAttrib(e,"title"),setAttrib(e,"target","_self"==n?"":n),setAttrib(e,"id"),setAttrib(e,"style"),setAttrib(e,"class",getSelectValue(t,"classlist")),setAttrib(e,"rel"),setAttrib(e,"rev"),setAttrib(e,"charset"),setAttrib(e,"hreflang"),setAttrib(e,"dir"),setAttrib(e,"lang"),setAttrib(e,"tabindex"),setAttrib(e,"accesskey"),setAttrib(e,"type"),setAttrib(e,"onfocus"),setAttrib(e,"onblur"),setAttrib(e,"onclick"),setAttrib(e,"ondblclick"),setAttrib(e,"onmousedown"),setAttrib(e,"onmouseup"),setAttrib(e,"onmouseover"),setAttrib(e,"onmousemove"),setAttrib(e,"onmouseout"),setAttrib(e,"onkeypress"),setAttrib(e,"onkeydown"),setAttrib(e,"onkeyup"),tinyMCE.isMSIE5&&(e.outerHTML=e.outerHTML)}function getSelectValue(e,t){var o=e.elements[t];return o&&null!=o.options&&-1!=o.selectedIndex?o.options[o.selectedIndex].value:""}function getLinkListHTML(e,t,o){if("undefined"==typeof tinyMCELinkList||0==tinyMCELinkList.length)return"";var n="";n+='<select id="'+e+'" name="'+e+'"',n+=' class="mceLinkList" onchange="this.form.'+t+".value=",n+="this.options[this.selectedIndex].value;","undefined"!=typeof o&&(n+=o+"('"+t+"',this.options[this.selectedIndex].text,this.options[this.selectedIndex].value);"),n+='"><option value="">---</option>';for(var i=0;i<tinyMCELinkList.length;i++)n+='<option value="'+tinyMCELinkList[i][1]+'">'+tinyMCELinkList[i][0]+"</option>";return n+="</select>"}function getTargetListHTML(e,t){var o=tinyMCEPopup.getParam("theme_advanced_link_targets","").split(";"),n="";n+='<select id="'+e+'" name="'+e+'" onchange="this.form.'+t+".value=",n+='this.options[this.selectedIndex].value;">',n+='<option value="_self">'+tinyMCEPopup.getLang("advlink_dlg.target_same")+"</option>",n+='<option value="_blank">'+tinyMCEPopup.getLang("advlink_dlg.target_blank")+" (_blank)</option>",n+='<option value="_parent">'+tinyMCEPopup.getLang("advlink_dlg.target_parent")+" (_parent)</option>",n+='<option value="_top">'+tinyMCEPopup.getLang("advlink_dlg.target_top")+" (_top)</option>";for(var i=0;i<o.length;i++){var l,r;""!=o[i]&&(l=o[i].split("=")[0],r=o[i].split("=")[1],n+='<option value="'+l+'">'+r+" ("+l+")</option>")}return n+="</select>"}tinyMCEPopup.requireLangPack();var templates={"window.open":"window.open('${url}','${target}','${options}')"};preinit(),tinyMCEPopup.onInit.add(init);