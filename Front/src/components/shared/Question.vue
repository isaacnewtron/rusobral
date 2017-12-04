<template>
  <v-container class="questions" fluid>
    <v-layout row>
      <span class="title">{{question.title}}</span>
    </v-layout>
    <v-layout class="answer" v-show="question.type === 'CHECKBOX' && open">
      <v-container fluid>
        <v-layout row wrap>
          <v-flex xs4 v-for="option in question.options" v-bind:key="option.id">
            <v-checkbox class="answer" v-bind:label="option.label" v-bind:value="option.value" v-model="answer.selectedOptionValues"></v-checkbox>
          </v-flex>
        </v-layout>
      </v-container>
    </v-layout>
    <v-layout class="answer" v-show="question.type === 'RADIO' && open">
      <v-container fluid>
        <v-radio-group v-model="answer.selectedOptionValue" :mandatory="false">
          <v-layout row wrap>
              <v-flex xs4 v-for="option in question.options" v-bind:key="option.id">
                <v-radio class="answer" :label="option.label" :value="option.value"></v-radio>
              </v-flex>
          </v-layout>
        </v-radio-group>
      </v-container>
    </v-layout>
    </v-container>
</template>

<style lang="scss" scoped>
  .questions{

    .answer{
        margin-top: 10px;
        margin-bottom: -20px;
    }
  }
</style>

<script>

  export default {
    props: {
      question: {
        type: Object,
        default: function () {
          return { message: 'hello' }
        }
      }
    },
    created(){
    
    },
    data: () => ({
      modal: false,
      open: true,
      answer: {
        selectedOptionValue: '',
        selectedOptionValues: [],
      }
    }),
    methods: {
      
    }
  }
</script>