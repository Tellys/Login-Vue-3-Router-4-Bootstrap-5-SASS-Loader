<template>
  <header>
    <MenuNavTop/>
    <div class="col-12 p-4"><button @click="$router.back()" class="btn btn-light btn-sm float-end">&lt; Voltar</button></div>
  </header>
  <router-view/>
</template>

<script>
  import MenuNavTop from '@/views/MenuNavTop.vue';

  export default {
    name: 'TemplateTop',
    components: {
      MenuNavTop
    }
  }
  </script>
  