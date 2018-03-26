var vm = new Vue({
    el: "#hello",
    created: function () {
        var th = this.$nextTick();

        th.then(function (vue) {
            // vue 인자로 Vue 인스턴스를 참조할 수 있습니다.
            console.log(vue);
        });
    },
    data: {
        msg: "Hello Vue.js"
    }
});