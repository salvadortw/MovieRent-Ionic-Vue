// services/AuthServices.ts
import PocketBase from "pocketbase";
import { User } from "@/interfaces/User"; // Asegúrate de que la ruta sea correcta

const pb = new PocketBase("http://127.0.0.1:8090");

export default {
  // Función para registrar un nuevo usuario
  async registerUser(
    username: string,
    email: string,
    name: string,
    password: string,
    passwordConfirm: string
  ): Promise<User> {
    try {
      const record = await pb.collection("users").create({
        username,
        email,
        name,
        password, // Solo se envía la contraseña
        passwordConfirm, // Asegúrate de incluir la confirmación de contraseña
      });

      // Solo devuelve los campos que deseas en la interfaz User
      const user: User = {
        username: record.username,
        email: record.email,
        name: record.name,
      };

      return user; // Devolver el usuario creado
    } catch (error: any) {
      // Manejo de errores
      throw new Error(error.message || "Error al registrar el usuario");
    }
  },

  // Función para iniciar sesión
  async loginUser(email: string, password: string): Promise<User> {
    try {
      const authData = await pb
        .collection("users")
        .authWithPassword(email, password);

      // Solo devuelve los campos que deseas en la interfaz User
      const user: User = {
        username: authData.record.username,
        email: authData.record.email,
        name: authData.record.name,
      };

      return user; // Devolver los datos del usuario autenticado
    } catch (error: any) {
      // Manejo de errores
      throw new Error(error.message || "Error al iniciar sesión");
    }
  },

  // Función para obtener el usuario actual
  getCurrentUser(): User | null {
    const user = pb.authStore.model;
    return user
      ? {
          username: user.username,
          email: user.email,
          name: user.name,
        }
      : null;
  },

  // Función para cerrar sesión
  async logoutUser(): Promise<void> {
    try {
      await pb.authStore.clear(); // Limpiar la sesión
    } catch (error: any) {
      throw new Error(error.message || "Error al cerrar sesión");
    }
  },
};
