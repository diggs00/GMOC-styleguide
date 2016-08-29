var app = angular.module('angularjs-starter', ['ngAnimate']);

app.controller('MainCtrl', function($scope) {
   $scope.example = "David Baker";

});




app.controller('ctrlA', function($scope) {
  $scope.v = "";
});



app.controller('ctrlB', function($scope) {

    var page = QueryString.p;

    var template = QueryString.template;
    var widgets = QueryString.widget;
    var noo = QueryString.noo;


    if (page == undefined  && template == undefined){
        page = "home";

        $scope.templates = [
        {
            name: 'start',
            url: 'templates/'+page+'.html'}
        ];

    }else if(template){

         $scope.templates = [
        {
            name: 'start',
            url: 'pages/'+template+'.html'}
        ];

    }else{


        $scope.templates = [
        {
            name: 'start',
            url: 'templates/'+page+'.html'}
        ];

    }

    if(widgets){

        $scope.templates = [
            {
                name: 'start',
                url: 'widgets/'+widgets+'.html'}
        ];

    }

    if(noo){

        $scope.templates = [
            {
                name: 'start',
                url: 'noo/'+noo+'.html'}
        ];

    }
    //console.log(widgets)

    $scope.template = $scope.templates[0];

});

app.controller('ctrlC', function($scope) {
  $scope.v = "";
});


var QueryString = function () {
  // This function is anonymous, is executed immediately and
  // the return value is assigned to QueryString!
  var query_string = {};
  var query = window.location.search.substring(1);
  var vars = query.split("&");
  for (var i=0;i<vars.length;i++) {
    var pair = vars[i].split("=");
    	// If first entry with this name
    if (typeof query_string[pair[0]] === "undefined") {
      query_string[pair[0]] = pair[1];
    	// If second entry with this name
    } else if (typeof query_string[pair[0]] === "string") {
      var arr = [ query_string[pair[0]], pair[1] ];
      query_string[pair[0]] = arr;
    	// If third or later entry with this name
    } else {
      query_string[pair[0]].push(pair[1]);
    }
  }
    return query_string;
} ();
