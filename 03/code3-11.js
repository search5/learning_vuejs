new Vue ({
    data: {
        name: "Editor"
    },
    computed: {
        merge_name: function() {
            return "Lee Joong-Min"
        }
    },
    watch: {
        name: function (new_value, old_value) {
            // 상태 값이 바뀌었을 때 할 일
        }
    }
});