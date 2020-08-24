const dataTable = JSON.parse(dataRaw);

usertags();
checkmarks();
topicTweaks();

function usertags() {
    for (var index = 0; index < dataTable.userTags.length; index++) {
        var id = dataTable.userTags[index].id,
            content = dataTable.userTags[index].content,
            background = dataTable.userTags[index].background,
            color = dataTable.userTags[index].color;

        if (document.querySelectorAll(`a[href="https://forum.minecorp.ru/profile.php?id=${id}"`)[0] != undefined) {
            var userlink = document.querySelectorAll(`a[href="https://forum.minecorp.ru/profile.php?id=${id}"`);
        } else {
            continue;
        }

        for (var nodeIndex = 0; nodeIndex < userlink.length; nodeIndex++) {
            let tag = document.createElement("span");
                tag.classList.add("usertag", `id${id}`);
                tag.innerHTML = content;
                tag.style.backgroundColor = background;
                tag.style.color = color;
            userlink[nodeIndex].appendChild(tag);
        }
    }
}
function checkmarks() {
    for (var index = 0; index < dataTable.verifiedTopics.length; index++) {
        var id = dataTable.verifiedTopics[index].id,
            clan = dataTable.verifiedTopics[index].clan;
        
        if (document.querySelectorAll(`a[href="https://forum.minecorp.ru/viewtopic.php?id=${id}"`)[0] != undefined) {
            var topiclink = document.querySelectorAll(`a[href="https://forum.minecorp.ru/viewtopic.php?id=${id}"`);
        } else {
            continue;
        }

        for (var nodeIndex = 0; nodeIndex < topiclink.length; nodeIndex++) {
            let checkmark = document.createElement("span");
                checkmark.classList.add("checkmark", `topic${id}`);
            if (clan == true) {
                checkmark.style.background = `url(https://raw.githubusercontent.com/vertexofvortex/customcorp/master/images/checkmarks/clan-checkmark.svg)`;
            } else {
                checkmark.style.background = `url(https://raw.githubusercontent.com/vertexofvortex/customcorp/master/images/checkmarks/common-checkmark.svg)`;
            }
            topiclink[nodeIndex].appendChild(checkmark);
        }
    }
}
function topicTweaks() {
    for (var index = 0; index < dataTable.tweakedTopics.length; index++) {
        var id = dataTable.tweakedTopics[index].id,
            fromMineCorp = dataTable.tweakedTopics[index].fromMineCorp,
            hideAuthors = dataTable.tweakedTopics[index].hideAuthors;
        if (fromMineCorp && window.location.toString().includes(`https://forum.minecorp.ru/viewtopic.php?id=${id}`)) {
            document.querySelector(".post-byline em").innerHTML = "MineCorp";
            document.querySelector(".post-byline em").style.cssText = `
                font-weight: bold;
                font-style: normal;
                font-size: 1.167em;
                color: #000 !important;
            `
            document.querySelector(".useravatar img").src = "https://raw.githubusercontent.com/vertexofvortex/customcorp/master/images/minecorp-avatar.png";
            document.querySelector(".author-ident .usertitle").innerHTML = "Официальное сообщение от администрации проекта";
            document.querySelector(".userstatus").remove();
            document.querySelector(".author-info").remove();
            document.querySelector(".sig-content").remove();
        }
        if (hideAuthors && window.location.toString().includes(`https://forum.minecorp.ru/viewtopic.php?id=${id}`)) {
            var style = document.createElement("style");
                style.innerHTML = `
                    .post-author,
                    .post-byline,
                    .sig-content,
                    .post-contacts {
                        display: none;
                    }
                    .posthead,
                    .postbody {
                        margin-left: 0px;
                        padding-left: 1.5em;
                        border-radius: 4px;
                    }
                    .post-ident {
                        padding-left: 0px !important;
                    }
                    .postfoot {
                        padding-left: 0px;
                    }
                    .post-options {
                        border-radius: 4px;
                    }
                `
            document.body.append(style);
            document.querySelector(".sig-content").remove();
        }
    }
}
