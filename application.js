$(document).ready( function(){
    alert('jQuery is ready. Version:' + $.fn.jquery);
});

$(function(){
    $('.sample_btn').click(function(){
        $.ajax({
            url: 'https://zipcloud.ibsnet.co.jp/api/search?zipcode=1506003',
            type: 'GET',
            dataType: 'html',
            success: function(data){
                /* 通信成功時 */
                $('.result').html(data); //取得したHTMLを.resultに反映
            },
            error: function( data ) {
                window.alert("soko");
                /* 通信失敗時 */
                alert('通信失敗！');
            }
        });
    });
});
