import Vue from "vue"
import sum from "sum"

const app = new Vue({
    el: "#app",
    data: {
        message: sum(1, 5)
    }
})