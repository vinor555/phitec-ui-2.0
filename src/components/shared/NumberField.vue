<template>
    <v-col cols="12" :sm="sm" :md="md">
      <v-text-field
        v-model="text"
        :autofocus="autofocus"
        :rules="[
          rules.requerido(req, text),
          rules.isNegativo(text),
          rules.maximo(maxlength, text),
        ]"
        :label="label"
        :prefix="prefix"
        :disabled="disabled"
        @change="formatNumber"
        type="number"
        :texto="texto"
      ></v-text-field>
    </v-col>
</template>

<script>
// eslint-disable-next-line
/* eslint-disable */
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
          isNegativo(text) {
            if (text) {
              return text >= 0 || "Campo no negativo.";
            }
            return true;
          },
          maximo(maxlength, value) {
            return String(value).length < maxlength || "Verifique longitud";
          },
        },
      };
    },
    methods: {
      formatNumber() {
        if (this.format) {
          this.text = Number(this.text).toFixed(2);
        }
      },
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
      maxlength: {
        type: Number,
        require: true,
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
      format: {
        type: Boolean,
        default: false,
      },
    },
  };
  </script>
