/**
 *针对1.ecas外围系统在用户失效自动退出到ecas系统登录页面
 *2.ecas外围系统服务器宕机时提示相应信息。
 *提供此公共js方法监听所有ajax监听
 *autour chenjian
 *2015-8-19
 */

/**
 *所有ajax请求过滤，是否请求失效
 */
var time;
var NextTime;//间隔时间在3分钟内再次网络异常，不弹出提示信息
$(document).ajaxComplete(function(event, xhr, settings){
	var value = xhr.responseText;
	if(xhr.status==0&&xhr.statusText=='error'){
			//alert('网络异常，请检查网络');
		if(time){
			NextTime=new Date().getTime();
			if(NextTime-time>10000){
				time=NextTime;
				//如果前台框架不是erajs框架请自行实现弹出信息
				var actionUrl=getActionUrl(event.target.baseURI,settings.url);
				showMsssage(actionUrl);
			}
		}
		else {
			time=new Date().getTime();
			//如果前台框架不是erajs框架请自行实现弹出信息
			var actionUrl=getActionUrl(event.target.baseURI,settings.url);
			showMsssage(actionUrl);
		}
	}
	else if(value.indexOf('ecas.core.user.notLogin')>=0){
		redirectLogin(value);
    }
});	


/*
 * 
 * 跳转登录页面
 * **/
function redirectLogin(result){
	var obj=$.parseJSON(result);
    if(obj){
        if(obj.message&&obj.message=='ecas.core.user.notLogin'){
        	if(obj.ecasUrl) {
        		top.location.href=obj.ecasUrl;
        	} else {
        		alert('not LoginUrl');
        	}
        }
    }
}

/**
 *显示信息
 *
 */
function showMsssage(url){
	var messageInfo=url+"<br/>"+erajs.String.format(erajs.getMessage('showMessage.NETWORK_ERROR'));
	erajs.Messager.show({
        msg:messageInfo,
        showType:'slide',
        timeout:5000
    });
}

/**
 *截取url 获得请求的真实路径
 */
function getActionUrl(baseUrl,url){
	   if(baseUrl&&url&&url.indexOf('../')>-1){
		  // var baseUrl="http://192.168.30.66:8080/server/login/html/login.html";
	      // var url = "../../login.action";
           var actionUrl=url.split("../");
           var arrbaseUrl=baseUrl.split("//");
           var arrbaseUrl2=arrbaseUrl[1].split("/");
           var urllen=actionUrl.length;
           var parth=arrbaseUrl2.slice(0,arrbaseUrl2.length-urllen).join("/");
           var actionParth=arrbaseUrl[0]+'//'+parth+'/'+actionUrl[urllen-1];
           return actionParth;
       }
       else{
    	   return url;
       }
}

/**
 *解决打开新增，修改窗口不能跳到登录页面bug
 *
 */
//备注：公司老版本的ui框架是不需要加入此‘extend’方法的
$.extend(erajs.ui.Window.defaults,{
	extractor:function(data){
		 var pattern = /<body[^>]*>((.|[\n\r])*)<\/body>/im;
         var matches = pattern.exec(data);
         var result = null;
         if (matches) {
             result = matches[1];
         } else {
             result = data;
         }
         if(result.indexOf('ecas.core.user.notLogin')>=0){
        	 redirectLogin(result);
         }	
         return result;
	}
});



