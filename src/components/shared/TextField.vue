<template>
  <v-col cols="12" :sm="sm" :md="md">
    <v-text-field
      v-model="text"
      :autofocus="autofocus"
      counter
      :maxlength="maxlength"
      :hint="maxlength + ' caracteres maximo'"
      :rules="[rules.requerido(req, text)]"
      :label="label"
      :prefix="prefix"
      :disabled="disabled"
      :texto="texto"
    ></v-text-field>
  </v-col>
</template>

<script>
// eslint-disable-next-line
  /* eslint-disable */
  /* eslint-disable no-new */
  export default {
    data() {
      return {
        text: "",
        rules: {
          requerido(req, text) {
            if (req) {
              return !!text || "Campo requerido.";
            }
            return true;
          },
        },
      };
    },
    computed: {
      texto: {
        get: function () {
          this.text = this.model;
        },
      },
    },
    watch: {
      text() {
        this.$emit("text", this.text);
      },
      model() {
        this.text = this.model;
      },
    },
    props: {
      label: {
        type: String,
        required: true,
      },
      disabled: {
        type: Boolean,
        default: false,
      },
      model: {
        type: String,
        require: true,
      },
      req: {
        type: Boolean,
        default: true,
      },
      prefix: {
        type: String,
      },
      maxlength: {
        type: Number,
        require: true,
      },
      sm: {
        type: Number,
        default: 6,
      },
      md: {
        type: Number,
        default: 3,
      },
      autofocus: {
        type: Boolean,
        default: false,
      },
    },
  };
  </script>

  <style></style>