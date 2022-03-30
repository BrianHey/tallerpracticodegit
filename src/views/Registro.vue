<template>
  <div>
    <div class="formulario">
      <h2>Agregar Moto</h2>
      <div>
        <label>Modelo de la Moto</label>
        <input
          v-model="moto.modelo"
          placeholder="Ingrese el modelo de la moto"
        />
      </div>
      <div>
        <label>Marca de la Moto</label>
        <input v-model="moto.marca" placeholder="Ingrese la marca de la moto" />
      </div>
      <div>
        <label>Foto de la moto</label>
        <input v-model="moto.foto" placeholder="Ingrese la URL de la imagen" />
      </div>
      <div>
        <label>Color de la foto</label>
        <select v-model="moto.color">
          <option v-for="(color, i) in colores" :key="i" :value="color">
            {{ color }}
          </option>
        </select>
      </div>
      <div>
        <label>Tipo de Moto</label>
        <select v-model="moto.tipo">
          <option v-for="(tipo, i) in tiposDeMoto" :key="i" :value="tipo">
            {{ tipo }}
          </option>
        </select>
      </div>
      <div>
        <label>Precio de la moto</label>
        <input
          v-model="moto.precio"
          placeholder="Ingrese el precio de la moto"
        />
      </div>
      <div>
        <button @click="agregarMoto">Agregar Moto</button>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  data() {
    return {
      tiposDeMoto: ["Ciudad", "Deportiva", "Paseo", "Scooter"],
      colores: ["Rojo", "Verde", "Azul", "Amarillo", "Negro", "Blanco"],
      moto: {
        modelo: "",
        tipo: "",
        precio: "",
        color: "",
        marca: "",
        foto: "",
      },
    };
  },
  methods: {
    ...mapActions(["agregar_Moto"]),
    async agregarMoto() {
      const moto = { ...this.moto };
      await this.agregar_Moto(moto);
      alert("Moto agregada con éxito");
    },
  },
};
</script>

<style>
.formulario {
  width: 300px;
  margin: 0 auto;
  display: flex;
  flex-flow: column wrap;
}
.formulario input {
  width: 100%;
  height: 2rem;
}
.formulario select {
  width: 100%;
  height: 2rem;
}
.formulario div {
  margin-bottom: 1rem;
}
.formulario button {
  width: 40%;
  height: 3rem;
  font-size: 1rem;
  border-radius: 10px;
  border: none;
}
.formulario button:hover {
  background-color: rgb(122, 122, 122);
  cursor: pointer;
}
</style>