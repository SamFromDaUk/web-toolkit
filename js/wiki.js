define('wiki', [
    'modules/tabs',
    'modules/carousel'
//    , 'modules/tracking'
],

    function(tabs, carousel, tracking) {


        $('#hero').skycom_carousel({
            carousel: {
                autoplay: true
            }
        });

//        tracking({
//            site: "skytoolkit",
//            section: "wiki",
//            headline: "",
//            contentType: "home",
//            contentId: "",
//            account: "",
//            mpaccount: ""
//        });

    }
);