window.onload = function(){

	var map;

	function initialize(){
		var mapProp = {
			center: new google.maps.LatLng(-27.648598,-48.577423), 
			scrollWheel:false,
			zoom:12,
			mapTypeId:google.maps.MapTypeId.ROADMAP
		}
		map = new google.maps.Map(document.getElementByID("map"),mapProp);
	}

	initialize();

}