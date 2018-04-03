/*
 This file is part of EraUI 1.0

 Copyright (c) 2009-2013 www.erayt.com. All rights reserved.

 Licensed under the GPL license: http://www.gnu.org/licenses/gpl.txt
 To use it on other terms please contact us: chengqiuhua@erayt.com

 * Will load eraui.min.js (minified) otherwise
 */
var bootstrap = (function() {

    function getcookie(name) {
        var cookie_start = document.cookie.indexOf(name);
        var cookie_end = document.cookie.indexOf(";", cookie_start);
        return cookie_start == -1 ? '' : unescape(document.cookie.substring(
                cookie_start + name.length + 1,
            (cookie_end > cookie_start ? cookie_end
                : document.cookie.length)));
    }
    function setcookie(cookieName, cookieValue, seconds, path, domain, secure) {
        var expires = new Date();
        expires.setTime(expires.getTime() + seconds);
        document.cookie = escape(cookieName) + '=' + escape(cookieValue)
            + (expires ? '; expires=' + expires.toGMTString() : '')
            + (path ? '; path=' + path : '/')
            + (domain ? '; domain=' + domain : '')
            + (secure ? '; secure' : '');
    }

    var scripts = document.getElementsByTagName('script'),
        defaultTheme = 'grayctms', lang = 'zh_CN',suffix = '.min',  path, i, ln, scriptSrc, match;

    var themeCookie = getcookie('theme');
    if (themeCookie) {
        defaultTheme = themeCookie;
    }


    for (i = 0, ln = scripts.length; i < ln; i++) {
        scriptSrc = scripts[i].src;
        var re = /bootstrap\.js$/;
        match = scriptSrc.match(re);
        if (match) {
            path = scriptSrc.substring(0, scriptSrc.length - match[0].length);
            break;
        }
    }

    var erajsPath = '../../erajs/';

    document.write('<script type="text/javascript" src="' + erajsPath
        + 'jquery-1.8.0.min.js"></script>');

    document.write('<link rel="stylesheet" type="text/css" href="' + erajsPath
        + 'themes/' + defaultTheme + '/ui/eraui.min.css">');

    document.write('<link rel="stylesheet" type="text/css" href="' + erajsPath
        + 'themes/'+defaultTheme+'/common/common'+ suffix + '.css">');

   /* document.write('<link rel="stylesheet" type="text/css" href="' + erajsPath
        + 'themes/icon'+ suffix + '.css">');*/
    document.write('<link rel="stylesheet" type="text/css" href="' + erajsPath
			+ 'themes/'+ defaultTheme +'/icons/icon.min.css">');

    document.write('<script type="text/javascript" charset="UTF-8" src="'
        + erajsPath + 'erajs.all.min.js"></script>');

    //框架本地化配置文件
    document.write('<script type="text/javascript" charset="UTF-8" src="'
        + erajsPath + 'locale/framework/lang-' + lang + '.min.js"></script>');

    //验证框架本地化文件
    document.write('<script type="text/javascript" charset="UTF-8" src="'
        + erajsPath + 'locale/validate/lang-' + lang + '.min.js"></script>');

    //UI组件本地化文件
    document.write('<script type="text/javascript" charset="UTF-8" src="'
        + erajsPath + 'locale/ui/lang-' + lang + '.min.js"></script>');

    //消息本地化配置文件
    //document.write('<script type="text/javascript" src="../locale/message-' + lang + '.js"></script>');

    document.write('<script type="text/javascript" charset="UTF-8" src="'
        + path + 'ui-init.js"></script>');

    return {
        path : path,
        defaultTheme : defaultTheme,
        setcookie : setcookie
    }
})();
