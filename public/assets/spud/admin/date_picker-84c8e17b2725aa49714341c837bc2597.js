spud.admin.date_picker={},function(){var e=spud.admin.date_picker;parsePickerDate=function(e){var t=new Date,a=e.split(" "),r=a[0].split("-");return r.length>=3&&(t=new Date(parseInt(r[0],10),parseInt(r[1],10)-1,parseInt(r[2],10))),t},e.init=function(e){e="undefined"==typeof e?".spud_form_date_picker":e,$(e).each(function(){var e=$(this),t=e.attr("name");e.attr("name",t.replace("[","_").replace("]","")),e.datepicker({format:"yyyy-mm-dd",autoclose:!0}),e.val(e.val().split(" ")[0]);var a=parsePickerDate(e.val()),r=$("<input type='hidden'/>");r.attr("name",t.replace("]","(1i)]")),r.val(a.getFullYear());var n=$("<input type='hidden'/>");n.attr("name",t.replace("]","(2i)]")),n.val(a.getMonth()+1);var i=$("<input type='hidden'/>");i.attr("name",t.replace("]","(3i)]")),i.val(a.getUTCDate()),r.insertAfter(e),n.insertAfter(e),i.insertAfter(e),e.bind("change",function(){var e=parsePickerDate($(this).val());r.val(e.getFullYear()),n.val(e.getMonth()+1),i.val(e.getUTCDate())})})}}();