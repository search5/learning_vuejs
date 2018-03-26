vm.$on('python', function (msg) {
    console.log('이 이벤트는 여러 번 발생해야 합니다.');
});

vm.$once('python', function (msg) {
    console.log('이 이벤트는 한 번만 발생하고 다시 발생하지 않습니다.');
});