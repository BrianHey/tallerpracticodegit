<template>
  <div>
    <h1>modelos de motos</h1>

    <div v-for="(moto, i) in motos" :key="i">
      <ul>
        <li>Modelo de moto: {{ moto.data.modelo }}</li>
      </ul>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";
export default {
  computed: {
    ...mapState(["motos"]),
  },
  methods: {
    ...mapActions(["get_Motos"]),
  },
  mounted() {
    this.get_Motos();
  },
};
</script>
