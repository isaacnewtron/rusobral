<template>
    <v-container fluid>
        <v-layout class="form" column justify-space-around>
            <v-flex class="elevation-3 card" xs6 offset-xs3>
                <span class="title"> Fale com os Desenvolvedores </span>
                <v-container fluid>
                <v-layout column>
                    <v-text-field
                    label="Email"
                    v-model="email"
                    ></v-text-field>
                    <v-text-field
                    label="Sugestão"
                    v-model="message"
                    :rows="1"
                    multi-line
                    auto-grow
                    ></v-text-field>
                </v-layout>
                </v-container>
                <v-layout row>
                <v-spacer></v-spacer>
                <v-btn class="primary">Enviar</v-btn>
                </v-layout>
            </v-flex>
        </v-layout>
        <v-layout class="form2" column justify-space-around>
            <v-flex class="elevation-3 card" xs6 offset-xs3>
                <v-layout column>
                    <span class="title" style="margin-bottom: 15px;"> Telefones Úteis </span>
                    <span class="subhead"><b>Empresa:</b> (XX) XXXX XXXX</span>
                    <span class="subhead"><b>Nutricionista:</b> (XX) XXXX XXXX</span>
                </v-layout>
            </v-flex>
        </v-layout>
    </v-container>
</template>

<style lang="scss">
  .form{
    margin: 16px;
    padding: 50px 0px;

    .card{
      padding: 16px 32px;
    }
  }
  .form2{
    margin: 16px;
    margin-top: -20px;
    .card{
      padding: 16px 32px;
    }
  }
</style>

<script>
export default {
  data:() => ({
      email: '',
      message: ''
    
  }),
  created(){
    
  },
  methods:{
    
  }
}
</script>
