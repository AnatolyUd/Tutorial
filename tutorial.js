var tutorial = {
/*		
	tutorial.show('WELCOME');
	tutorial.show('FIRST_HONEY');
	tutorial.show('FIRST_PLAY');
	tutorial.show('FIRST_EARN_NECTAR');
	tutorial.show('FIRST_DOUBLED_NECTAR');
	tutorial.show('CHANNEL_SELECTOR');
	tutorial.show('SELECT_CHANEL_AND_EARN');
	tutorial.show('PERSONALIZE_PROFILE');
	tutorial.show('UPLOAD_SELFIE');
	tutorial.show('DO_UPLOAD_SELFIE');
	tutorial.show('FIRST_SURVEY');
	tutorial.show('EARN_HONEY_FOR_SURVEY');
	tutorial.show('DO_FIRST_SURVEY');
	tutorial.show('EVERY_DAY_LOGIN');
	tutorial.show('AFTER_EVERY_DAY_LOGIN');
	tutorial.show('REDEEM_HONEY');
	tutorial.show('SHARE_WITH_FRIENDS');
	tutorial.show('GIFT_CARD');
*/		
	finished: false,
	next_step: null,

	onHide: function(hash) {
		hash.w.hide() && hash.o && hash.o.remove();
	},
	onHide_WELCOME: function(hash) {
		hash.w.hide() && hash.o && hash.o.remove(); 
		tutorial.FIRST_HONEY()
   	}, 
   	onHide_FIRST_HONEY: function(hash) {
		hash.w.hide() && hash.o && hash.o.remove(); 
		tutorial.FIRST_PLAY()
   	}, 
	onHide_FIRST_PLAY: function(hash) {
		hash.w.hide() && hash.o && hash.o.remove();
   	},
	onHide_FIRST_EARN_NECTAR: function(hash) {
		hash.w.hide() && hash.o && hash.o.remove();
   	},
   	onHide_FIRST_DOUBLED_NECTAR: function(hash) {
		hash.w.hide() && hash.o && hash.o.remove();
		tutorial.CHANNEL_SELECTOR();
   	},
   	onHide_CHANNEL_SELECTOR: function(hash) {
   		hash.w.hide() && hash.o && hash.o.remove();
   	},
   	onHide_SELECT_CHANEL_AND_EARN: function(hash) {
   		hash.w.hide() && hash.o && hash.o.remove();
   	},
   	onHide_PERSONALIZE_PROFILE: function(hash) {
   		hash.w.hide() && hash.o && hash.o.remove();
   	},
   	onHide_UPLOAD_SELFIE: function(hash) {
   		hash.w.hide() && hash.o && hash.o.remove();
   		tutorial.DO_UPLOAD_SELFIE();
   	},
   	onHide_DO_UPLOAD_SELFIE: function(hash) {
   		hash.w.hide() && hash.o && hash.o.remove();
   		tutorial.FIRST_SURVEY();
   	},
   	onHide_FIRST_SURVEY: function(hash) {
   		hash.w.hide() && hash.o && hash.o.remove();
   		// comment if will be ready messages page
   		tutorial.EARN_HONEY_FOR_SURVEY();
   	},
   	onHide_EARN_HONEY_FOR_SURVEY: function(hash) {
   		hash.w.hide() && hash.o && hash.o.remove();
		tutorial.DO_FIRST_SURVEY();
   	},
   	onHide_SUBMIT_FIRST_SURVEY: function(hash) {
   		hash.w.hide() && hash.o && hash.o.remove();
   		
		$('.jqmTutorialWindow').css({"padding":""});
		$('.jqmTutorialContent').css({"padding": "", "border": ""});
   		
   		tutorial.EVERY_DAY_LOGIN();
   	},
   	onHide_EVERY_DAY_LOGIN: function(hash) {
   		hash.w.hide() && hash.o && hash.o.remove();
   		tutorial.AFTER_EVERY_DAY_LOGIN();
   	},
   	onHide_AFTER_EVERY_DAY_LOGIN: function(hash) {
   		hash.w.hide() && hash.o && hash.o.remove();
   		tutorial.REDEEM_HONEY();
   	},
   	onHide_REDEEM_HONEY: function(hash) {
   		hash.w.hide() && hash.o && hash.o.remove();
   	},
   	onHide_GIFT_CARD: function(hash) {
   		hash.w.hide() && hash.o && hash.o.remove();
   		window.location.href = '/games/roulette2';
   	},
   	
	hide: function() {
		$('#popup_tutorial').jqmHide();
	},
   	
	add_style: function(new_class){
		$('#popup_tutorial').removeClass('welcome first-honey do-first-survey every-day-login first-play first-earn-nectar first-double-nectar upload-selfie channel-selector select-chanel-and-earn personalize-profile first-survey earn-honey-for-survey reedem-honey share-with-friends');
		$('#popup_tutorial').addClass(new_class);
	},
	
   	init: function(){ $('#popup_tutorial').jqm({ overlay: 0, onShow: onShowCenter, onHide: tutorial.onHide }) },
	init_WELCOME: function(){ tutorial.add_style('welcome'); $('#popup_tutorial').jqm({ overlay: 60, modal:true, closeClass:'jqmClose', onShow: onShowCenter, onHide: tutorial.onHide_WELCOME }); },
	init_FIRST_HONEY: function(){ tutorial.add_style('first-honey'); $('#popup_tutorial').jqm({ overlay: 60, modal:true, closeClass:'jqmClose', onShow: tutorial.onShow_FIRST_HONEY, onHide: tutorial.onHide_FIRST_HONEY }) },
	init_FIRST_PLAY: function(){ tutorial.add_style('first-play'); $('#popup_tutorial').jqm({ overlay: 60, modal:true, onShow: tutorial.onShow_FIRST_PLAY, onHide: tutorial.onHide_FIRST_PLAY }); },
	init_FIRST_EARN_NECTAR: function(){ tutorial.add_style('first-earn-nectar'); $('#popup_tutorial').jqm({ overlay: 60, modal:true, onShow: tutorial.onShow_FIRST_EARN_NECTAR, onHide: tutorial.onHide_FIRST_EARN_NECTAR }); },
	init_FIRST_DOUBLED_NECTAR: function(){ tutorial.add_style('first-double-nectar'); $('#popup_tutorial').jqm({ overlay: 60, modal:true, onShow: tutorial.onShow_FIRST_DOUBLED_NECTAR, onHide: tutorial.onHide_FIRST_DOUBLED_NECTAR }) },
	init_CHANNEL_SELECTOR: function(){ tutorial.add_style('channel-selector'); $('#popup_tutorial').jqm({ overlay: 60, modal:true, onShow: tutorial.onShow_CHANNEL_SELECTOR, onHide: tutorial.onHide_CHANNEL_SELECTOR }); },
	init_SELECT_CHANEL_AND_EARN: function(){ tutorial.add_style('select-chanel-and-earn'); $('#popup_tutorial').jqm({ overlay: 60, modal:true, onShow: tutorial.onShow_SELECT_CHANEL_AND_EARN, onHide: tutorial.onHide_SELECT_CHANEL_AND_EARN }); },
	init_PERSONALIZE_PROFILE: function(){ tutorial.add_style('personalize-profile'); $('#popup_tutorial').jqm({ overlay: 60, modal:true, onShow: tutorial.onShow_PERSONALIZE_PROFILE, onHide: tutorial.onHide_PERSONALIZE_PROFILE }); },
	init_UPLOAD_SELFIE: function(){ tutorial.add_style('upload-selfie'); $('#popup_tutorial').jqm({ overlay: 60, modal:true, onShow: tutorial.onShow_UPLOAD_SELFIE, onHide: tutorial.onHide_UPLOAD_SELFIE }); },
	init_DO_UPLOAD_SELFIE: function(){ tutorial.add_style(''); $('#popup_tutorial').jqm({ overlay: 60, modal:true, onShow: onShowCenter, onHide: tutorial.onHide_DO_UPLOAD_SELFIE }); },
	init_FIRST_SURVEY: function(){ tutorial.add_style('first-survey'); $('#popup_tutorial').jqm({ overlay: 60, modal:true, onShow: tutorial.onShow_FIRST_SURVEY, onHide: tutorial.onHide_FIRST_SURVEY }); },
	init_EARN_HONEY_FOR_SURVEY: function(){ tutorial.add_style('earn-honey-for-survey'); $('#popup_tutorial').jqm({ overlay: 60, modal:true, onShow: onShowCenter, onHide: tutorial.onHide_EARN_HONEY_FOR_SURVEY }); },
	init_DO_FIRST_SURVEY: function(){ tutorial.add_style('do-first-survey'); $('#popup_tutorial').jqm({ overlay: 60, modal:true, onShow: onShowCenter, onHide: tutorial.onHide_EARN_HONEY_FOR_SURVEY }); },
	init_EVERY_DAY_LOGIN: function(){ tutorial.add_style('every-day-login'); $('#popup_tutorial').jqm({ overlay: 60, modal:true, closeClass: 'jqmClose', onShow: onShowCenter, onHide: tutorial.onHide_EVERY_DAY_LOGIN }); },
	init_AFTER_EVERY_DAY_LOGIN: function(){ tutorial.add_style('first-honey'); $('#popup_tutorial').jqm({ overlay: 60, modal:true, closeClass: 'jqmClose', onShow: tutorial.onShow_AFTER_EVERY_DAY_LOGIN, onHide: tutorial.onHide_AFTER_EVERY_DAY_LOGIN }); },
	init_REDEEM_HONEY: function(){ tutorial.add_style('reedem-honey');  $('#popup_tutorial').jqm({ overlay: 60, modal:true, onShow: tutorial.onShow_REDEEM_HONEY, onHide: tutorial.onHide_REDEEM_HONEY }); },
	init_SHARE_WITH_FRIENDS: function(){ tutorial.add_style('share-with-friends'); $('#popup_tutorial').jqm({ overlay: 60, modal:true, onShow: tutorial.onShow_SHARE_WITH_FRIENDS, onHide: tutorial.onHide }); },
	init_GIFT_CARD: function(){ tutorial.add_style('share-with-friends'); $('#popup_tutorial').jqm({ overlay: 60, modal:true, onShow: onShowCenter, onHide: tutorial.onHide_GIFT_CARD }); },
	
	onShow_FIRST_HONEY: function(hash) {
		var position = $('#honey-bonus').offset();
		hash.o.prependTo('body');
		hash.w.css('left', position.left - 465);
		hash.w.css('top', position.top + 105);
		hash.w.fadeIn(0); 
	},
	onShow_FIRST_PLAY: function(hash) {
		var position = $('#btnStart_wrap').offset();
		hash.o.prependTo('body');
		hash.w.css('left', position.left + 110);
		hash.w.css('top', position.top - 50 );
		hash.w.fadeIn(0); 
	},
	onShow_FIRST_EARN_NECTAR: function(hash) {
		var position = $('#btnStart_wrap').offset();
		hash.o.prependTo('body');
		hash.w.css('left', position.left - 10);
		hash.w.css('top', position.top - 235);
		hash.w.fadeIn(0); 
	},
	onShow_FIRST_DOUBLED_NECTAR: function(hash) {
		var position = $('#honey-bonus').offset();
		hash.o.prependTo('body');
		hash.w.css('left', position.left - 480);
		hash.w.css('top', position.top + 165);
		hash.w.fadeIn(0); 
	},
	onShow_CHANNEL_SELECTOR: function(hash) {
		var position = $('#channelWheel').offset();
		hash.o.prependTo('body');
		hash.w.css('left', position.left + 150);
		hash.w.css('top', position.top + 20);
		hash.w.fadeIn(0);
	},
	onShow_SELECT_CHANEL_AND_EARN: function(hash) {
		var position = $('#channelWheel').offset();
		hash.o.prependTo('body');
		hash.w.css('left', position.left + 115);
		hash.w.css('top', position.top + 10);
		hash.w.fadeIn(0);
	},
	onShow_PERSONALIZE_PROFILE: function(hash) {
		var position = $('#blk_user_img').offset();
		hash.o.prependTo('body');
		hash.w.css('left', position.left - 465);
		hash.w.css('top', position.top + 130);
		hash.w.fadeIn(0); 
	},
	onShow_UPLOAD_SELFIE: function(hash) {
		var position = $('#user_photo').offset();
		hash.o.prependTo('body');
		hash.w.css('left', position.left + 375);
		hash.w.css('top', position.top + 40);
		hash.w.fadeIn(0);
	},
	onShow_FIRST_SURVEY: function(hash) {
		var position = $('#lnk_notifications').offset();
		hash.o.prependTo('body');
		hash.w.css('left', position.left - 500);
		hash.w.css('top', position.top + 140);
		hash.w.fadeIn(0);
	},
	onShow_AFTER_EVERY_DAY_LOGIN: function(hash) {
		var position = $('#honey-bonus').offset();
		hash.o.prependTo('body');
		hash.w.css('left', position.left - 465);
		hash.w.css('top', position.top + 105);
		hash.w.fadeIn(0);
	},
	onShow_REDEEM_HONEY: function(hash) {
		var position = $('#lnk_redeem_honey').offset();
		hash.o.prependTo('body');
		hash.w.css('left', position.left + 110);
		hash.w.css('top', position.top + 150);
		hash.w.fadeIn(0);
	},
	onShow_SHARE_WITH_FRIENDS: function(hash) {
		$('#btn_yes_share_with_friends').click(function(){
			tutorial.hide();
			talkToFriends();
		});
		
		hash.o.prependTo('body');
		hash.w.css('left',($(window).width() - hash.w.outerWidth())/2);
		hash.w.css('top',($(window).height() - hash.w.outerHeight())/2);
		hash.w.fadeIn(0);
	},	
	
	WELCOME: function(){ 
		this.setActiveChannel(4);//set Nature channel active

		tutorial.init_WELCOME(); 
		tutorial.show('WELCOME', 1);
	},
	FIRST_HONEY: function(){
		$('#honey-bonus').addClass('lightening');
		
		tutorial.init_FIRST_HONEY();
   		tutorial.show('FIRST_HONEY', 1);
	},
	FIRST_PLAY: function(){
		this.next_step = 'FIRST_EARN_NECTAR';
		
		$('#honey-bonus').removeClass('lightening');
		
		$('#btnStart').click(function( event ) {
			tutorial.hide();
		});
		
		$('#btnStart_wrap').addClass('lightening');
		
		tutorial.init_FIRST_PLAY();
		tutorial.show("FIRST_PLAY");
	},
	FIRST_EARN_NECTAR: function(){
		tutorial.next_step = 'FIRST_DOUBLED_NECTAR';

		$('#gameWheel').removeClass('lightening');
		$('#btnStart_wrap').removeClass('lightening');

		$('#btnX').click(function( event ) {
			tutorial.hide();
		});

		$('#btnX').prop( "disabled", false );
		$('#btnX_wrap').addClass('lightening');
		
   		tutorial.init_FIRST_EARN_NECTAR();
   		tutorial.show('FIRST_EARN_NECTAR');
	},
	FIRST_DOUBLED_NECTAR: function(){
		tutorial.next_step = null;
		
		$('#btnX_wrap').removeClass('lightening');
		
		$('#rulet-numbers').addClass('lightening');
		$('#honey-bonus').addClass('lightening');
		
		tutorial.init_FIRST_DOUBLED_NECTAR();
		tutorial.show('FIRST_DOUBLED_NECTAR', 1);
	},
	CHANNEL_SELECTOR: function(){
		tutorial.next_step = 'PERSONALIZE_PROFILE'; // need for adding 20 honey if next step will be skipped''
		$('#honey-bonus').removeClass('lightening');
		$('#rulet-numbers').removeClass('lightening');
		
		$('#btnStart').click(function( event ) 
		{
			tutorial.hide();
		});

		$('#channelWheel').one('click', function( event ) 
		{
			tutorial.hide();
			tutorial.exec('SELECT_CHANEL_AND_EARN');
		})
		.css('z-index',"") // necessary for lightening - z-index = 20 by default
		.addClass('lightening');
		
		tutorial.init_CHANNEL_SELECTOR(); 
		tutorial.show("CHANNEL_SELECTOR");		
	},
	SELECT_CHANEL_AND_EARN: function(){
		tutorial.next_step = 'PERSONALIZE_PROFILE';
		
		$('#btnStart').prop( "disabled", false );
		$('#channelWheel').addClass('lightening');
		
		$('#btnStart').click(function( event ) {
			tutorial.hide();
		});
		
		tutorial.init_SELECT_CHANEL_AND_EARN();
		tutorial.show('SELECT_CHANEL_AND_EARN');
	},
	PERSONALIZE_PROFILE: function(){
		tutorial.next_step = null;
		$('#channelWheel').removeClass('lightening');
		$('#btnStart_wrap').removeClass('lightening');
		
		$('#blk_user_img').addClass('lightening');
		
		$('#lnk_user_photo').click(function( event ) {
			event.preventDefault();
			tutorial.hide();
			tutorial.show('UPLOAD_SELFIE');
		});
		
		tutorial.init_PERSONALIZE_PROFILE();
		tutorial.show('PERSONALIZE_PROFILE');
	},
	UPLOAD_SELFIE: function(){
		$('#blk_user_img').removeClass('lightening');

		$('#user_photo').addClass('lightening');
		
		$('#user_photo').click(function( event ) {
			event.preventDefault();
			tutorial.hide();
			// uncomment if will be ready messages page  
			tutorial.DO_UPLOAD_SELFIE();
		});
		
		tutorial.init_UPLOAD_SELFIE();
		tutorial.show('UPLOAD_SELFIE');
	},
	DO_UPLOAD_SELFIE: function(){
		tutorial.next_step = null;

		$('#popup_choose_photo').jqm({ overlay: 60, modal: true, onShow: onShowCenter}).jqmShow();
	},
	FIRST_SURVEY: function(){
		$('#mail').html('<p style="color:red;"><b>1</b></p>');
		$('#lnk_notifications').addClass('lightening');
		
		$('#lnk_notifications').click(function( event ) {
			event.preventDefault();
			$('#mail').html('');
			tutorial.hide();
			// uncomment if will be ready messages page  
			//tutorial.show('EARN_HONEY_FOR_SURVEY');
		});
		
		tutorial.init_FIRST_SURVEY(); 
		tutorial.show('FIRST_SURVEY');
	},
	EARN_HONEY_FOR_SURVEY: function(){
		$('#lnk_notifications').removeClass('lightening');
		
		tutorial.init_EARN_HONEY_FOR_SURVEY(); // modal Notification: Click here to start.
		tutorial.show('EARN_HONEY_FOR_SURVEY');
	},
	DO_FIRST_SURVEY: function(){
		tutorial.init_DO_FIRST_SURVEY();
		tutorial.show('DO_FIRST_SURVEY');
	},
	EVERY_DAY_LOGIN: function(){
		tutorial.init_EVERY_DAY_LOGIN();
		tutorial.show('EVERY_DAY_LOGIN', 1);
	},
	AFTER_EVERY_DAY_LOGIN: function(){
		$('#honey-bonus').addClass('lightening');

		tutorial.init_AFTER_EVERY_DAY_LOGIN();
		tutorial.show('AFTER_EVERY_DAY_LOGIN', 1);
	},
	REDEEM_HONEY: function(){
		$('#honey-bonus').removeClass('lightening');
		
		$('#lnk_redeem_honey').addClass('lightening');
		
		$('#lnk_redeem_honey').click(function( event ) {
			event.preventDefault();
			tutorial.hide();
			tutorial.show('SHARE_WITH_FRIENDS');
		});
		
		tutorial.init_REDEEM_HONEY();
		tutorial.show('REDEEM_HONEY');
	},
	SHARE_WITH_FRIENDS: function(){
		$('#lnk_redeem_honey').removeClass('lightening');
		
		/*
		$('#btn_yes_share_with_friends').click(function(){
			alert('!!!');
			tutorial.hide();
			talkToFriends();
		});
		*/
		
		tutorial.init_SHARE_WITH_FRIENDS();
		tutorial.show('SHARE_WITH_FRIENDS');
	},
	GIFT_CARD: function(){
		tutorial.init_GIFT_CARD();
		tutorial.show('GIFT_CARD', 1);
	},
	
	exec: function(step_name){
		if (step_name != 'SHARE_WITH_FRIENDS')
		{
			$('a').click(function(){ 
				return false; 
			});
		}
		this[step_name]();
	},
	setActiveChannel: function(id_channel){
		$("#selChannel").val(id_channel).prop('selected', true).trigger('change');
	},
	show_next: function(){
		if (this.next_step) {
            tutorial.exec(this.next_step);
        }
	},
	submit_first_survey: function(frm){
		$(frm).ajaxSubmit({
			dataType:'json',
			success: function(data){
			}
		});
		tutorial.hide();	
		return false;   
	},
	show: function(code, add_next){
		if (!tutorial.finished)
		$.ajax({
			url: "/ajax/tutorial",
			data: "code="+code,
			dataType: 'json',
			success: function( data ){
				
				if (data == 'finished')
					tutorial.finished = true;
				else 
				if (data != 'error') 
				{
					var text = data.text;
			    	var sHoney = data.honey;
			    	var iNectar = data.nectar;
			    	var redirect = data.redirect;
			    	if ((redirect != undefined) && (window.location.pathname != redirect))
			    	{
			    		window.location = redirect;
			    		return;
			    	}
			    	
			    	if (sHoney!=undefined) {  
			            $('#honey').html(sHoney);
			            $('.rulet-button').removeClass('active');
			            $('#n' + iNectar).addClass('active');
			    	}

			    	if (add_next)
			    	{
			    		var inp_value = "NEXT";
			    		if (code == 'GIFT_CARD')
			    			inp_value = "FINISH";
			    		text += '<div style="text-align:center;"><input type="button" value="'+inp_value+'" class="jqmClose"/></div>';
			    	}
			    	
			    	if (code == 'DO_FIRST_SURVEY')
					{
						$('#tutorial_content').html(text);
						
						$('.jqmTutorialWindow').css({"padding":"10px 10px"});
						$('.jqmTutorialContent').css({"padding": "10px 15px", "border": "1px dotted #111"});
						
						$('#popup_tutorial').jqm({ overlay: 60, modal: true, closeClass: 'jqmCloseLink', onShow: onShowCenter, onHide: tutorial.onHide_SUBMIT_FIRST_SURVEY });
						$('#popup_tutorial').jqmShow();
					}
			    	else
					{
						$('#tutorial_content').html(text);
						$('#popup_tutorial').jqmShow();
					}
				}
			}
		});
	},
	hide: function(){
	    $('#popup_tutorial').jqmHide();
	}

}