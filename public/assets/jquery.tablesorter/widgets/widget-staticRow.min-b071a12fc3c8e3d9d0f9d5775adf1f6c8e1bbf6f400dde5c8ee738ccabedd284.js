!function(p){"use strict";var t=p.tablesorter,s=function(t){var e,i,a,s,o,n=t.config;n&&(i=n.widgetOptions,n.$tbodies.each(function(){e=p(this).children(),o=e.length,e.filter(i.staticRow_class).each(function(){e=p(this),void 0!==(s=e.data(i.staticRow_index))?(a=parseFloat(s),s=/%/.test(s)?Math.round(a/100*o):a):s=e.index(),e.data(i.staticRow_data,s)})}))};t.addWidget({id:"staticRow",options:{staticRow_class:".static",staticRow_data:"static-index",staticRow_index:"row-index",staticRow_event:"staticRowsRefresh"},init:function(t,e,i,a){s(t),i.$table.unbind(("updateComplete.tsstaticrows "+a.staticRow_event).replace(/\s+/g," ")).bind("updateComplete.tsstaticrows "+a.staticRow_event,function(){s(t),i.$table.trigger("applyWidgets")})},format:function(t,e,i){var a,s,o,n,c,r,d,l;e.$tbodies.each(function(){for(c=p.tablesorter.processTbody(t,p(this),!0),r=!0,o=0,d=c.children(i.staticRow_class),n=c.children("tr").length-1,l=d.length;r&&o<l;)r=!1,d.each(function(){a=p(this).data(i.staticRow_data),(a=n<=a?n:a<0?0:a)!==p(this).index()&&(r=!0,s=p(this).detach(),n<=a?s.appendTo(c):0===a?s.prependTo(c):s.insertBefore(c.find("tr:eq("+a+")")))}),o++;p.tablesorter.processTbody(t,c,!1)}),e.$table.trigger("staticRowsComplete",t)},remove:function(t,e,i){e.$table.unbind(("updateComplete.tsstaticrows "+i.staticRow_event).replace(/\s+/g," "))}})}(jQuery);