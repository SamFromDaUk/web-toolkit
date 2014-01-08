var responsiveImages = (function () {

    var containers = [];

    function init(container) {
        if (container) {
            var w = window,
                ps = container.getElementsByTagName("div"),
                i = 0, il = ps.length,
                j = 0, jl = ps.length,
                sources, matches, media, picImg, newSrc;

            if (containers.indexOf(container) < 0) {
                containers.push(container);
            }

            for (; i < il; i++) {
                if (ps[ i ].getAttribute("data-picture") !== null) {

                    sources = ps[ i ].getElementsByTagName("div");
                    matches = [];

                    // See if which sources match
                    for (j = 0, jl = sources.length; j < jl; j++) {
                        media = sources[ j ].getAttribute("data-media");
                        // if there's no media specified, OR w.matchMedia is supported
                        if (!media || ( w.matchMedia && w.matchMedia(media).matches )) {
                            matches.push(sources[ j ]);
                        }
                    }

                    // Find any existing img element in the picture element
                    picImg = ps[ i ].getElementsByTagName("img")[ 0 ];

                    if (matches.length) {
                        if (!picImg) {
                            picImg = w.document.createElement("img");
                            picImg.alt = ps[ i ].getAttribute("data-alt");
                            ps[ i ].appendChild(picImg);
                        }
                        newSrc = matches.pop().getAttribute("data-src");
                        if (picImg.src !== newSrc) {
                            picImg.src = newSrc;
                        }
                    }
                    else if (picImg) {
                        ps[ i ].removeChild(picImg);
                    }
                }
            }
        }
    }

    function bindOnResize() {
        $(window).on("resizeend", function () {
            var i, n = containers.length;
            for (i = 0; i < n; i++) {
                init(containers[i]);
            }
        });
    }

    return {
        init:init,
        bindOnResize:bindOnResize
    };
})();