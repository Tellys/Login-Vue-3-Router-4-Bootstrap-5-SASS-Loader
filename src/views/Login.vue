<template>
  <templateView>
    <template v-slot:slotPageComponet>
      <div class="text-center">
      <h1>Pagina Login</h1>
      <p>Entre com seu usuário e senha</p>
    </div>
      <LoginComponent />
    </template>
  </templateView>
</template>

<script>
// @ is an alias to /src
import LoginComponent from '@/components/LoginComponent.vue';
import templateView from '@/views/Template.vue';


export default {
  name: 'LoginView',
  components: {
    LoginComponent,
    templateView
  }
}

</script>

<style lang="scss" scoped>
  @import "@/assets/scss/style";
  .divider:after,
  .divider:before {
  content: "";
    flex: 1;
    height: 1px;
    background: #eee;
  }
</style>