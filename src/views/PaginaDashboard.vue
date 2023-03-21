<template>
  <templateView>
    <template v-slot:slotPageComponet>
      <div class="pricing-header p-3 pb-md-4 mx-auto text-center">
        <h1 class="display-4 fw-normal">Pagina Dashboard</h1>
        <p class="fs-5 text-muted">Liste PaginaDashboard
        </p>
      </div>
    </template>
  </templateView>
</template>
  
<script>
import templateView from '@/views/Template.vue';

export default {
  name: 'PaginaDashboard',
  components: {
    templateView,
  }
}
</script>  
  
  
  