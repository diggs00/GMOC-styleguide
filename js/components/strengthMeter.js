(function( $ ) {


    //password strength metere

    var bar = $('.progress-bar');  //find bar
    bar.width(0);  //set initial width to 0
    var progressBody = $('.progressBody');
    var barRightPadding = 0; //makes room for copy

    $(window).resize(function() {
        //resize just happened, pixels changed
        var barWidth = bar.parent().width();
        var s = $( ".gmocPasswordField" ).val();
        var slen = s.length;
        if(slen > 1){
            bar.width(barWidth - barRightPadding);
        }
    });

    function setProgress(percent){
        if(percent <= 100){
            $('.progressContainer').show();
            var barWidth = bar.parent().width();
            bar.removeClass();

            var proLength = 0;
            var modifier = percent/100;
            proLength = barWidth*modifier;
            bar.width(proLength - barRightPadding);

            if(percent <= 50){
                bar.addClass('progress-bar progress-bar-danger');
                progressBody.html("weak");
            }else if(percent <= 80){
                bar.addClass('progress-bar progress-bar-warning');
                progressBody.html("ok");
            }else{
                bar.addClass('progress-bar progress-bar-success');
                progressBody.html("strong");
            }
        }
    }

    //get password length and pass to setProgress
    $( ".gmocPasswordField" ).keydown(function() {
        console.log('here')
        var s = $( ".gmocPasswordField" ).val();
        var slen = s.length;
        var snum = parseFloat(slen);
        var percentages = (snum/100)*1000;

        //needs to pass a value of 1-100 based on strength
        setProgress(percentages);
    });


}( window.jQuery ));