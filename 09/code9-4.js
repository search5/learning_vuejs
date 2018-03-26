var app = new Vue({
    el: '#app',
    data: {
        classObject: {
            active: this.isActive,
            'text-danger': false
        },
        isActive: false
    }
});