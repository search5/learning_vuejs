var vm = new Vue({
    el: "div#hello",
    data: {
        hello: 'vue.js'
    },
    beforeMount: function () {
        console.log('beforeMount 이벤트가 발생되었습니다.');
    }
});