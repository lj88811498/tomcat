 init();
 
 function init() {
	
	//��Ҫ�Զ����ž���vedio����� autoplay='autoplay'
	var pre = "<li><div><video controls='controls'  width='250' height='310'><source src='http://47.104.162.57:8083/";
        var fix = ".mp4' type='video/mp4' /> Your browser does not support the video tag.</video></div></li>";            
	 
	//��һҳ
	var temp = '';

	for (i = 1; i<= 8; i ++) {

		temp  += pre + i + fix;
	
	}
	
	$("#main").html(temp); 


	//�ڶ�ҳ
	var temp2 = '';

	for (i = 9; i<= 16; i ++) {

		temp2  += pre + i + fix;
	
	}
	
	$("#spirit").html(temp2); 

	//����ҳ
	var temp3 = '';

	for (i = 17; i<= 24; i ++) {

		temp3  += pre + i + fix;
	
	}
	
	$("#magic").html(temp3); 

	
	//����ҳ
	var temp4 = '';

	for (i = 25; i<= 32; i ++) {

		temp4  += pre + i + fix;
	
	}

	$("#christ").html(temp4); 
	

	//����ҳ��ֻ��35��
	var temp5 = '';

	for (i = 33; i<= 35; i ++) {

		temp5  += pre + i + fix;
	
	}

	$("#bless").html(temp5); 
	
	 
 }