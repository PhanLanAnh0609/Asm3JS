'use strict'
const newsContainer = document.getElementById('news-container');
const btnPrev = document.getElementById('btn-prev');
const btnNext = document.getElementById('btn-next');
const pageNum = document.getElementById('page-num');
const apiKey = '2b32d36ed64f428db8d902abee85a6de';

if(!currentUser) {
    alert(`Vui lòng đăng nhập!`);
    window.location.href = '../pages/login.html';
}

let pageSize = currentUser.pageSize,
    currentPage = 1,
    category = currentUser.category,
    totalResults = 0;

async function getNewsData(country, category, pageSize, currentPage, apiKey) {
    const apiUrl = `https://newsapi.org/v2/top-headlines?country=${country}&category=${category}&pageSize=${pageSize}&page=${currentPage}&apiKey=${apiKey}`;
    try {
        const res = await fetch(apiUrl);
        const data = await res.json();
        totalResults = data.totalResults;
        return data;
    } catch(err) {
        console.log(err);
    }

};

function renderNews(newsData) {
    newsContainer.innerHTML ='';
    if(!newsData || newsData.status !== 'ok') {
        newsContainer.innerHTML =`Load dữ liệu tin tức không thành công`;
        return;
    };
    const articles = newsData.articles;

    for(const article of articles) {
        newsContainer.innerHTML += `
        <div class="card flex-row flex-wrap">
            <div class="card mb-3" style="">
            <div class="row no-gutters">
                <div class="col-md-4">
                <img
                    src=${article?.urlToImage}
                    class="card-img"
                    alt="no image"
                />
                </div>
                <div class="col-md-8">
                <div class="card-body">
                    <h5 class="card-title">
                    ${article.title}
                    </h5>
                    <p class="card-text">
                    ${article.description}
                    </p>
                    <a
                    href="${article.url}"
                    class="btn btn-primary"
                    >View</a
                    >
                </div>
                </div>
            </div>
            </div>
        </div>
        `;
    };

    pageNum.innerText = currentPage;
    btnPrev.style.display = currentPage === 1 ? 'none' : 'block';
    const maxPage = Math.ceil(totalResults/pageSize);
    btnNext.style.display = currentPage === maxPage || totalResults === 0 ? 'none' : 'block';
};

async function fetchNewsData() {
    const news = await getNewsData('us', category, pageSize, currentPage, apiKey);
    renderNews(news);
}

window.onload = async function() {
    await fetchNewsData();
}

btnPrev.addEventListener('click', async function() {
    if(currentPage > 1) {
        currentPage--;
        await fetchNewsData();
    };
});

btnNext.addEventListener('click', async function() {
    const maxPage = Math.ceil(totalResults/pageSize);
    if(currentPage < maxPage) {
        currentPage++;
        await fetchNewsData();
    };
});
