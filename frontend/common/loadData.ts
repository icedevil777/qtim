import { ref } from 'vue';
import axios from 'axios';

export const getPosts = () => {
  const posts = ref([]);
  const loading = ref(false);
  const error = ref<string | null>(null);

  const fetchPosts = async () => {
    loading.value = true;
    error.value = null;

    try {
      const response = await axios.get('https://6082e3545dbd2c001757abf5.mockapi.io/qtim-test-work/posts/');
      posts.value = response.data;
    } catch (err) {
      error.value = err instanceof Error ? err.message : 'error';
    } finally {
      loading.value = false;
    }
  };

  return {
    posts,
    loading,
    error,
    fetchPosts,
  };
};
