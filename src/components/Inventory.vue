<template>
    <!--
    <div class="inventory">
        <div class="row">
            <div class="item" style="border-left: none;"></div>
            <div class="item"></div>
            <div class="item"></div>
            <div class="item"></div>
            <div class="item"></div>
        </div>
        <div class="row">
            <div class="item" style="border-left: none;"></div>
            <div class="item"></div>
            <div class="item"></div>
            <div class="item"></div>
            <div class="item"></div>
        </div>
        <div class="row">
            <div class="item" style="border-left: none;"></div>
            <div class="item"></div>
            <div class="item"></div>
            <div class="item"></div>
            <div class="item"></div>
        </div>
        <div class="row">
            <div class="item" style="border-left: none;"></div>
            <div class="item"></div>
            <div class="item"></div>
            <div class="item"></div>
            <div class="item"></div>
        </div>
        <div class="row" style="border-bottom: none;">
            <div class="item" style="border-left: none;"></div>
            <div class="item"></div>
            <div class="item"></div>
            <div class="item"></div>
            <div class="item"></div>
        </div>
    </div>
    -->
    <div class="inventory">
        <div v-for="(row, rowIndex) in grid" :key="rowIndex" class="row" :style="itemStyle(rowIndex)">
            <div v-for="(item, colIndex) in row" :key="colIndex" class="item" :style="itemStyle(rowIndex, colIndex)">
                <InventoryItem v-if="item" :item="item" :index="item.index" />
            </div>
        </div>
    </div>
    <!-- <InventoryItem v-for="(item, index) in items" :key="index" :item="item" :index="index" /> -->
</template>

<script setup>
import { ref, computed } from 'vue';
import { useInventoryStore } from '../stores/inventory.js';
import InventoryItem from './InventoryItem.vue';

const store = useInventoryStore();
const items = ref(store.items);

const rows = 5;
const cols = 5;

// Вычисляемое свойство для формирования сетки
const grid = computed(() => {
    const gridArray = Array.from({ length: rows }, () => Array.from({ length: cols }, () => null));
    if (items.value) {
        items.value.forEach((item, index) => {
            const rowIndex = Math.floor(index / cols);
            const colIndex = index % cols;
            if (rowIndex < rows && colIndex < cols) {
                gridArray[rowIndex][colIndex] = { ...item, index };
            }
        });
    }
    return gridArray;
});

function itemStyle(rowIndex, colIndex) {
    return {
        borderLeft: colIndex === 0 ? 'none' : '',
        borderBottom: rowIndex === rows - 1 ? 'none' : '',
    };
}
</script>

<style scoped>
.inventory {
    display: inline-flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    background: #262626;
    border-radius: 12px;
    border: 1px #4D4D4D solid;
}
.row{
    display: inline-flex;
    justify-content: flex-start;
    align-items: flex-start;
    border-bottom: 1px #4D4D4D solid;
}
.item{
    width: 105px;
    height: 100px;
    /*position: relative;*/
    border-left: 1px #4D4D4D solid
}
</style>
  