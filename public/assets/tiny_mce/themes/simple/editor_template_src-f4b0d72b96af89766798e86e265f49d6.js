!function(){var e=tinymce.DOM;tinymce.ThemeManager.requireLangPack("simple"),tinymce.create("tinymce.themes.SimpleTheme",{init:function(t,d){var i=this,n=["Bold","Italic","Underline","Strikethrough","InsertUnorderedList","InsertOrderedList"],r=t.settings;i.editor=t,t.contentCSS.push(d+"/skins/"+r.skin+"/content.css"),t.onInit.add(function(){t.onNodeChange.add(function(e,t){tinymce.each(n,function(d){t.get(d.toLowerCase()).setActive(e.queryCommandState(d))})})}),e.loadCSS((r.editor_css?t.documentBaseURI.toAbsolute(r.editor_css):"")||d+"/skins/"+r.skin+"/ui.css")},renderUI:function(t){var d,i,n,r=this,a=t.targetNode,o=r.editor,c=o.controlManager;return a=e.insertAfter(e.create("span",{id:o.id+"_container","class":"mceEditor "+o.settings.skin+"SimpleSkin"}),a),a=n=e.add(a,"table",{cellPadding:0,cellSpacing:0,"class":"mceLayout"}),a=i=e.add(a,"tbody"),a=e.add(i,"tr"),a=d=e.add(e.add(a,"td"),"div",{"class":"mceIframeContainer"}),a=e.add(e.add(i,"tr",{"class":"last"}),"td",{"class":"mceToolbar mceLast",align:"center"}),i=r.toolbar=c.createToolbar("tools1"),i.add(c.createButton("bold",{title:"simple.bold_desc",cmd:"Bold"})),i.add(c.createButton("italic",{title:"simple.italic_desc",cmd:"Italic"})),i.add(c.createButton("underline",{title:"simple.underline_desc",cmd:"Underline"})),i.add(c.createButton("strikethrough",{title:"simple.striketrough_desc",cmd:"Strikethrough"})),i.add(c.createSeparator()),i.add(c.createButton("undo",{title:"simple.undo_desc",cmd:"Undo"})),i.add(c.createButton("redo",{title:"simple.redo_desc",cmd:"Redo"})),i.add(c.createSeparator()),i.add(c.createButton("cleanup",{title:"simple.cleanup_desc",cmd:"mceCleanup"})),i.add(c.createSeparator()),i.add(c.createButton("insertunorderedlist",{title:"simple.bullist_desc",cmd:"InsertUnorderedList"})),i.add(c.createButton("insertorderedlist",{title:"simple.numlist_desc",cmd:"InsertOrderedList"})),i.renderTo(a),{iframeContainer:d,editorContainer:o.id+"_container",sizeContainer:n,deltaHeight:-20}},getInfo:function(){return{longname:"Simple theme",author:"Moxiecode Systems AB",authorurl:"http://tinymce.moxiecode.com",version:tinymce.majorVersion+"."+tinymce.minorVersion}}}),tinymce.ThemeManager.add("simple",tinymce.themes.SimpleTheme)}();