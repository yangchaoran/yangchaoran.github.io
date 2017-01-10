 var width=750;
 var fontSize=100;
    function fontsize () {
        var relWidth=document.documentElement.clientWidth;
        var relFontSize=relWidth*fontSize/width
        document.getElementsByTagName("html")[0].style.fontSize=relFontSize+"px";
    }
    fontsize();
    window.onresize=fontsize;