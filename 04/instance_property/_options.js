new Vue({
    customOption: 'foo',
    created: function () {
        console.log(this.$options.customOption) // -> 'foo'
    }
});