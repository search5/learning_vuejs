var vm = new Vue({
    el: "#hello",
    created: function () {
        var th = this.$nextTick();

        th.then(function () {
            console.log("성공");
        });
    },
    data: {
        msg: "Hello Vue.js"
    }
});