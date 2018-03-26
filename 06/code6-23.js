var app = new Vue({
    el: '#app',
    data: {
        items: [3, 6, 1, 4]
    },
    computed: {
        orderedUsers: function () {
            return _.orderBy(this.items, [], "desc");
        }
    }
});