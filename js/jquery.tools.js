;
(function($){
	/*
	 * 选取从startIndex,到endIndex之间的元素
	 * 默认第一个元素为0
	 */
	$.fn.extend({
		'between':function(startIndex,endIndex){
			return $(this.splice(startIndex,endIndex));
		},
	});
	
	
	$.extend({
		/*
		 * 获取url 参数
		 * 返回一个参数 数组
		 */
		getUrlParamsObj:function(){
			var a = [];
			location.search.split('&').forEach(function(value,key){
				var o = {
					key:value.split("=")[0],
					value:value.split('=')[1]
				}
				a.push(o);
			})
			return a;
		},
		/*
		 * 传递url key
		 * 返回string value
		 */
		getUrlParam:function(name){
			var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");  
			var r = window.location.search.substr(1).match(reg);  
			console.log(r)
			if (r != null){
				return unescape(r[2]);
			}
			return null;
		}
	});
})(jQuery)
