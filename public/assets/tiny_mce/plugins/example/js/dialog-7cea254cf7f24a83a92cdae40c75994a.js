tinyMCEPopup.requireLangPack();var ExampleDialog={init:function(){var o=document.forms[0];o.someval.value=tinyMCEPopup.editor.selection.getContent({format:"text"}),o.somearg.value=tinyMCEPopup.getWindowArg("some_custom_arg")},insert:function(){tinyMCEPopup.editor.execCommand("mceInsertContent",!1,document.forms[0].someval.value),tinyMCEPopup.close()}};tinyMCEPopup.onInit.add(ExampleDialog.init,ExampleDialog);