export default {
    install(app) {
      app.directive('draggable', {
        mounted(el, binding) {
          el.draggable = true;
  
          el.addEventListener('dragstart', (event) => {
            event.dataTransfer.effectAllowed = 'move';
            event.dataTransfer.setData('text/plain', binding.value.index);
            binding.value.onDragStart(binding.value.index);
          });
  
          el.addEventListener('dragover', (event) => {
            event.preventDefault();
            event.dataTransfer.dropEffect = 'move';
          });
  
          el.addEventListener('drop', (event) => {
            event.preventDefault();
            const newIndex = binding.value.index;
            binding.value.onDrop(newIndex);
          });
        }
      });
    }
  };
  