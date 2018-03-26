Vue.component('my-checkbox', {
    model: {
        prop: 'checked',
        event: 'change'
    },
    props: {
        // 다른 목적을 위해 value를 prop로 사용할 수 있습니다.
        value: String,
        // value 대신 checked를 prop로 사용하세요.
        checked: {
            type: Number,
            default: 0
        }
    },
});

<my-checkbox v-model="foo" value="somevalue"></my-checkbox>