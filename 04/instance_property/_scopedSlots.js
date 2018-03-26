Vue.component('blog-post', {
    render: function (createElement) {
        this.$scopedSlots.default({
            text: props.msg
        })
    }
});