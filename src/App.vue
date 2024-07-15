<template>
  <div id="app">
    <main>
      <div class="left_line">
        <div class="image">
          <div class="layer1">
            <div class="layer2">
              <img style="width: 490px; height: 789px" src="https://via.placeholder.com/490x789" />
            </div>
          </div>
          <div style="width: 208px; height: 240px; left: 0px; top: 0px; position: absolute; background: rgba(255, 255, 255, 0.10); border-radius: 8px; backdrop-filter: blur(12px)"></div>
        </div>
        <div class="skeletons_main">
          <div class="stub" style="width: 155px; height: 10px; left: 17px; top: 50px"></div>
          <div class="stub" style="width: 190px; height: 26px; left: 0px; top: 0px"></div>
          <div class="stub" style="width: 190px; height: 10px; left: 0px; top: 76px"></div>
          <div class="stub" style="width: 170px; height: 10px; left: 10px; top: 102px"></div>
          <div class="stub" style="width: 160px; height: 10px; left: 15px; top: 128px"></div>
          <div class="stub" style="width: 140px; height: 10px; left: 25px; top: 154px"></div>
          <div class="stub" style="width: 80px; height: 10px; left: 55px; top: 188px"></div>
        </div>
      </div>
      <Inventory />
    </main>
    <footer>
      <div class="close">
        <div style="color: white">x</div>
      </div>
      <div class="skeletons_footer"></div>
    </footer>
  </div>
</template>

<script setup>
import Inventory from './components/Inventory.vue';
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
main {
  display: flex;
}
footer{
  height: 72px; 
  margin-top: 24px;
  position: relative; 
  background: #262626; 
  border-radius: 12px; 
  overflow: hidden; 
  border: 1px #4D4D4D solid;
}
.left_line {
  display: inline-flex;
  flex-direction: column; 
  justify-content: flex-start; 
  align-items: center; 
  gap: 20px;
  padding-top: 18px; 
  padding-bottom: 24px; 
  padding-left: 14px; 
  padding-right: 14px; 
  background: #262626; 
  border-radius: 12px; 
  overflow: hidden; 
  border: 1px #4D4D4D solid;
  margin-right: 24px;
}
.image{
  width: 208px; 
  height: 240px; 
  position: relative
}
.layer1{
  display: inline-flex;
  flex-direction: column; 
  justify-content: flex-start; 
  align-items: center;
  width: 200px; 
  height: 240px; 
  left: 4px; 
  top: 0px; 
  position: absolute; 
  border-radius: 8px; 
  overflow: hidden;
}
.layer2{
  display: inline-flex;
  flex-direction: column; 
  justify-content: center; 
  align-items: center;
  width: 490px; 
  height: 789px;
}
.skeletons_main{
  width: 190px; 
  height: 198px; 
  position: relative
}
.stub{
  position: absolute; 
  background: linear-gradient(90deg, #3C3C3C 0%, #444444 51%, #333333 100%); 
  border-radius: 4px
}
.close{
  padding: 6px;
  left: 753px;
  top: 5px;
  position: absolute;
}
.skeletons_footer{
  width: 699px;
  height: 36px;
  left: 18px;
  top: 18px;
  position: absolute;
  background: linear-gradient(90deg, rgb(60, 60, 60) 0%, rgb(68, 68, 68) 51%, rgb(51, 51, 51) 100%);
  border-radius: 12px;
}
</style>