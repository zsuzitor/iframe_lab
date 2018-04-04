//document.documentElement.innerHTML

//top.postMessage('close', '*');
//

//chromium-browser --disable-web-security --user-data-dir
//chromium-browser --disable-web-security

//
var link="";

//сайт открывать https://learn.javascript.ru/
//сайт с картинками https://www.adme.ru/tvorchestvo-fotografy/70-luchshih-resursov-s-besplatnymi-fotografiyami-975760/
function page_start(){
	var icentre=document.getElementById("icentre_id");
icentre.contentWindow.document.body.innerHTML="<div class='div_href_but'><input id='input_href' type='text'><button class='load_page_but' onclick=top.open_page(document.getElementById('input_href').value)>Открыть</button></div>";//top.open_page(document.getElementById('input_href').value)
//console.log(icentre.contentWindow.document.body.innerHTML);
load_css_frame(icentre);
}
function centre_frame_load(){
// 	var icentre=document.getElementById("icentre_id");
// icentre.contentWindow.document.body.innerHTML="<div><input id='input_href' type='text'><button onclick=top.open_page(document.getElementById('input_href').value)>Открыть</button></div>";//top.open_page(document.getElementById('input_href').value)

}



document.addEventListener("DOMContentLoaded", page_start);

//кнопка для открытия сайта
function load_page(scr){
//var inp=document.getElementById("input_href");
var ileft=document.getElementById("ileft_id");
//ileft.contentWindow.open(inp.value);
ileft.src=scr;
link=scr;
}

function open_page(scr){
	//alert(scr);
load_page(scr);
}



function left_frame_load(){
	var fr=document.getElementById("ileft_id");
//var html_=fr.contentWindow.document.innerHTML;
if(fr.contentWindow.document.body.innerHTML!=undefined&&fr.contentWindow.document.body.innerHTML!=""){


var mass_img=fr.contentWindow.document.getElementsByTagName("img");

var fr_centre=document.getElementById("icentre_id");
var str="";
for(var i=0;i<mass_img.length-1;++i){
str+="<div class='one_img_block div_inline_block'>";
str+="<img src='"+mass_img[i].src+"' onclick='top.load_img_right(this)'>";

str+="</div>";
}


//var fr_right=document.getElementById("iright_id");
//console.log(fr_centre.contentWindow.document.body.innerHTML);
//var href=fr_right.contentWindow.document.getElementById("input_href");
fr_centre.contentWindow.document.body.innerHTML="<div  class='div_href_but'><input id='input_href' value='"+link+"' type='text'>\
<button  class='load_page_but' onclick=top.open_page(document.getElementById('input_href').value)>Открыть</button></div>";
fr_centre.contentWindow.document.body.innerHTML+=str;
load_css_frame(fr_centre);


}
}

function load_img_right(img){
	//src outerHTML
var fr_right=document.getElementById("iright_id");
fr_right.contentWindow.document.body.innerHTML="<div class='main_img'><img src='"+img.src+"'></div>";
load_css_frame(fr_right);

}

function load_css_frame(frame){
	var cssLink = document.createElement("link");
cssLink.href = "style.css"; 
cssLink.rel = "stylesheet"; 
cssLink.type = "text/css"; 
//frame.contentWindow.document.body.appendChild(cssLink);

//
//<link rel="stylesheet" href="style.css">
frame.contentWindow.document.head.appendChild(cssLink);
}
/*fr.script = fr.document.createElement('script');
fr.script.type = 'text/javascript';
fr.script.src = 'script.js';
fr.document.head.appendChild(fr.script);
*/


////

// window.addEventListener("message", function(e) {
//             alert(e);
//            },
//           false);
// }



	//if(fr.contentWindow.document.innerHTML!=""&&)
		//alert(fr.contentWindow.document.innerHTML);

// if(fr.contentWindow!=undefined){//&&fr.contentWindow.document.innerHTML!=undefined
// 	fr.script = fr.contentWindow.document.createElement('script');
// fr.script.type = 'text/javascript';
// fr.script.src = 'jsframe.js';
// fr.contentWindow.document.head.appendChild(fr.script);
// }