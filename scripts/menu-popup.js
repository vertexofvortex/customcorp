var profile = document.querySelector("#welcome");
profile.onclick = popup;

function popup() {
    var menu = document.createElement("div");
    document.body.appendChild(menu);
    menu.className = "menu";
    menu.style.top = profile.offsetHeight + "px";
    menu.style.left = profile.offsetLeft + "px";
    menu.style.width = profile.offsetWidth + "px";

    var toProfile = document.createElement("a");
    var PM = document.createElement("a");
    var newMessages = document.createElement("a");
    var recentTopics = document.createElement("a");
    var unansweredTopics = document.createElement("a");

    toProfile.className = "toProfile";
    PM.className = "PM";
    newMessages.className = "newMessages";
    recentTopics.className = "recentTopics";
    unansweredTopics.className = "unansweredTopics";

    toProfile.innerHTML = "Мой профиль";
    PM.innerHTML = "Личные сообщения";
    newMessages.innerHTML = "Новые сообщения на форуме";
    recentTopics.innerHTML = "Активные темы";
    unansweredTopics.innerHTML = "Темы без ответов";

    toProfile.innerHTML = "Мой профиль";
    PM.innerHTML = "Личные сообщения";
    newMessages.innerHTML = "Новые сообщения на форуме";
    recentTopics.innerHTML = "Активные темы";
    unansweredTopics.innerHTML = "Темы без ответов";

    toProfile.href = document.querySelector("#brd-navlinks a[href^=\"https://forum.minecorp.ru/profile.php?id\"]").href;
    PM.href = "https://forum.minecorp.ru/misc.php?section=pun_pm&pmpage=inbox";
    newMessages.href = "https://forum.minecorp.ru/search.php?action=show_new";
    recentTopics.href = "https://forum.minecorp.ru/search.php?action=show_recent";
    unansweredTopics.href = "https://forum.minecorp.ru/search.php?action=show_unanswered";
    
    menu.appendChild(toProfile);
    menu.appendChild(PM);
    menu.appendChild(newMessages);
    menu.appendChild(recentTopics);
    menu.appendChild(unansweredTopics);

    profile.onclick = popupClose;
}
function popupClose() {
    document.querySelector(".menu").remove();
    profile.onclick = popup;
}