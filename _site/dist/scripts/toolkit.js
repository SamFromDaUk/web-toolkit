"undefined"==typeof toolkit&&(toolkit={}),toolkit.skycons=function(){function t(){var t,e=document,n=(e.documentElement,e.body),o=!1,i=e.createElement("p"),a=e.createElement("style"),s='#testbefore:before { content: "before"; }';return a.type="text/css",i.id="testbefore",a.styleSheet?a.styleSheet.cssText=s:a.appendChild(e.createTextNode(s)),n.appendChild(a),n.appendChild(i),t=e.getElementById("testbefore").offsetHeight,t>=1&&(o=!0),n.removeChild(a),n.removeChild(i),o}function e(t,e){var n=t.innerHTML,i=o[e];t.innerHTML='<span style="font-family: \'skycons\'" class="ie7-skycon">'+i+"</span>"+n}function n(){if(!t()){var n,o,i,a=document.getElementsByTagName("*");for(n=0;i=a[n],i;n+=1)o=i.className,o=o.match(/skycon-[^\s'"]+/),o&&e(i,o[0])}}var o={"skycon-sky":"&#xf100;","skycon-chevron-down":"&#xf101;","skycon-sky-plus":"&#xf102;","skycon-tv":"&#xf103;","skycon-twitter-reply":"&#xf104;","skycon-chevron-up":"&#xf105;","skycon-chevron":"&#xf106;","skycon-facebook":"&#xf107;","skycon-remote-record":"&#xf108;","skycon-warning":"&#xf109;","skycon-carousel-play":"&#xf10a;","skycon-arrow-left":"&#xf10b;","skycon-on-demand":"&#xf10c;","skycon-user-profile":"&#xf10d;","skycon-search":"&#xf10e;","skycon-twitter-retweet":"&#xf10f;","skycon-volume":"&#xf110;","skycon-twitter-favourite":"&#xf111;","skycon-expand":"&#xf112;","skycon-carousel-pause":"&#xf113;","skycon-mouse":"&#xf114;","skycon-share":"&#xf115;","skycon-never-miss":"&#xf116;","skycon-mail":"&#xf117;","skycon-sky-go":"&#xf118;","skycon-twitter-follow":"&#xf119;","skycon-minify":"&#xf11a;","skycon-twitter":"&#xf11b;","skycon-close":"&#xf11c;","skycon-menu":"&#xf11d;","skycon-phone":"&#xf11e;","skycon-cloud":"&#xf11f;","skycon-google-plus":"&#xf120;"};return{add:e,init:n}}(),"function"==typeof window.define&&window.define.amd&&define("utils/skycons",[],function(){return toolkit.skycons}),"undefined"==typeof toolkit&&(toolkit={}),toolkit.hashmanager=function(){function t(){$(window).on("hashchange",e);var t=document.documentMode,n="onhashchange"in window&&(void 0===t||t>7);n||(s.hash=document.location.hash,setInterval(function(){document.location.hash!==s.hash&&$(window).trigger("hashchange")},200)),s.windowLoaded=!0}function e(t){var e,n;t=a("string"==typeof t?t:location.hash),t?(e=s.globalHashList[t],n="callback",s.lastExecutor=t):s.lastExecutor&&(e=s.globalHashList[s.lastExecutor],n="undo"),e&&"function"==typeof e[n]&&e[n](t)}function n(){var t=window.location;"pushState"in history?(location.hash="!",history.pushState("",document.title,t.pathname+t.search)):location.hash="!"}function o(t){location.hash="!"+t}function i(t,n,o){var i=s.globalHashList;$(t).each(function(t,r){if(r=a(r),i[r]){var d="hashManager: hash ("+r+") already exists";throw new Error(d)}i[r]={callback:n,undo:o},s.windowLoaded&&r===a(location.hash)&&e(r)})}function a(t){return t.replace(/[#!]/g,"")}var s={globalHashList:{},hasLoaded:!1,windowLoaded:!1,lastExecutor:null,hash:null};return t(),{register:i,change:o,remove:n,onHashChange:e,cleanHash:a}}(),"function"==typeof window.define&&window.define.amd&&define("utils/hashmanager",[],function(){return toolkit.hashmanager}),"undefined"==typeof toolkit&&(toolkit={}),toolkit.popup=function(){function t(t){var e=t.url,n=t.width||400,o=t.height||n,i=t.top||screen.height/2-o/2,a=t.left||screen.width/2-n/2,s=t.title||"Sky";return window.open(e,s,"top="+i+",left="+a+",width="+n+",height="+o)}function e(){$("body").on("click","[data-popup]",function(e){e.preventDefault();var n=$.extend($(this).data("popup"),{url:$(this).attr("href")});t(n)})}return{init:e,open:t}}(),"function"==typeof window.define&&window.define.amd&&define("utils/popup",[],function(){return toolkit.popup}),"undefined"==typeof toolkit&&(toolkit={}),toolkit.diff=function(){function t(t){var n=t.oldRoute,o=t.newRoute;a(),$("a[data-diff]").each(function(){e(n,o,$(this).attr("data-diff"))})}function e(t,e,n){var i,a,s=n.split("/")[n.split("/").length-1],r=e+"/"+n+".html",d=t+"/"+n+".html";i=$.ajax({crossDomain:!0,url:r,cache:!1}),a=$.ajax({crossDomain:!0,url:d,cache:!1}),$.when(i,a).done(function(t,e){var n=$('<div class="togglee" data-toggle="'+s+'"><table id="'+s+'-table"></table></div>');n.append($('<textarea id="'+s+'" class="hidden latest"></textarea>').val(t)).append($('<textarea id="old-'+s+'" class=hidden></textarea>').val(e)),$("[data-diff-container]").append('<h3 class="has-toggle wiki-h3 smaller" id="'+s+'-header"><span class="toggler" for="'+s+'"></span>'+s+"</h3>").append(n),o(s,e[0].split("\n"),t[0].split("\n"))})}function n(t,e,o,a,s,r){if(s>0&&r>0&&o[r-1]===a[s-1])n(t,e,o,a,s-1,r-1),i(t,s,r," ",o[r-1]);else if(s>0&&(0===r||e[r][s-1]>=e[r-1][s]))n(t,e,o,a,s-1,r),i(t,s,"","+",a[s-1]);else{if(!(r>0&&(0===s||e[r][s-1]<e[r-1][s])))return;n(t,e,o,a,s,r-1),i(t,"",r,"-",o[r-1],"")}}function o(t,e,o){var i,a,s=new Array(e.length+1);for(a=0;a<s.length;a++)for(s[a]=new Array(o.length+1),i=0;i<s[a].length;i++)s[a][i]=0;for(a=1;a<s.length;a++)for(i=1;i<s[a].length;i++)s[a][i]=e[a-1]===o[i-1]?1+s[a-1][i-1]:Math.max(s[a-1][i],s[a][i-1]);try{n(t,s,e,o,i-1,a-1)}catch(r){alert(r)}}function i(t,e,n,o,i){var a=document.getElementById(t+"-table"),s=document.getElementById(t+"-header"),r=document.createElement("tr"),d=document.createElement("td"),c=document.createElement("td"),l=document.createElement("td"),u=document.createTextNode(n),h=document.createTextNode(e),f=document.createTextNode(o+" "+i);"+"===o?(r.className="add",$(s).addClass("add")):"-"===o&&(r.className="del",$(s).addClass("del")),d.className="codekolom",c.className="codekolom",l.className="bredecode",d.appendChild(u),c.appendChild(h),l.appendChild(f),r.appendChild(d),r.appendChild(c),r.appendChild(l),a.appendChild(r)}function a(){$(".sky-form .error").text(""),$(".togglee").remove(),$(".has-toggle").remove()}return t}(),"function"==typeof window.define&&window.define.amd&&define("utils/diff",[],function(){return toolkit.diff}),"undefined"==typeof toolkit&&(toolkit={}),toolkit.tabs=function(t){function e(){f.rememberState?(t.register(n(),o),h.showMore.on("click",function(t){t.preventDefault(),a($(this))}),$("body").on("click",function(t){$(t.target).closest(h.showMore).length||($(h.showMore).parent("div").children("ul").removeClass("dropdown-tab-selected"),$(h.showMore).removeClass("dropdown-tab-selected"))}),h.tabs.on("click",function(t){$(t.target).parents(".dropdown-tab-info").length&&console.log(t.target)}),$(document).ready(function(){c(),s()}),$(window).bind("skycom.resizeend",function(){c(),s()})):(h.tabs.on("click",function(t){t.preventDefault(),o($(this).find("a").attr("href"))}),h.showMore.on("click",function(t){t.preventDefault()}))}function n(){var t=[];return h.tabs.each(function(){t.push($(this).attr("aria-controls"))}),t}function o(t){h.tabTargets.add(h.tabs).removeClass("selected"),$("#"+t+"-tab").add($("#"+t)).addClass("selected"),$this=$("#"+t+"-tab"),$this.parents().is("ul.dropdown-tab-info")?($($("ul.tabs").children("li").last()).prependTo(".dropdown-tab-info"),$this.insertAfter($("ul.tabs").children("li").last()),l(),f.hasSwitchedOut=!0):f.hasSwitchedOut&&($($("ul.tabs").children("li").last()).appendTo(".dropdown-tab-info"),$(".dropdown-tab-info").children("li").first().insertAfter($("ul.tabs").children("li").last()),l(),f.hasSwitchedOut=!1)}function a(t){$(t).parent("div").children("ul").hasClass("dropdown-tab-selected")?($(h.showMore).removeClass("dropdown-tab-selected"),$(t).parent("div").children("ul").removeClass("dropdown-tab-selected")):($(h.showMore).addClass("dropdown-tab-selected"),$(t).parent("div").children("ul").addClass("dropdown-tab-selected"))}function s(){$(".dropdown-tab-info").each(function(){$(this).children("li").length||$(this).parent("div").hide()})}function r(){return $containerWidth=h.tabContainer.width(),totalWidth=0,numberOfTabs=0,$(".tabs [id$=-tab]").each(function(){if(totalWidth+=$(this).find("a span").innerWidth()+30,$containerWidth>totalWidth)numberOfTabs++;else if(totalWidth>$containerWidth)return numberOfTabs}),numberOfTabs}function d(t){i=0,$(".tabs").children("li").each(function(){i>=t?($(this).appendTo(".dropdown-tab-info"),l(),$(".dropdown-tab-select").show()):i++})}function c(){return numberOfTabs=r(),d(numberOfTabs),numberOfTabs>=$(".tabs").children("li").length+1?($(".dropdown-tab-info li").first().insertBefore(".tabs div.dropdown-tab-select"),!1):void 0}function l(){f.sortDropdown=[],$(".dropdown-tab-info li").each(function(){f.sortDropdown.push($(this).attr("data-value"))}),f.sortDropdown.sort(),$.each(f.sortDropdown,function(){$('.dropdown-tab-info li[data-value="'+this+'"').appendTo(".dropdown-tab-info")})}function u(){e()}var h={tabContainer:$("section[data-function=tabs]"),tabs:$("section[data-function=tabs] li[role=tab]"),tabTargets:$("section[data-function=tabs] div[role=tabpanel]"),showMore:$("section[data-function=tabs] ul[role=tablist] .dropdown-tab-select a"),dropdownTab:$("section[data-function=tabs] ul[role=tablist] .dropdown-tab-select ul.dropdown-tab-info")},f={rememberState:"true"===h.tabContainer.attr("data-remember-state"),hasSwitchedOut:!1,sortDropdown:[],sortTabs:[]};return{init:u,getHashList:n,changeTab:o}}(toolkit.hashmanager),"function"==typeof window.define&&window.define.amd&&define("modules/tabs",["utils/hashmanager"],function(){return toolkit.tabs}),"undefined"==typeof toolkit&&(toolkit={}),toolkit.share=function(){function t(){o.shareCount.on("click keypress",e)}function e(t){t.preventDefault();var e=$(this).parent(),n="keypress "+("ontouchend"in document.documentElement?"touchend":"click");("click"===t.type||"touchend"===t.type||"keypress"===t.type&&13===t.which)&&(e.toggleClass("active"),o.document.on(n,function i(t){$.contains(e[0],t.target)||(e.removeClass("active"),o.document.off(n,i))}))}function n(){t()}var o={document:$(document),shareCount:$(".share-popup .summary")};return{init:n,toggleSharePopover:e}}(),"function"==typeof window.define&&window.define.amd&&define("modules/share",[],function(){return toolkit.share}),"undefined"==typeof toolkit&&(toolkit={}),toolkit.carousel=function(t,e){function n(t,e){this.options=e,this.$viewport=t,this.$slideContainer=t.find(".skycom-carousel-container"),this.$slides=this.$slideContainer.find(">"),this.currentIndex=0,this.slideCount=this.$slides.length,this.timerId=!1,this.touchReset(),this.bindEvents()}function o(t,e){this.carousel=t,this.wrapper=t.$viewport.find(".video-wrapper"),this.wrapper.attr("id","video-"+e.videoId),this.videocontrolcontainer=t.$viewport.find(".videocontrolcontainer"),this.player=t.$viewport.find("video"),this.videocontrolcontainer.find("img").on("error",function(){this.src=e.placeHolderImage}),this.options=e,this.bindEvents()}var i=function(){return"WebKitCSSMatrix"in t&&"m11"in new t.WebKitCSSMatrix}(),a=function(){var t=document.body.style;return void 0!==t.transform||void 0!==t.WebkitTransform||void 0!==t.MozTransform||void 0!==t.OTransform}();n.prototype={unbindTouchEvents:function(){this.$slideContainer.off("touchstart touchmove touchend touchcancel")},bindTouchEvents:function(){this.$slideContainer.on("touchstart",this.touchstart.bind(this)).on("touchmove",this.touchmove.bind(this)).on("touchend",this.touchend.bind(this)).on("touchcancel",this.touchReset.bind(this))},bindEvents:function(){this.bindTouchEvents(),this.$slideContainer.find("a").on("click",this.pause.bind(this))},unbindEvents:function(){this.unbindTouchEvents(),this.$slideContainer.find("a").off("click")},setOffset:function(t,e){var n=this.$slideContainer.removeClass("animate");return e&&n.addClass("animate"),i?n.css("transform","translate3d("+t+"%,0,0) scale3d(1,1,1)"):a?n.css("transform","translate("+t+"%,0)"):e?n.animate({left:2*t+"%"},600):n.css({left:2*t+"%"}),this},moveSlide:function(t){var e,n,o=this,i=this.$slides;return n=t.index>=this.slideCount?0:t.index<0?this.slideCount-1:t.index,e=t.index>this.currentIndex&&!t.reverse?"left":"right",i.filter(":not(:eq("+this.currentIndex+"))").hide(),i.eq(this.currentIndex).css("float",e),i.eq(n).show().css("float","left"==e?"right":"left"),this.setOffset(t.start,!1),"undefined"!=typeof t.end&&(setTimeout(function(){o.setOffset(t.end,!0),o.$viewport.trigger("change",n)},20),this.currentIndex=n,"function"==typeof t.callback&&t.callback(n)),n},"goto":function(t,e,n){return e!==!1&&this.pause(),t!==this.currentIndex?(t>this.currentIndex?this.moveSlide({index:t,start:0,end:-50,callback:n}):this.moveSlide({index:t,start:-50,end:0,callback:n}),this):void 0},next:function(t,e){return this.goto(this.currentIndex+1,t,e),this.$viewport.find(".indicators, .actions").css("display","block"),this},previous:function(){return this.goto(this.currentIndex-1),this.$viewport.find(".indicators, .actions").css("display","block"),this},play:function(t,e){var n=this,o=this.options.interval;return n.timerId=setTimeout(function(){n.next(!1),n.timerId=setTimeout(function t(){n.next(!1,function(){n.timerId=setTimeout(t,o)})},o)},e||this.options.onPlayDelay),this.$viewport.trigger("playing"),"function"==typeof t&&t(),this},pause:function(t){return clearTimeout(this.timerId),this.$viewport.trigger("paused"),"function"==typeof t&&t(),this},touchstart:function(t){var e=t.originalEvent.touches[0];this.pause(),this.swipe.start={x:e.pageX,y:e.pageY}},touchmove:function(t){var e,n=this.swipe,o=t.originalEvent.touches[0],i=o.pageX-n.start.x,a=o.pageY-n.start.y,s=Math.abs(i)>Math.abs(a),r=0>i?this.currentIndex+1:this.currentIndex-1;n.start&&s!==!1&&(t.preventDefault(),e=100*(i/this.$slideContainer.outerWidth(!0)),i>0&&(e-=50),this.swipe.positionAsPercentage=e,this.moveSlide({index:r,start:e}))},touchend:function(t){if(this.swipe.start){var e=this.swipe,n=e.positionAsPercentage,o=t.originalEvent.changedTouches[0],i=o.pageX-e.start.x,a=null,s=75;if(Math.abs(i)>s&&(a=0>i?"left":"right"),"left"===a)this.moveSlide({index:this.currentIndex+1,start:n,end:-50}),this.$viewport.find(".next").trigger("toolkit.track");else if("right"===a)this.moveSlide({index:this.currentIndex-1,start:n,end:0}),this.$viewport.find(".previous").trigger("toolkit.track");else if(0!==n){var r,d=i>0?n+50:n,c=this.currentIndex,l=0;0>d?this.currentIndex=c+1>=this.slideCount?0:c+1:(this.currentIndex-=1,l=-50,d-=50),r=0===this.currentIndex&&c===this.slideCount-1,this.moveSlide({index:c,start:d,end:l,reverse:r})}this.touchReset()}},touchReset:function(){this.swipe={start:!1,positionAsPercentage:0}}},o.prototype={bindEvents:function(){var t=this,e=function(t){t.preventDefault()},n=function(){return t.stop(),o.off("click",e),!1},o=this.wrapper;o.on("click",e).find(".close").one("click touchstart",n),this.player.on("ended webkitendfullscreen",n)},play:function(){var t=this,e=this.carousel.$viewport.find(".actions, .indicators");this.originalHtml=this.videocontrolcontainer.html(),this.carousel.pause(),this.showCanvas(function(){e.hide(),t.carousel.unbindTouchEvents(),t.player.sky_html5player(t.options),setTimeout(function(){sky.html5player.play()},1333)})},stop:function(){var n=this,o=this.carousel.$viewport.find(".actions, .indicators");e(t).off("skycom.resizeend",n.resizeCarousel),sky.html5player.close(this.wrapper),n.videocontrolcontainer.html(n.originalHtml),this.hideCanvas(function(){n.carousel.bindTouchEvents(),o.show()})},showCanvas:function(n){var o,i=this.carousel.$viewport,a=i.find(".video-overlay"),s=i.find(".video-wrapper"),r=i.find(".play-video"),d=i.find(".video-wrapper .close"),c=500,l=this;this.originalHeight=i.height(),s.addClass("playing-video"),a.fadeIn(function(){r.fadeOut(),o=l.calculateHeightForVideo(),i.animate({height:o},c,function(){e(t).on("skycom.resizeend",e.proxy(l.resizeCarousel,l)),s.show(),a.fadeOut(c,function(){d.addClass("active")}),n()})})},calculateHeightForVideo:function(){return Math.round(9*(this.carousel.$viewport.width()/16))},resizeCarousel:function(){this.carousel.$viewport.animate({height:this.calculateHeightForVideo()},250)},hideCanvas:function(t){var e=this.carousel.$viewport,n=e.find(".video-overlay"),o=e.find(".video-wrapper"),i=e.find(".play-video"),a=e.find(".video-wrapper .close"),s=500,r=this.originalHeight;n.fadeIn(s,function(){a.removeClass("active"),e.animate({height:r},s,function(){e.css({height:"auto"}),t(),i.fadeIn(),n.hide(),o.fadeOut(),o.removeClass("playing-video")})})}},e.fn.skycom_carousel=function(t){var i=e.extend(!0,{carousel:{actions:[{id:"play",label:"Play Carousel"},{id:"pause",label:"Pause Carousel"},{id:"previous",label:"Previous"},{id:"next",label:"Next"}],autoplay:!0,startSlideIndex:0,onPlayDelay:500,interval:6e3},video:{token:"8D5B12D4-E1E6-48E8-AF24-F7B13050EE85",autoplay:!1,videoId:null,freewheel:!1,placeHolderImage:"//static.video.sky.com/posterframes/skychasky.jpg"}},t),a={actions:function(t,n){var o,i,a,s,r="",d=n.actions,c=n.onclick;if(n.count<=1)return this;for(a in d)s="",o=d[a].id,i=d[a].label,("next"==o||"previous"==o)&&(s=" hidden-touch "),r+='<a href="#" class="skycom-internal '+s+o+'" >',r+='<span class="icon-carousel-'+o+'"></span>'+i,("next"==o||"previous"==o)&&(r+='<span class="icon-carousel-'+o+'-over over"></span>'),r+="</a>";return t.find(".skycom-carousel-container").before('<div class="actions">'+r+"</div>"),t.find("> .actions > *").each(function(t){e(this).attr("data-action",d[t].id).on("click",function(e){c(d[t].id),e.preventDefault()})}),this},indicators:function(t,n){var o,i,a=n.count,s=n.onclick,r='<div class="indicators"><div class="container">',d=' class="active"';if(1>=a)return this;for(i=a;i--;)r+="<span"+d+' data-tracking data-tracking-label="indicator"></span>',d="";return o=e(r+"</div></div>").on("click","span",function(t){s(e(t.currentTarget).index())}),t.append(o),this},video:function(t){return t.append('<div class="video-overlay"></div>'),this}};return this.each(function(){var t=e(this),s=new n(t,i.carousel),r=function(e){a.indicators(t,{count:e.slideCount,onclick:function(t){e.goto(t)}}).actions(t,{count:e.slideCount,actions:i.carousel.actions,onclick:function(t){e[t]()}}).video(t)};r(s),t.on("click",".play-video",function(t){t.preventDefault(),i.video.videoId=e(this).attr("data-video-id"),i.carousel.videoAds&&(i.video.freewheel=!0);var n=new o(s,i.video);n.play()}).on("change",function(e,n){n=n||0,t.find(".indicators .container > *").removeClass("active").eq(n).addClass("active"),s.$slides.removeClass("active").find("a").attr("tabindex",-1),s.$slides.eq(n).addClass("active").find("a").removeAttr("tabindex")}).on("playing",function(){t.removeClass("paused").addClass("playing")}).on("paused",function(){t.removeClass("playing").addClass("paused")}).on("pause",function(){s.pause()}).on("play",function(){s.play()}).on("refresh",function(e,n){s.$slides=s.$slideContainer.find(">"),s.slideCount=s.$slides.length,t.find(".indicators").remove(),t.find(".actions").remove(),t.find(".video-overlay").remove(),r(s),n=parseInt(n,10),isNaN(n)||0>n?n=0:n>s.slideCount-1&&(n=s.slideCount-1),n>s.currentIndex?s.moveSlide({index:n,start:0,end:-50}):s.moveSlide({index:n,start:-50,end:0})}).on("keyup",function(t){switch(t.keyCode){case 9:s.pause();break;case 37:s.previous();break;case 39:s.next()}}).find(".toggle-terms").on("click",function(){s.$viewport.toggleClass("showing-tandcs")}),s.slideCount>1?(s[i.carousel.autoplay===!0?"play":"pause"](!1,i.carousel.interval),s.goto(i.carousel.startSlideIndex,!1),t.trigger("change")):s.unbindTouchEvents()})}}(window,jQuery),"function"==typeof window.define&&window.define.amd&&define("modules/carousel",[],function(){return toolkit.carousel}),"undefined"==typeof toolkit&&(toolkit={}),toolkit.datepicker=function(){function t(){p.datepicker.keyup(function(){this.value!=this.value.replace(/\D/g,"")&&(this.value=this.value.replace(/\D/g,""))}),p.datepicker.on("focus",function(){o($(this),"show")}),p.day.on("keyup",function(){p.day.val()>s(y,w)&&p.day.val(s(y,w)),("00"===p.day.val()||"0"===p.day.val())&&p.day.val("01"),2===p.day.val().length&&(m=parseInt(p.day.val(),10),k=parseInt(m,10),e())}).on("blur",function(t){p.day.val().length<2&&0!==p.day.val().length&&(m=parseInt(p.day.val(),10),k=parseInt(m,10),"00"!==p.day.val()&&"0"!==p.day.val()?p.day.val("0"+p.day.val()):p.day.val("01"),e()),t.shiftKey&&9==t.keyCode&&$(".calendar").hide()}),p.month.on("keyup",function(){p.month.val()>12&&p.month.val("12"),("00"===p.month.val()||"0"===p.month.val())&&p.month.val("01"),2===p.month.val().length&&(y=parseInt(p.month.val(),10)-1,g=parseInt(y,10),e())}).on("blur",function(){p.month.val().length<2&&0!==p.month.val().length&&(y=parseInt(p.month.val(),10)-1,g=parseInt(y,10),"00"!==p.month.val()&&"0"!==p.month.val()?p.month.val("0"+p.month.val()):p.month.val("01"),e())}),p.year.on("keyup",function(){4===p.year.val().length&&(w=parseInt(p.year.val(),10),b=parseInt(w,10),e())}).on("blur",function(t){0===t.which&&$(".calendar").hide()}),$(".monthleft").on("click",i),$(".monthright").on("click",a),$(document).on("keyup",function(t){27==t.keyCode&&$(".calendar").hide()})}function e(){$(".monthyearval").html(v[y]+" "+w),n(s(y,w),r(y,w)),$(".daycontainer .day").on("click",function(){console.log("picked date"),m=this.innerHTML,$(".daycontainer").find(".selected").removeClass("selected"),$(this).addClass("selected"),p.day.val(10>m?"0"+m:m),k=m,p.month.val(10>y+1?"0"+(y+1):y+1),g=y,p.year.val(w),b=w,$(".calendar").hide(),p.day.css("border-radius","5px"),p.month.css("border-radius","5px"),p.year.css("border-radius","5px")}),$(document).click(function(t){"datepicker"==t.target.class||$(".datepicker").find(t.target).length||$(".calendar").hide()}),console.log("rendering calendar"),console.log("values: day: "+m+". month: "+y+". year: "+w),console.log("calender vals: days in month: "+s(y+1,w)+". first day: "+r(y,w)),console.log("Input day: "+k+" input month: "+g+" input year: "+b)}function n(t,e){for(var n="",o=1;e>o;o++)n+="<span></span>";for(var i=1;t>=i;i++)n+=i==k&&y==g&&w==b?C>y&&I>=w||x>i&&C>=y&&I>=w?"<span class='past selected day'>"+i+"</span>":"<span class='selected day'>"+i+"</span>":C>y&&I>=w?"<span class='past day'>"+i+"</span>":x>i&&C>=y&&I>=w?"<span class='past day'>"+i+"</span>":"<span class='day'>"+i+"</span>";$(".daycontainer").html(n)}function o(t,e){"show"==e?t.siblings("div.calendar").show():t.siblings("div.calendar").hide()}function i(){0===y?(y=11,w--):y--,e()}function a(){11===y?(y=0,w++):y++,e()}function s(t,e){return[31,d(e)?29:28,31,30,31,30,31,31,30,31,30,31][t]}function r(t,e){var n=new Date(e,t,1).getDay();return 0===n?7:n}function d(t){return 0===t%4&&0!==t%100||0===t%400}function c(){return(new Date).getDate()}function l(){return(new Date).getMonth()}function u(){return(new Date).getFullYear()}function h(){$(".datepicker .datepicker-container").append('<div class="calendar"><div class="monthyear"><span class="monthleft">&larr;</span><span class="monthyearval"></span><span class="monthright">&rarr;</span></div><div class="days"><span>M</span><span>T</span><span>W</span><span>T</span><span>F</span><span>S</span><span>S</span></div><div class="daycontainer"></div></div>')}function f(){h(),e(),t()}var p={datepicker:$(".datepicker input"),day:$("#day"),month:$("#month"),year:$("#year"),monthleft:$(".monthleft"),monthright:$(".monthright"),dayspan:$(".daycontainer .day"),monthyear:$(".monthyear")},v=["January","February","March","April","May","June","July","August","September","October","November","December"],m=c(),y=l(),w=u(),k=m,g=y,b=w,x=m,C=y,I=w;return{init:f}}(),"function"==typeof window.define&&window.define.amd&&define("modules/datepicker",[],function(){return toolkit.datepicker}),"undefined"==typeof toolkit&&(toolkit={}),toolkit.main=function(){function t(){var t=function(){$(document.body).addClass("window-loaded")},e=setTimeout(t,5e3);$(window).load(function(){clearTimeout(e),t()})}t()}(),toolkit.modules=function(){var t=function(t){var e,n=$.extend({skycons:!1,share:!1,popup:!1,tabs:!1,datepicker:!1},t);for(e in n)(n[e]||!t)&&toolkit[e]&&toolkit[e].init&&toolkit[e].init()};return{init:t}}(),"function"==typeof window.define&&window.define.amd&&define("modules",[],function(){return toolkit.modules}),"function"==typeof window.define&&window.define.amd&&define("toolkit",["utils/skycons","utils/hashmanager","utils/popup","utils/diff","modules","modules/tabs","modules/share","modules/carousel","modules/datepicker"],function(t,e,n,o,i,a,s,r,d){return{modules:i,skycons:t,hashmanager:e,popup:n,diff:o,tabs:a,share:s,carousel:r,datepicker:d}});