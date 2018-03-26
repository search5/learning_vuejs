var sum = require('sum');
var Vue = require('vue.common');

var app = new Vue({
    el: "#app",
    data: {
        message: sum(1, 3)
    }
})