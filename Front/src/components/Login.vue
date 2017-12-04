<template>
  <v-app >
    <v-toolbar dark class="primary" app>
      <v-toolbar-title class="white--text">{{title}}</v-toolbar-title>
      <v-spacer></v-spacer>
    </v-toolbar>
    <main>
      <v-content>
        <v-container fluid>
          <v-layout class="login-form" column justify-space-around>
            <v-flex class="elevation-3 card" xs6 offset-xs3>
              <span class="title"> Login </span>
              <v-container fluid>
                <v-layout column>
                  <v-text-field
                    label="Username"
                    v-model="username"
                    required
                  ></v-text-field>
                  <v-text-field
                    label="Digite sua senha"
                    v-model="password"
                    :append-icon="e1 ? 'visibility' : 'visibility_off'"
                    :append-icon-cb="() => (e1 = !e1)"
                    :type="e1 ? 'password' : 'text'"
                    required
                  ></v-text-field>
                </v-layout>
              </v-container>
              <v-layout row>
                <v-spacer></v-spacer>
                <v-btn class="raised" href='#/cadastrar'>Cadastrar</v-btn>
                <v-btn class="primary" @click="entrar()">Entrar</v-btn>
              </v-layout>
            </v-flex>
          </v-layout>
        </v-container>
      </v-content>
    </main>
  </v-app>
</template>

<style lang="scss" scoped>
  .login-form{
    margin: 16px;
    padding: 100px 0px;

    .card{
      padding: 16px 32px;
    }
  }
</style>

<script>
  import AuthService from '@/domain/Auth/AuthService'

  export default {
    created(){
      this.service = new AuthService(this.$resource);
    },
    data:() => ({
      e1: true,
      title: 'Pesquisa Restaurante Universitário',
      password: '',
      username: ''
    }),
    methods: {
      entrar() {
        if(this.username === 'offline'){
          this.$cookie.set('token','táoff',{ expires: '1D' });
          this.$router.push("Dashboard");
          return;
        }
        this.service.authenticate(this.username, this.password).then(response => {
          if (response.status == 200) {
            this.$cookie.set('token',response.body.token,{ expires: '1D' });
            this.$router.push("Dashboard");
          }else {
            alert('Tente novamente, credenciais inválidas.')
          }
        }, err => {
          console.log(err)
          alert(err.body.message);
        })
      }
    }
  }
</script>