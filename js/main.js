const app = document.getElementById('app');

const loaded = {
    pages: {
        index: true,
        sacphong: false,
        bando: false,
        saigon: false,
        chuyendekhac: false
    },
    datas: {
        index: true,
        sacphong: false,
        bando: false,
        saigon: false
    }
};

const routes = {
    '/': {
        page: 'index',
        data: 'index'
    },
    '/sacphong': {
        page: 'sacphong',
        data: 'sacphong'
    },
    '/bando': {
        page: 'bando',
        data: 'bando'
    },
    '/saigon': {
        page: 'saigon',
        data: 'saigon'
    },
    '/chuyendekhac': {
        page: 'chuyendekhac',
    },
}

function loadScript(src) {
    return new Promise((resolve, reject) => {
        if (document.querySelector(`script[src="${src}"]`)) {
            resolve();
            return;
        }
        const s = document.createElement('script');
        s.src = src;
        s.defer = true;
        s.onload = resolve;
        s.onerror = reject;
        document.body.appendChild(s);
    });
}

function afterRender(scope) {
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
    const lang = localStorage.getItem('language');
    if (lang) {
        document.querySelector('#lang-vi, #lang-eng')?.setAttribute('id', lang);
        document.querySelectorAll('.lang').forEach(el => el.style.display = 'none');
        document.querySelectorAll(`.${lang}`).forEach(el => el.style.display = 'block');
        document.querySelectorAll(`.${lang}-inline`).forEach(el => el.style.display = 'inline');
    }
}
const BeerManager = (() => {
    const map = new WeakMap();
    function init(slider) {
        if (!slider || map.has(slider)) return;
        map.set(slider, new BeerSlider(slider, { start: 50 }));
    }
    function initActive() {
        document
            .querySelectorAll('.carousel-item.active .beer-slider')
            .forEach(init);
    }
    return { init, initActive };
})();

function bindCarouselBeer() {
    document.querySelectorAll('.carousel').forEach(carousel => {
        if (carousel.__beerBind) return;
        carousel.__beerBind = true;

        carousel.addEventListener('slid.bs.carousel', e => {
            const slider = e.relatedTarget?.querySelector('.beer-slider');
            if (slider) BeerManager.init(slider);
            blockCarouselWhenDragBeer();
        });
    });
}
function blockCarouselWhenDragBeer() {
    document.querySelectorAll('.beer-slider').forEach(slider => {
        if (slider.__blocked) return;
        slider.__blocked = true;

        slider.addEventListener('pointerdown', e => e.stopPropagation());
        slider.addEventListener('touchstart', e => e.stopPropagation());
    });
}

async function render() {
    showLoader();
    const path = location.hash.replace('#', '') || '/';
    const route = routes[path];
    if (!route) {
        hideLoader();
        app.innerHTML = `<h2>404 - Trang không tồn tại</h2><a href="#/">← Quay về trang chủ</a>`;
        return;
    }
    try {
        if (!loaded.pages[route.page]) await loadScript(`./pages/${route.page}.js`).then(() => loaded.pages[route.page] = true);
        if (route.data && loaded.datas[route.data]) {
            app.innerHTML = window.Pages[route.page](window.datas[route.data]);
            return;
        }
        if (route.data && !loaded.datas[route.data]) {
            await loadScript(`./public/datas/${route.data}Data.js`).then(() => loaded.datas[route.data] = true);
            app.innerHTML = window.Pages[route.page](window.datas[route.data]);
            return;
        }
        app.innerHTML = window.Pages[route.page](null);
     
    } catch (e) {
        alert("Lỗi tải trang, Trang chưa được Load, đợi một ít phút xong quay lại trang");
        app.innerHTML = "<h2>Lỗi tải trang, Trang chưa được Load, đợi một ít phút xong quay lại trang</h2>";
        console.log(e)
        showLoader();
    } finally {
        afterRender();
        requestAnimationFrame(() => {
            BeerManager.initActive();
            bindCarouselBeer();
            blockCarouselWhenDragBeer();
        });
        hideLoader();
    }
}

function preloadData() {
    setTimeout(() => {
        Object.values(routes).forEach(route => {
            if (route.page && !loaded.pages[route.page]) {
                loadScript(`pages/${route.page}.js`).then(() => loaded.pages[route.page] = true);
            }
            if (route.data && !loaded.datas[route.data]) {
                loadScript(`public/datas/${route.data}Data.js`).then(() => loaded.datas[route.data] = true);
            }
        });

    }, 500);
}

window.addEventListener('hashchange', render);
window.addEventListener('load', render);

preloadData();
