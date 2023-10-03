<template>
  <div class="header">
    <Header />
  </div>
  <div class="relative">
    <div v-if="showAlert" class="alertSucess" id="success">
      <v-alert type="success" title="Success " variant="outlined">
        Copy to clipboard !!!
      </v-alert>
    </div>
  </div>

  <div v-if="showAlertClear" class="alertSucess" id="clear">
    <v-alert type="info" title="Clear input " variant="outlined">
      Clear input , type again !!!
    </v-alert>
  </div>
  <div class="clipboard">
    <div class="input-container pa-xs-0 clear-mobile">
      <v-textarea
        id="input-desktop"
        placeholder="Hello ..."
        v-model="text"
        variant="solo"
        bg-color="#D9D9D9"
        color="black"
      ></v-textarea>
    </div>

    <div class="input-container pa-xs-0 clear-desktop">
      <v-text-field
        placeholder="Hello ..."
        v-model="text"
        variant="solo"
        bg-color="grey-lighten-2"
        color="black"
        append-inner-icon="mdi-content-copy"
        @click:append-inner="handleCopyToClipBoard"
      ></v-text-field>
    </div>
    <div class="w-100 d-flex flex-row-reverse pr-2">
      <div class="clear-mobile">
        <Button title="Copy" :handleFunction="handleCopyToClipBoard" />
      </div>
      <div class="clear-mobile">
        <Button title="Clear" :handleFunction="handleCopyClear" />
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import Header from "./src/Header.vue";
import Button from "./src/Button.vue";

const text = ref("");
const showAlert = ref(false);
const showAlertClear = ref(false);

function handleCopyToClipBoard() {
  showAlert.value = true;
  console.log(text.value);
  setTimeout(() => {
    showAlert.value = false;
  }, 1000);
  navigator.clipboard.writeText(text.value);
}

function handleCopyClear() {
  showAlertClear.value = true;
  setTimeout(() => {
    showAlertClear.value = false;
  }, 1000);
  console.log("clear");
  text.value = "";
}
</script>

<style scoped>
.clipboard {
  margin: 0 auto;
  height: 40%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #d9d9d9;
  padding-bottom: 20px;
  border-radius: 10px;
}

.custom-color {
  background-color: #d9d9d9;
}

/* Laptop */
@media screen and (min-width: 600px) {
  .header {
    margin-top: 100px;
    padding: 50px;
  }
  .clipboard {
    width: 60%;
  }

  .input-container {
    width: 100%;
  }

  .alertSucess {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    transition: 1s;
  }

  .clear-desktop {
    display: none;
  }
}

/* Mobile */
@media screen and (max-width: 600px) {
  .header {
    padding: 30px;
  }
  .clipboard {
    width: 90%;
    background-color: white;
  }

  .input-container {
    width: 100%;
  }

  .v-text-field input {
    font-weight: bold;
  }

  .clear-mobile {
    display: none;
  }

  .alertSucess {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    transition: 1s;
    z-index: 10;
  }
}
</style>
