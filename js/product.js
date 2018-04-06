;(function () {
    var $guangxing_contain = '';
    for(var i=1;i<100;i++){
        $guangxing_contain+="<div class='item'><div class='animate-box'>"+
        "<a href='http://baidu.com' class='fh5co-board-img' title='Lorem ipsum dolor sit amet, consectetur adipisicing elit. Explicabo, eos?'>"+
        "<img src='./images/shou_ye/guangxing"+i+".jpg' alt='Free HTML5 Bootstrap template'>"+
        "</a></div><div class='fh5co-desc'>非常适合作为头箍、发饰等饰品的装饰，也可以点缀儿童表演服饰，作为服装配料使用，装饰圣诞节饰品~</div>"+
        "</div>";
    }
    
	$('.guangxing_main').html($guangxing_contain);
}());