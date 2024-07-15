<template>
    <div class="inventory-container">
        <div class="inventory">
            <div v-for="(row, rowIndex) in grid" :key="rowIndex" class="row" :style="itemStyle(rowIndex)">
                <div v-for="(item, colIndex) in row" :key="colIndex" class="item" :style="itemStyle(rowIndex, colIndex)">
                    <InventoryItem @click="showModal(item, colIndex)" v-if="item" :item="item" :index="item.index" />
                </div>
            </div>
        </div>
        <transition name="slide">
            <inventoryModal v-if="showDetail" :item="selectedItem" @close="hideModal" @remove="removeItem" />
        </transition>
    </div>
</template>

<script setup>
import { ref, computed } from 'vue';
import { useInventoryStore } from '../store/inventory.js';
import InventoryItem from './InventoryItem.vue';
import inventoryModal from './inventoryModal.vue';

const inventoryStore = useInventoryStore();
const items = ref(inventoryStore.items);

const showDetail = ref(false);
const selectedItem = ref(null);

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

function showModal(item, index) {
    selectedItem.value = { ...item, index };
    showDetail.value = true;
}

function hideModal() {
    showDetail.value = false;
    selectedItem.value = null;
}

function removeItem(index, count) {
  const item = inventoryStore.items[index];
  console.log(item);
  if (item.count > 0) {
    console.log("test");
    inventoryStore.removeItem(index, count);
    hideModal();
  }
}
</script>

<style scoped>
.inventory-container {
  position: relative;
  width: max-content;
  margin: auto;
}
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
.slide-enter-from{
    transform: translateX(30%);
}

.slide-enter-active, .slide-leave-active {
    transition: transform 0.3s ease;
}

.slide-leave-active {
    transform: translateX(30%);
}
</style>
  