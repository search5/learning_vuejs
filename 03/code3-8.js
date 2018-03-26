// 루트 컴포넌트(Vue 인스턴스)
new Vue({
    el:'#app'
});

// 전역 컴포넌트
Vue.component('comp', {
    template:'<span>comp</span>'
})

//지역컴포넌트
...
components: {
    'sub_comp':{
        template: '<span>sub_comp</span>'
    }
}