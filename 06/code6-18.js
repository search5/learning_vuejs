var app = new Vue({
    el: '#app',
    data: {
        users: [{
            id: 1,
            name: 'Vue',
            last_login: new Date(2017, 11, 8, 23, 12, 11)
        }, {
            id: 2,
            name: 'JavaScript',
            last_login: new Date(2017, 11, 6, 23, 12, 11)
        }]
    },
    computed: {
        orderedUsers: function () {
            return _.orderBy(this.users, 'name', 'asc');
        }
    }
});
