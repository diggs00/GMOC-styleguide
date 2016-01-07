(function( $ ) {


    //password strength metere

    var bar = $('.progress-bar');  //find bar

    $(window).resize(function() {
        //resize just happened, pixels changed
        var barWidth = bar.parent().width();
        var s = $( ".gmocPasswordField" ).val();
        var slen = s.length;
        if(slen > 1){
            bar.width(barWidth - barRightPadding);
        }
    });


}( window.jQuery ));