/*

enterform.js
created by Agung Nugroho ( desamedia.com ) ( dinustech.com )
Copyright 2012
How to use ? it's very simple !

$('#elementform').enterform();

How to reinitialize for example in ajax call ? 

$.ajax({ 
  type: 'post',
	url: 'some_url_here'
	dataType:'html',
	success:function(response){
		// code here
		$('#elementform').enterform('reinitialize');
	}
});

if you want to prevent several element for this enterform? just add class like this 

<input type="text" id="name" name="name" class="nofocus">

you can custom this plugin as you want

Hope you like it ! 
agindanoe@gmail.com

*/

(function($) {
    
    $.enterform = function(el, options) {
        
        var base = this;
        base.$arrForm = Array("","input","select","radio","textarea","checkbox");
        base.$el = $(el);
                
        base.$el.data("enterform", base);
        
        base.init = function() {    
			try{
			console.log('init');
			base.options = $.extend({},$.enterform.defaultOptions, options);
			
			base.$elform = base.$el.find(":input").not(':.nofocus').not(':[readonly]');
			base.$el.unbind('keypress');
			console.log(base.$elform.length);
			base.$elform.each(function(index,item){
				if($.inArray($(item).prop('tagName').toLowerCase(),base.$arrForm)){
					$(item).unbind('keypress');
					$(item).keypress(function(e){
						if(e.which==13){
							if(base.$elform.eq((index+1))) base.$elform.eq((index+1)).focus();
							console.log('enter');
						}
					});
				}
			});
			
			base.$el.bind('keypress',function(e){
				if(e.which==13){
					return false;
				}
			});
				
			}catch(e){ console.log(e.message); }
        };
        
        base.reinitialize = function() {
            try{
			base.destroy();
			base.init();
			}catch(e){ console.log(e.message); }
        };
		
		base.destroy = function(){
			 try{
				 base.$elform.unbind();
				 base.$elform.each(function(index,item){
					if($.inArray($(item).prop('tagName').toLowerCase(),base.$arrForm)){
						$(item).unbind();
						$(item).element = null;
					}
				 });
				 base.$el.removeData('enterform');
				 base.$el.element = null;
				 console.log("destroooy");
			 }catch(e){ console.log(e.message); }
		};
        
        base.init();
    };
    
    $.enterform.defaultOptions = { };
    
    $.fn.enterform = function(options) {
        if( typeof(options)=='string' ){
			var safeGuard = $(this).data('enterform');	
			if( safeGuard ){
				switch( options ){
					case "reinitialize":
						safeGuard.reinitialize();
					break;
				}
			}
		}else{
			return this.each(function(){
				 (new $.enterform(this, options));
			});
		}
    };
    
})(jQuery);
