/*! Parser: weekday - updated 10/26/2014 (v2.18.0) */
!function(e){"use strict";var a=e.tablesorter;a.dates=e.extend({},a.dates,{weekdayCased:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"]}),a.dates.weekdayLower=a.dates.weekdayCased.join(",").toLocaleLowerCase().split(","),a.addParser({id:"weekday",is:function(){return!1},format:function(r,t){if(r){var n=-1,o=t.config;return r=o.ignoreCase?r.toLocaleLowerCase():r,e.each(a.dates["weekday"+(o.ignoreCase?"Lower":"Cased")],function(e,a){return 0>n&&r.match(a)?(n=e,!1):void 0}),0>n?r:n}return r},type:"numeric"})}(jQuery);