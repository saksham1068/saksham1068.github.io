this.$dom = {};
this.$dom.animatedText = document.createElement('div');
this.text = "Happy 2-Year anniversary! Can you believe it? We've been stuck with each other for two whole years now! If our relationship were a toddler, it would be running around, talking non-stop, and probably driving its parents crazy. So, basically, it would be just like us! I still remember the day we met like it was yesterday. You know, that magical moment when you realized you were in the presence of pure awesomeness. Remember when we tried to make chai in night and ended up with something that looked like it belonged in a modern art museum? And who could forget our epic evenings, where we swore we'd only spend some time together and then accidentely it becomes whole nightout! and when we used to stroll in campus with fear but showing no fear, our endless fun in strolls, your cute cute actions when i feel depressed, you are a complete package of fun, hotness, cuteness, brain, beauty, in short you are a saanchi. Just stay with me and make my life like a Perfect Fairy Tale:) (yes pamper me like your fairy only, I'm not mature, I just want to stay in your arms)"; 
this.$dom.container = document.getElementById('container');
this.$dom.container.appendChild(this.$dom.animatedText);
animateText();
function animateText(){
	var arrayOfLetters = this.text.split("");
	var animatedSpan = [];
	arrayOfLetters.forEach(function(item){
		var span = document.createElement('span');
		span.innerHTML = item;
		animatedSpan.push(span);
		span.style.opacity = 0;
		span.style.color = 'white';
		this.$dom.animatedText.appendChild(span);
	});
	TweenMax.staggerTo(animatedSpan, .2,{
		opacity : 1,
		delay : 2
	},0.05);
}
