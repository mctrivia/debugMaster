"use strict";
var debugMaster=function() {
	var outputType=1;	//0=none,	1=console,	2=full screen
	if (location.hash=="#test") {
		outputType=2;
	}

	var loaded=false;
	var que=[];
	$(function() {
		//add test div
		$('body').append('<div id="debugMaster">Debug Screen Loaded:</div>');
		
		//show debug if type 2
		if (outputType==2) {
			$("#debugMaster").show();
		}
		
		//run que
		loaded=true;
		for (var code of que) {
			$("#debugMaster").append(code);
		}
	});
	
	debugMaster.setOutput=function(type) {
		outputType=type;
		if (type==2) {
			$("#debugMaster").show();
		}
	};
	
	debugMaster.log=function() {
		if (outputType==1) {
			//console
			switch (arguments.length) {
				case 0:
					console.log();
					break;
				case 1:
					console.log(arguments[0]);
					break;
				case 2:
					console.log(arguments[0],arguments[1]);
					break;
				case 3:
					console.log(arguments[0],arguments[1],arguments[2]);
					break;
				case 4:
					console.log(arguments[0],arguments[1],arguments[2],arguments[3]);
					break;
				case 5:
					console.log(arguments[0],arguments[1],arguments[2],arguments[3],arguments[4]);
					break;
				case 6:
					console.log(arguments[0],arguments[1],arguments[2],arguments[3],arguments[4],arguments[5]);
					break;
			
			
			};
		} else if (outputType==2) {
			
			//print to full screen div
			var code='';
			code+='<div class="debugMasterEntry">';
			for (var i=0;i<arguments.length;i++) {
				code+='<div class="debugMasterValue">';
				code+=	arguments[i];
				code+='</div>';
			}			
			code+='</div>';
			
			if (loaded) {
				$("#debugMaster").append(code);
			} else {
				que.push(code);
			}
		}
	
	};
};
debugMaster();
