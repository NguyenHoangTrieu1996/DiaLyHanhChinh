window.Pages = window.Pages || {};

window.Pages.bando = function (datas) {
    const carouselItems = Array.isArray(datas)
        ? datas.map((item, i) => `
        <div class="carousel-item ${i === 0 ? 'active' : ''}">
            <img class="d-block w-100"
                 src="./${item.img}"
                 alt="antin-${i + 1}">
            <div class="carousel-caption d-block d-md-block">
                <p class="lang lang-vi">${item.desc1}</p>
                <p class="lang lang-eng" style="display:none;">${item.desc2}</p>
            </div>
        </div>`).join("")
        : "";

    return `
        <h1 class="lang lang-vi">Đây là Bản Đồ</h1>
        <h1 class="lang lang-eng" style="display:none;">Đây là Bản Đồ English</h1>

        <div id="sacphong" class="carousel slide carousel-fade" data-bs-ride="carousel" data-bs-interval="5000">
            <div class="background-top">
            </div>
        <div class="carousel-inner" id="carousel-inner">
            <div class="carousel-title">
                <h2>GIAI ĐOẠN 1945 - 1994</h2>
            </div>
             
            <!-- Map Data -->
            ${carouselItems}
        </div>

        <button class="carousel-control-prev" type="button" data-bs-target="#sacphong" data-bs-slide="prev">
            <span class="carousel-control-prev-icon"></span>
        </button>
        <button class="carousel-control-next" type="button" data-bs-target="#sacphong" data-bs-slide="next">
            <span class="carousel-control-next-icon"></span>
        </button>
        </div>
    `;
};