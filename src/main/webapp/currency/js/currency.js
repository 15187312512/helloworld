// 修改表单 控件控制
function formEditAction(form) {
	form.attr('action', '../../updateCurrency.action');
	var row = erajs.getCmp('currencyGrid').getSelected();
	$('#quondamCyCode').attr('value', row.cyCode);
}

// 新增表单 控件控制
function formAddAction() {
	erajs.getCmp('statusBox').select('0');
	erajs.getCmp('statusBox').disable();
	erajs.getCmp('statusBox').setValue('0');
}
// 扩展自定义验证规则
$.validator.addMethod("testRule", function(value, element) {
	var fax = /(^[a-zA-Z][a-zA-Z0-9]{0,4})/;
	return this.optional(element) || (fax.test(value));
}, "必须为英文字母");

function addCyCode(param){
	
	
}