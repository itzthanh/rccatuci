$(document).ready(function(){
    var loadButton = document.getElementById('load-more');
    var feed = new Instafeed({
        get: "tagged",
        tagName: "rccatuci",
        sortBy: 'most-recent',
        clientId: 'bd4ae0cefd9440b68e4c513f411da894',
        accessToken: //"210172669.bd4ae0c.39f096eedfbc4b1bb80e7102909c9a84",
        "210172669.ba4c844.f489df1237ca4be28457071a25292e4c",
        template: '<div class="test"><a href="{{link}}" target="_blank"><img src="{{image}}" /></a></div>',
        after:function(){
        	if (!this.hasNext()){
                $("#load-more").css("display", "none");
        		loadButton.setAttribute("disabled", "disabled");
        	}
        }

    });
    $("#load-more").click(function(){
    	feed.next();
    });
    $(".test").click(function(){
        $(this).css("width", "300px");
    });

    feed.run();
});