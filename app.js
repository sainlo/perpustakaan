/*
    This file is generated and updated by Sencha Cmd. You can edit this file as
    needed for your application, but these edits will have to be merged by
    Sencha Cmd when upgrading.
*/

Ext.application({
    name: 'Perpus',

    extend: 'Perpus.Application',
    
    views: [
    	'Main',
    	'Viewport',
    	'login'
    ],

    controllers: [
    	'Main',
    	'login'
    ],

    autoCreateViewport: true,
    
    init: function() {
    	splashscreen = Ext.getBody().mask ('Loading application','splashscreen');
    },

    launch: function(){
 
	    Ext.tip.QuickTipManager.init();
	    var task = new Ext.util.DelayedTask(function(){
	 
	        // fade out the body mask
	        splashscreen.fadeOut({
	            duration: 1000,
	            remove: true
	        });
	 
	        // fade out the message
	        splashscreen.next().fadeOut({
	            duration: 1000,
	            remove: true
	        });
	 
	   });
	 
   		task.delay(1000);
 		Ext.widget('login');
	}
});
