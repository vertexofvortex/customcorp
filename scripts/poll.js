if (window.location.toString().includes(`viewtopic.php?`)) {
    var entryContent = document.querySelector('.entry-content');
    var entryContentText = entryContent.innerHTML;

    if (entryContentText.includes(`[poll]`)) {
        
    entryContentTextReplaced = entryContentText.replaceAll(/(\[poll\])(.*?)(\[\/poll\])/g, `<iframe src="https://www.strawpoll.me/embed_1/$2" style="width: 100%; height: 350px; border: 0; display: block" seamless>Loading poll...</iframe>`);
    entryContent.innerHTML = entryContentTextReplaced;
    }
}
