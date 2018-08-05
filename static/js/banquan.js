
/*function addCopyright() {
    var Original = "本文来源：" + location.href; //修改你的网站名称
    if ("function" == typeof window.getSelection) {
        var c = window.getSelection();
        if ("Microsoft Internet Explorer" == navigator.appName && navigator.appVersion.match(/MSIE ([\d.]+)/)[1] >= 10 || "Opera" == navigator.appName) {
            var g = c.getRangeAt(0),
            h = document.createElement("span");
            h.appendChild(g.cloneContents()),
            g.insertNode(h);
            var i = h.innerHTML.replace(/(?:\n|\r\n|\r)/gi, "").replace(/<\s*script[^>]*>[\s\S]*?<\/script>/gim, "").replace(/<\s*style[^>]*>[\s\S]*?<\/style>/gim, "").replace(/<!--.*?-->/gim, "").replace(/<!DOCTYPE.*?>/gi, "");
            try {
                document.getElementsByTagName("body")[0].removeChild(h)
            } catch(f) {
                h.style.display = "none",
                h.innerHTML = ""
            }
        } else var d = "" + c;
        var e = document.getElementsByTagName("body")[0],
        f = document.createElement("div");
        f.style.position = "absolute",
        f.style.left = "-99999px",
        e.appendChild(f),
        f.innerHTML = d.replace(/([^>\r\n]?)(\r\n|\n\r|\r|\n)/g, "$1<br />$2") + "<br />" + Original,
        c.selectAllChildren(f),
        setTimeout(function() {
            e.removeChild(f)
        },
        0)
    } else if ("object" == typeof document.selection.createRange) {
        event.returnValue = !1;
        var c = document.selection.createRange().text;
        window.clipboardData.setData("Text", c + "\n" + Original)
    }
};
document.body.oncopy = addCopyright;
*/

/*
//复制内容自动添加版权信息 
 var Sys = {}; 
    var ua = navigator.userAgent.toLowerCase(); 
    if( window.ActiveXObject ) 
    { 
        document.body.oncopy=function() 
        { 
            event.returnValue = false; 
            var t=document.selection.createRange().text; 
            var s="\r\n原文出自[爱思资源网] 转载请保留原文链接:"+location.href; 
            clipboardData.setData('Text',t+'\r\n'+s); 
        } 
    } 
    else 
    { 
        function addLink() 
        { 
            var body_element = document.getElementsByTagName('body')[0]; 
            var selection; 
            selection = window.getSelection(); 
            var pagelink = "
 原文出自[爱思资源网] 转载请保留原文链接:" >+document.location.href; 
 
            var copytext = selection + pagelink; 
            var newdiv = document.createElement('div'); 
            newdiv.style.position='absolute'; 
            newdiv.style.left='-99999px'; 
            body_element.appendChild(newdiv); 
            newdiv.innerHTML = copytext; 
            selection.selectAllChildren(newdiv); 
            window.setTimeout 
            ( 
                function() 
                { 
                    body_element.removeChild(newdiv); 
                },0 
            ); 
        } 
        document.oncopy = addLink; 
    } 
*/


