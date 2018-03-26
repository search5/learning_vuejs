const listener = () => console.log("1st listener");
const listener2 = () => console.log("2st listener");
vm.$on('vue', listener);
vm.$on('vue', listener2);