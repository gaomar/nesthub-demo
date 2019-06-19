<template>
  <v-container>
    <v-layout
      text-xs-center
      wrap
    >
      <v-flex mb-4>
        <h1 class="display-2 font-weight-bold mb-3">
          こんにちはNest Hub！
        </h1>
        <v-btn large color="success" @click="bmiStart">BMI測定開始</v-btn>
      </v-flex>

      <v-flex
        xs12
        mb-5
      >
        {{status}}
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  data () {
    return {
      status: ''
    }
  },
  created () {
    console.log('vue created!')
    var me = this
    const callbacks = {
      onUpdate(state) {
        console.log('this=', this)
        console.log('onUpdate', JSON.stringify(state));
        if ('bmi' in state) {
          me.status = state.bmi
        }
        if ('spin' in state) {
          console.log(state.spin)
          me.status = state.spin
        }
      },
    }
    assistantCanvas.ready(callbacks)
  },
  methods: {
    bmiStart () {
      alert('bmi測定開始')
      assistantCanvas.sendTextQuery('bmi');
    }
  }
}
</script>