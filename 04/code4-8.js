Vue.component('render-acro', {
    render: function(h) {
        return h(
            'h1', this.$slots.default // 태그 이름과 자식의 배열
        )
    }
});