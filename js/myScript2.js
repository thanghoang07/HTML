/*Trong notFound*/
function NF1() {
	window.location.href = '../index.html';
}
/*trong phần bài tập*/
function t1() {
	window.location.href = '../tuan/Tuan1.html';
}
function t2() {
	window.location.href = '../tuan/Tuan2.html';
}
/*Trong tuan*/
function myFunction() {
	//alert('Tải về máy');
	window.location.href = '../baiTap/tuan1/Bai1.docx';
}
function myFunction2() {
	//alert('Xem online');
	window.location.href = 'https://goo.gl/DRT2yK';
}
function myFunction3() {
	alert('Tải về máy');
	window.location.href = '../notFound.html';
}
function myFunction4() {
	alert('Xem online');
	window.location.href = '../notFound.html';
}
function includeHTMLFile() {
	var z, i, a, file, xhttp;
	z = document.getElementsByTagName("*");
	for (i = 0; i < z.length; i++) {
		if (z[i].getAttribute("includeHtml")) {
			a = z[i].cloneNode(false);
			file = z[i].getAttribute("includeHtml");
			var xhttp = new XMLHttpRequest();
			xhttp.onreadystatechange = function() {
				if (xhttp.readyState == 4 && xhttp.status == 200) {
					a.removeAttribute("includeHtml");
					a.innerHTML = xhttp.responseText;
					z[i].parentNode.replaceChild(a, z[i]);
					includeHTMLFile();
				}
			}
			xhttp.open("GET", file, true);
			xhttp.send();
			return;
		}
	}
}