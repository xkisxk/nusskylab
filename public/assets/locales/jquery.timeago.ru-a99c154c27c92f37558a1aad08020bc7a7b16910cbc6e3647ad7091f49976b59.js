!function(){function r(n,r,u,t){var o=(n%=100)%10;return 1===o&&(1===n||20<n)?r:1<o&&o<5&&(20<n||n<10)?u:t}jQuery.timeago.settings.strings.ru={prefixAgo:null,prefixFromNow:"\u0447\u0435\u0440\u0435\u0437",suffixAgo:"\u043d\u0430\u0437\u0430\u0434",suffixFromNow:null,seconds:"\u043c\u0435\u043d\u044c\u0448\u0435 \u043c\u0438\u043d\u0443\u0442\u044b",minute:"\u043c\u0438\u043d\u0443\u0442\u0443",minutes:function(n){return r(n,"%d \u043c\u0438\u043d\u0443\u0442\u0443","%d \u043c\u0438\u043d\u0443\u0442\u044b","%d \u043c\u0438\u043d\u0443\u0442")},hour:"\u0447\u0430\u0441",hours:function(n){return r(n,"%d \u0447\u0430\u0441","%d \u0447\u0430\u0441\u0430","%d \u0447\u0430\u0441\u043e\u0432")},day:"\u0434\u0435\u043d\u044c",days:function(n){return r(n,"%d \u0434\u0435\u043d\u044c","%d \u0434\u043d\u044f","%d \u0434\u043d\u0435\u0439")},month:"\u043c\u0435\u0441\u044f\u0446",months:function(n){return r(n,"%d \u043c\u0435\u0441\u044f\u0446","%d \u043c\u0435\u0441\u044f\u0446\u0430","%d \u043c\u0435\u0441\u044f\u0446\u0435\u0432")},year:"\u0433\u043e\u0434",years:function(n){return r(n,"%d \u0433\u043e\u0434","%d \u0433\u043e\u0434\u0430","%d \u043b\u0435\u0442")}}}();