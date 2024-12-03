import { ref } from "vue";
import { Movie } from "@/interfaces/Movie";
import { useToast } from "vue-toastification";

const cart = ref<Movie[]>([]);

const toast = useToast();

export function useCart() {
  const addToCart = (movie: Movie) => {
    if (!cart.value.some((item) => item.id === movie.id)) {
      cart.value.push(movie);
        toast.success("Película agregada al carrito");
      localStorage.setItem("cart", JSON.stringify(cart.value));
    } else {
      toast.info("La película ya está en el carrito");
    }
  };

  const removeFromCart = (movieId: number) => {
    cart.value = cart.value.filter((item) => item.id !== movieId);
    toast.error("Película eliminada del carrito");
    localStorage.setItem("cart", JSON.stringify(cart.value));
  };

  const loadCart = () => {
    const storedCart = localStorage.getItem("cart");
    if (storedCart) {
      cart.value = JSON.parse(storedCart);
    }
  };

  return {
    cart,
    addToCart,
    removeFromCart,
    loadCart,
  };
}
