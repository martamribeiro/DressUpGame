(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"DressUpGame_atlas_1", frames: [[501,802,309,106],[0,802,499,147],[0,0,1280,800]]},
		{name:"DressUpGame_atlas_2", frames: [[0,0,948,1920]]},
		{name:"DressUpGame_atlas_3", frames: [[0,0,948,1920],[950,0,948,1920]]},
		{name:"DressUpGame_atlas_4", frames: [[0,0,948,1920],[950,0,948,1920]]},
		{name:"DressUpGame_atlas_5", frames: [[0,0,948,1920],[950,0,948,1920]]}
];


(lib.AnMovieClip = function(){
	this.actionFrames = [];
	this.ignorePause = false;
	this.gotoAndPlay = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndPlay.call(this,positionOrLabel);
	}
	this.play = function(){
		cjs.MovieClip.prototype.play.call(this);
	}
	this.gotoAndStop = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndStop.call(this,positionOrLabel);
	}
	this.stop = function(){
		cjs.MovieClip.prototype.stop.call(this);
	}
}).prototype = p = new cjs.MovieClip();
// symbols:



(lib.CachedBmp_2 = function() {
	this.initialize(ss["DressUpGame_atlas_1"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_1 = function() {
	this.initialize(ss["DressUpGame_atlas_1"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.base1 = function() {
	this.initialize(ss["DressUpGame_atlas_5"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.bottom1_1 = function() {
	this.initialize(ss["DressUpGame_atlas_5"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.eyebrows1_1 = function() {
	this.initialize(ss["DressUpGame_atlas_4"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.eyes2_6 = function() {
	this.initialize(ss["DressUpGame_atlas_4"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.hair1_1 = function() {
	this.initialize(ss["DressUpGame_atlas_3"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.ModernDormroom1 = function() {
	this.initialize(ss["DressUpGame_atlas_1"]);
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.mouth1_1 = function() {
	this.initialize(ss["DressUpGame_atlas_3"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.top1_5 = function() {
	this.initialize(ss["DressUpGame_atlas_2"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.Skin1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Skin1
	this.instance = new lib.eyes2_6();
	this.instance.setTransform(168,26,0.8425,0.8425);

	this.instance_1 = new lib.eyebrows1_1();
	this.instance_1.setTransform(167.6,26.15,0.8425,0.8425);

	this.instance_2 = new lib.mouth1_1();
	this.instance_2.setTransform(167.6,26.15,0.8425,0.8425);

	this.instance_3 = new lib.base1();
	this.instance_3.setTransform(167.6,26.15,0.8425,0.8425);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(167.6,26,799.1,1617.8);


// stage content:
(lib.DressUpGame = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {Skin1:0};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	this.actionFrames = [0];
	this.isSingleFrame = false;
	// timeline functions:
	this.frame_0 = function() {
		if(this.isSingleFrame) {
			return;
		}
		if(this.totalFrames == 1) {
			this.isSingleFrame = true;
		}
		let root = this;
		
		function hideAllSkinLayers() {
		    for (let i = 1; i <= 5; i++) {
		        root["Skin" + i].visible = false;
		    }
		}
		
		function hideAllHairLayers() {
		    for (let i = 1; i <= 5; i++) {
		        for (let j = 1; j <= 15; j++) {
		            root["Hair" + i + "_" + j].visible = false;
		        }
		    }
		}
		
		hideAllSkinLayers();
		hideAllHairLayers();
		
		root.Skin1.visible = true; // Initially show Skin1
		root.Hair1_1.visible = true;
		
		let selectedHairStyle = 1;
		let selectedHairColor = 1;
		
		for (let i = 1; i <= 5; i++) {
		    let skinButton = root["Button_Skin" + i];
		    let hairButton = root["Button_Hair" + i];
		
		    skinButton.addEventListener("click", function () {
		        console.log("Skin Button clicked: skin", i);
		
		        hideAllSkinLayers();
		        root["Skin" + i].visible = true;
		    });
		
		    hairButton.addEventListener("click", function () {
		        console.log("Hair Button clicked: hair style", i);
		
		        hideAllHairLayers();
		        selectedHairStyle = i;
		        root["Hair" + selectedHairStyle + "_" + selectedHairColor].visible = true;
		    });
		}
		
		for (let i = 1; i <= 15; i++) {
		    let hairColorButton = root["Button_HairColor" + i];
		
		    hairColorButton.addEventListener("click", function () {
		        console.log("Hair Color Button clicked: hair color", i);
		
		        hideAllHairLayers();
		        selectedHairColor = i;
		        root["Hair" + selectedHairStyle + "_" + selectedHairColor].visible = true;
		    });
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Hair1
	this.instance = new lib.hair1_1();
	this.instance.setTransform(344,163,0.3224,0.3224);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Top1
	this.instance_1 = new lib.top1_5();
	this.instance_1.setTransform(344,163,0.3224,0.3224);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// Bottom1
	this.instance_2 = new lib.bottom1_1();
	this.instance_2.setTransform(344,163,0.3224,0.3224);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

	// Skin1
	this.Skin1 = new lib.Skin1("synched",0);
	this.Skin1.name = "Skin1";
	this.Skin1.setTransform(463.7,466.75,0.3825,0.3825,0,0,0,483.3,822);

	this.timeline.addTween(cjs.Tween.get(this.Skin1).wait(1));

	// SaveButton
	this.instance_3 = new lib.CachedBmp_2();
	this.instance_3.setTransform(778.45,40.15,0.5,0.5);

	this.instance_4 = new lib.CachedBmp_1();
	this.instance_4.setTransform(734.9,27.85,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_4},{t:this.instance_3}]}).wait(1));

	// Background
	this.instance_5 = new lib.ModernDormroom1();

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(1));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(512,384,768,416);
// library properties:
lib.properties = {
	id: '4799C63F92ACC445B1F2AF35EB74E310',
	width: 1024,
	height: 768,
	fps: 30,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/DressUpGame_atlas_1.png?1704557858703", id:"DressUpGame_atlas_1"},
		{src:"images/DressUpGame_atlas_2.png?1704557858703", id:"DressUpGame_atlas_2"},
		{src:"images/DressUpGame_atlas_3.png?1704557858703", id:"DressUpGame_atlas_3"},
		{src:"images/DressUpGame_atlas_4.png?1704557858703", id:"DressUpGame_atlas_4"},
		{src:"images/DressUpGame_atlas_5.png?1704557858703", id:"DressUpGame_atlas_5"}
	],
	preloads: []
};



// bootstrap callback support:

(lib.Stage = function(canvas) {
	createjs.Stage.call(this, canvas);
}).prototype = p = new createjs.Stage();

p.setAutoPlay = function(autoPlay) {
	this.tickEnabled = autoPlay;
}
p.play = function() { this.tickEnabled = true; this.getChildAt(0).gotoAndPlay(this.getTimelinePosition()) }
p.stop = function(ms) { if(ms) this.seek(ms); this.tickEnabled = false; }
p.seek = function(ms) { this.tickEnabled = true; this.getChildAt(0).gotoAndStop(lib.properties.fps * ms / 1000); }
p.getDuration = function() { return this.getChildAt(0).totalFrames / lib.properties.fps * 1000; }

p.getTimelinePosition = function() { return this.getChildAt(0).currentFrame / lib.properties.fps * 1000; }

an.bootcompsLoaded = an.bootcompsLoaded || [];
if(!an.bootstrapListeners) {
	an.bootstrapListeners=[];
}

an.bootstrapCallback=function(fnCallback) {
	an.bootstrapListeners.push(fnCallback);
	if(an.bootcompsLoaded.length > 0) {
		for(var i=0; i<an.bootcompsLoaded.length; ++i) {
			fnCallback(an.bootcompsLoaded[i]);
		}
	}
};

an.compositions = an.compositions || {};
an.compositions['4799C63F92ACC445B1F2AF35EB74E310'] = {
	getStage: function() { return exportRoot.stage; },
	getLibrary: function() { return lib; },
	getSpriteSheet: function() { return ss; },
	getImages: function() { return img; }
};

an.compositionLoaded = function(id) {
	an.bootcompsLoaded.push(id);
	for(var j=0; j<an.bootstrapListeners.length; j++) {
		an.bootstrapListeners[j](id);
	}
}

an.getComposition = function(id) {
	return an.compositions[id];
}


an.makeResponsive = function(isResp, respDim, isScale, scaleType, domContainers) {		
	var lastW, lastH, lastS=1;		
	window.addEventListener('resize', resizeCanvas);		
	resizeCanvas();		
	function resizeCanvas() {			
		var w = lib.properties.width, h = lib.properties.height;			
		var iw = window.innerWidth, ih=window.innerHeight;			
		var pRatio = window.devicePixelRatio || 1, xRatio=iw/w, yRatio=ih/h, sRatio=1;			
		if(isResp) {                
			if((respDim=='width'&&lastW==iw) || (respDim=='height'&&lastH==ih)) {                    
				sRatio = lastS;                
			}				
			else if(!isScale) {					
				if(iw<w || ih<h)						
					sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==1) {					
				sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==2) {					
				sRatio = Math.max(xRatio, yRatio);				
			}			
		}
		domContainers[0].width = w * pRatio * sRatio;			
		domContainers[0].height = h * pRatio * sRatio;
		domContainers.forEach(function(container) {				
			container.style.width = w * sRatio + 'px';				
			container.style.height = h * sRatio + 'px';			
		});
		stage.scaleX = pRatio*sRatio;			
		stage.scaleY = pRatio*sRatio;
		lastW = iw; lastH = ih; lastS = sRatio;            
		stage.tickOnUpdate = false;            
		stage.update();            
		stage.tickOnUpdate = true;		
	}
}
an.handleSoundStreamOnTick = function(event) {
	if(!event.paused){
		var stageChild = stage.getChildAt(0);
		if(!stageChild.paused || stageChild.ignorePause){
			stageChild.syncStreamSounds();
		}
	}
}
an.handleFilterCache = function(event) {
	if(!event.paused){
		var target = event.target;
		if(target){
			if(target.filterCacheList){
				for(var index = 0; index < target.filterCacheList.length ; index++){
					var cacheInst = target.filterCacheList[index];
					if((cacheInst.startFrame <= target.currentFrame) && (target.currentFrame <= cacheInst.endFrame)){
						cacheInst.instance.cache(cacheInst.x, cacheInst.y, cacheInst.w, cacheInst.h);
					}
				}
			}
		}
	}
}


})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;