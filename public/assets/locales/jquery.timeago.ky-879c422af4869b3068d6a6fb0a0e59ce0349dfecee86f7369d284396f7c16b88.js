!function(){function r(n,r,u,t){var o=n%10;return 1===o&&(1===n||20<n)?r:1<o&&o<5&&(20<n||n<10)?u:t}jQuery.timeago.settings.strings.ky={prefixAgo:null,prefixFromNow:"\u0447\u0435\u0440\u0435\u0437",suffixAgo:"\u043c\u0443\u0440\u0443\u043d",suffixFromNow:null,seconds:"1 \u043c\u0438\u043d\u0443\u0442\u0442\u0430\u043d \u0430\u0437",minute:"\u043c\u0438\u043d\u0443\u0442\u0430",minutes:function(n){return r(n,"%d \u043c\u0438\u043d\u0443\u0442\u0430","%d \u043c\u0438\u043d\u0443\u0442\u0430","%d \u043c\u0438\u043d\u0443\u0442")},hour:"\u0441\u0430\u0430\u0442",hours:function(n){return r(n,"%d \u0441\u0430\u0430\u0442","%d \u0441\u0430\u0430\u0442","%d \u0441\u0430\u0430\u0442")},day:"\u043a\u04af\u043d",days:function(n){return r(n,"%d \u043a\u04af\u043d","%d \u043a\u04af\u043d","%d \u043a\u04af\u043d")},month:"\u0430\u0439",months:function(n){return r(n,"%d \u0430\u0439","%d \u0430\u0439","%d \u0430\u0439")},year:"\u0436\u044b\u043b",years:function(n){return r(n,"%d \u0436\u044b\u043b","%d \u0436\u044b\u043b","%d \u0436\u044b\u043b")}}}();