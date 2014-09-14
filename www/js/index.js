var app = { 
    initialize: function() { 
        this.bindEvents(); 
    }, 
    bindEvents: function() { 
        document.addEventListener('deviceready', this.onDeviceReady, false); 
    }, 
    onDeviceReady: function() { 
        pictureSource=navigator.camera.PictureSourceType; 
        destinationType=navigator.camera.DestinationType; 
    } 
};