function setCookie(name, value, path, domain, secure,expire)
{//{{{
    //expireµ¥Î»ÊÇÃë
    if(!expire)
    {
        expire = expire*24*60*60;//365Ìì
    }
    var Days = 365; //cookie ½«±»±£´æ 365 Ìì
    var exp  = new Date();    //new Date("December 31, 9998");
    exp.setTime(exp.getTime() + expire*1000);

    document.cookie = name + "=" + escape(value) +
        ("; expires=" + exp.toGMTString() ) +
        ((path) ? "; path=" + path : "") +
        ((domain) ? "; domain=" + domain : "") +
        ((secure) ? "; secure" : "");
}//}}}

function getCookie(name)
{//{{{
    var dc = document.cookie;
    var prefix = name + "=";
    var begin = dc.indexOf("; " + prefix);
    if (begin == -1) {
        begin = dc.indexOf(prefix);
        if (begin != 0) return null;
    } else {
        begin += 2;
    }
    var end = document.cookie.indexOf(";", begin);
    if (end == -1) {
        end = dc.length;
    }
    return unescape(dc.substring(begin + prefix.length, end));
}//}}}

function deleteCookie(name, path, domain)
{//{{{
    if (getCookie(name))
    {
        document.cookie = name + "=" +
            ((path) ? "; path=" + path : "") +
            ((domain) ? "; domain=" + domain : "") +
            "; expires=Thu, 01-Jan-70 00:00:01 GMT";
    }
}//}}}


$("#change").click(function(){
    setCookie('language','en');
    location.reload();
})