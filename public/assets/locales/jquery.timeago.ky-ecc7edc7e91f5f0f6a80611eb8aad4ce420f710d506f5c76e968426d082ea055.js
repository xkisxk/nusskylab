!function(){function n(n,r,u,t){var o=n%10;return 1===o&&(1===n||n>20)?r:o>1&&5>o&&(n>20||10>n)?u:t}jQuery.timeago.settings.strings.ky={prefixAgo:null,prefixFromNow:"\u0447\u0435\u0440\u0435\u0437",suffixAgo:"\u043c\u0443\u0440\u0443\u043d",suffixFromNow:null,seconds:"1 \u043c\u0438\u043d\u0443\u0442\u0442\u0430\u043d \u0430\u0437",minute:"\u043c\u0438\u043d\u0443\u0442\u0430",minutes:function(r){return n(r,"%d \u043c\u0438\u043d\u0443\u0442\u0430","%d \u043c\u0438\u043d\u0443\u0442\u0430","%d \u043c\u0438\u043d\u0443\u0442")},hour:"\u0441\u0430\u0430\u0442",hours:function(r){return n(r,"%d \u0441\u0430\u0430\u0442","%d \u0441\u0430\u0430\u0442","%d \u0441\u0430\u0430\u0442")},day:"\u043a\u04af\u043d",days:function(r){return n(r,"%d \u043a\u04af\u043d","%d \u043a\u04af\u043d","%d \u043a\u04af\u043d")},month:"\u0430\u0439",months:function(r){return n(r,"%d \u0430\u0439","%d \u0430\u0439","%d \u0430\u0439")},year:"\u0436\u044b\u043b",years:function(r){return n(r,"%d \u0436\u044b\u043b","%d \u0436\u044b\u043b","%d \u0436\u044b\u043b")}}}();