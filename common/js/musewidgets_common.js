	
	
/*
* Security widget options
*
*
* Copyright 2016, Barone Nicola
*
*/
	var varSecurityWidget =false;	
	function widCommon(tagId){
			if(varSecurityWidget){
				$( "#"+tagId).remove();	
			}
	}
	
	var varSecurityWidgetCss =false;
	function widCommonCss(elementPage,className){
			if(varSecurityWidgetCss){
				$( elementPage ).removeClass( className )
			}
	}