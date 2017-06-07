/***************左侧菜单切换选择**************************/
function ShowPage(x){
	switch(x){
	case Page_Keting: 
		$("#Page_Keting").show();
		$("#Page_Bedroom").hide();
		$("#Page_Yangtai").hide();
		$("#Page_Kitchen").hide();
		$("#Page_Toilet").hide();
		$("#Page_Security").hide();
		break;
	case Page_Bedroom: 
		$("#Page_Keting").hide();
		$("#Page_Bedroom").show();
		$("#Page_Yangtai").hide();
		$("#Page_Kitchen").hide();
		$("#Page_Toilet").hide();
		$("#Page_Security").hide();
		break;
	case Page_Yangtai: 
		$("#Page_Keting").hide();
		$("#Page_Bedroom").hide();
		$("#Page_Yangtai").show();
		$("#Page_Kitchen").hide();
		$("#Page_Toilet").hide();
		$("#Page_Security").hide();
		break;
	case Page_Kitchen: 
		$("#Page_Keting").hide();
		$("#Page_Bedroom").hide();
		$("#Page_Yangtai").hide();
		$("#Page_Kitchen").show();
		$("#Page_Toilet").hide();
		$("#Page_Security").hide();
		break;
	case Page_Toilet: 
		$("#Page_Keting").hide();
		$("#Page_Bedroom").hide();
		$("#Page_Yangtai").hide();
		$("#Page_Kitchen").hide();
		$("#Page_Toilet").show();
		$("#Page_Security").hide();
		break;
	case Page_Security: 
		$("#Page_Keting").hide();
		$("#Page_Bedroom").hide();
		$("#Page_Yangtai").hide();
		$("#Page_Kitchen").hide();
		$("#Page_Toilet").hide();
		$("#Page_Security").show();
		break;	
	}	
}

/*********************************左侧菜单页面切换******************************************/
function Page_Show_Control(){   
	ShowPage(Page_Keting);//默认显示客厅页面
	/*********************客厅的左侧按钮控制********************************/
	$("#Keting_Keting_button").click(function(){   //显示客厅页面
		ShowPage(Page_Keting);
		
	});
	$("#Bedroom_Keting_button").click(function(){   //显示卧室页面
		ShowPage(Page_Bedroom);
	
	});
	$("#Yangtai_Keting_button").click(function(){   //显示阳台页面
		ShowPage(Page_Yangtai);
		
	});
	$("#Kitchen_Keting_button").click(function(){   //显示厨房页面
		ShowPage(Page_Kitchen);
	
	});
	$("#Toilet_Keting_button").click(function(){   //显示卫生间页面
		ShowPage(Page_Toilet);
		
	});
	$("#Security_Keting_button").click(function(){   //显示安防页面
		ShowPage(Page_Security);
	
	});
	
	/*********************卧室的左侧按钮控制********************************/
	$("#Keting_Bedroom_button").click(function(){   //显示客厅页面
		ShowPage(Page_Keting);
		
	});
	$("#Bedroom_Bedroom_button").click(function(){   //显示卧室页面
		ShowPage(Page_Bedroom);
	
	});
	$("#Yangtai_Bedroom_button").click(function(){   //显示阳台页面
		ShowPage(Page_Yangtai);
		
	});
	$("#Kitchen_Bedroom_button").click(function(){   //显示厨房页面
		ShowPage(Page_Kitchen);
	
	});
	$("#Toilet_Bedroom_button").click(function(){   //显示卫生间页面
		ShowPage(Page_Toilet);
		
	});
	$("#Security_Bedroom_button").click(function(){   //显示安防页面
		ShowPage(Page_Security);
	
	});
	
	/*********************阳台的左侧按钮控制********************************/
	$("#Keting_Yangtai_button").click(function(){   //显示客厅页面
		ShowPage(Page_Keting);
		
	});
	$("#Bedroom_Yangtai_button").click(function(){   //显示卧室页面
		ShowPage(Page_Bedroom);
	
	});
	$("#Yangtai_Yangtai_button").click(function(){   //显示阳台页面
		ShowPage(Page_Yangtai);
		
	});
	$("#Kitchen_Yangtai_button").click(function(){   //显示厨房页面
		ShowPage(Page_Kitchen);
	
	});
	$("#Toilet_Yangtai_button").click(function(){   //显示卫生间页面
		ShowPage(Page_Toilet);
		
	});
	$("#Security_Yangtai_button").click(function(){   //显示安防页面
		ShowPage(Page_Security);
	
	});
	
	/*********************厨房的左侧按钮控制********************************/
	$("#Keting_Kitchen_button").click(function(){   //显示客厅页面
		ShowPage(Page_Keting);
		
	});
	$("#Bedroom_Kitchen_button").click(function(){   //显示卧室页面
		ShowPage(Page_Bedroom);
	
	});
	$("#Yangtai_Kitchen_button").click(function(){   //显示阳台页面
		ShowPage(Page_Yangtai);
		
	});
	$("#Kitchen_Kitchen_button").click(function(){   //显示厨房页面
		ShowPage(Page_Kitchen);
	
	});
	$("#Toilet_Kitchen_button").click(function(){   //显示卫生间页面
		ShowPage(Page_Toilet);
		
	});
	$("#Security_Kitchen_button").click(function(){   //显示安防页面
		ShowPage(Page_Security);
	
	});
	
	/*********************卫生间的左侧按钮控制********************************/
	$("#Keting_Toilet_button").click(function(){   //显示客厅页面
		ShowPage(Page_Keting);
		
	});
	$("#Bedroom_Toilet_button").click(function(){   //显示卧室页面
		ShowPage(Page_Bedroom);
	
	});
	$("#Yangtai_Toilet_button").click(function(){   //显示阳台页面
		ShowPage(Page_Yangtai);
		
	});
	$("#Kitchen_Toilet_button").click(function(){   //显示厨房页面
		ShowPage(Page_Kitchen);
	
	});
	$("#Toilet_Toilet_button").click(function(){   //显示卫生间页面
		ShowPage(Page_Toilet);
		
	});
	$("#Security_Toilet_button").click(function(){   //显示安防页面
		ShowPage(Page_Security);
	
	});
	
	/*********************安防的左侧按钮控制********************************/
	$("#Keting_Security_button").click(function(){   //显示客厅页面
		ShowPage(Page_Keting);
		
	});
	$("#Bedroom_Security_button").click(function(){   //显示卧室页面
		ShowPage(Page_Bedroom);
	
	});
	$("#Yangtai_Security_button").click(function(){   //显示阳台页面
		ShowPage(Page_Yangtai);
		
	});
	$("#Kitchen_Security_button").click(function(){   //显示厨房页面
		ShowPage(Page_Kitchen);
	
	});
	$("#Toilet_Security_button").click(function(){   //显示卫生间页面
		ShowPage(Page_Toilet);
		
	});
	$("#Security_Security_button").click(function(){   //显示安防页面
		ShowPage(Page_Security);
	
	});
}


/*********************************客厅底部页面切换******************************************/
function KetingShowPage(x){
	switch(x){
	case Keting_right_Control_Page: 
		$("#Keting_right_Control_Page").show();
		$("#Keting_right_Figure_Page").hide();
		break;
	case Keting_right_Figure_Page: 
		$("#Keting_right_Control_Page").hide();
		$("#Keting_right_Figure_Page").show();
		break;
	}	
}
function Page_Show_Keting(){   
	KetingShowPage(Keting_right_Control_Page); //默认显示控制按钮页面
	/***************控制页面的按钮**********************/
	$("#Control_Page_Control_Keting_Bottom_button").click(function(){   //显示客厅的控制页面
		KetingShowPage(Keting_right_Control_Page); 
	
	});
	$("#Control_Page_Figure_Keting_Bottom_button").click(function(){   //显示曲线图的页面
		KetingShowPage(Keting_right_Figure_Page); 
	
	});
	/***************曲线图页面的按钮**********************/
	$("#Figure_Page_Control_Keting_Bottom_button").click(function(){   //显示客厅的控制页面
		KetingShowPage(Keting_right_Control_Page); 
	
	});
	$("#Figure_Page_Figure_Keting_Bottom_button").click(function(){   //显示曲线图的页面
		KetingShowPage(Keting_right_Figure_Page); 
	
	});
}

/*********************************卧室底部页面切换******************************************/
function BedroomShowPage(x){
	switch(x){
	case Bedroom_right_Control_Page: 
		$("#Bedroom_right_Control_Page").show();
		$("#Bedroom_right_Figure_Page").hide();
		break;
	case Bedroom_right_Figure_Page: 
		$("#Bedroom_right_Control_Page").hide();
		$("#Bedroom_right_Figure_Page").show();
		break;
	}	
}
function Page_Show_Bedroom(){   
	BedroomShowPage(Bedroom_right_Control_Page); //默认显示控制按钮页面
	/***************控制页面的按钮**********************/
	$("#Control_Page_Control_Bedroom_Bottom_button").click(function(){   //显示卧室的控制页面
		BedroomShowPage(Bedroom_right_Control_Page);
	
	});
	$("#Control_Page_Figure_Bedroom_Bottom_button").click(function(){   //显示曲线图的页面
		BedroomShowPage(Bedroom_right_Figure_Page);
	
	});
	/***************曲线图页面的按钮**********************/
	$("#Figure_Page_Control_Bedroom_Bottom_button").click(function(){   //显示卧室的控制页面
		BedroomShowPage(Bedroom_right_Control_Page);
	
	});
	$("#Figure_Page_Figure_Bedroom_Bottom_button").click(function(){   //显示曲线图的页面
		BedroomShowPage(Bedroom_right_Figure_Page);
	
	});
}

/*********************************厨房底部页面切换******************************************/
function KitchenShowPage(x){
	switch(x){
	case Kitchen_right_Control_Page: 
		$("#Kitchen_right_Control_Page").show();
		$("#Kitchen_right_Figure_Q2_Page").hide();
		$("#Kitchen_right_Figure_Q4_Page").hide();
		break;
	case Kitchen_right_Figure_Q2_Page: 
		$("#Kitchen_right_Control_Page").hide();
		$("#Kitchen_right_Figure_Q2_Page").show();
		$("#Kitchen_right_Figure_Q4_Page").hide();
		break;
	case Kitchen_right_Figure_Q4_Page: 
		$("#Kitchen_right_Control_Page").hide();
		$("#Kitchen_right_Figure_Q2_Page").hide();
		$("#Kitchen_right_Figure_Q4_Page").show();
		break;
	}	
}
function Page_Show_Kitchen(){   
	KitchenShowPage(Kitchen_right_Control_Page); //默认显示控制按钮页面
	/***************控制页面的按钮**********************/
	$("#Control_Page_Control_Kitchen_Bottom_button").click(function(){   //显示厨房的控制页面
		KitchenShowPage(Kitchen_right_Control_Page);
	
	});
	$("#Control_Page_Figure_Q2_Kitchen_Bottom_button").click(function(){   //显示曲线图Q2的页面
		KitchenShowPage(Kitchen_right_Figure_Q2_Page);
	
	});
	$("#Control_Page_Figure_Q4_Kitchen_Bottom_button").click(function(){   //显示曲线图Q4的页面
		KitchenShowPage(Kitchen_right_Figure_Q4_Page);
	
	});
	/***************曲线图Q2页面的按钮**********************/
	$("#Figure_Q2_Page_Control_Kitchen_Bottom_button").click(function(){   //显示厨房的控制页面
		KitchenShowPage(Kitchen_right_Control_Page);
	
	});
	$("#Figure_Q2_Page_Figure_Q2_Kitchen_Bottom_button").click(function(){   //显示曲线图Q2的页面
		KitchenShowPage(Kitchen_right_Figure_Q2_Page);
	
	});
	$("#Figure_Q2_Page_Figure_Q4_Kitchen_Bottom_button").click(function(){   //显示曲线图Q4的页面
		KitchenShowPage(Kitchen_right_Figure_Q4_Page);
	
	});
	/***************曲线图Q4页面的按钮**********************/
	$("#Figure_Q4_Page_Control_Kitchen_Bottom_button").click(function(){   //显示厨房的控制页面
		KitchenShowPage(Kitchen_right_Control_Page);
	
	});
	$("#Figure_Q4_Page_Figure_Q2_Kitchen_Bottom_button").click(function(){   //显示曲线图Q2的页面
		KitchenShowPage(Kitchen_right_Figure_Q2_Page);
	
	});
	$("#Figure_Q4_Page_Figure_Q4_Kitchen_Bottom_button").click(function(){   //显示曲线图Q4的页面
		KitchenShowPage(Kitchen_right_Figure_Q4_Page);
	
	});
}

/*********************************卫生间底部页面切换******************************************/
function ToiletShowPage(x){
	switch(x){
	case Toilet_right_Control_Page: 
		$("#Toilet_right_Control_Page").show();
		$("#Toilet_right_Figure_Page").hide();
		break;
	case Toilet_right_Figure_Page:    
		$("#Toilet_right_Control_Page").hide();
		$("#Toilet_right_Figure_Page").show();
		break;
	}	
}
function Page_Show_Toilet(){   
	ToiletShowPage(Toilet_right_Control_Page); //默认显示控制按钮页面
	/***************控制页面的按钮**********************/
	$("#Control_Page_Control_Toilet_Bottom_button").click(function(){   //显示卫生间的控制页面
		ToiletShowPage(Toilet_right_Control_Page);
	
	});
	$("#Control_Page_Figure_Toilet_Bottom_button").click(function(){   //显示曲线图的页面
		ToiletShowPage(Toilet_right_Figure_Page);
	
	});
	/***************曲线图页面的按钮**********************/
	$("#Figure_Page_Control_Toilet_Bottom_button").click(function(){   //显示卫生间的控制页面
		ToiletShowPage(Toilet_right_Control_Page);
	
	});
	$("#Figure_Page_Figure_Toilet_Bottom_button").click(function(){   //显示曲线图的页面
		ToiletShowPage(Toilet_right_Figure_Page);
	
	});
}

/*********************************电视图片效果切换******************************************/
function TVShowPicture(x){
	switch(x){
	case TV_background: 
		$("#TV_background").show();
		$("#TVOpen_picture").hide();
		$("#MVOpen_picture").hide();
		$("#MusicOpen_picture").hide();
		break;
	case TVOpen_picture:    
		$("#TV_background").hide();
		$("#TVOpen_picture").show();
		$("#MVOpen_picture").hide();
		$("#MusicOpen_picture").hide();
		break;
	case MVOpen_picture: 
		$("#TV_background").hide();
		$("#TVOpen_picture").hide();
		$("#MVOpen_picture").show();
		$("#MusicOpen_picture").hide();
		break;
	case MusicOpen_picture:    
		$("#TV_background").hide();
		$("#TVOpen_picture").hide();
		$("#MVOpen_picture").hide();
		$("#MusicOpen_picture").show();
		break;
	}	
}
function Picture_Show_TV(){   
	TVShowPicture(TV_background); //默认显示TV关闭状态的背景
	/***************控制页面的按钮**********************/
	$("#TVClose").click(function(){   //显示TV关闭状态的背景
		TVShowPicture(TV_background);
	
	});
	$("#TVOpen").click(function(){   //显示电视开的背景
		TVShowPicture(TVOpen_picture);
	});
	$("#MVOpen").click(function(){   //显示MV关闭状态的背景
		TVShowPicture(MVOpen_picture);
	
	});
	$("#MusicOpen").click(function(){   //显示Music开的背景
		TVShowPicture(MusicOpen_picture);
	});
}

/*********************************台灯效果切换******************************************/
function LEDShowPicture(x){
	switch(x){
	case VariableLed_Close_background: 
		$("#VariableLed_Close_background").show();
		$("#VariableLed_Open_background").hide();
		break;
	case VariableLed_Open_background: 
		$("#VariableLed_Close_background").hide();
		$("#VariableLed_Open_background").show();
		break;
	}	
}
function Picture_Show_LED(){   
	LEDShowPicture(VariableLed_Close_background); //默认显示台灯关闭状态的背景
	$("#ParlorLedOpen").click(function(){   
		LEDShowPicture(VariableLed_Open_background);	
	});
	$("#ParlorLedClose").click(function(){   
		LEDShowPicture(VariableLed_Close_background);
	});
	
}

/*********************************灯带效果切换******************************************/
function BigLedShowPicture(x){
	switch(x){
	case BigLed_Close_background: 
		$("#BigLed_Close_background").show();
		$("#BigLed_Open_background").hide();
		break;
	case BigLed_Open_background: 
		$("#BigLed_Close_background").hide();
		$("#BigLed_Open_background").show();
		break;
	}	
}
function Picture_Show_BigLed(){   
	BigLedShowPicture(BigLed_Close_background); //默认显示灯带关闭状态的背景
	$("#BigLedOpen").click(function(){   
		BigLedShowPicture(BigLed_Open_background);	
	});
	$("#BigLedClose").click(function(){   
		BigLedShowPicture(BigLed_Close_background);
	});
	
}

/*********************************卧室台灯效果切换******************************************/
function BedroomLedShowPicture(x){
	switch(x){
	case BedroomLed_Close_background: 
		$("#BedroomLed_Close_background").show();
		$("#BedroomLed_Open_background").hide();
		break;
	case BedroomLed_Open_background: 
		$("#BedroomLed_Close_background").hide();
		$("#BedroomLed_Open_background").show();
		break;
	}	
}
function Picture_Show_BedroomLed(){   
	BedroomLedShowPicture(BedroomLed_Close_background); //默认显示卧室台灯关闭状态的背景
	$("#BedroomLedOpen").click(function(){   
		BedroomLedShowPicture(BedroomLed_Open_background);	
	});
	$("#BedroomLedClose").click(function(){   
		BedroomLedShowPicture(BedroomLed_Close_background);
	});	
}

/*********************************厨房台灯效果切换******************************************/
function KitchenLedShowPicture(x){
	switch(x){
	case KitchenLed_Close_background: 
		$("#KitchenLed_Close_background").show();
		$("#KitchenLed_Open_background").hide();
		break;
	case KitchenLed_Open_background: 
		$("#KitchenLed_Close_background").hide();
		$("#KitchenLed_Open_background").show();
		break;
	}	
}
function Picture_Show_KitchenLed(){   
	KitchenLedShowPicture(KitchenLed_Close_background); 
	$("#KitchenLedOpen").click(function(){   
		KitchenLedShowPicture(KitchenLed_Open_background);	
	});
	$("#KitchenLedClose").click(function(){   
		KitchenLedShowPicture(KitchenLed_Close_background);
	});	
}

/*********************************厨房风扇效果切换******************************************/
function KitchenFanShowPicture(x){
	switch(x){
	case KitchenFan_Close_background: 
		$("#KitchenFan_Close_background").show();
		$("#KitchenFan_Open_background").hide();
		break;
	case KitchenFan_Open_background: 
		$("#KitchenFan_Close_background").hide();
		$("#KitchenFan_Open_background").show();
		break;
	}	
}
function Picture_Show_KitchenFan(){   
	KitchenFanShowPicture(KitchenFan_Close_background); 
	$("#KitchenFanOpen").click(function(){   
		KitchenFanShowPicture(KitchenFan_Open_background);	
	});
	$("#KitchenFanClose").click(function(){   
		KitchenFanShowPicture(KitchenFan_Close_background);
	});	
}

/*********************************卫生间台灯效果切换******************************************/
function ToiletLedShowPicture(x){
	switch(x){
	case ToiletLed_Close_background: 
		$("#ToiletLed_Close_background").show();
		$("#ToiletLed_Open_background").hide();
		break;
	case ToiletLed_Open_background: 
		$("#ToiletLed_Close_background").hide();
		$("#ToiletLed_Open_background").show();
		break;
	}	
}
function Picture_Show_ToiletLed(){   
	ToiletLedShowPicture(ToiletLed_Close_background); 
	$("#ToiletLedOpen").click(function(){   
		ToiletLedShowPicture(ToiletLed_Open_background);	
	});
	$("#ToiletLedClose").click(function(){   
		ToiletLedShowPicture(ToiletLed_Close_background);
	});	
}

/*********************************卫生间风扇效果切换******************************************/
function ToiletFanShowPicture(x){
	switch(x){
	case ToiletFan_Close_background: 
		$("#ToiletFan_Close_background").show();
		$("#ToiletFan_Open_background").hide();
		break;
	case ToiletFan_Open_background: 
		$("#ToiletFan_Close_background").hide();
		$("#ToiletFan_Open_background").show();
		break;
	}	
}
function Picture_Show_ToiletFan(){   
	ToiletFanShowPicture(ToiletFan_Close_background); 
	$("#ToiletFanOpen").click(function(){   
		ToiletFanShowPicture(ToiletFan_Open_background);	
	});
	$("#ToiletFanClose").click(function(){   
		ToiletFanShowPicture(ToiletFan_Close_background);
	});	
}

/*********************************阳台台灯效果切换******************************************/
function BalconyLedShowPicture(x){
	switch(x){
	case BalconyLed_Close_background: 
		$("#BalconyLed_Close_background").show();
		$("#BalconyLed_Open_background").hide();
		break;
	case BalconyLed_Open_background: 
		$("#BalconyLed_Close_background").hide();
		$("#BalconyLed_Open_background").show();
		break;
	}	
}
function Picture_Show_BalconyLed(){   
	BalconyLedShowPicture(BalconyLed_Close_background); 
	$("#BalconyLedOpen").click(function(){   
		BalconyLedShowPicture(BalconyLed_Open_background);	
	});
	$("#BalconyLedClose").click(function(){   
		BalconyLedShowPicture(BalconyLed_Close_background);
	});	
}
/*********************************阳台窗帘效果切换******************************************/
function CurtainShowPicture(x){
	switch(x){
	case Curtain_Close_background: 
		$("#Curtain_Close_background").show();
		$("#Curtain_Open_background").hide();
		break;
	case Curtain_Open_background: 
		$("#Curtain_Close_background").hide();
		$("#Curtain_Open_background").show();
		break;
	}	
}
function Picture_Show_Curtain(){   
	CurtainShowPicture(Curtain_Close_background); 
	$("#CurtainOpen").click(function(){   
		CurtainShowPicture(Curtain_Open_background);	
	});
	$("#CurtainClose").click(function(){   
		CurtainShowPicture(Curtain_Close_background);
	});	
}

$(document).ready(function(){

	Page_Show_Control(); //左侧菜单页面切换
	Page_Show_Keting(); //客厅底部页面切换
	Page_Show_Bedroom();  //卧室底部页面切换
	Page_Show_Kitchen();  //厨房底部页面切换
	Page_Show_Toilet();  //卫生间底部页面切换
	
	Picture_Show_TV(); //电视状态的背景切换
	Picture_Show_LED();//台灯状态的背景切换
	Picture_Show_BigLed(); //灯带状态的背景切换
	Picture_Show_BedroomLed();//卧室台灯状态的背景切换
	Picture_Show_KitchenLed(); //厨房台灯状态的背景切换
	Picture_Show_KitchenFan(); //厨房风扇状态的背景切换
	Picture_Show_ToiletLed(); //卫生间台灯状态的背景切换
	Picture_Show_ToiletFan(); //卫生间风扇状态的背景切换
	Picture_Show_BalconyLed();//阳台台灯状态的背景切换
	Picture_Show_Curtain();   //阳台窗帘状态的背景切换
	
});
