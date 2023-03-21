<template>
  <templateView>
    <template v-slot:slotPageComponet>

      <div class="pricing-header p-3 pb-md-4 mx-auto text-center">
        <h1 class="display-4 fw-normal">Home Page</h1>
        <p class="fs-5 text-muted">Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci
          velit..."
          "There is no one who loves pain itself, who seeks after it and wants to have it, simply because it is pain..."
        </p>
      </div>

      <main>
        <div class="row row-cols-1 row-cols-md-3 mb-3 text-center">
        </div>

        <h2 class="display-6 text-center mb-4">What is Lorem Ipsum?</h2>
        <p><strong>Lorem Ipsum</strong> is simply dummy text of the printing and typesetting industry. Lorem Ipsum has
          been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into
          electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of
          Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus
          PageMaker including versions of Lorem Ipsum.</p>

      </main>


    </template>
  </templateView>
</template>

<script>
// @ is an alias to /src
import templateView from '@/views/Template.vue';

export default {
  name: 'homeView',
  components: {
    templateView,
  }
}
</script>
