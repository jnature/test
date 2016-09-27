(function (lib, img, cjs) {

var p; // shortcut to reference prototypes

// library properties:
lib.properties = {
	width: 550,
	height: 400,
	fps: 24,
	color: "#FFFFFF",
	manifest: []
};

// stage content:
(lib.Test_as = function() {
	this.initialize();

	// Layer 1
	this.circle = new lib.circle();
	this.circle.setTransform(462,242);

	this.box = new lib.box();
	this.box.setTransform(200,145);

	this.addChild(this.box,this.circle);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(386.5,284.5,421,228);


// symbols:
(lib.Symbol4 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("rgba(0,0,102,0.498)").ss(1,1,1).p("AK8AAQAAEijNDNQjNDNkiAAQkhAAjNjNQjNjNAAkiQAAkhDNjNQDNjNEhAAQEiAADNDNQDNDNAAEhg");

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#CC0066").s().p("AnuHvQjMjOgBkhQABkgDMjOQDOjMEggBQEhABDODMQDMDOABEgQgBEhjMDOQjODMkhABQkggBjOjMg");

	this.addChild(this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-71,-71,142,142);


(lib.Symbol3 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("rgba(0,0,102,0.498)").ss(1,1,1).p("AtupXIbdAAIAASvI7dAAg");

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(0,51,255,0.976)").s().p("AtuJYIAAyvIbdAAIAASvg");

	this.addChild(this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-88.9,-61,178,122);


(lib.circle = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Symbol4("synched",0);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({y:-12.6},0).wait(1).to({y:-24.6},0).wait(1).to({y:-36.1},0).wait(1).to({y:-47},0).wait(1).to({y:-57.4},0).wait(1).to({y:-67.1},0).wait(1).to({y:-76.4},0).wait(1).to({y:-85},0).wait(1).to({y:-93.2},0).wait(1).to({y:-100.7},0).wait(1).to({y:-107.7},0).wait(1).to({y:-114.1},0).wait(1).to({y:-120},0).wait(1).to({y:-125.3},0).wait(1).to({y:-130.1},0).wait(1).to({y:-134.3},0).wait(1).to({y:-137.9},0).wait(1).to({y:-141},0).wait(1).to({y:-143.5},0).wait(1).to({y:-145.5},0).wait(1).to({y:-146.9},0).wait(1).to({y:-147.7},0).wait(1).to({y:-148},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-71,-219,142,290);


(lib.box = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		//this.stop();
		this.gotoAndPlay(25);
		//trace(_parent.circle);
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(41));

	// Layer 1
	this.instance = new lib.Symbol3("synched",0);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({rotation:17.8,x:8.2},0).wait(1).to({rotation:35.1,x:16.2},0).wait(1).to({rotation:52,x:24},0).wait(1).to({rotation:68.4,x:31.5},0).wait(1).to({rotation:84.4,x:38.9},0).wait(1).to({rotation:99.9,x:46.1},0).wait(1).to({rotation:115,x:53},0).wait(1).to({rotation:129.6,x:59.8},0).wait(1).to({rotation:143.8,x:66.3},0).wait(1).to({rotation:157.5,x:72.6},0).wait(1).to({rotation:170.8,x:78.7},0).wait(1).to({rotation:183.6,x:84.7},0).wait(1).to({rotation:196,x:90.4},0).wait(1).to({rotation:207.9,x:95.9},0).wait(1).to({rotation:219.4,x:101.2},0).wait(1).to({rotation:230.4,x:106.2},0).wait(1).to({rotation:241,x:111.1},0).wait(1).to({rotation:251.1,x:115.8},0).wait(1).to({rotation:260.8,x:120.2},0).wait(1).to({rotation:270,x:124.5},0).wait(1).to({rotation:278.8,x:128.5},0).wait(1).to({rotation:287.1,x:132.4},0).wait(1).to({rotation:295,x:136},0).wait(1).to({rotation:302.4,x:139.4},0).wait(1).to({rotation:309.4,x:142.7},0).wait(1).to({rotation:315.9,x:145.7},0).wait(1).to({rotation:322,x:148.5},0).wait(1).to({rotation:327.6,x:151.1},0).wait(1).to({rotation:332.8,x:153.4},0).wait(1).to({rotation:337.5,x:155.6},0).wait(1).to({rotation:341.8,x:157.6},0).wait(1).to({rotation:345.6,x:159.4},0).wait(1).to({rotation:349,x:160.9},0).wait(1).to({rotation:351.9,x:162.3},0).wait(1).to({rotation:354.4,x:163.4},0).wait(1).to({rotation:356.4,x:164.3},0).wait(1).to({rotation:358,x:165.1},0).wait(1).to({rotation:359.1,x:165.6},0).wait(1).to({rotation:359.8,x:165.9},0).wait(1).to({rotation:360,x:166},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-94.8,-107.3,355.7,214.6);

})(lib = lib||{}, images = images||{}, createjs = createjs||{});
var lib, images, createjs;