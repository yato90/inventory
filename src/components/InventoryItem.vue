<template>
    <div @click="toggleDetails" class="inventory_item" >
        <div class="item">
            <div class="item_backround1" :style="`background: ${item.color1}`"></div>
            <div class="item_backround2" :style="`background: ${item.color2}`"></div>
        </div>
        <div class="counter">
            <div class="count_border"></div>
            <div class="itemCounter">{{item.count}}</div>
        </div>
    </div>
    <div v-if="showDetail" class="item-details">
        <p>{{ item.description }}</p>
        <button @click.stop="removeItem">Удалить</button>
    </div>
</template>

<script setup>
import { ref } from 'vue';
import { useInventoryStore } from '../stores/inventory.js';

const props = defineProps({
    item: Object,
    index: Number,
});

const showDetail = ref(false);
const store = useInventoryStore();

function toggleDetails() {
    showDetail.value = !showDetail.value;
}

function removeItem() {
    store.removeItem(props.index);
}
</script>

<style scoped>
.inventory_item{
    width: 105px; 
    height: 100px; 
    position: relative;
    cursor: pointer;
}
.item{
    width: 54px; 
    height: 54px; 
    left: 26px; 
    top: 23px; 
    position: absolute;
}
.counter{
    width: 16px; 
    height: 16px; 
    left: 88px; 
    top: 83px; 
    position: absolute;
}
.item_backround1{
    width: 48px; 
    height: 48px; 
    left: 0px; 
    top: 6px; 
    position: absolute;
}
.item_backround2{
    width: 48px; 
    height: 48px; 
    left: 6px; 
    top: 0px; 
    position: absolute;
    backdrop-filter: blur(12px);
}
.count_border{
    width: 16px;
    height: 16px;
    left: 0px;
    top: 0px;
    position: absolute;
    background: rgb(38, 38, 38);
    border-top-left-radius: 6px;
    border: 1px solid rgb(77, 77, 77);
}
.itemCounter{
    width: 8px;
    height: 12px;
    left: 4px;
    top: 2px;
    position: absolute;
    opacity: 0.4;
    color: white;
    font-size: 10px;
    font-family: Inter;
}
</style>
  