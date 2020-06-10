try {
    var item = document.querySelectorAll("#brd-index .main-item"), i = 0;
    do {
        if ((item[i].innerText).includes("[Скрыт]")) {
            item[i].style.display = "none";
        }
        i++;
    } while (item[i] != undefined)
} catch {}