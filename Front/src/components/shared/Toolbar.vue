<template>
  <v-toolbar dark class="primary" app>
    <v-toolbar-title class="white--text">{{main}}</v-toolbar-title>
    <v-spacer></v-spacer>
    <span class="title white--text">{{titulo()}}</span> 
    <v-spacer></v-spacer>
    <v-spacer></v-spacer>
    
    <v-btn flat icon @click="sair()">
      <v-icon>exit_to_app</v-icon>
    </v-btn>
  </v-toolbar>
</template>

<script>
  export default {
    props: {
      title: {
        type: String,
        default: "full_menu"
      }
    },
    created(){
      
    },
    data: () => ({
      main: 'Pesquisa Restaurante Universitário',
    }),
    methods: {
      titulo(){
        switch (this.title) {
          case 'full_menu':
            return 'Cardápio Completo';
          case 'daily_menu':
            return 'Cardápio Diário';
          case 'poll':
            return 'Enquete';
          case 'avaliate':
            return 'Avaliar';
          case 'talk_with_us':
            return 'Fale Conosco';
          default:
            return 'Cardápio Completo';
        }
      },
      sair(){
        this.$cookie.delete('token');
        this.$router.push('Login');
      }
    }
}
</script>

<style lang="scss">
  
</style>
