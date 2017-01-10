$(function(){
		var count=10;
		do{
			$(".scene").empty()
			for (var i = 0; i < 10; i++) {
				for (var j = 0; j <10 ; j++) {
					var lei=Math.random()>0.9
					$("<div></div>").addClass(function(){
						return "block"+(lei?" lei":"")
					})
					.mousedown(mousedownhandler)
					.data("pos",{x:i,y:j})
					.attr("id",i+"-"+j)
					.appendTo(".scene")
				};
			};
		}while($(".lei").length!=10)
		function mousedownhandler(e){
			e.preventDefault()
			if(e.which==1){
				leftclick.call(this)
			}else if(e.which==3){
				rightclick.call(this)
			}
		}
		function leftclick(){
			if($(this).hasClass("flag")){
				return
			}
			if($(this).hasClass("lei")){
				lose()
				
			}else{
				$(this).addClass("num")
				var n=0;
				var pos=$(this).data("pos");
				for (var i = pos.x-1; i <=pos.x+1; i++) {
					for (var j = pos.y-1; j <= pos.y+1; j++) {
						if($("#"+i+"-"+j).hasClass("lei")){
							n++;
						}
						
					};
				};
				$(this).text(n)
				if(n==0){
					for (var i = pos.x-1; i <=pos.x+1; i++) {
						for (var j = pos.y-1; j <= pos.y+1; j++) {
							if($("#"+i+"-"+j).length!=0){
								if(!$("#"+i+"-"+j).data("check")){
									$("#"+i+"-"+j).data("check",true);
									leftclick.call($("#"+i+"-"+j)[0])

								}
							}
							
						};
					};
				}
			}
		}
		function rightclick(){
			if($(this).hasClass("num")){
				return
			}

			if($(this).hasClass("flag")){
				$(".flagbox").text(function(index,nn){
					var nn=parseInt(nn);
					return ++nn;
				})
			}else{
				if($(".flag").length==10){
					return
				}
				$(".flagbox").text(function(index,nn){
					var nn=parseInt(nn);
					return --nn;
				})
				
			}
			$(this).toggleClass("flag")
			if($(".flag").filter(".lei").length==10){
				alert("success");
				clearInterval(t);
			}
		}
		$(document).on("contextmenu",false)
		var t=setInterval(time,1000)
		function time(){
			$(".time").text(function(index,num){
				var num=parseInt(num);
				return --num;
			})
			if($(".time").text()==0){
				lose()
			}
		}
		function lose(){
			$(".lei").addClass("show");
			alert("lose");
			clearInterval(t);
			
			$(".block:not(.lei)").addClass("num");
			$(".scene").css("transform","none").css({
				border:"none",
				boxShadow:"none"
			});
			$(".block").each(function(index){
				$(this).css({border:0});
				var left=Math.random()*600-300;
				var top=Math.random()*200-100;
				var deg=Math.random()*90;
				$(this).animate({left:left,top:top},500,function(){
					$(this).css("transform","rotate("+deg+"deg)");
				})
			})
		}
		
	})