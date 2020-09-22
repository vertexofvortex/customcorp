document.querySelectorAll("#pun_bbcode_buttons input").forEach(function(e) {
    var test = e.outerHTML;
    test = test.replaceAll('input', 'div')
    test += "</div>";
    e.outerHTML = test;
});

document.querySelector('#pun_bbcode_buttons div[id="pun_bbcode_button_u"].image').outerHTML += `<div type="button" title="h" class=" image" data-tag="h" id="pun_bbcode_button_h" value="" name="h" onclick="PUNBB.pun_bbcode.insert_text('[h]','[/h]')" tabindex="14"></div>`;
document.querySelector('#pun_bbcode_buttons div[id="pun_bbcode_button_u"].image').outerHTML += `<div type="button" title="accent" class=" image" data-tag="accent" id="pun_bbcode_button_accent" value="" name="accent" onclick="PUNBB.pun_bbcode.insert_text('[accent]','[/accent]')" tabindex="15"></div>`;
document.querySelector('#pun_bbcode_buttons div[id="pun_bbcode_button_code"].image').outerHTML += `<div type="button" title="hr" class=" image" data-tag="hr" id="pun_bbcode_button_hr" value="" name="hr" onclick="PUNBB.pun_bbcode.insert_text('[hr]','')" tabindex="16"></div>`;