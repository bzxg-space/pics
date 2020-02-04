apis = [
	'http://api.btstu.cn/sjtx/api.php?lx=a1&format=json',
	'http://api.btstu.cn/sjtx/api.php?lx=b1&format=json',
	'http://api.btstu.cn/sjtx/api.php?lx=c1&format=json', 
	'http://api.btstu.cn/sjtx/api.php?lx=c3&format=json',
	'http://api.btstu.cn/sjtx/api.php?lx=c2&format=json'
];

console.log("开始!!!");
var imgs = document.getElementsByClassName("imgs");

// 调用api
show(0, 'imgurl');
show(1, 'imgurl');
show(2, 'imgurl');
show(3, 'imgurl');
show(4, 'imgurl');

//flag 索引
//key 键
function show(flag, key) {
	ajax(apis[flag], key, flag);
}

//获取并设置内容
//by https://blog.csdn.net/qq_15243963/article/details/77970175
function ajax(url, key, flag) {
	var xmlhttp = new XMLHttpRequest();
	var type = "GET"; //请求方式
	xmlhttp.open(type, url, true); //请求方式，接口，异步
	xmlhttp.send(); //发送请求
	xmlhttp.onreadystatechange = function() {
		if (xmlhttp.status == 200 && xmlhttp.readyState == 4) {
			var result = JSON.parse(xmlhttp.response);
			var img_url = null;
			if (key && key != "") {
				img_url = result[key];
			}
		}
		imgs[flag].src = img_url;
	}
}

console.log("结束!!!");
