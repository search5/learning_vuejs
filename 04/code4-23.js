var vm = new Vue({
    el: "div#hello",
    data: {
        hello: 'vue.js'
    },
    beforeDestroy: function () {
        console.log('beforeDestory 이벤트가 발생되었습니다');
    }
});
