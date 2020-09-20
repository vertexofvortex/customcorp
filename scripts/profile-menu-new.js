const profile = document.getElementById('welcome');
const elements = {
    toProfile: {
        display: "Мой профиль",
        url: document.querySelector("#brd-navlinks a[href^=\"https://forum.minecorp.ru/profile.php?id\"]").href,
    },
    pm: {
        display: "Личные сообщения",
        url: 'https://forum.minecorp.ru/misc.php?section=pun_pm&pmpage=inbox',
    },
    newMessages: {
        display: "Новые сообщения на форуме",
        url: 'https://forum.minecorp.ru/search.php?action=show_new',
    },
    recentTopics: {
        display: "Новые темы на форуме",
        url: 'https://forum.minecorp.ru/search.php?action=show_recent',
    },
    unansweredTopics: {
        display: "Темы без ответов",
        url: 'https://forum.minecorp.ru/search.php?action=show_unanswered',
    }
};
const menu = document.createElement("div");
menu.classList.add('menu', 'closed');

menuAppend();
menuToggle();

function menuAppend() {
    menu.style.top = profile.offsetHeight + "px";
    menu.style.left = profile.offsetLeft + "px";
    menu.style.width = profile.offsetWidth + "px";

    document.body.appendChild(menu);

    for (key in elements) {
        let element = document.createElement('a');
        element.innerHTML = elements[key].display;
        element.href = elements[key].url

        menu.appendChild(element);
    }
}

function menuToggle() {
    profile.onclick = function() {
        menu.classList.toggle('closed');

        if (menu.classList.contains('closed')) {
            menu.style.opacity = '0';
            menu.ontransitionend = function() {
                menu.style.display = 'none';
            }
        } else {
            menu.style.opacity = '1';
            menu.style.display = 'block';
        }
    }
}