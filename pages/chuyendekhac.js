window.Pages = window.Pages || {};

window.Pages.chuyendekhac = function () {
    return `
        <section>
       <div class="document ">
        <h2 class="lang lang-vi">Danh sách chuyên đề</h2>
        <h2 class="lang lang-eng" style="display: none;">List of exhibitions</h2>
        
        <div class="document-scroll">
            <ul class="lang lang-vi">
                <li><a href="./public/vanhoa-main/index.html">📄 VĂN HÓA</a></li>
                <li><a href="./public/kinhte-merge/index.html">📄 KINH TẾ</a></li>
                <li><a href="./public/songnuoc-doc/page2.html">📄 SÔNG NGÒI KÊNH RẠCH</a></li>
            </ul>

             <ul class="lang lang-eng" style="display: none;">
                <li><a href="./public/vanhoa-main/index.html">📄 CULTURE</a></li>
                <li><a href="./public/kinhte-merge/index.html">📄 ECONEMIC</a></li>
                <li><a href="./public/songnuoc-doc/page2.html">📄 RIVER</a></li>
            </ul>
        </div>
    </div>
    </section>
    `;
};