<template>
    <section class="vh-100">
        <div class="container py-5">
            <div class="row d-flex align-items-center justify-content-center h-100">
                <div class="col-md-7 col-lg-5 col-xl-5 offset-xl-1">
                    <form @submit.prevent="login">
                        <!-- Email input -->
                        <div class="form-outline mb-4">
                            <input type="email" id="formLoginLabelEmail" class="form-control form-control-lg"
                                v-model="register.email" required autofocus />
                            <label class="form-label" for="formLoginLabelEmail">Email</label>
                        </div>

                        <!-- Password input -->
                        <div class="form-outline mb-4">
                            <input type="password" id="formLoginLabelSenha" class="form-control form-control-lg"
                                v-model="register.password" required />
                            <label class="form-label" for="formLoginLabelSenha">Senha</label>
                        </div>

                        <div class="d-flex justify-content-around align-items-center mb-4">
                            <!-- Checkbox -->
                            <div class="form-check">
                                <input class="form-check-input" type="checkbox" value="" id="formLoginLabelRemember"
                                    checked />
                                <label class="form-check-label" for="formLoginLabelRemember"> Deixar Logado </label>
                            </div>
                            <router-link to="/esqueci-minha-senha">Esqueceu a senha?</router-link>
                            <router-link to="/user/register">Quero me cadastrar</router-link>
                        </div>

                        <!-- Submit button -->
                        <button type="submit" class="col-12 btn btn-primary btn-lg btn-block">Entrar</button>
                    </form>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
import Swal from 'sweetalert2';

export default {
    name: 'LoginComponent',
    components: {
    },
    data() {
        return {
            register: {
                email: "",
                password: "",
            },
            error: "",
            data: [],
        }
    },
    methods: {
        login() {

            if (this.register.email == 'admin@gmail.com' && this.register.password == 'admin') {
                this.$root.$emit("login", true);
                localStorage.setItem("authOnly", true);
                localStorage.setItem('token', '123456789');

                Swal.fire({
                    title: 'Sucesso',
                    text: 'User Logged Success',
                    icon: 'success',
                }).then
                { this.$router.push({ path: '/' }); }

            } else {

                Swal.fire({
                    title: 'OPPS',
                    text: 'User = admin@gmail.com e Password = admin',
                    icon: 'warning',
                });
            }
        },
    },
}
</script>
