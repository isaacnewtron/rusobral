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
                    v-model="user.name"
                    required
                  ></v-text-field>
                  <v-text-field
                    label= "Matricula"
                    v-model="user.username"
                    required
                  ></v-text-field>
                  <v-text-field
                    label= "Email"
                    v-model="user.email"
                    :rules="[rules.email]"
                    required
                  ></v-text-field>
                  <v-text-field
                    label="Digite sua senha"
                    v-model="user.password"
                    :append-icon="e1 ? 'visibility' : 'visibility_off'"
                    :append-icon-cb="() => (e1 = !e1)"
                    :type="e1 ? 'password' : 'text'"
                    required
                    ></v-text-field>
                </v-layout>
              </v-container>
              <v-layout row>
                <v-spacer></v-spacer>
                <v-btn class="primary" @click="cadastrar()">Cadastrar</v-btn>
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

  import UserService from '@/domain/User/UserService'

  export default {
    created(){
      this.service = new UserService(this.$resource);
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
      user: {
        password: '',
        name: '',
        email: '',
        username: '',
        actived: true,
        displayName: name,
        role: 'ADMINISTRATOR'
      }
    }),
    methods: {
      cadastrar(){
        this.service.save(this.user).then(response => {
          if (response.status == 200) {
            console.log(response)
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