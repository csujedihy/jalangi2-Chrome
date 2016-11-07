
// WebTrends SmartSource Data Collector Tag v10.2.91
// Copyright (c) 2013 Webtrends Inc.  All rights reserved.
// Tag Builder Version: 4.1.0.54
// Created: 2013.06.05
window.webtrendsAsyncInit=function(){
    var dcs=new Webtrends.dcs().init({
        dcsid:"dcsvxo7b700000gk6nbtgclkd_4w7j",
        domain:"statse.webtrendslive.com",
        timezone:-6,
        i18n:true,
        adimpressions:true,
        adsparam:"WT.ac",
        offsite:true,
        download:true,
        downloadtypes:"xls,doc,pdf,txt,csv,zip,docx,xlsx,rar,gzip",
        anchor:true,
        javascript: true,
        onsitedoms:"utdallas.edu",
        fpcdom:".utdallas.edu",
        plugins:{
            hm:{src:"//s.webtrends.com/js/webtrends.hm.js"},
            facebook:{src:"//s.webtrends.com/js/webtrends.fb.js"},
            yt:{src:"//s.webtrends.com/js/webtrends.yt.js"}			
        }
        }).track();
};
(function(){
    var h=document.location.protocol;
    var s=document.createElement("script"); s.async=true; s.src=h+"//www.utdallas.edu/websvcs/shared/webtrends.js";   
    var s2=document.getElementsByTagName("script")[0]; s2.parentNode.insertBefore(s,s2);
}());
