angular.module("QrCode.home", []).controller("HomeController", HomeController);

function HomeController($scope) {
   var cam_video_id = "camsource"
    //view loaded, start the view.js
    $scope.$watch('$viewContentLoaded', function () {
		var video = document.getElementById(cam_video_id);
		    var options = {
		        "audio": false,
		        "video": true
		    };
		    var userMedia = getUMedia();

		    // Replace the source of the video element with the stream from the camera
		    console.log('navigator ',userMedia);
		    if (userMedia) {
		        navigator.webkitGetUserMedia(options, function(stream) {
		        	alert('success');
		            // stream.assignTo(video);
		            assignTo(stream, video);
		        }, function(error) {
		            console.log(error)
		        });
		        // Below is the latest syntax. Using the old syntax for the time being for backwards compatibility.
		        // navigator.getUserMedia({video: true}, successCallback, errorCallback);
		    } else {
		    	alert('naofoder')
		        $("#qr-value").text('Sorry, native web camera streaming (getUserMedia) is not supported by this browser...')
		        return;
		    }
	    
	    	if (!userMedia) return;
		    cam = camera(cam_video_id);
		    cam.start()
    	});

    $scope.$on('$destroy', function () {
        
    });    

    function assignTo(stream, videoDomElement) {
      if(navigator.userAgent.toLowerCase().indexOf('firefox') > -1){
        videoDomElement.mozSrcObject = stream;
      } else {
        videoDomElement.src = window.URL.createObjectURL(stream);
      }
      videoDomElement.play();
    }

    function getUMedia(){
    	alert(navigator.webkitGetUserMedia);
    	return navigator.webkitGetUserMedia || navigator.mozGetUserMedia || navigator.msGetUserMedia || navigator.getUserMedia;
    }
}


