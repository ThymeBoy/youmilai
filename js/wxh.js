var p_arr={"name":['小赵','兰勇','珍珍','小涛'],   //,'小符','阿成','珍珍','小涛'    '小赵','兰勇','小符','珍珍','小涛'    'A~云南自由行~小黎'
"tel":['17313093557','17313099329','18583683990','13281099283']};  //  ,'13086678517','16602830612','18583683990','13281099283'    '17313093557','17313099329','13086678517','18583683990','13281099283'  'wxid_e14h4eygczqz22']
var rand = $.cookie('rand'); 
if (!rand) {
    rand = Math.floor((Math.random()*p_arr.tel.length));
    $.cookie('rand', rand, {
        expires: 360
    });
} else {
	total_num = p_arr.tel.length;
	if(rand > total_num ){
		rand = Math.floor((Math.random()*p_arr.tel.length));
		$.cookie('rand', rand, {
		  expires: 360
		});
	}else{
		rand = rand;
	}
}
$(function(){
    
	var stxlwx = p_arr.tel[rand]
	var usernames = p_arr.name[rand];
	var zizhi="";
	$(".kefuImg").attr('src','images/' + stxlwx +'.jpg');
	$(".wx_href").attr("href","tel:"+stxlwx); 
	$(".wx_href").css("cursor","pointer"); 
	$(".randweixin").html(stxlwx); 
	$(".randweixin").css("color","#E53333"); 
	$(".randname").html(usernames); 
	$(".banquan").html(zizhi);
	
   
});

	
	