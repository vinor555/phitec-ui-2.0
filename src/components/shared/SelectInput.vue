<template>
  <v-col cols="12" :sm="sm" :md="md">
    <v-autocomplete
      v-model="cargarValue"
      :label="label"
      :hint="hint"
      :rules="[rules.requerido(req, selected)]"
      :items="items"
      persistent-hint
      clearable
      return-object
      dense
      :prepend-icon="icon"
    ></v-autocomplete>
  </v-col>
</template>

<script>
// eslint-disable-next-line
/* eslint-disable */
/* eslint-disable no-new */
import { pruebaAPI, pruebaQuemada } from "@/services/catalogService";

export default {
  props: {
    label: {
      type: String,
      required: true,
    },
    valor: {
      type: Number,
    },
    req: {
      type: Boolean,
      default: true,
    },
    hint: {
      type: String,
    },
    scope: {
      type: String,
      required: true,
    },
    icon: {
      type: String,
      default: "",
    },
    sm: {
      type: Number,
      default: 6,
    },
    md: {
      type: Number,
      default: 3,
    },
  },
  data() {
    return {
      selected: null,
      rules: {
        requerido(req, text) {
          if (req) {
            return !!text || "Campo requerido.";
          }
          return true;
        },
      },
      items: [],
      //retorna una funcion
      hashTypes: {
        tipo: pruebaQuemada,
        tipo2: pruebaAPI,
      },
    };
  },
  async created() {
    try {
      // Traigo la funcion
      const funcion = this.hashTypes[this.scope];
      // Ejecuta la funcion
      const response = await funcion();
      // Verifico resultado
      let arreglo = [];
      if (response) {
        // Mapeo el resultado solo para este EJEMPLO
        arreglo = response.map((item, index) => {
          if (item.text) {
            return {
              text: item.text,
              value: item.value,
            };
          }
          return {
            text: item,
            value: index,
          };
        });
      }
      this.items = arreglo;
    } catch (error) {
      this.items = [];
      console.log(error);
      if (error.response && error.response.status == 401) {
        this.$router.push("/auth");
        this.$store.dispatch("auth/logout");
        return;
      }
      if (error.response) {
        this.$notifier.error({
          title: "Error",
          message: error.response.data.error,
          duration: 5000,
        });
      } else {
        this.$notifier.error({
          title: "Danger",
          message: error.message,
          duration: 3000,
        });
      }
    }
  },
  computed: {
    cargarValue: {
      get: function () {
        let buscado = this.items.find((x) => x.value == this.valor);
        this.selected = buscado != undefined ? buscado : null;
        return this.selected;
      },
      set: function (newValue) {
        this.selected = newValue != undefined ? newValue : null;
      },
    },
  },
  watch: {
    selected() {
      if (this.selected) {
        this.$emit("selected", this.selected.value);
      } else {
        this.$emit("selected", null);
      }
    },
  },
};
</script>