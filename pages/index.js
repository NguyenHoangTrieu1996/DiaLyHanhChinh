window.Pages = window.Pages || {};

window.Pages.index = function () {
    return `
        <h1>Ấn Tín</h1>
        <div id="antin" class="carousel slide carousel-fade" data-bs-ride="carousel" data-bs-interval="5000">
            <div class="background-top">
            </div>

        <div class="carousel-inner" id="carousel-inner">
            <div class="carousel-title">
                <h2>GIAI ĐOẠN 1945 - 1994</h2>
            </div>

             
            <!-- Map Data -->
            <div class="carousel-item active">
            <img class="d-block w-100" src="./public/images/antin/23.jpg" alt="1">
                <div class="carousel-caption d-block d-md-block">
                <p>Some representative placeholder content for the first slide.</p>
                </div>
            </div>
            <div class="carousel-item "><img class="d-block w-100" src="./public/images/antin/24.jpg" alt="1"></div>
            <div class="carousel-item "><img class="d-block w-100" src="./public/images/antin/25.jpg" alt="1"></div>
        </div>

        <button class="carousel-control-prev" type="button" data-bs-target="#antin" data-bs-slide="prev">
            <span class="carousel-control-prev-icon"></span>
        </button>
        <button class="carousel-control-next" type="button" data-bs-target="#antin" data-bs-slide="next">
            <span class="carousel-control-next-icon"></span>
        </button>
        </div>
       
    `;
};