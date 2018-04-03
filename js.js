//document.documentElement.innerHTML

//top.postMessage('close', '*');

function page_start(){
	var icentre=document.getElementById("icentre_id");
icentre.contentWindow.document.body.innerHTML="<div><input id='input_href' type='text'><button onclick=top.open_page(document.getElementById('input_href').value)>Открыть</button></div>";//top.open_page(document.getElementById('input_href').value)
//icentre.contentWindow.document.head.innerHTML='<script>function load_page_(){top.postMessage("open_" +document.getElementById("input_href").value,"*");}</script>';// document.getElementById("input_href").value
icentre.contentWindow.document.head.innerHTML='<script>function load_page(){open_page(document.getElementById("input_href").value);}</script>';
// window.addEventListener("message", function(e) {
//             if (e.data.indexOf('open')!=-1) {
//                 //

//             }
//            },
//           false);
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
