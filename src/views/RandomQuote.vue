<template>
  <div class="random-page">
    <h1>Випадкова цитата</h1>

    <div v-if="loading">Завантаження...</div>
    <div v-if="error" class="error">{{ error }}</div>

    <div v-if="randomQuote" class="quote-box">
      <p>"{{ randomQuote.body }}"</p>
      <p><strong>— {{ randomQuote.author }}</strong></p>
    </div>

    <button @click="loadRandom">Random quote</button>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { useQuotes } from "../composables/Quotes";

const { loading, error, randomQuote, getRandomQuote } = useQuotes();

const loadRandom = async () => {
  await getRandomQuote();
};

loadRandom();
</script>

<style scoped>
.random-page {
  padding: 20px;
}

.quote-box {
  margin: 20px 0;
  padding-left: 10px;
  border-left: 3px solid gray;
}

button {
  padding: 10px 20px;
}
</style>
