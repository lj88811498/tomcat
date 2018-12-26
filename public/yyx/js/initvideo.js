 init();
 
 function init() {
	
	//需要自动播放就在vedio上添加 autoplay='autoplay'
	var pre = "<li><div><video controls='controls' loop='loop' width='250' height='310'><source src='http://47.104.162.57:8083/";
        var fix = ".mp4' type='video/mp4' /> Your browser does not support the video tag.</video></div></li>";            
	 
	//第一页
	var temp = '';

	for (i = 1; i<= 8; i ++) {

		temp  += pre + i + fix;
	
	}
	
	$("#main").html(temp); 


	//第二页
	var temp2 = '';

	for (i = 9; i<= 16; i ++) {

		temp2  += pre + i + fix;
	
	}
	
	$("#spirit").html(temp2); 

	//第三页
	var temp3 = '';

	for (i = 17; i<= 24; i ++) {

		temp3  += pre + i + fix;
	
	}
	
	$("#magic").html(temp3); 

	//第四页
	var temp4 = '';

	for (i = 25; i<= 32; i ++) {

		temp4  += pre + i + fix;
	
	}

	$("#christ").html(temp4); 
	

	//第五页，只有35个
	var temp5 = '';

	for (i = 33; i<= 35; i ++) {

		temp5  += pre + i + fix;
	
	}

	$("#bless").html(temp5); 
	 
 }
