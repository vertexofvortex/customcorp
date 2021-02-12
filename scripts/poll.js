if (window.location.toString().includes(`viewtopic.php?`)) {
    var entryContent = document.querySelectorAll('.entry-content');

    if (document.querySelector('.main-content').innerHTML.includes(`[poll]`)) {
        entryContent.forEach(function(element) {
            var entryContentText = element.innerHTML;

            if (entryContentText.includes(`[poll]`)) {
                entryContentTextReplaced = entryContentText.replaceAll(/(\[poll\])(.*?)(\[\/poll\])/g, `<iframe src="https://www.strawpoll.me/embed_1/$2" style="width: 100%; height: 350px; border: 0; display: block" seamless>Loading poll...</iframe>`);
                entryContentTextReplaced = `<div style="width: calc(100% + 2.5em - 2px); background: #f4c9c1; padding: 10px; margin: -0.5em -1em 1em -1em; box-sizing: border-box">В сообщении используется экспериментальная функция, из-за которой могут возникать ошибки. Просьба о недочётах сообщать <a href="https://forum.minecorp.ru/viewtopic.php?id=29714">сюда</a>.</div>` + entryContentTextReplaced;
                element.innerHTML = entryContentTextReplaced;
            }
        });
    }
}
