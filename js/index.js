window.onload=function(){
    //取窗口可视范围的高度 
    function getClientHeight(){    
        var clientHeight=0;    
        if(document.body.clientHeight&&document.documentElement.clientHeight){    
            var clientHeight=(document.body.clientHeight<document.documentElement.clientHeight)?document.body.clientHeight:document.documentElement.clientHeight;            
        }else{    
            var clientHeight=(document.body.clientHeight>document.documentElement.clientHeight)?document.body.clientHeight:document.documentElement.clientHeight;        
        }    
        return clientHeight;    
    } 
    /**得到浏览器滚动条 滚动的高度 */
    function getScrollTop(){
        var scrollTop=0;
         if(document.documentElement&&document.documentElement.scrollTop){
             scrollTop=document.documentElement.scrollTop;
         }
         else{
             scrollTop=document.body.scrollTop;
        }
        return scrollTop;
    }
    /**滚动条滚动时要执行的函数 */
    function lazyload(){
        var scrollHeight=getScrollTop();
        var clientHeight= getClientHeight();
        var height=clientHeight+scrollHeight-50; //减去200是为了更好的产生加载的效果

        for(var i=0;i<img.length;i++){
           var imgTop=img[i].offsetTop;
           if(imgTop<=height){  //创造下拉滚动条产生加载效果
               img[i].src=img[i].getAttribute("data-src");
           }
        }
    }

    /**保证在一打开页面时，页面的可视区域的图片是加载完毕的*/
    function aheadLoad(){
        var clientHeight= getClientHeight();
        for(var i=0;i<img.length;i++){
           var imgTop=img[i].offsetTop;
           if(imgTop<clientHeight){
                img[i].src=img[i].getAttribute("data-src");
           }
           else { break; }
        }
    }


    
    var img=document.querySelectorAll("img");
    aheadLoad();
    window.onscroll=lazyload;
}