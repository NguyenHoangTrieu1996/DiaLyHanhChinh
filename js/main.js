const app = document.getElementById('app');

const loaded = {
    pages: {
        index: true,
        antin: false,
        sacphong: false,
        bando: false,
        saigon: false,
        chuyendekhac: false
    },
    datas: {
        antin: false,
        sacphong: false,
        bando: false,
        saigon: false
    }
};

const routes = {
    '/': {
        page: 'index',
    },
    '/antin': {
        page: 'antin',
        data: 'antin'
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

function afterRender() {
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
    const lang = localStorage.getItem('language');
    if (lang) {
        document.querySelector('#lang-vi, #lang-eng')?.setAttribute('id', lang);
        document.querySelectorAll('.lang').forEach(el => el.style.display = 'none');
        document.querySelectorAll(`.${lang}`).forEach(el => el.style.display = 'block');
        document.querySelectorAll(`.${lang}-inline`).forEach(el => el.style.display = 'inline');
    }
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
        if (!loaded.pages[route.page]) await loadScript(`pages/${route.page}.js`).then(() => loaded.pages[route.page] = true);
        app.innerHTML = window.Pages[route.page](null);
        if (route.data && loaded.datas[route.data]) app.innerHTML = window.Pages[route.page](window.datas[route.data]);
        if (route.data && !loaded.datas[route.data]) {
            await loadScript(`public/datas/${route.data}Data.js`).then(() => loaded.datas[route.data] = true);
            app.innerHTML = window.Pages[route.page](window.datas[route.data]);
        }
    } catch (e) {
        app.innerHTML = "<h2>Lỗi tải trang</h2>";
        console.log(e)
    } finally {
        afterRender();
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
