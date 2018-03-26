var vm = new Vue({
    el: "div#hello",
    data: {
        hello: 'vue.js'
    },
    mounted: function () {
        console.log('mounted 이벤트가 발생되었습니다.');
    }
});