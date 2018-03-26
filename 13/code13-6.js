const app = new Vue({
    el: '#app',
    store,
    components: { Counter },
    template: `
        <div class="app">
        <counter></counter>
        </div>
    `
})