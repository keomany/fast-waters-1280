Spud="undefined"==typeof Spud?{}:Spud,Spud.Admin="undefined"==typeof Spud.Admin?{}:Spud.Admin,Spud.Admin.Dashboard=new function(){var e=this;e.editMode=!1,e.mouseIsDown=!1,e.init=function(){$(".admin_application").bind("mousedown",e.mouseDown),$(".admin_application").bind("mouseup",e.mouseUp),$(".admin_application").bind("click",e.mouseClick),$("#dashboard-editsave").click(e.saveDashboard),$("#dashboard-editcancel").click(e.cancelDashboard),$(".sortable").sortable({disabled:!0})},e.mouseDown=function(){e.mouseIsDown=!0,0==e.editMode&&setTimeout(function(){e.mouseIsDown&&e.enableEditMode()},1e3)},e.mouseClick=function(o){return e.editMode?(o.stopPropagation(),!1):void 0},e.mouseUp=function(){e.mouseIsDown=!1},e.enableEditMode=function(){e.editMode=!0,$(".admin_application").addClass("jiggly"),$(".sortable").sortable("enable"),$("#dashboard-editmode").show()},e.saveDashboard=function(){e.saveOrder(),e.disableEditMode()},e.cancelDashboard=function(){$(".sortable").sortable("cancel"),e.disableEditMode()},e.disableEditMode=function(){e.editMode=!1,$("#dashboard-editmode").hide(),$(".admin_application").removeClass("jiggly"),$(".sortable").sortable("disable")},e.saveOrder=function(){for(var e=$(".sortable").sortable("toArray"),o=0;o<e.length;o++)e[o]=e[o].replace("application_name_","");var a=e.join(",");console.log(a),jQuery.ajax("/spud/save_key?key=app_order&value="+a)}};