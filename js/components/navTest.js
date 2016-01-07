

var url = location.href;
var findDir = url.indexOf('/nav');
var myNavBG = $(".main-nav-bg");
var myNav = $(".main-nav");

    //if(findDir === -1){

       // $(".wrapper").removeClass('wrapper');
        //$(".navbar_leftNav").css('display','none');


      //  console.log('version0.3');

   // }else{

       // $(myNav).css('display', '');
        //$(myNavBG).css('display','');
        //$(myNav).css('display','inline');
        //$(myNavBG).css('display','inline');

    //}
//this delay is to get around the initial angular load
setTimeout(function(){

    console.log('test2');
    
    //if(findDir > 0){


        $(myNav).css('display','inline');
        $(myNavBG).css('display','inline');

        var myTarget = $(".content");
        var myNavBG = $(".main-nav-bg");
        var myNav = $(".main-nav");
        var content = $(".content");
        var body = $("body");

        $( ".navbar_leftNav" ).click(function() {
            if($(".content-push").length > 0){
                //$(body).removeClass('body-push')
                $(myNav).removeClass('main-nav-push');
                $(myNavBG).removeClass('main-nav-bg-push');
                $(myTarget).removeClass('content-push');
            }else{
                //$(body).addClass('body-push')
                $(myNav).addClass('main-nav-push');
                $(myNavBG).addClass('main-nav-bg-push');
                $(myTarget).addClass('content-push');
            }
        });

        $( window ).resize(function() {
            var win = $(this);
            if (win.width() >= 1008) {
                $(myNav).removeClass('main-nav-push');
                $(myNavBG).removeClass('main-nav-bg-push');
                $(myTarget).removeClass('content-push');
            }
        });

        //Get height of content and add 60 for height of top nav.
        //This is needed because the left nav doesn't know how
        //long the content is.  100% height doesn't work here

        myNavBG.css('height',$(content).height()+60);

    //}else{
        //$(".navbar_leftNav").remove();
    //}

},1000);

/**
 * Created with JetBrains WebStorm.
 * User: bzq0df
 * Date: 3/13/14
 * Time: 3:16 PM
 * To change this template use File | Settings | File Templates.
 */
