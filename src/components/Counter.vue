<template>
    <div>
        <button @click="counterStore.increment">Increment</button>
        Vue Counter : {{count}}
        <button @click="counterStore.decrement">Decrement</button>

        <p>Count Digit Length : {{countDigitLength }}</p>

    </div>
</template>

<script setup>
import { storeToRefs } from 'pinia';
import { useCounterStore } from '../stores/counter';
const counterStore = useCounterStore();

const {countDigitLength,count} = storeToRefs(counterStore);

// function increment () {
//     store.count++;
// }
// function decrement () {
//     store.count--;
// }

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