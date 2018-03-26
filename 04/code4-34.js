var vm = new Vue({
    el: "#hello",
    created: function () {
        console.log('created 이벤트가 발생되고 있습니다.');

        this.$nextTick(function () {
            this.$el.innerHTML = "Hello Vuex!";
        });
    },
    data: {
        msg: "Hello Vue.js"
    }
});