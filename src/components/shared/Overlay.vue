<template>
    <v-container>
      <v-overlay :value="status" opacity="0.65">
        <v-progress-circular
          color="primary"
          indeterminate
          :size="64"
          :width="10"
        ></v-progress-circular>
      </v-overlay>
    </v-container>
  </template>

<script>
export default {
  data () {
    return {
      status: false
    }
  }
}
</script>
