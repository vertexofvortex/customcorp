try {
    var topic = document.querySelector('.entry-content');

    topic.innerHTML = topic.innerHTML.replace(/\[accent\]/, '<span class="bbAccent">');
    topic.innerHTML = topic.innerHTML.replace(/\[\/accent\]/, '</span>');
    topic.innerHTML = topic.innerHTML.replace(/\[hr\]/, '<div class="bbHr"></div>');
} catch {}