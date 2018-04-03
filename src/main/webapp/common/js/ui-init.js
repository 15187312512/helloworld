/**
 * Created by Scm on 2014/8/7.
 */

/**
 *DataGrid表格列默认属性 
 */
/*$.extend(erajs.ui.Datagrid.Column,{
	align:'center'
});*/

/**
 *DataGrid组件定义默认属性 
 */
$.extend(erajs.ui.Datagrid.defaults,{
    rownumbers:true,
    fit : true,
    singleSelect:true,
    method:'post',
    striped : true,
    pagination : true,
    pageList : [15, 20, 30, 40, 50],
    loadFilter : function(rslt){
    	if(rslt.hasOwnProperty('success')){
    		var success = rslt.success;
            if(!success){
            	var msg = rslt.message;
            	if(msg){
            		erajs.Extra.showWarnInfo(erajs.parseResultMessage(msg));
            	}
                return {total : 0,rows : []};
            }
            var data = rslt.data;
            return {
                total : data.result.total,
                rows : data.result.datals
            }; 
    	}else{
    		if(rslt.hasOwnProperty('rows')){
    			var rows = rslt.rows;
    			var total = rslt.total;
    			return {
    				total : total,
    				rows : rows
    			}
    		}
    	}
     }
});

/**
 *combobox组件定义默认属性 
 */
$.extend(erajs.ui.Combobox.defaults,{
    panelHeight:'auto',
    width:182,
    height:22
});

/**
 *Window组件定义默认属性 
 */
$.extend(erajs.ui.Window.defaults,{
    modal:true,
    maximizable:false,
    minimizable:false,
    collapsible:false,
    closed:false
});

/**
 *Dialog组件定义默认属性 
 */
$.extend(erajs.ui.Dialog.defaults,{
    modal:true,
    maximizable:false,
    minimizable:false,
    collapsible:false,
    closed:false
});

/**
*Tabs组件定义默认属性 
*/
$.extend(erajs.ui.Tabs.defaults,{
  fit:true
});

/**
*Layout组件定义默认属性 
*/
$.extend(erajs.ui.Layout.defaults,{
  fit:true
});

/**
*textBox组件定义默认属性 
*/
/*$.extend(erajs.ui.Textbox.defaults,{
  width:'100%'
});*/


/**
*重写事件打开窗口方式
*/
erajs.apply(erajs.framework.Events,{
	//taskWinOpenWith:'inside-iframe'
});

/**
*重写按钮配置
*/
/*$.extend(erajs.Messager.message.framework.eventsCfg,{
	eventHandleBtns : [{
		text : "确认33",
		type : "confirm",
		skipValidate : !1
	}, {
		text : "拒绝33",
		type : "reject"
	}, {
		text : "回退33",
		type : "reback"
	}, {
		text : "取消33",
		type : "cancle"
	} ]
});*/

