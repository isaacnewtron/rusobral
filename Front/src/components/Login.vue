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
                <v-btn class="secondary" href='#/cadastrar'>Cadastrar</v-btn>
                <v-btn class="primary" href='#/dashboard'>Entrar</v-btn>
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

  export default {
    created(){
    },
    data:() => ({
      e1: true,
      title: 'Pesquisa Restaurante Universitário',
      password: '',
      username: ''
    }),
    methods: {
      entrar() {
        if(username === 'admin' && password === 'admin'){

        }
      }
    }
  }
</script>