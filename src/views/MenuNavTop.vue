<template>
  <nav class="navbar navbar-expand-sm " aria-label="Menu" style="background-color: #6f42c1;">
    <div class="container">
      <a href="http://github.com/Tellys?"><span class="btn btn-outline-info p-2">Github@tellys</span></a>

      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarsExample03"
        aria-controls="navbarsExample03" aria-expanded="true" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="navbar-collapse collapse" id="navbarsExample03" style="">
        <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <router-link class="me-3 nav-link active text-white" to="/">Home</router-link>
          </li>

          <li class="nav-item" v-if="isLoggedIn()">
            <router-link class="me-3 nav-link text-white" to="/dashboard">Dashboard</router-link>
          </li>
          <li class="nav-item dropdown" v-if="isLoggedIn()">
            <a class="nav-link dropdown-toggle text-white" href="#" data-bs-toggle="dropdown" aria-expanded="false"><img
                class="rounded-circle shadow-4-strong" alt="avatar2" height="22" loading="lazy"
                src="https://mdbcdn.b-cdn.net/img/new/avatars/1.webp" /></a>
            <ul class="dropdown-menu">
              <li><a href="!#" @click.prevent="logout()" class="dropdown-item">Sair</a></li>
            </ul>
          </li>

          <li class="nav-item" v-if="!isLoggedIn()">
            <router-link class="me-3 nav-link text-white" to="/login">Login</router-link>
          </li>
        </ul>
      </div>
    </div>
  </nav>

  <router-view />
</template>

<script>
export default {
  name: 'MenuNavTop',
  components: {
  },
  methods: {
    isLoggedIn: () => {
      return localStorage.getItem("authOnly");
    },
    logout() {
      localStorage.clear();
      this.$router.push({ path: '/logout' });
    }
  },
}
</script>