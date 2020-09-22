const buttons = {
    b: {
        name: 'b',
        display: 'Полужирный',
        onclick: `PUNBB.pun_bbcode.insert_text('[b]', '[/b]')`,
    },
    i: {
        name: 'i',
        display: 'Курсив',
        onclick: `PUNBB.pun_bbcode.insert_text('[i]', '[/i]')`,
    },
    u: {
        name: 'u',
        display: 'Подчёркнутый',
        onclick: `PUNBB.pun_bbcode.insert_text('[u]', '[/u]')`,
    },
    s: {
        name: 's',
        display: 'Перечёркнутый',
        onclick: `PUNBB.pun_bbcode.insert_text('[s]', '[/s]')`,
    },
    h: {
        name: 'h',
        display: 'Заголовок',
        onclick: `PUNBB.pun_bbcode.insert_text('[h]', '[/h]')`,
    },
    accent: {
        name: 'accent',
        display: 'Выделение',
        onclick: `PUNBB.pun_bbcode.insert_text('[accent]', '[/accent]')`,
    },
    list: {
        name: 'list',
        display: 'Список',
        onclick: `PUNBB.pun_bbcode.insert_text('[list]', '[/list]')`,
    },
    listitem: {
        name: 'list item',
        display: 'Элемент списка',
        onclick: `PUNBB.pun_bbcode.insert_text('[*]', '[/*]')`,
    },
    quote: {
        name: 'quote',
        display: 'Цитата',
        onclick: `PUNBB.pun_bbcode.insert_text('[quote]', '[/quote]')`,
    },
    code: {
        name: 'code',
        display: 'Участок кода',
        onclick: `PUNBB.pun_bbcode.insert_text('[code]', '[/code]')`,
    },
    hr: {
        name: 'hr',
        display: 'Горизонтальная черта',
        onclick: `PUNBB.pun_bbcode.insert_text('[hr]', '')`,
    },
    email: {
        name: 'email',
        display: 'E-mail',
        onclick: `PUNBB.pun_bbcode.insert_text('[email]', '[/email]')`,
    },
    url: {
        name: 'url',
        display: 'Ссылка',
        onclick: `PUNBB.pun_bbcode.insert_text('[url]', '[/url]')`,
    },
    img: {
        name: 'img',
        display: 'Изображение',
        onclick: `PUNBB.pun_bbcode.insert_text('[img]', '[/img]')`,
    },
    color: {
        name: 'color',
        display: 'Цвет текста',
        onclick: `PUNBB.pun_bbcode.insert_text('[color]', '[/color]')`,
    },
    smiles: {
        name: 'smiles',
        display: 'Смайлики',
        onclick: `showhide('bbcode_smilies');`,
    },
    fancy_spoiler: {
        name: 'fancy_spoiler',
        display: 'Спойлер',
        onclick: `PUNBB.pun_bbcode.insert_text('[spoiler]', '[/spoiler]')`,
    },
};

document.querySelector("#pun_bbcode_buttons").innerHTML = '';

var tabindex = 1;
for (key in buttons) {
    document.querySelector("#pun_bbcode_buttons").innerHTML += `<div type="button" title="${buttons[key].name}" class="bbcode-button image" data-tag="${buttons[key].name}" id="pun_bbcode_button_${buttons[key].name}" name="${buttons[key].name}" onclick="${buttons[key].onclick}" tabindex="${tabindex}">${buttons[key].display}</div>`

    tabindex++;
}

// `<div type="button" title="h" class=" image" data-tag="h" id="pun_bbcode_button_h" value="" name="h" onclick="PUNBB.pun_bbcode.insert_text('[h]','[/h]')" tabindex="14"></div>`

/*document.querySelectorAll("#pun_bbcode_buttons input").forEach(function(e) {
    var test = e.outerHTML;
    test = test.replace('input', 'div')
    test += "</div>";
    e.outerHTML = test;
});

document.querySelector('#pun_bbcode_buttons div[id="pun_bbcode_button_u"].image').outerHTML += `<div type="button" title="h" class=" image" data-tag="h" id="pun_bbcode_button_h" value="" name="h" onclick="PUNBB.pun_bbcode.insert_text('[h]','[/h]')" tabindex="14"></div>`;
document.querySelector('#pun_bbcode_buttons div[id="pun_bbcode_button_u"].image').outerHTML += `<div type="button" title="accent" class=" image" data-tag="accent" id="pun_bbcode_button_accent" value="" name="accent" onclick="PUNBB.pun_bbcode.insert_text('[accent]','[/accent]')" tabindex="15"></div>`;
document.querySelector('#pun_bbcode_buttons div[id="pun_bbcode_button_code"].image').outerHTML += `<div type="button" title="hr" class=" image" data-tag="hr" id="pun_bbcode_button_hr" value="" name="hr" onclick="PUNBB.pun_bbcode.insert_text('[hr]','')" tabindex="16"></div>`;*/