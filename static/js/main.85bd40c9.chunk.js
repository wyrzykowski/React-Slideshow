(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{10:function(e,t,s){e.exports=s(19)},16:function(e,t,s){},18:function(e,t,s){},19:function(e,t,s){"use strict";s.r(t);var i=s(0),a=s.n(i),n=s(9),r=s.n(n),o=(s(16),s(1)),l=s(2),c=s(4),d=s(3),m=s(5),h=s(6),u=s(7),g=s.n(u),f=function(e){function t(e){var s;return Object(o.a)(this,t),(s=Object(c.a)(this,Object(d.a)(t).call(this,e))).state={currentImageHeight:1,currentImageWidth:1,screenWidth:window.innerWidth,style:{},content:[],slideIndex:0,first:!0,interval:3e3,speed:"0.6s",slides:[{slide:"./images/1.jpg",style:{opacity:"0"},className:"imageHolder"},{slide:"./images/2.jpg",style:{opacity:"0"},className:"imageHolder"},{slide:"./images/3.jpg",style:{opacity:"0"},className:"imageHolder"},{slide:"./images/4.jpg",style:{opacity:"0"},className:"imageHolder"}]},s.updateDimensions=function(){var e=window.innerWidth;s.setState({screenWidth:e})},s.setTimer=function(){var e=new Image;e.src=s.state.slides[0].slide;e.onload=function(){!function(e,t){s.setState({currentImageHeight:e,currentImageWidth:t})}(this.height,this.width)};setInterval(function(){s.plusSlides(1)},s.state.interval)},s.image=a.a.createRef(),s}return Object(m.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){window.addEventListener("resize",this.updateDimensions),this.setTimer()}},{key:"componentWillUnmount",value:function(){window.removeEventListener("resize",this.updateDimensions)}},{key:"plusSlides",value:function(e){this.moveSlide(this.state.slideIndex+e)}},{key:"moveSlide",value:function(e){var t,s,i,a={forCurrent:"",forNext:""};if(e>this.state.slideIndex&&(e>=this.state.slides.length&&(e=0),a.forCurrent="moveLeftCurrentSlide",a.forNext="moveLeftNextSlide"),e!=this.state.slideIndex){for(i=e,s=this.state.slideIndex,t=0;t<this.state.slides.length;t++)this.setState({slides:g()(this.state.slides,Object(h.a)({},t,{style:{$set:{opacity:"0"}},className:{$set:"imageHolder"}}))});this.setState({slides:g()(this.state.slides,Object(h.a)({},s,{className:{$set:"".concat(this.state.slides[s].className,"  ").concat(a.forCurrent)}})),slideIndex:e}),this.setState({slides:g()(this.state.slides,Object(h.a)({},i,{className:{$set:"".concat(this.state.slides[i].className,' " ').concat(a.forNext)}})),first:!1})}}},{key:"render",value:function(){var e=this;return a.a.createElement("div",{className:"galleryContainer",style:{width:"100%",height:this.state.screenWidth/this.state.currentImageWidth*this.state.currentImageHeight,margin:0,padding:0}},this.state.slides?a.a.createElement("div",{className:"slideShowContainer"},this.state.slides.map(function(t){return a.a.createElement("div",{key:t.slide,className:"".concat(t.className),style:t===e.state.slides[0]?{opacity:1,animationDuration:e.state.speed}:{opacity:0,animationDuration:e.state.speed}},a.a.createElement("img",{ref:e.image,src:t.slide}))})):"")}}]),t}(i.Component),p=(s(18),function(e){function t(){return Object(o.a)(this,t),Object(c.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return a.a.createElement("div",{className:"App"},a.a.createElement(f,null))}}]),t}(i.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(a.a.createElement(p,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[10,1,2]]]);
//# sourceMappingURL=main.85bd40c9.chunk.js.map