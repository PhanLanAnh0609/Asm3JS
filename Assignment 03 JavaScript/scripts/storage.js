'use strict'

// hàm lưu dữ liệu người dùng vào localStorage
const saveUser = function(key, value) {
    localStorage.setItem(key, JSON.stringify(value));
};

// hàm lấy ra dữ liệu người dùng trong localStorage
const getUser = function(key) {
    return localStorage.getItem(key);
};

// tạo danh sách người dùng mẫu

// const userArr = [
//     {
//         firstName: 'David',
//         lastName: 'Darwin',
//         username: 'DavidDarwin',
//         password: 'david12345',
//         passworsConfirm: 'david12345', 
//     },
//     {
//         firstName: 'Sean',
//         lastName: 'Bean',
//         username: 'SeanBean',
//         password: 'seanbean123',
//         passworsConfirm: 'seanbean123', 
//     },
//     {
//         firstName: 'Smith',
//         lastName: 'Alice',
//         username: 'SmithAlice',
//         password: 'alice1234',
//         passworsConfirm: 'alice1234', 
//     },
//     {
//         firstName: 'Jackson',
//         lastName: 'Emily',
//         username: 'EmilyJackson',
//         password: 'emilyjackson',
//         passworsConfirm: 'emilyjackson', 
//     },
//     {
//         firstName: 'Powers',
//         lastName: 'Robert',
//         username: 'RobertPowers',
//         password: 'robert1234',
//         passworsConfirm: 'robert1234', 
//     },
// ]

// hàm lấy dữ liệu task trong localStorage
const getTask = function(key) {
    return localStorage.getItem(key);
};

// hàm lưu dữ liệu task vào localStorage
const saveTask = function(key, value) {
    localStorage.setItem(key, JSON.stringify(value));
};