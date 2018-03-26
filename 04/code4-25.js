var vm = new Vue({
    el: "div#hello",
    data: {
        hello: 'vue.js'
    },
    beforeUpdate: function () {
        console.log("새롭게 업데이트 하는 hello의 값은 " + this.hello + "입니다")
    }
});