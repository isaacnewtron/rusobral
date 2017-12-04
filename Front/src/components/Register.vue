<template>
  <v-app >
    <v-toolbar dark class="primary" app>
      <v-btn flat icon href="#/login">
        <v-icon>arrow_back</v-icon>
      </v-btn>
      <v-toolbar-title class="white--text">{{title}}</v-toolbar-title>
      <v-spacer></v-spacer>
    </v-toolbar>
    <main>
      <v-content>
        <v-container fluid>
          <v-layout class="login-form" column justify-space-around>
            <v-flex class="elevation-3 card" xs6 offset-xs3>
              <span class="title"> Cadastro </span>
              <v-container fluid>
                <v-layout column>
                  <v-text-field
                    label= "Nome"
                    v-model="nome"
                    required
                  ></v-text-field>
                  <v-text-field
                    label= "Matricula"
                    v-model="matricula"
                    required
                  ></v-text-field>
                  <v-text-field
                    label= "Email"
                    v-model="email"
                    :rules="[rules.email]"
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
                <v-btn class="primary" href='#/dashboard'>Cadastrar</v-btn>
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
      rules:{
        email: (value) => {
          if(value !== ''){
            const pattern = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
            return  pattern.test(value) || 'Email inválido'
          }
          return true
        }
      },
      title: 'Pesquisa Restaurante Universitário',
      password: '',
      nome: '',
      email: '',
      matricula: ''
    }),
    methods: {
      cadastrar(){
        
      }
    }
  }
</script>