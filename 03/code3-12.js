var vm = new Vue ({
    data: {
        name: "Editor"
    },
    watch: {
        name: function (new_value, old_value) {
            // 상태 값이 바뀌었을 때 할 일
        }
    }
});