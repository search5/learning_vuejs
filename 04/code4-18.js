var vm = new Vue({
    data: {
        hello: 'vue.js'
    },
    beforeCreate: function () {
        console.log('beforeCreate 이벤트가 발생되었습니다.');
    }
});