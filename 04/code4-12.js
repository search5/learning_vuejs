var mixin = {
    created: function() { console.log(1); },
    data: { a: 'hello' }
};

var vm = new Vue({
    created: function() { console.log(2); },
    mixins: [mixin],
    data: { a: 'hello3' }
});