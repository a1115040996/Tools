//get param
function getParam(name){
	var arr = location.search.split("?")[1];
	var arr1 =	arr.split('&');
	var obj = {};//将 get数据获取 并返回
	for (var i=0;i<arr1.length;i++) {
		obj[arr1[i].split("=")[0]] = arr1[i].split("=")[1];
	}
	return obj[name];
}