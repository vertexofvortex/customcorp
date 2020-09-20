document.querySelectorAll("#pun_bbcode_buttons input").forEach(function(e) {
    var test = e.outerHTML;
    test = test.replaceAll('input', 'div')
    test += "</div>";
    e.outerHTML = test;
});