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
        <button @click="remove">Удалить</button>
    </div>
</template>

<script setup>
import { defineProps, defineEmits } from 'vue';

const props = defineProps({
  item: Object,
});
const emit = defineEmits(['close', 'remove']);

function close() {
  emit('close');
}

function remove() {
  if (props.item.count > 1) {
    props.item.count--;
  } else {
    emit('remove', props.item.index);
  }
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
    width: 130px; 
    height: 130px; 
    position: relative;
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

</style>
  