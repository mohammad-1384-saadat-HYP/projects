const main = document.getElementById("header_divar_mobile");
const category_options = main.querySelectorAll(".container_category_option");
const category_modal = main.querySelector(".category_modal");
const category_modal_content = main.querySelector(".category_modal_content");
const category_modal_back = main.querySelector(".category_modal_content_back");
const category_modal_search = main.querySelector(".category_modal_content_category_search");
const category_modal_search_input = main.querySelector(".category_modal_content_category_search_input");
const category_modal_search_clear_button = main.querySelector(".category_modal_content_category_search > div:last-child");
const category_modal_holder = main.querySelector(".category_modal_content_category_holder");
const category_modal_holder_Lv2 = main.querySelector(".category_modal_content_category_holder_Lv2");
const category_modal_holder_Lv3 = main.querySelector(".category_modal_content_category_holder_Lv3");
const category_modal_holder_main = main.querySelector(".category_modal_content_category_holder_main");
const category_modal_holder_main_options = main.querySelectorAll(".category_modal_content_category_holder_main_option");
const category_modal_holder_search = main.querySelector(".category_modal_content_category_holder_search");
let Lv2_id;
let Lv2_back_title;
let shown_El_id;
let shown_modal_back;

const category_levels = [
    {
        id: "1", back_title: "املاک", sub: [
            {
                id: "11",
                title: "فروش مسکونی",
                img: "https://s100.divarcdn.com/static/public/matching/navigation/category-images-v2/bottomsheet/light/residential-sell.png",
                sub: [
                    {
                        id: "111",
                        title: "آپارتمان",
                        img: "https://s100.divarcdn.com/static/public/matching/navigation/category-images-v2/bottomsheet/light/apartment-sell.png"
                    },
                    {
                        id: "112",
                        title: "خانه و ویلا",
                        img: "https://s100.divarcdn.com/static/public/matching/navigation/category-images-v2/bottomsheet/light/house-villa-sell.png"
                    },
                    {
                        id: "113",
                        title: "زمین و ملک کلنگی",
                        img: "https://s100.divarcdn.com/static/public/matching/navigation/category-images-v2/bottomsheet/light/plot-old.png"
                    },
                    {
                        id: "114",
                        title: "همه آگهی های فروش مسکونی",
                        img: "https://s100.divarcdn.com/static/public/matching/navigation/category-images-v2/bottomsheet/light/dots-horizontal.png"
                    }
                ]
            },
            {
                id: "12",
                title: "اجاره مسکونی",
                img: "https://s100.divarcdn.com/static/public/matching/navigation/category-images-v2/bottomsheet/light/residential-rent.png",
                sub: [
                    {
                        id: "121",
                        title: "آپارتمان",
                        img: "https://s100.divarcdn.com/static/public/matching/navigation/category-images-v2/bottomsheet/light/apartment-rent.png"
                    },
                    {
                        id: "122",
                        title: "خانه و ویلا",
                        img: "https://s100.divarcdn.com/static/public/matching/navigation/category-images-v2/bottomsheet/light/house-villa-rent.png"
                    },
                    {
                        id: "123",
                        title: "همه آگهی های اجاره مسکونی",
                        img: "https://s100.divarcdn.com/static/public/matching/navigation/category-images-v2/bottomsheet/light/dots-horizontal.png"
                    }
                ]
            },
            {
                id: "13",
                title: "فروش اداری و تجاری",
                img: "https://s100.divarcdn.com/static/public/matching/navigation/category-images-v2/bottomsheet/light/commercial-sell.png",
                sub: [
                    {
                        id: "131",
                        title: "دفتر کار، اتاق اداری، مطب",
                        img: "https://s100.divarcdn.com/static/public/matching/navigation/category-images-v2/bottomsheet/light/office-sell.png"
                    },
                    {
                        id: "132",
                        title: "مغازه و غرفه",
                        img: "https://s100.divarcdn.com/static/public/matching/navigation/category-images-v2/bottomsheet/light/shop-sell.png"
                    },
                    {
                        id: "133",
                        title: "صنعتی، کشاورزی، تجاری",
                        img: "https://s100.divarcdn.com/static/public/matching/navigation/category-images-v2/bottomsheet/light/industry-agriculture-business-sell.png"
                    },
                    {
                        id: "134",
                        title: "همه آگهی های فروش اداری و تجاری",
                        img: "https://s100.divarcdn.com/static/public/matching/navigation/category-images-v2/bottomsheet/light/dots-horizontal.png"
                    }
                ]
            },
            {
                id: "14",
                title: "اجاره اداری و تجاری",
                img: "https://s100.divarcdn.com/static/public/matching/navigation/category-images-v2/bottomsheet/light/commercial-rent.png",
                sub: [
                    {
                        id: "141",
                        title: "دفتر کار، اتاق اداری، مطب",
                        img: "https://s100.divarcdn.com/static/public/matching/navigation/category-images-v2/bottomsheet/light/office-rent.png"
                    },
                    {
                        id: "142",
                        title: "مغازه و غرفه",
                        img: "https://s100.divarcdn.com/static/public/matching/navigation/category-images-v2/bottomsheet/light/shop-rent.png"
                    },
                    {
                        id: "143",
                        title: "صنعتی، کشاورزی، تجاری",
                        img: "https://s100.divarcdn.com/static/public/matching/navigation/category-images-v2/bottomsheet/light/industry-agriculture-business-rent.png"
                    },
                    {
                        id: "144",
                        title: "همه آگهی های اجاره اداری و تجاری",
                        img: "https://s100.divarcdn.com/static/public/matching/navigation/category-images-v2/bottomsheet/light/dots-horizontal.png"
                    }
                ]
            },
            {
                id: "15",
                title: "اجاره کوتاه مدت",
                img: "https://s100.divarcdn.com/static/public/matching/navigation/category-images-v2/bottomsheet/light/temporary-rent.png",
                sub: [
                    {
                        id: "151",
                        title: "آپارتمان و سوئیت",
                        img: "https://s100.divarcdn.com/static/public/matching/navigation/category-images-v2/bottomsheet/light/suite-apartment.png"
                    },
                    {
                        id: "152",
                        title: "ویلا و باغ",
                        img: "https://s100.divarcdn.com/static/public/matching/navigation/category-images-v2/bottomsheet/light/villa.png"
                    },
                    {
                        id: "153",
                        title: "دفتر کار و فضای آموزشی",
                        img: "https://s100.divarcdn.com/static/public/matching/navigation/category-images-v2/bottomsheet/light/workspace.png"
                    },
                    {
                        id: "154",
                        title: "همه آگهی های اجاره کوتاه مدت",
                        img: "https://s100.divarcdn.com/static/public/matching/navigation/category-images-v2/bottomsheet/light/dots-horizontal.png"
                    }
                ]
            },
            {
                id: "16",
                title: "پروژه های ساخت و ساز",
                img: "https://s100.divarcdn.com/static/public/matching/navigation/category-images-v2/bottomsheet/light/real-estate-services.png",
                sub: [
                    {
                        id: "161",
                        title: "مشارکت در ساخت",
                        img: "https://s100.divarcdn.com/static/public/matching/navigation/category-images-v2/bottomsheet/light/partnership.png"
                    },
                    {
                        id: "162",
                        title: "پیش فروش",
                        img: "https://s100.divarcdn.com/static/public/matching/navigation/category-images-v2/bottomsheet/light/presell.pngg"
                    },
                    {
                        id: "163",
                        title: "همه آگهی های پروژه های ساخت و ساز",
                        img: "https://s100.divarcdn.com/static/public/matching/navigation/category-images-v2/bottomsheet/light/dots-horizontal.png"
                    }
                ]
            },
            {
                id: "17",
                title: "همه آگهی های املاک",
                img: "https://s100.divarcdn.com/static/public/matching/navigation/category-images-v2/bottomsheet/light/dots-horizontal.png",
                sub: []
            }
        ]
    },
    {id: "2", back_title: "وسایل نقلیه", sub: []},
    {id: "3", back_title: "کالای دیجیتال", sub: []},
    {id: "4", back_title: "خانه و آشپزخانه", sub: []},
    {id: "5", back_title: "خدمات", sub: []},
    {id: "6", back_title: "وسایل شخصی", sub: []},
    {id: "7", back_title: "سرگرمی و فراغت", sub: []},
    {id: "8", back_title: "اجتماعی", sub: []},
    {id: "9", back_title: "تجهیزات و صنعتی", sub: []},
    {id: "10", back_title: "استخدام و کاریابی", sub: []}
];

category_options.forEach(item => item.onclick = () => {
    category_modal.classList.replace("hideElement", "showElement");
    category_modal_content.classList.replace("hideElementDown", "showElement");
    short_create(item);
    category_modal_search_input.onfocus = focus_search;
    category_modal_search_input.onblur = () => category_modal_search.classList.remove("focus");
    category_modal_search_input.oninput = change_search;
    category_modal_search_clear_button.onclick = () => {
        category_modal_search_input.value = "";
        change_search();
    };
    category_modal_back.onclick = back_fun;
    category_modal.onclick = e => {
        if (e.target === category_modal) {
            close_modal();
        }
    }
});

category_modal_holder_main_options.forEach(item => item.onclick = () => {
    category_modal_holder_main.classList.replace("showElement", "hideElementRight");
    category_modal_holder_Lv2.classList.replace("hideElementLeft", "showElement");
    short_create(item);
});

function short_create(item) {
    create_Lv2(item);
    const category_Lv2_options = category_modal_holder_Lv2.querySelectorAll(".category_modal_content_category_holder_Lv2_option");
    const category_Lv2_filter_options = Array.from(category_Lv2_options).filter(item => !item.querySelector("a"));
    category_Lv2_filter_options.forEach(y => y.onclick = () => {
        category_modal_holder_Lv2.classList.replace("showElement", "hideElementRight");
        category_modal_holder_Lv3.classList.replace("hideElementLeft", "showElement");
        create_Lv3(y);
    });
}

function create_Lv2(item) {
    category_modal_holder_Lv2.innerHTML = "";
    Lv2_id = item.dataset.id;
    category_levels.forEach(x => {
        if (String(x.id) === String(Lv2_id)) {
            Lv2_back_title = x.back_title;
            category_modal_back.innerHTML = `
                <div class="mainColor">${Lv2_back_title}</div>
                <div class="category_modal_content_back_icon flex" data-id="Lv2">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                        <path d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z"/>
                    </svg>
                </div>
            `;
            category_modal_holder_Lv2.innerHTML = x.sub.map(y => `
                <div class="category_modal_content_category_holder_Lv2_option" data-id="${y.id}">
                    ${y.sub.length !== 0 ? `
                        <div class="flex">
                            <img src="${y.img}" alt="${y.title}">
                        </div>
                        <span>${y.title}</span>
                        <div class="flex">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512">
                                <path d="M41.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.3 256 246.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160z"/>
                            </svg>
                        </div>
                    ` : `
                        <a href="#">
                            <div class="flex">
                                <img src="${y.img}" alt="${y.title}">
                            </div>
                            <span>${y.title}</span>
                        </a>
                    `}
                </div>
            `).join("");
        }
    });
}

function create_Lv3(item) {
    category_modal_holder_Lv3.innerHTML = "";
    shown_modal_back = category_modal_back.innerHTML;
    const Lv3_id = item.dataset.id;
    category_levels.forEach(x => {
        if (String(x.id) === String(Lv2_id)) {
            x.sub.forEach(y => {
                if (String(y.id) === String(Lv3_id)) {
                    const Lv3_back_title = y.title;
                    category_modal_back.innerHTML = `
                        <div>
                            ${Lv2_back_title}
                            <div class="flex">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512">
                                    <path d="M41.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.3 256 246.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160z"/>
                                </svg>
                            </div>
                        </div>
                        <span>${Lv3_back_title}</span>
                        <div class="category_modal_content_back_icon flex" data-id="Lv3">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                                <path d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z"/>
                            </svg>
                        </div>
                    `;
                    category_modal_holder_Lv3.innerHTML = y.sub.map(z => `
                        <div class="category_modal_content_category_holder_Lv3_option" data-id="${z.id}">
                            <a href="#">
                                <div class="flex">
                                    <img src="${z.img}" alt="${z.title}">
                                </div>
                                <span>${z.title}</span>
                            </a>
                        </div>
                    `).join("");
                }
            });
        }
    });
}

function focus_search() {
    if (category_modal_back.querySelector(".category_modal_content_back_icon").dataset.id !== "search") {
        shown_modal_back = category_modal_back.innerHTML;
        shown_El_id = category_modal_holder.querySelector(".showElement").dataset.id;
    }
    category_modal_search.classList.add("focus");
    category_modal_content.classList.add("searchMode");
    show_search_El(shown_El_id);
    category_modal_back.innerHTML = `
        <div class="mainColor">جستجو</div>
        <div class="category_modal_content_back_icon flex" data-id="search">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                <path d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z"/>
            </svg>
        </div>
    `;
}

function show_search_El(id) {
    const options = {
        Lv2: category_modal_holder_Lv2,
        Lv3: category_modal_holder_Lv3,
        main: category_modal_holder_main
    }
    const target = options[id];
    target.classList.remove("showElement");
    target.classList.add("hideElementDown");
    category_modal_holder_search.classList.remove("hideElementDown");
    category_modal_holder_search.classList.add("showElement");
}

function change_search() {
    category_modal_search_clear_button.classList.toggle("displayNone", category_modal_search_input.value === "");
    category_modal_search_input.focus();
}

function back_fun() {
    const back_icon_id = category_modal_back.querySelector(".category_modal_content_back_icon").dataset.id;
    help_back_fun(back_icon_id);
}

function help_back_fun(id) {
    if (id === "Lv2") {
        category_modal_holder_Lv2.classList.replace("showElement","hideElementLeft");
        category_modal_holder_main.classList.replace("hideElementRight","showElement");
        category_modal_back.innerHTML = `
            <div class="mainColor">دسته ها</div>
            <div class="category_modal_content_back_icon flex" data-id="main">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
                    <path d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z"/>
                </svg>
            </div>
        `;
    } else if (id === "Lv3") {
        category_modal_holder_Lv3.classList.replace("showElement","hideElementLeft");
        category_modal_holder_Lv2.classList.replace("hideElementRight","showElement");
        category_modal_back.innerHTML = `
            <div class="mainColor">${Lv2_back_title}</div>
            <div class="category_modal_content_back_icon flex" data-id="Lv2">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                    <path d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z"/>
                </svg>
            </div>
        `;
    } else if (id === "main") {
        close_modal();
    } else if (id === "search") {
        hide_search_El(shown_El_id, shown_modal_back);
    }
}

function hide_search_El(shown_El_id, shown_modal_back) {
    const options={
        Lv2:category_modal_holder_Lv2,
        Lv3:category_modal_holder_Lv3,
        main:category_modal_holder_main
    }
    const target=options[shown_El_id];
    category_modal_holder_search.classList.replace("showElement","hideElementDown");
    target.classList.replace("hideElementDown","showElement");
    category_modal_back.innerHTML = shown_modal_back;
    category_modal_search.classList.remove("focus");
    category_modal_content.classList.remove("searchMode");
}

function close_modal() {
    category_modal.classList.replace("showElement","hideElement");
    category_modal_content.classList.replace("showElement","hideElementDown");
    category_modal_holder_Lv2.innerHTML = "";
    category_modal_holder_Lv2.classList.remove("hideElementRight");
    category_modal_holder_Lv2.classList.remove("hideElementLeft");
    category_modal_holder_Lv2.classList.add("showElement");
    category_modal_holder_Lv3.innerHTML = "";
    category_modal_holder_Lv3.classList.replace("showElement","hideElementLeft");
    category_modal_holder_main.classList.replace("showElement","hideElementRight");
    category_modal_holder_search.classList.replace("showElement","hideElementDown");
}