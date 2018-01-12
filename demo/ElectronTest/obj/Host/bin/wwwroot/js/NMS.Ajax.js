//chrome.exe --user-data-dir="C:/Chrome dev session" --disable-web-security
//http://cn.bing.com/search?q=%s


function GetHtml(tUrl,sData,callback){
	sData=DealData(sData);
	ExcuteAjaxByType(tUrl,"get",sData,callback,false);
}
function GetJson(tUrl,sData,callback)
{
	sData=DealData(sData);
	ExcuteAjaxByType(tUrl,"get",sData,callback,true);
}
function PostHtml(tUrl,sData,callback)
{
	sData=DealData(sData);
	ExcuteAjaxByType(tUrl,"post",sData,callback,false);
}
function PostJson(tUrl,sData,callback)
{
	sData=DealData(sData);
	ExcuteAjaxByType(tUrl,"post",sData,callback,true);
}
function DealData(sData)
{
	if(!sData){
		sData={};
	}
	return sData;
}
function ExcuteAjaxByType(tUrl,sType,sData,callback,jsonShut)
{
	
	$.ajax({
		url:tUrl,
		type:sType,
		data:sData,
		success:function(data){ 
			if(jsonShut)
			{
				if(data)
				{
					data = $.parseJSON(data);
				}else
				{
					data={};
				}	
			}
			callback(data);
		 },
		error:function(XMLHttpRequest, textStatus, errorThrown) {
	
			if(XMLHttpRequest.status ==0 )
			{
				alert("发现错误：错误代码"+XMLHttpRequest.status+", 请检查URL.");
			}else
			{
				alert("发现错误：错误代码"+XMLHttpRequest.status);
			}
		}
	});
}