import { ref } from "vue";

const API_URL = "https://favqs.com/api";
const API_KEY = import.meta.env.VITE_FAVQS_API_KEY;

export function useQuotes() {
    const quotes = ref([]);
    const loading = ref(false);
    const error = ref(null);
    const randomQuote = ref(null);
    const page = ref(1);

    const getQuotes = async (pageNumber = 1) => {
        loading.value = true;
        error.value = null;

        try {
            const response = await fetch(`/api/api/quotes?page=${pageNumber}`, {
                headers: {
                    Authorization: `Token token=${API_KEY}`
                }
            });

            const data = await response.json();
            console.log("data", data);

            if (data.quotes) {
                quotes.value = data.quotes;
                page.value = data.page || pageNumber;
            } else {
                quotes.value = [];
                error.value = "Неможливо завантажити цитати";
            }

        } catch (e) {
            error.value = "Помилка при завантаженні";
            quotes.value = [];
        } finally {
            loading.value = false;
        }
    };


    const getRandomQuote = async () => {
        loading.value = true;
        error.value = null;

        try {
            const response = await fetch(`/api/api/qotd`);
            const data = await response.json();

            randomQuote.value = data.quote || null;

        } catch (e) {
            error.value = "Не вдалося отримати випадкову цитату";
            randomQuote.value = null;
        } finally {
            loading.value = false;
        }
    };


    return {
        quotes,
        loading,
        error,
        page,
        randomQuote,
        getQuotes,
        getRandomQuote
    };
}
