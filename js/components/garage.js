

var carID = 0;


$(document).ready(function () {

    myGarage = {

        init: function () {
            console.log("Garage - Init ");
            $(".gotMore").before(myGarage.myCarString(carID,"singleCar"));
            $('.singleCar').slideDown();
            myGarage.addRemoveBtn();
            carID = 1;
        },

        addVehicle: function () {
            console.log("Garage - Add Vehicle ");
            var singleCarCount = $('.singleCar').length;
            //console.log("---- singleCarCount: "+singleCarCount)
            if(singleCarCount > 0){
                $(".singleCar").remove();
                carID = 1;
            }
            if(carID === 0){
                $(".gotMore").before(myGarage.myCarString(carID,"singleCar"));
                $('.singleCar').slideDown();
                carID = 1;
            }else{
                if(carID === 1){
                    $(".gotMore").before(myGarage.myCarString(carID,"primary"));
                    carID = carID + 1;
                }
                $(".gotMore").before(myGarage.myCarString(carID,"default"));
                if(carID == 1){
                    //$(".gotMore").before(clearFix);
                }
                $(".singleCar").remove();
                $('.newVehicleAdded').fadeIn();
                carID = carID + 1;
            }
            myGarage.addRemoveBtn();
        },

        removeVehicle: function (_context) {
            console.log("Garage - Remove Vehicle ");
            $(_context).parent().parent().parent().parent().parent().parent().parent().fadeOut( "fast", function() {
                $(_context).remove();
                var count = $('.newVehicleAdded').length;
                if(count === 1){
                    carID = 0;
                    $(".newVehicleAdded").remove();
                    $(".gotMore").before(myGarage.myCarString(carID,"singleCar"));
                    myGarage.addRemoveBtn();
                    $('.singleCar').fadeIn();
                }else if(count > 1){
                    carID = carID - 1;
                }else{
                    carID = 0;
                }
            });
        },

        addRemoveBtn: function(){
            console.log("Garage - Add Remove Btn ");
            $('.removeVIN').click(function(){
                myGarage.removeVehicle(this);
            })
        },


        myCarString: function(_carID, _type){
            var addIn = "";
            var headerType = "";
            var imgType = "";
            var imgSize = "";
            var carName = "";

            var car0 = "myGarage_0.jpg";
            var car0_name = "Current OC";

            var car1 = "myGarage_1.png";
            var car1_name = "Chrome Shot 3";

            var car2 = "myGarageCarLarge.png";
            var car2_name = "Chrome Shot 1";


            if(_type === "singleCar"){
                headerType = "primary";
                addIn = "col-sm-12 col-md-8 singleCar";
                imgType = "myGarageCarLarge.png";
                imgSize = "width='640'"
                carName = "2012 Chevrolet Malibu - 640"
            }else{
                headerType = "default";
                addIn = "col-sm-12 col-md-4 newVehicleAdded";
                if(_carID > 2){
                    $(".gotMore").addClass("clearfix");
                    imgType = car0;
                    carName = car0_name;
                }else{
                    imgType = car1;
                    carName = car1_name;
                }
            }

            if(_type === "primary"){
                headerType = "primary";
                imgType = "myGarageCarLarge.png";
                imgSize = "width='640'"
                carName = "2012 Chevrolet Malibu - Shot 1"
            }

            var carString = "<div class='col-xs-12 "+addIn+" car_" + _carID + "' style='display:none;'>";
            carString += "<div class='panel panel-"+headerType+" panel-account' id='slideContainer_"+_carID+"' style='position:relative;'>";
            carString += "<div class='panel-heading '>";
            carString += "<h3 class='panel-title closePanel'>"+carName+"</h3>";
            carString += "</div>";
            carString += "<div id='acctSlide_" + _carID + "_1'>";
            carString += "<div class='panel-contents'><div class='panel-body'>";
            carString += "<div class='row margin-bottom-small'>";
            carString += "<div class='col-xs-12 carDisplay'>";
            carString += "<div class='vinDisplay'><strong>VIN:</strong> 1HGCM82633A004352</div>";
            carString += "<center><img src='images/"+imgType+"' "+imgSize+" class='img-responsive' alt='Responsive image'></center>";
            carString += "</div> ";
            carString += "<div class='col-xs-12'>";
            carString += "<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p> ";
            carString += " </div>";
            carString += "</div> ";
            carString += "<div class='row panel-footer'>";
            carString += "<div class='col-xs-12'>";
            carString += "<button type='button' class='btn btn-primary btn-left'>Vehicle Profile</button>";
            carString += "<button type='button' class='btn btn-link-secondary btn-right removeVIN'><span aria-hidden='true' class='icon-ui-closedot'></span>Remove</button>";
            carString += " </div>";
            carString += "</div></div>";
            carString += " </div>";
            carString += "</div>";
            carString += "</div>"
            carString += "</div>";
            carString += "<div class='clearfixTarget_"+ _carID+"'></div></div>";
            return carString;
        }
    }


    //start Garage App once pageload is completed
    myGarage.init();

});
