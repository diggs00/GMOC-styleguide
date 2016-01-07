/**
 * Created with JetBrains WebStorm.
 * User: bzq0df
 * Date: 11/13/13
 * Time: 4:53 PM
 * To change this template use File | Settings | File Templates.
 */
$( document ).ready( function(){
    var width = $(window).width();
    $(window).resize(function(){
        if($(this).width() != width){
            width = $(this).width();
            checkWidth();
        }
    });
    function checkWidth(){
        if($(window).width() < 970){
            hideMobileWidgets();
        }else{
            showWidgets();
        }
    }
    function hideMobileWidgets (){

        $(".panel-contents:not(:first)").slideUp();

        $(".panelShow:not(:first)").slideDown();
        $(".panelHide:first").show();
        $(".panelIcon:first").hide();


        $(".panel-heading").click(function() {



            var myBody = $(this).parent().find(".panel-contents");

            var myHide = $(this).parent().find(".panelHide");
            var myShow = $(this).parent().find(".panelShow");

            console.log(myHide.html());

            var bodyVisible = $(myBody).is(':visible');

            if(bodyVisible){
                $(".panel-contents").slideUp( "fast", function() {
                    //complete
                });

                $(myShow).show();
                $(myHide).hide();

            }else{

                $(".panel-contents").not(myBody).slideUp( "fast", function() {
                    //complete
                });

                $(".panelHide").not(myBody).hide();
                $(".panelShow").not(myBody).show();


                $(myShow).hide();
                $(myHide).show();

                $(myBody).slideDown( "fast", function() {
                    //complete
                });

            }

        });
    }
    function showWidgets(){
        $(".panel-heading").unbind( "click" );
        $(".panel-contents").slideDown( "fast", function() {
            //complete
        });
        $(".panelHide").hide();
        $(".panelShow").hide();
        $(".panelIcon").show();
    }
    function addClose(){
        var myString = "<div class='pull-right'>";
        myString += "<div class='panelHide' style='display:none'><span aria-hidden='true' class='icon-ui-minusfill'></span></div>";
        myString += "<div class='panelShow' style='display:none'><span aria-hidden='true' class='icon-ui-addfill'></span></div>";
        myString += "</div>";

        $(".closePanel").append(myString);
    }

    addClose();
    checkWidth();

    //$(".panelHide").slideUp();
    //$(".panelShow").slideUp();

});