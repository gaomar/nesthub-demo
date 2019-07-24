<template>
  <v-container>
    <v-layout
      text-xs-center
      wrap
    >
      <v-flex mb-4>
        <h1 class="display-3 font-weight-bold mb-3">
          【BMI測定結果】
        </h1>
      </v-flex>

      <v-flex
        xs12
        mb-5
      >
        <h3 class="display-2 font-weight-bold mb-3">
        {{result}}
        </h3>
      </v-flex>

      <v-flex
        xs12
        mb-5
      >
        <v-btn large color="success" @click="bmiStart">もう一度やる</v-btn>
      </v-flex>

    </v-layout>
  </v-container>
</template>

<style>
</style>
<script>
export default {
  data () {
    return {
      result: ''
    }
  },
  created () {
    var me = this
    const callbacks = {
      onUpdate(state) {
        if ('bmi' in state) {
          me.result = state.bmi
        }
      },
    }
    interactiveCanvas.ready(callbacks)
  },
  methods: {
    bmiStart () {
      interactiveCanvas.sendTextQuery('bmi');
    }
  }
}
</script>