var vm = new Vue({
    el: "div#hello",
    data: {
        hello: 'vue.js'
    },
    destroyed: function () {
        console.log('destroyed 이벤트가 발생되었습니다');
    }
});