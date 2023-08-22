'use strict';

const pageSizeInput = document.getElementById('input-page-size');
const categoryInput = document.getElementById('input-category');
const btnSubmit = document.getElementById('btn-submit');

btnSubmit.addEventListener('click', function() {
    const user = currentUser;
    console.log(user);
    if(pageSizeInput.value === '' || pageSizeInput.value === 0) {
        alert(`Số bài viết trong trang phải lớn hơn 0`);
    } else {
        user.pageSize = Number(pageSizeInput.value);
        user.category = categoryInput.value;
        console.log(user);
        saveToStorage('currentUser', user);
    }
})
