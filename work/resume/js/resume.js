function downloadSG(){
    html2canvas($('#appmsg'), {
        height:5000,
        onrendered: function(canvas) {
            var imgData = canvas.toDataURL('img/notice/png');
            var doc = new jsPDF('p', 'px','a3');
            //第一列 左右边距  第二列上下边距  第三列是图片左右拉伸  第四列 图片上下拉伸  
            doc.addImage(imgData, 'PNG', -9, 0,650,1500);
            doc.addPage();
            doc.addImage(imgData, 'PNG', -9, -900,650,1500);
            doc.save('test.pdf');
        }
    });
}  