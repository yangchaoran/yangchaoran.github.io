function Draw(cobj, setting) {
    this.cobj = cobj;
    this.type = setting.type || "stroke";
    this.color = setting.color || "#000";
    this.width = setting.width || "1";
    this.poly = setting.poly || 3;
}
Draw.prototype = {
    init: function () {
        this.cobj.strokeStyle = this.color;
        this.cobj.fillStyle = this.color;
        this.cobj.lineWidth = this.width;
        this.cobj.poly = this.poly;
    },
    rect: function (x, y, x1, y1) {
        this.init();
        this.cobj.beginPath();
        this.cobj.rect(x, y, x1 - x, y1 - y);
        if (this.type == "stroke") {
            this.cobj.stroke();
        } else {
            this.cobj.fill();
        }
    },
    circle: function (x, y, x1, y1) {
        var r = Math.sqrt((x1 - x) * (x1 - x) - (y1 - y) * (y1 - y));
        this.init();
        this.cobj.beginPath();
        this.cobj.arc(x, y, r, 0, Math.PI * 2, true)
        if (this.type == "stroke") {
            this.cobj.stroke();
        } else {
            this.cobj.fill();
        }
    },
    line: function (x, y, x1, y1) {
        this.init();
        this.cobj.beginPath();
        this.cobj.moveTo(x, y);
        this.cobj.lineTo(x1, y1);
        if (this.type == "stroke") {
            this.cobj.stroke();
        } else {
            this.cobj.fill();
        }
    },
    polygon: function (x, y, x1, y1) {
        var cobj = this.cobj, poly = this.poly;
        var r = Math.sqrt((x1 - x) * (x1 - x) - (y1 - y) * (y1 - y));
        var px = Math.cos(Math.PI / poly) * r,
            py = Math.sin(Math.PI / poly) * r;
        this.init();
        //console.log(poly);
        cobj.beginPath();
        for (i = 0; i < poly; i++) {
            cobj.save();
            cobj.translate(x, y);
            cobj.rotate(i * 2 / poly * Math.PI + 90 * Math.PI / 180);
            cobj.moveTo(px, py);
            cobj.lineTo(px, -py);
            cobj.stroke();
            cobj.restore();
            console.log(poly);
        }
        cobj.restore();
    },
    pencil: function (x, y, x1, y1) {
        this.init();
        var cobj = this.cobj;
        // cobj.beginPath();
        // cobj.moveTo(x1,y1);
        cobj.lineTo(x1, y1);
        cobj.stroke();
        cobj.restore();
    },
    eraser: function (x, y, x1, y1) {
        this.init();
        var cobj = this.cobj;
        // cobj.moveTo(x,y);
        cobj.clearRect(x1, y1, 20, 20);
        cobj.save();
    },
    cut: function (x, y, x1, y1) {
        var cobj = this.cobj;
        cobj.save();
        cobj.lineWidth = 1;
        cobj.strokeStyle = "#999";
        cobj.setLineDash([4, 2]);
        cobj.strokeRect(x, y, x1 - x, y1 - y);
        cobj.restore();
    },
    copy: function (x, y, x1, y1) {
        var cobj = this.cobj;
        cobj.save();
        cobj.lineWidth = 1;
        cobj.strokeStyle = "#999";
        cobj.setLineDash([4, 2]);
        cobj.strokeRect(x, y, x1 - x, y1 - y);
        cobj.restore();
    }
}
var cutflag = false;
var cutdata;
var ex, ey, ow, oh;
var arr = [];
var lex, ley, low, loh;
var step = 0;
var canvas = document.querySelector("canvas");
canvas.onmousedown = function (e) {
    ex = e.offsetX;
    ey = e.offsetY;
    var draw = new Draw(cobj, {color: newcolor, type: type1, width: size});
    if (type == "pen") {
        cobj.beginPath();
        cobj.moveTo(ex, ey);
    }
    if (copy.checked == true && step == 1) {
        arr.pop();
    }
    canvas.onmousemove = function (e) {
        ow = e.offsetX;
        oh = e.offsetY;
        if (type != "eraser") {
            cobj.clearRect(0, 0, 800, 600);
            if (arr.length != 0) {
                cobj.putImageData(arr[arr.length - 1], 0, 0, 0, 0, 800, 600);
            }
        }
        if (step == 1 && type == "cut") {
            if (copy.checked == false) {
                cobj.clearRect(lex - 1, ley - 1, low - lex + 2, loh - ley + 2)
            }
            var nx = lex + ow - ex;
            var ny = ley + oh - ey;
            if (iscopy) {
                cobj.putImageData(arr[arr.length - 2], 0, 0, 0, 0, 800, 600);
            } else {
                cobj.putImageData(cutdata, nx, ny);
            }
        } else if (type == "poly") {
            draw[type](ex, ey, ow, oh, num);
        } else {
            draw[type](ex, ey, ow, oh);
        }
    };
    canvas.onmouseup = function () {
        canvas.onmousemove = null;
        canvas.onmouseup = null;
        if (type == "cut") {
            if (step == 0) {
                step = 1;
                cutdata = cobj.getImageData(ex + 1, ey + 1, ow - ex - 2, oh - ey - 2);
                lex = ex;
                ley = ey;
                low = ow;
                loh = oh;
//                    contral.style.display="none";
            } else if (step == 1 && type == "cut") {
                step = 0;
//                   contral.style.display="flex";
            }
        }
        arr.push(cobj.getImageData(0, 0, 800, 600));
    }
}
//新建
document.querySelector(".new").onclick = function () {
    cobj.clearRect(0, 0, 800, 600);
    var arr = [];
    newk = canvas.width = prompt("宽", "");
    newg = canvas.height = prompt("高", "");
};
document.querySelector('.back').onclick = function () {
    arr.pop();
    cobj.clearRect(0, 0, 800, 600);
    cobj.putImageData(arr[arr.length - 1], 0, 0, 0, 0, 800, 600);
}
document.querySelector('.save').onclick = function () {
    alert(1)
//        var res=canvas.toDataURL("image/png");
//        location.href=res;
    location.href = canvas.toDataURL("image/png").replace("image/png", "image/octet-stream")
}
document.querySelector('.kong').onclick = function () {
    cobj.clearRect(0, 0, 800, 600);
    arr = [];
}