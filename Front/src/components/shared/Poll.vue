<template>
    <v-layout class="form" column justify-space-around>
        <v-flex class="elevation-3" xs10 offset-xs1>
            <v-layout column v-for="item in questions" v-bind:key="item.id">
            <v-layout class="card elevation-0">
                <question :question="item" ></question>
            </v-layout>
            <v-divider></v-divider>
            </v-layout>
        </v-flex>
        <v-layout style="margin-top: 30px;" row>
        <v-spacer></v-spacer>
        <v-btn primary>Enviar</v-btn> 
        <v-spacer></v-spacer>
        </v-layout>
    </v-layout>
</template>

<style lang="scss" scoped>
.form{
    margin: 16px;

    .card{
      margin: 1px;
      padding: 16px 32px;
    }
  }
</style>

<script>
  import Question from '@/components/shared/Question.vue'

  export default {
    components:{
        'question': Question
    },
    created(){
    
    },
    data: () => ({
        questions: [
            {
                id: 1,
                type: 'RADIO',
                title: 'Uma pergunta muito interessante aqui.',
                options:[
                    {
                        label: 'Opção 1',
                        value: '1'
                    },{
                        label: 'Opção 2',
                        value: '2'
                    },{
                        label: 'Opção 3',
                        value: '3'
                    }
                ]
            },
            {
                id: 2,
                type: 'CHECKBOX',
                title: 'Uma pergunta muito interessante aqui.',
                options:[
                    {
                        label: 'Opção 1',
                        value: '1'
                    },{
                        label: 'Opção 2',
                        value: '2'
                    },{
                        label: 'Opção 3',
                        value: '3'
                    }
                ]
            }
        ]
      
    }),
    methods: {
      
    }
  }
</script>