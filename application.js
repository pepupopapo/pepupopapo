if(typeof jQuery != "undefined"){ //jQueryの読み込み確認
    $(function(){
        alert('jQuery is ready. Version:' + $.fn.jquery);
    });
}

$(function(){
    //.sampleをクリックしてajax通信を行う
    $('.sample_btn').click(function(){
        $.ajax({
            url: 'https://zipcloud.ibsnet.co.jp/api/search?zipcode=1506003',
            type: 'GET',
            dataType: 'html'
        }).done(function(data){
            /* 通信成功時 */
            $('.result').html(data); //取得したHTMLを.resultに反映
            
        }).fail(function(data){
            /* 通信失敗時 */
            alert('通信失敗！');
                    
        });
    });
});
