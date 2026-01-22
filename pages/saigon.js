window.Pages = window.Pages || {};

window.Pages.saigon = function (datas) {
    // Đã có datas
    return `
        <h1 class="lang lang-vi">Đây là Xưa mới</h1>
        <h1 class="lang lang-eng" style="display:none;">Đây là Xưa mới English</h1>

         <div id="saingon" class="carousel slide carousel-fade" data-bs-ride="carousel" data-bs-touch="false" data-bs-interval="20000">
        <div class="background-top">
        </div>
        <div class="carousel-inner" id="carousel-inner">
            <!-- Map Data -->
            <div class="carousel-item active">
                <div class="beer-slider" data-beer-label="Before">
                    <img src="./public/images/saigonxua/19.jpg" alt="1">
                    <div class="beer-reveal" data-beer-label="After">
                        <img src="./public/images/saigonhoinhap/19.jpg" alt="1">
                    </div>
                </div>
                <div class="carousel-caption d-block d-md-block">
                    <p>Some representative placeholder content for the first slide.</p>
                </div>
            </div>

              <div class="carousel-item">
                <div class="beer-slider" data-beer-label="Before">
                    <img src="./public/images/saigonxua/20.jpg" alt="1">
                    <div class="beer-reveal" data-beer-label="After">
                        <img src="./public/images/saigonhoinhap/20.jpg" alt="1">
                    </div>
                </div>
                <div class="carousel-caption d-block d-md-block">
                    <p>Some representative placeholder content for the first slide.</p>
                </div>
            </div>
           
        </div>

        <button class="carousel-control-prev" type="button" data-bs-target="#saingon" data-bs-slide="prev">
            <span class="carousel-control-prev-icon"></span>
        </button>
        <button class="carousel-control-next" type="button" data-bs-target="#saingon" data-bs-slide="next">
            <span class="carousel-control-next-icon"></span>
        </button>
    </div>
    `;
};