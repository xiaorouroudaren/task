window.onload=function(){

    //领导介绍切换
    //获取DOM节点
    var index_boss_li=document.getElementsByClassName("index_boss_li");
    var index_boss_sub=document.getElementsByClassName("index_boss_sub")[0];
    var index_boss_li_img=document.getElementsByClassName("index_boss_li_img");
    var index_boss_info=document.getElementsByClassName("index_boss_info");
    var timer=null;
    var start=0;
    var index_obj;
    //创数组
    var arr=[
    "神州融秉承“打造银行级消费金融解决方案”的理念，对自身的专业技术，系统架构、流程规范、安全合规性都坚持了严苛的标准和要求，相信大数据风控会助力消费金融行业更安全快速的发展。",
"从“大数据风控专家”到提供“消费金融解决方案领导者”，神州融一直走在科技金融行业前列，为客户的业务发展保驾护航，在激烈的市场竞争中获得稳健的发展。",
    "神州融对消费金融行业的深刻理解和强大的技术实力，能够针对客户的独特需求设计定制化、开创性的解决方案。先进的业务理念和扎实的技术手段，可以降低非金融从业机构进入消费金融领域的门槛。",
    "在不断变化的市场环境中，神州融不断革新风控技术，并整合消费金融生态上下游的力量，连接各类信贷场景与银行资金，是值得信赖的合作伙伴。",
    "在我们所接触的大数据风控供应商中，神州融的服务最全面也最专业的，从征信数据、IT系统、评分建模到资金对接，使客户无论处在业务发展的哪个阶段，都能获得专业的服务与支持。"
        ];

//添加定时器
    timer=setInterval(function(){
       change()
    },2000);
    //定时轮播每个li
    function change(){
        //循环索引
        var idx=start++ % (index_boss_li.length);
        //改变样式
        for(var i=0;i<index_boss_li.length;i++){
            index_boss_li[i].setAttribute("id","");
        }
        index_boss_li[idx].setAttribute("id","on");
        //按索引依次输出数组内容
        index_boss_sub.innerHTML=arr[idx];
    }
    for(var i=0;i<index_boss_li.length;i++){
        (function(n){
            //绑定事件处理函数
            index_boss_li[n].addEventListener("mouseover",function(){
                clearInterval(timer);
                for(var k=0;k<arr.length;k++){
                    if(n===k){
                        index_boss_sub.innerHTML=arr[k];
                    }
                    console.log(k)
                }
                for(var j=0;j<index_boss_li.length;j++){
                    index_boss_li[j].setAttribute("id","");
                }
                index_boss_li[n].setAttribute("id","on");
                index_boss_sub.innerHTML=arr[n];
                index_obj=n;
            },false);
            index_boss_li[n].addEventListener("mouseout",function(){
                timer=setInterval(function(){
                    var idx=index_obj++ % (index_boss_li.length);
                    for(var i=0;i<index_boss_li.length;i++){
                        index_boss_li[i].setAttribute("id","");
                    }
                    index_boss_li[idx].setAttribute("id","on");
                    index_boss_sub.innerHTML=arr[idx];
                },2000);
            },false)
        })(i);
    }
};

