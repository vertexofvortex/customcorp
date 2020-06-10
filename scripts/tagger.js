var item = document.querySelectorAll(".main-content .main-item .hn a")
var i = 0;
try {
    do {
            index = item[i].innerText.indexOf("[" && "] ");
        if (index == -1) {
            i++;
            continue;
        }
        var content = item[i].innerText.substr(index + 2);
        var prefix = item[i].innerText.substr(1, index - 1);
        item[i].innerText = content;
        span = document.createElement("span");
        item[i].prepend(span);
        span.innerText = prefix;
        classname = rus_to_latin(prefix.replace(/[^A-zА-яё]|[\[|\|\^|\\|\_]/g, '')).toLowerCase();
        span.classList.add("tag", classname);
        i++;
    } while (item[i] != undefined);
    function rus_to_latin ( str ) {
        var ru = {
            'а': 'a', 'б': 'b', 'в': 'v', 'г': 'g', 'д': 'd', 
            'е': 'e', 'ё': 'e', 'ж': 'j', 'з': 'z', 'и': 'i', 
            'к': 'k', 'л': 'l', 'м': 'm', 'н': 'n', 'о': 'o', 
            'п': 'p', 'р': 'r', 'с': 's', 'т': 't', 'у': 'u', 
            'ф': 'f', 'х': 'h', 'ц': 'c', 'ч': 'ch', 'ш': 'sh', 
            'щ': 'shch', 'ы': 'y', 'э': 'e', 'ю': 'u', 'я': 'ya'
        }, n_str = [];
        str = str.replace(/[ъь]+/g, '').replace(/й/g, 'i');
        for ( var i = 0; i < str.length; ++i ) {
           n_str.push(
                  ru[ str[i] ]
               || ru[ str[i].toLowerCase() ] == undefined && str[i]
               || ru[ str[i].toLowerCase() ].replace(/^(.)/, function ( match ) { return match.toUpperCase() })
           );
        }
        return n_str.join('');
    }
} catch {}