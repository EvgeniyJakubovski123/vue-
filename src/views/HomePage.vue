<template>
  <div class="quotes-page">
    <h1>Список цитат</h1>

    <div v-if="loading">Завантаження...</div>
    <div v-if="error" class="error">{{ error }}</div>

    <ul v-if="quotes.length">
      <li v-for="q in quotes" :key="q.id" class="quote">
        <p>"{{ q.body }}"</p>
        <p><strong>— {{ q.author }}</strong></p>
      </li>
    </ul>
  </div>
</template>

<script setup>
import { onMounted } from "vue";
import { useQuotes } from "../composables/Quotes.js";

const {
  quotes,
  loading,
  error,
  page,
  getQuotes,
  nextPage,
  prevPage
} = useQuotes();

onMounted(() => {
  getQuotes(1); // загружает первую страницу
});
</script>

<style scoped>
.quotes-page {
  padding: 20px;
}

.quote {
  margin-bottom: 15px;
  padding-left: 10px;
  border-left: 3px solid gray;
}

.pagination {
  margin-top: 20px;
  display: flex;
  gap: 15px;
  align-items: center;
}
</style>
