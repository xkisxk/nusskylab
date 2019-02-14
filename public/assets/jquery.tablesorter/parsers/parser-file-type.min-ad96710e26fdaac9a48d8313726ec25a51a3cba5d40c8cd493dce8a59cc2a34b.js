/*! Parser: filetype */
!function(e){"use strict";e.tablesorter.fileTypes={separator:"|",equivalents:{"3D Image":"3dm|3ds|dwg|max|obj",Audio:"aif|aac|ape|flac|la|m4a|mid|midi|mp2|mp3|ogg|ra|raw|rm|wav|wma",Compressed:"7z|bin|cab|cbr|gz|gzip|iso|lha|lz|rar|tar|tgz|zip|zipx|zoo",Database:"csv|dat|db|dbf|json|ldb|mdb|myd|pdb|sql|tsv|wdb|wmdb|xlr|xls|xlsx|xml",Development:"asm|c|class|cls|cpp|cc|cs|cxx|cbp|cs|dba|fla|h|java|lua|pl|py|pyc|pyo|sh|sln|r|rb|vb",Document:"doc|docx|odt|ott|pages|pdf|rtf|tex|wpd|wps|wrd|wri",Executable:"apk|app|com|exe|gadget|lnk|msi",Fonts:"eot|fnt|fon|otf|ttf|woff",Icons:"ani|cur|icns|ico",Images:"bmp|gif|jpg|jpeg|jpe|jp2|pic|png|psd|tga|tif|tiff|wmf|webp",Presentation:"pps|ppt",Published:"chp|epub|lit|pub|ppp|fm|mobi",Script:"as|bat|cgi|cmd|jar|js|lua|scpt|scptd|sh|vbs|vb|wsf",Styles:"css|less|sass",Text:"info|log|md|markdown|nfo|tex|text|txt",Vectors:"awg|ai|eps|cdr|ps|svg",Video:"asf|avi|flv|m4v|mkv|mov|mp4|mpe|mpeg|mpg|ogg|rm|rv|swf|vob|wmv",Web:"asp|aspx|cer|cfm|htm|html|php|url|xhtml"}},e.tablesorter.addParser({id:"filetype",is:function(){return!1},format:function(t,s){var a,p=s.config,r=p.widgetOptions,i=t.lastIndexOf("."),o=e.tablesorter.fileTypes.separator,c=e.tablesorter.fileTypes.matching,l=e.tablesorter.fileTypes.equivalents;if(c||(a=[],e.each(l,function(e,t){a.push(t)}),c=e.tablesorter.fileTypes.matching=o+a.join(o)+o),i>=0&&(a=o+t.substring(i+1,t.length)+o,c.indexOf(a)>=0))for(i in l)if((o+l[i]+o).indexOf(a)>=0)return i+(r.group_separator?r.group_separator:"-")+t;return t},type:"text"})}(jQuery);