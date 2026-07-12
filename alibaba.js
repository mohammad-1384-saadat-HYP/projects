const facilities = document.getElementById('facilities');
const show_popup_desktop = facilities.querySelector('.facilities_content_title_btn_desktop');
const hide_popup_desktop = facilities.querySelector('.facilities_content_options_popup_content_header>div:last-child');
const popup = facilities.querySelector('.facilities_content_options_popup');
const popup_content = facilities.querySelector('.facilities_content_options_popup_content');
const popup_content_body = facilities.querySelector('.facilities_content_options_popup_content_body');
const groups = facilities.querySelectorAll('.facilities_content_options_group');
const show_popup_mobile = facilities.querySelector('.facilities_content_options_btnHolder_btn_mobile');
const hide_popup_mobile = facilities.querySelector('.facilities_content_options_popup_content_header>div:last-child');

const popup_backIcon = facilities.querySelector('.facilities_content_options_popup_content_header_backIcon');

show_popup_desktop.onclick = show_popup_desktop_fun;
popup.onclick = hide_popup_desktop_fun;

function show_popup_desktop_fun() {
    popup.classList.replace('hideElement', 'showElement');
    popup_content.classList.replace('hideElementDown', 'showElement');
    popup_content_body.scrollTop = 0;
}

function hide_popup_desktop_fun(e) {
    if (e.target === popup || hide_popup_desktop.contains(e.target)) {
        popup.classList.replace('showElement', 'hideElement');
        popup_content.classList.replace('showElement', 'hideElementDown');
    }
}

if (window.innerWidth < 1000) {
    groups.forEach((x, i) => {
        if (i !== 0) {
            x.classList.add('displayNone');
        }
    });
    popup.classList.replace('hideElement', 'hideElementRight');
    popup_content.classList.replace('hideElementDown', 'hideElementRight');
    show_popup_mobile.onclick = show_popup_mobile_fun;
    hide_popup_mobile.onclick = hide_popup_mobile_fun;
    popup_backIcon.innerHTML = `
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
            <path d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z"/>
        </svg>
    `;
}

function show_popup_mobile_fun() {
    popup.classList.replace('hideElementRight', 'showElement');
    popup_content.classList.replace('hideElementRight', 'showElement');
    popup_content_body.scrollTop = 0;
}

function hide_popup_mobile_fun() {
    popup.classList.replace('showElement', 'hideElementRight');
    popup_content.classList.replace('showElement', 'hideElementRight');
}
