//document.documentElement.innerHTML

//top.postMessage('close', '*');
//

//chromium-browser --disable-web-security --user-data-dir
//chromium-browser --disable-web-security

//
function page_start(){
	var icentre=document.getElementById("icentre_id");
icentre.contentWindow.document.body.innerHTML="<div><input id='input_href' type='text'><button onclick=top.open_page(document.getElementById('input_href').value)>Открыть</button></div>";//top.open_page(document.getElementById('input_href').value)


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
}

function open_page(scr){
	//alert(scr);
load_page(scr);
}



function left_frame_load(){
	var fr=document.getElementById("ileft_id");
//var html_=fr.contentWindow.document.innerHTML;
var mass_img=fr.getElementsByTagName("img");

var fr_centre=document.getElementById("icentre_id");
var str="";
for(var i=0;i<mass_img.length-1;++i){
str+="<div class='one_img_block'>";
str+="<img src='"+mass_img[i].src+"' onclick='load_img_right(this)'>";

str+="</div>";
}




fr_centre.contentWindow.document.innerHTML=str;

}

function load_img_right(img){
var fr_right=document.getElementById("iright");
fr_right.contentWindow.document.innerHTML="<div class='main_img'><img src='"+img.src+"'></div>";


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