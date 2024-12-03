import { ref } from "vue";
import { Movie } from "@/interfaces/Movie";
import { useToast } from "vue-toastification";

const favorites = ref<Movie[]>([]);

const toast = useToast();

export function useFavorites() {
  const addFavorite = (movie: Movie) => {
    if (!favorites.value.some((fav) => fav.id === movie.id)) {
      favorites.value.push(movie);
      toast.success("Película agregada a Favoritos");
      localStorage.setItem("favorites", JSON.stringify(favorites.value));
    } else {
      toast.info("La película ya está en Favoritos");
    }
  };

  const removeFavorite = (movieId: number) => {
    favorites.value = favorites.value.filter((fav) => fav.id !== movieId);
    toast.error("Película eliminada de Favoritos");
    localStorage.setItem("favorites", JSON.stringify(favorites.value));
  };

  const loadFavorites = () => {
    const storedFavorites = localStorage.getItem("favorites");
    if (storedFavorites) {
      favorites.value = JSON.parse(storedFavorites);
    }
  };

  return {
    favorites,
    addFavorite,
    removeFavorite,
    loadFavorites,
  };
}
