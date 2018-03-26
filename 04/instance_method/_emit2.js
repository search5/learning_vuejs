var vm = new Vue();
vm.$on('hello', (param1, param2) => {
    console.log(param1 + "이 넘어왔어요.");
    console.log(param2 + "이 넘어왔어요.");
});

vm.$emit('hello', 1, 2);