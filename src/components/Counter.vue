<template>
    <div>
        <button @click="increment">Increment</button>
        Vue Counter : {{store.count}}
        <button @click="decrement">Decrement</button>

        <p>Count Digit Length : {{ store.countDigitLength }}</p>

    </div>
</template>

<script setup>
import { useCounterStore } from '../stores/counter';
const store = useCounterStore();

function increment () {
    store.count++;
}
function decrement () {
    store.count--;
}

// const countDigitLength = computed(() => store.count.toString().length);

// const  countDigitLength = store.count.toString().length;


</script>




<!-- ====== using props ====== -->

<!-- <script setup>

const props = defineProps(["count"]);
const count = props.count;
</script> -->

<!-- <script>
export default {
    props:["count"],
    setup(props){
        console.log(props);
    }
}
</script> -->
<style lang="scss" scoped>

</style>