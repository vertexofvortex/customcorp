try {
    var topics = document.querySelectorAll(".main-topic .post"), index = 0;
    do {
        if (topics[index].querySelector(".entry-content p").innerText.includes("/del") && topics[index].querySelector(".entry-content p").innerText.length == 4) {
            console.log(index + 1 + " true");
            topics[index].querySelector(".post-author").remove();
            topics[index].querySelector(".sig-content").remove();
            topics[index].querySelector(".report-post").remove();
            topics[index].querySelector(".entry-content").style.minHeight = "0px";
            var replacement = document.createElement("p");
            replacement.innerText = "Автор счёл необходимым удалить это сообщение.";
            replacement.style.color = "gray";
            topics[index].querySelector(".entry-content p").replaceWith(replacement);
        }
        index++;
    } while (topics[index] != undefined);
} catch {}