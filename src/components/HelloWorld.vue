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
    </v-layout>
  </v-container>
</template>

<script>
export default {
  methods: {
    bmiStart () {
      assistantCanvas.sendTextQuery('bmi');
    }
  }
}
</script>