var designWidth=750;
var fontSize=100;
function fontsize() {
    var relWidth=document.documentElement.clientWidth;
    console.log(relWidth)
    var relFontSize=fontSize*relWidth/designWidth;
    document.getElementsByTagName("html")[0].style.fontSize=relFontSize+"px";
}
fontsize();
window.onresize=fontsize;