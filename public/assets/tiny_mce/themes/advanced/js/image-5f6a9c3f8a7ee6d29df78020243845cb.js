var ImageDialog={preInit:function(){var e;tinyMCEPopup.requireLangPack(),(e=tinyMCEPopup.getParam("external_image_list_url"))&&document.write('<script language="javascript" type="text/javascript" src="'+tinyMCEPopup.editor.documentBaseURI.toAbsolute(e)+'"></script>')},init:function(){var t=document.forms[0],i=tinyMCEPopup.editor;document.getElementById("srcbrowsercontainer").innerHTML=getBrowserHTML("srcbrowser","src","image","theme_advanced_image"),isVisible("srcbrowser")&&(document.getElementById("src").style.width="180px"),e=i.selection.getNode(),this.fillFileList("image_list",tinyMCEPopup.getParam("external_image_list","tinyMCEImageList")),"IMG"==e.nodeName&&(t.src.value=i.dom.getAttrib(e,"src"),t.alt.value=i.dom.getAttrib(e,"alt"),t.border.value=this.getAttrib(e,"border"),t.vspace.value=this.getAttrib(e,"vspace"),t.hspace.value=this.getAttrib(e,"hspace"),t.width.value=i.dom.getAttrib(e,"width"),t.height.value=i.dom.getAttrib(e,"height"),t.insert.value=i.getLang("update"),this.styleVal=i.dom.getAttrib(e,"style"),selectByValue(t,"image_list",t.src.value),selectByValue(t,"align",this.getAttrib(e,"align")),this.updateStyle())},fillFileList:function(e,t){var i=tinyMCEPopup.dom,a=i.get(e);t="function"==typeof t?t():window[t],t&&t.length>0?(a.options[a.options.length]=new Option("",""),tinymce.each(t,function(e){a.options[a.options.length]=new Option(e[0],e[1])})):i.remove(i.getParent(e,"tr"))},update:function(){var e,t=document.forms[0],i=t.elements,a=tinyMCEPopup.editor,r={};return tinyMCEPopup.restoreSelection(),""===t.src.value?("IMG"==a.selection.getNode().nodeName&&(a.dom.remove(a.selection.getNode()),a.execCommand("mceRepaint")),tinyMCEPopup.close(),void 0):(a.settings.inline_styles?r.style=this.styleVal:r=tinymce.extend(r,{vspace:i.vspace.value,hspace:i.hspace.value,border:i.border.value,align:getSelectValue(t,"align")}),tinymce.extend(r,{src:t.src.value.replace(/ /g,"%20"),alt:t.alt.value,width:t.width.value,height:t.height.value}),e=a.selection.getNode(),e&&"IMG"==e.nodeName?(a.dom.setAttribs(e,r),tinyMCEPopup.editor.execCommand("mceRepaint"),tinyMCEPopup.editor.focus()):(tinymce.each(r,function(e,t){""===e&&delete r[t]}),a.execCommand("mceInsertContent",!1,tinyMCEPopup.editor.dom.createHTML("img",r),{skip_undo:1}),a.undoManager.add()),tinyMCEPopup.close(),void 0)},updateStyle:function(){var e,t,i=tinyMCEPopup.dom,a=document.forms[0];tinyMCEPopup.editor.settings.inline_styles&&(e=tinyMCEPopup.dom.parseStyle(this.styleVal),t=getSelectValue(a,"align"),t?"left"==t||"right"==t?(e["float"]=t,delete e["vertical-align"]):(e["vertical-align"]=t,delete e["float"]):(delete e["float"],delete e["vertical-align"]),t=a.border.value,t||"0"==t?e.border="0"==t?"0":t+"px solid black":delete e.border,t=a.hspace.value,t?(delete e.margin,e["margin-left"]=t+"px",e["margin-right"]=t+"px"):(delete e["margin-left"],delete e["margin-right"]),t=a.vspace.value,t?(delete e.margin,e["margin-top"]=t+"px",e["margin-bottom"]=t+"px"):(delete e["margin-top"],delete e["margin-bottom"]),e=tinyMCEPopup.dom.parseStyle(i.serializeStyle(e),"img"),this.styleVal=i.serializeStyle(e,"img"))},getAttrib:function(e,t){var i,a,r=tinyMCEPopup.editor,n=r.dom;if(r.settings.inline_styles)switch(t){case"align":if(i=n.getStyle(e,"float"))return i;if(i=n.getStyle(e,"vertical-align"))return i;break;case"hspace":if(i=n.getStyle(e,"margin-left"),a=n.getStyle(e,"margin-right"),i&&i==a)return parseInt(i.replace(/[^0-9]/g,""));break;case"vspace":if(i=n.getStyle(e,"margin-top"),a=n.getStyle(e,"margin-bottom"),i&&i==a)return parseInt(i.replace(/[^0-9]/g,""));break;case"border":if(i=0,tinymce.each(["top","right","bottom","left"],function(t){return t=n.getStyle(e,"border-"+t+"-width"),!t||t!=i&&0!==i?(i=0,!1):(t&&(i=t),void 0)}),i)return parseInt(i.replace(/[^0-9]/g,""))}return(i=n.getAttrib(e,t))?i:""},resetImageData:function(){var e=document.forms[0];e.width.value=e.height.value=""},updateImageData:function(){var e=document.forms[0],t=ImageDialog;""==e.width.value&&(e.width.value=t.preloadImg.width),""==e.height.value&&(e.height.value=t.preloadImg.height)},getImageData:function(){var e=document.forms[0];this.preloadImg=new Image,this.preloadImg.onload=this.updateImageData,this.preloadImg.onerror=this.resetImageData,this.preloadImg.src=tinyMCEPopup.editor.documentBaseURI.toAbsolute(e.src.value)}};ImageDialog.preInit(),tinyMCEPopup.onInit.add(ImageDialog.init,ImageDialog);