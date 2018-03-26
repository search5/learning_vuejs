var vm = new Vue({
    // 상태
    data() {
        return {
            count: 0
        }
    },
    // 뷰
    template: '<div>{{ count }}</div>',
    // 액션
    methods: {
        increment() {
            this.count++
        }
    }
})