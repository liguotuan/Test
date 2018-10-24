/**
 *
 * @authors Marte (iqianduan@126.com)
 * @date    2018-10-24 16:03:58
 * @version $Id$
 */

window.onload = function(){

        var a = 0;
        var o =document.getElementsByClassName("page");//取得所有页面
        var d = o.length;   //页面长度
        var i = !1;

        function e(e){
            if(!i){
                var t=e.wheelDeltaY || -40 * e.deltaY
                i = !0

        window.setTimeout(function(){
            i = !1
        },800)
        n(0>t?"next":"pre")

            }

        }

        function n(e){
            var n = 0
            var t = document.getElementById("container")
            var i = document.getElementsByClassName("cur")
            var r = i.length

            if("next"===e){
                n=++a
            }else{
                if("pre"!==e)
                    return;

                n=--a

            }
            if(n<0) return void(a=0)        //当页面为第一页时，返回
            if(n>=d) return void(a=d-1) //当页面为最后一页时，向下滑动始终返回a等于总页面长度减1


            if(a=n,t.style.top=100*-n+"vh",void 0!=i)
                for(;r--;)
                    i[r].className=i[r].className.replace(/ cur/,""),
                    o[n].className+=" cur"

                    //添加文字动画效果



        }

        function t(){
            document.getElementById("container").style.height = 100 * d + "vh"

        }



        t()

        window.addEventListener("resize",t)
        window.addEventListener("wheel",e)

        document.body.addEventListener("keydown",function(e){
            var t = e.keyCode
            38 == t?n("pre"):40 == t&&n("next") //添加键盘上下方向键滑动

        })


    }