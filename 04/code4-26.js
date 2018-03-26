var vm = new Vue({
    el: "div#hello",
    data: {
        hello: 'vue.js'
    },
    updated: function () {
        console.log("새롭게 업데이트된 hello의 값은 " + this.hello + "입니다");
        console.log(this.$el.innerHTML);
    }
});