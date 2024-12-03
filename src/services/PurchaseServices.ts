import { ref } from "vue";
import { Purchase } from "@/interfaces/Purchase";

const purchases = ref<Purchase[]>([]);

export function usePurchase() {
  // Metodo para agregar una compra o alquiler
  const addPurchase = (purchase: Purchase) => {
    purchases.value.push(purchase);
    savePurchasesToLocalStorage();
  };

  // Metodo para obtener las compras almacenadas
  const getPurchases = () => {
    loadPurchasesFromLocalStorage();
    return purchases.value;
  };

  // Guardar las compras en localStorage
  const savePurchasesToLocalStorage = () => {
    localStorage.setItem("purchases", JSON.stringify(purchases.value));
  };

  // Cargar las compras desde localStorage
  const loadPurchasesFromLocalStorage = () => {
    const savedPurchases = localStorage.getItem("purchases");
    if (savedPurchases) {
      purchases.value = JSON.parse(savedPurchases);
    }
  };

  return { addPurchase, getPurchases };
}
