<template>
    <div class="modal" >
        <div class="close" @click="close">
            <div style="color: white">x</div>
        </div>
        <div class="itemImage">
            <div class="item_modal_backround1" :style="`background: ${item.color1}`"></div>
            <div class="item_modal_backround2" :style="`background: ${item.color2}`"></div>
        </div>
        <div class="Divider" style="width: 220px; height: 1px; background: #4D4D4D"></div>
        <div class="skeletons_modal">
            <div class="stub" style="width: 211px; height: 30px; top: 16px;"></div>
            <div class="stub" style="width: 211px; height: 10px; top: 70px"></div>
            <div class="stub" style="width: 211px; height: 10px; top: 96px"></div>
            <div class="stub" style="width: 211px; height: 10px; top: 122px"></div>
            <div class="stub" style="width: 180px; height: 10px; left: 16px; top: 148px"></div>
            <div class="stub" style="width: 80px; height: 10px; left: 66px; top: 172px"></div>
        </div>
        <div class="Divider" style="width: 220px; height: 1px; background: #4D4D4D"></div>
        <div v-if="isDeleteBlockVisible" class="delete_block">
            <input type="number" v-model="countToRemove" placeholder="Введите количество">
            <button class="cancel" @click="hideDeleteBlock">Отмена</button>
            <button class="confirm" @click="confirmRemove">Подтвердить</button>
        </div>
        <button v-else @click="showDeleteBlock" >Удалить</button>
    </div>
</template>

<script setup>
import { ref, defineProps, defineEmits } from 'vue';

const props = defineProps({
  item: Object,
});
const emit = defineEmits(['close', 'remove']);

function close() {
  emit('close');
}

const isDeleteBlockVisible = ref(false);
const countToRemove = ref(0);

function showDeleteBlock() {
  isDeleteBlockVisible.value = true;
}

function hideDeleteBlock() {
  isDeleteBlockVisible.value = false;
  countToRemove.value = 0;
}

function confirmRemove() {
    if (countToRemove.value > 0) {
        emit('remove', props.item.index, countToRemove.value);
    }
    hideDeleteBlock();
}
</script>

<style scoped>
.modal{
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 250px;
    height: 506px;
    position: absolute;
    right: 0;
    top: 0;
    background: rgba(38, 38, 38, 0.5);
    border-left: 1px solid rgb(77, 77, 77);
    border-radius: 12px;
    backdrop-filter: blur(16px);
    z-index: 10;
}
.itemImage{
    position: relative;
    width: 130px; 
    height: 130px;
    margin-top: 55px;
    margin-bottom: 30px;
}
.close{
    width: 24px; 
    height: 24px; 
    padding: 6px; 
    left: 218px; 
    top: 8px; 
    position: absolute; 
    justify-content: center; 
    align-items: center; 
    display: inline-flex;
    cursor: pointer;
}
.item_modal_backround1{
    width: 115.56px; 
    height: 115.56px; 
    left: 0px; 
    top: 14.44px; 
    position: absolute;
}
.item_modal_backround2{
    width: 115.56px; 
    height: 115.56px; 
    left: 14.44px; 
    top: 0px;
    backdrop-filter: blur(12px);
    position: absolute;
}
.skeletons_modal{
    position: relative;
    width: 211px; 
    height: 206px;
}
button{
    width: 220px;
    height: 39px;
    margin-top: 18px;
    background: #FF8888;
    border-radius: 8px;
}
input{
    width: 210px; 
    height: 40px; 
    padding-left: 12px; 
    box-sizing: border-box; 
    background: #262626; 
    border-radius: 4px; 
    border: 1px solid #4D4D4D;
    color: white; 
    font-size: 14px; 
    font-family: Inter; 
    font-weight: 500;
    margin-top: 20px;
}
.cancel{
    width: 88px;
    background: white; 
    border-radius: 8px; 
    border: none; 
    color: #2D2D2D; 
    font-size: 14px; 
    font-family: 'SF Pro Display', sans-serif; 
    font-weight: 400; 
    cursor: pointer;
    margin-right: 10px;
}
.confirm{
    width: 112px;
    background: #FA7272; 
    border-radius: 8px; 
    border: none; 
    color: white; 
    font-size: 14px; 
    font-family: 'SF Pro Display', sans-serif; 
    font-weight: 400; 
    cursor: pointer;
}
.delete_block{
    width: 252px;
    height: 133px;
    background: rgba(38.25, 38.25, 38.25, 0.60);
    border: 1px #4D4D4D solid;
    backdrop-filter: blur(16px);
}
</style>
  