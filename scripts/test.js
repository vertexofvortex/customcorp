try {
    document.querySelectorAll('.entry-content').forEach(function(current) {
        current.innerHTML = current.innerHTML.replace(/\[accent\]/, '<span class="bbAccent">');
        current.innerHTML = current.innerHTML.replace(/\[\/accent\]/, '</span>');
        
        current.innerHTML = current.innerHTML.replace(/\[hr\]/, '<div class="bbHr"></div>');

        current.innerHTML = current.innerHTML.replace(/\[s\]/, '<span class="bbStriketrough">');
        current.innerHTML = current.innerHTML.replace(/\[\/s\]/, '</span>');
    });

} catch {}