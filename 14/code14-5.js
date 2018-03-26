axios.post("/submit", {
    title: 'about',
    content: '한빛미디어를 알아봅시다'
}).then(function (response) {
    // response 인자를 받아 처리
}).catch(function (ex) {
    // ex 인자를 받아 에러 처리
})