!function(o){"use strict";var r,u,s={negative:["negative","minus"],numbers:{zero:0,one:1,two:2,three:3,four:4,five:5,six:6,seven:7,eight:8,nine:9,ten:10,eleven:11,twelve:12,thirteen:13,fourteen:14,fifteen:15,sixteen:16,seventeen:17,eighteen:18,nineteen:19,twenty:20,thirty:30,forty:40,fourty:40,fifty:50,sixty:60,seventy:70,eighty:80,ninety:90},hundred:"hundred",powers:{thousand:1e3,million:1e6,billion:1e9,trillion:1e12,quadrillion:1e15,quintillion:1e18,sextillion:1e21,septillion:1e24,octillion:1e27,nonillion:1e30,decillion:1e33,undecillion:1e36,duodecillion:1e39,tredecillion:1e42,quattuordecillion:1e45,quindecillion:1e48,sexdecillion:1e51,septendecillion:1e54,octodecillion:1e57,novemdecillion:1e60,vigintillion:1e63,unvigintillion:1e66,duovigintillion:1e69,trevigintillion:1e72,quattuorvigintillion:1e75,quinvigintillion:1e78,sexvigintillion:1e81,septenvigintillion:1e84,octovigintillion:1e87,novemvigintillion:1e90,trigintillion:1e93,untrigintillion:1e96,duotrigintillion:1e99,googl:1e100}},a=new RegExp("("+s.negative.join("|")+")"),d=function(e,i){var n=e.replace(/[,."']/g,""),t=o.tablesorter.formatFloat(e||"",i),l=s.powers.hasOwnProperty(n)?s.powers[n]:null;null!==(t="number"==typeof t?t:s.numbers.hasOwnProperty(n)?s.numbers[n]:null)?u+=t:n===s.hundred?u*=100:null!==l&&(r+=u*l,u=0)};o.tablesorter.addParser({id:"namedNumbers",is:function(){return!1},format:function(e,i){u=r=0;var n,t=(e||"").split(/[\s-]+/),l=t.length;for(n=0;n<l;n++)d(t[n].toLowerCase(),i);return(r=(r+u)*(e.match(a)?-1:1))||s.numbers.hasOwnProperty(e)?r:o.tablesorter.formatFloat(e||"",i)},type:"numeric"})}(jQuery);