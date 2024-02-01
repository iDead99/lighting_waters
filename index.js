
let contentContainer1=document.getElementById("content-container1");
let contentContainer2=document.getElementById("content-container2");
let contentContainer3=document.getElementById("content-container3");
let contentContainer4=document.getElementById("content-container4");
let contentContainer5=document.getElementById("content-container5");
let contentContainer6=document.getElementById("content-container6");


let readMore1=document.getElementById("read-more-btn1");
let readMore2=document.getElementById("read-more-btn2");
let readMore3=document.getElementById("read-more-btn3");
let readMore4=document.getElementById("read-more-btn4");
let readMore5=document.getElementById("read-more-btn5");
let readMore6=document.getElementById("read-more-btn6");

// clickReadMore(readMore1, contentContainer1);
// clickReadMore(readMore2, contentContainer2);
clickReadMore(readMore3, contentContainer3);
clickReadMore(readMore4, contentContainer4);
clickReadMore(readMore5, contentContainer5);
// clickReadMore(readMore6, contentContainer6);

function clickReadMore(readMore, contentContainer){
readMore.onclick=function(){
if(readMore.innerHTML==='Read more...'){
        contentContainer.style.overflow='auto';
        contentContainer.style.height='auto';
        readMore.innerHTML='Read less';
}
else{
    contentContainer.style.overflow='hidden';
    contentContainer.style.height='150px';
    readMore.innerHTML='Read more...';
}
}
}