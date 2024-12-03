import { ref } from "vue";
import { Purchase } from "@/interfaces/Purchase";
import { useToast } from "vue-toastification";

const isPurchaseModalOpen = ref(false);
const selectedMovie = ref<any | null>(null);
const rentalHours = ref<string | number>(""); 
const price = ref<number>(0);
const purchases = ref<Purchase[]>([]);

const toast = useToast();

export function usePurchase() {
  const openPurchaseModal = (movie: any, type: "buy" | "rent", hours: number | string, priceValue: number) => {
    selectedMovie.value = movie;
    rentalHours.value = hours;
    price.value = priceValue;
    isPurchaseModalOpen.value = true;
  };

  const closeModal = () => {
    isPurchaseModalOpen.value = false;
    selectedMovie.value = null;
    rentalHours.value = "";
    price.value = 0;
  };

  const confirmPurchase = () => {
    const purchase: Purchase = {
      movieId: selectedMovie.value.id,
      movieTitle: selectedMovie.value.title,
      type: rentalHours.value === "always" ? "buy" : "rent", 
      hours: rentalHours.value,
      price: price.value,
    };
    addPurchase(purchase);
    closeModal();
  };

  const addPurchase = (purchase: Purchase) => {
    purchases.value.push(purchase);
    toast.success("Compra realizada con éxito");
    savePurchasesToLocalStorage();
  };

  const getPurchases = () => {
    loadPurchasesFromLocalStorage();
    return purchases.value;
  };

  const savePurchasesToLocalStorage = () => {
    localStorage.setItem("purchases", JSON.stringify(purchases.value));
  };

  const loadPurchasesFromLocalStorage = () => {
    const savedPurchases = localStorage.getItem("purchases");
    if (savedPurchases) {
      purchases.value = JSON.parse(savedPurchases);
    }
  };

  return {
    isPurchaseModalOpen,
    selectedMovie,
    rentalHours,
    price,
    openPurchaseModal,
    closeModal,
    confirmPurchase,
    addPurchase,
    getPurchases,
  };
}
