import { Purchase } from "@/interfaces/Purchase";
import { ref } from "vue";

const purchases = ref<Purchase[]>([]);

export const addMovieToPurchase = () => {
  const addPurchase = (purchaseData: {
    movieId: number;
    movieTitle: string;
    type: "buy" | "rent";
    hours: number | string;
    price: number;
  }) => {
    let history = JSON.parse(localStorage.getItem("rentalHistory") || "[]");

    const newEntry = {
      movieId: purchaseData.movieId,
      movieTitle: purchaseData.movieTitle,
      type: purchaseData.type,
      hours: purchaseData.hours,
      price: purchaseData.price,
    };

    history.push(newEntry);

    localStorage.setItem("rentalHistory", JSON.stringify(history));

    purchases.value = history;

    console.log("Actualizar localStorage:", newEntry);
  };

  const getPurchases = () => {
    return purchases.value;
  };

  return {
    addPurchase,
    getPurchases,
  };
};
