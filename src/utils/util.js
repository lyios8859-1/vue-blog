/**
 * 工具库
 */
class Util{
    /**
    搜索的关键字高亮
    hightlightSerach(searchtext, id){
    var key1 = keyLight('contentbox', 'sou')
    var key2 = keyLight('contentbox', '一', 'red')
   */
    keyLight(id, key, bgColor){
        var oDiv = document.getElementById(id);
        var oChilds  = oDiv.childNodes;
        var bgColor = bgColor || "orange";
        var sKey = "<span style='background-color: "+bgColor+";'>"+key.Trim()+"</span>";
        // 目标文本
        var objtext = oDiv.innerHTML;
        var rStr = new RegExp(key, "g");
        if(!rStr.test(objtext)) {
            alert('Can\'t find!!');
            return;
        } else {
            for(var i =0; i<oChilds.length-1; i++){
                if(oChilds[i].nodeType == 3 && /\s/.test(oChilds[i].nodeValue)){  //删除空白的节点
                    oChilds[i].parentNode.removeChild(oChilds[i]);
                }
                oChilds[i].innerHTML = oChilds[i].innerHTML.replace(rStr,sKey);  //替换key
            }
        }
    }
}
 /**
  * 去空格
  */
String.prototype.Trim = function(){
    return this.replace(/\s/gi,"")
}
export default new Util();

// window.onload = function(){
//     document.getElementById("searchbtn").onclick = function(){
//          let searchtext = document.getElementById("search").value.Trim();
//         searchTarget(searchtext);
//     }
// }