!function(){if(jQuery&&jQuery.fn&&jQuery.fn.select2&&jQuery.fn.select2.amd)var n=jQuery.fn.select2.amd;n.define("select2/i18n/pl",[],function(){var r=["znak","znaki","znak\xf3w"],e=["element","elementy","element\xf3w"],i=function(n,e){return 1===n?e[0]:1<n&&n<=4?e[1]:5<=n?e[2]:void 0};return{errorLoading:function(){return"Nie mo\u017cna za\u0142adowa\u0107 wynik\xf3w."},inputTooLong:function(n){var e=n.input.length-n.maximum;return"Usu\u0144 "+e+" "+i(e,r)},inputTooShort:function(n){var e=n.minimum-n.input.length;return"Podaj przynajmniej "+e+" "+i(e,r)},loadingMore:function(){return"Trwa \u0142adowanie\u2026"},maximumSelected:function(n){return"Mo\u017cesz zaznaczy\u0107 tylko "+n.maximum+" "+i(n.maximum,e)},noResults:function(){return"Brak wynik\xf3w"},searching:function(){return"Trwa wyszukiwanie\u2026"}}}),n.define,n.require}();