!function(n){"use strict";function t(n,t,e){var o="";return n>1&&5>n?o=e:(0==n||n>=5)&&(o="\xf3w")," "+n+" "+t+o}n.fn.select2.locales.pl={formatNoMatches:function(){return"Brak wynik\xf3w"},formatInputTooShort:function(n,e){return"Wpisz co najmniej"+t(e-n.length,"znak","i")},formatInputTooLong:function(n,e){return"Wpisana fraza jest za d\u0142uga o"+t(n.length-e,"znak","i")},formatSelectionTooBig:function(n){return"Mo\u017cesz zaznaczy\u0107 najwy\u017cej"+t(n,"element","y")},formatLoadMore:function(n){return"\u0141adowanie wynik\xf3w\u2026"},formatSearching:function(){return"Szukanie\u2026"}},n.extend(n.fn.select2.defaults,n.fn.select2.locales.pl)}(jQuery);