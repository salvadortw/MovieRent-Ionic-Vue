const API_TOKEN_KEY = import.meta.env.VITE_TMDB_API_KEY;

// Obtener las películas
export const getMovies = async () => {
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization: `Bearer ${API_TOKEN_KEY}`,
    },
  };

  try {
    const response = await fetch(
      "https://api.themoviedb.org/3/movie/popular?language=es-MX&page=1",
      options
    );
    if (!response.ok) {
      throw new Error("Error en la solicitud: " + response.statusText);
    }
    const data = await response.json();
    console.log(data);
    return data;
  } catch (err) {
    console.error(err);
    throw err;
  }
};

// Obtener recomendaciones de películas (infantiles)
export const getFamilyMovies = async () => {
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization: `Bearer ${API_TOKEN_KEY}`,
    },
  };

  try {
    const response = await fetch(
      "https://api.themoviedb.org/3/movie/12/recommendations?language=es-MX&page=1",
      options
    );
    if (!response.ok) {
      throw new Error("Error en la solicitud: " + response.statusText);
    }
    const data = await response.json();
    return data;
  } catch (err) {
    console.error(err);
    throw err;
  }
};

// Obtener recomendaciones de películas (Crimen)
export const getCrimeMovies = async () => {
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization: `Bearer ${API_TOKEN_KEY}`,
    },
  };

  try {
    const response = await fetch(
      "https://api.themoviedb.org/3/movie/184/recommendations?language=es-MX&page=1",
      options
    );
    if (!response.ok) {
      throw new Error("Error en la solicitud: " + response.statusText);
    }
    const data = await response.json();
    return data;
  } catch (err) {
    console.error(err);
    throw err;
  }
};

// Obtener recomendaciones de películas (Thriller)
export const getThrillerMovies = async () => {
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization: `Bearer ${API_TOKEN_KEY}`,
    },
  };

  try {
    const response = await fetch(
      "https://api.themoviedb.org/3/movie/419430/recommendations?language=es-MX&page=1",
      options
    );
    if (!response.ok) {
      throw new Error("Error en la solicitud: " + response.statusText);
    }
    const data = await response.json();
    return data;
  } catch (err) {
    console.error(err);
    throw err;
  }
};

// Obtener detallles de las películas
export const getDetailMovie = async (movieId: number) => {
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization: `Bearer ${API_TOKEN_KEY}`,
    },
  };

  try {
    const response = await fetch(
      `https://api.themoviedb.org/3/movie/${movieId}?language=es-MX`,
      options
    );

    if (!response.ok) {
      throw new Error("Error en la solicitud: " + response.statusText);
    }
    const data = await response.json();
    return data;
  } catch (err) {
    console.error(err);
    throw err;
  }
};

// Obtener el reparto de las películas
export const getCast = async (movieId: number) => {
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization: `Bearer ${API_TOKEN_KEY}`,
    },
  };

  try {
    const response = await fetch(
      `https://api.themoviedb.org/3/movie/${movieId}/credits?language=es-MX`,
      options
    );

    if (!response.ok) {
      throw new Error("Error en la solicitud: " + response.statusText);
    }
    const data = await response.json();
    return data.cast.slice(0, 10);
  } catch (err) {
    console.error(err);
    throw err;
  }
};

// Obtener todo reparto de las películas
export const getFullCast = async (movieId: number) => {
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization: `Bearer ${API_TOKEN_KEY}`,
    },
  };

  try {
    const response = await fetch(
      `https://api.themoviedb.org/3/movie/${movieId}/credits?language=es-MX`,
      options
    );

    if (!response.ok) {
      throw new Error("Error en la solicitud: " + response.statusText);
    }
    const data = await response.json();
    return data.cast;
  } catch (err) {
    console.error(err);
    throw err;
  }
};

// Obtener las películas mejor valoradas
export const getTopRated = async () => {
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization: `Bearer ${API_TOKEN_KEY}`,
    },
  };

  try {
    const response = await fetch(
      "https://api.themoviedb.org/3/movie/top_rated?language=es-MX&page=1",
      options
    );

    if (!response.ok) {
      throw new Error("Error en la solicitud: " + response.statusText);
    }
    const data = await response.json();
    return data;
  } catch (err) {
    console.error(err);
    throw err;
  }
};

// Obtener los géneros
export const getGenres = async () => {
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization: `Bearer ${API_TOKEN_KEY}`,
    },
  };

  try {
    const response = await fetch(
      "https://api.themoviedb.org/3/genre/movie/list?language=es",
      options
    );

    if (!response.ok) {
      throw new Error("Error en la solicitud: " + response.statusText);
    }
    const data = await response.json();
    console.log(data);
    
    return data;
  } catch (err) {
    console.error(err);
    throw err;
  }
};

// Buscar películas
export const searchMovies = async (query: string) => {
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization: `Bearer ${API_TOKEN_KEY}`,
    },
  };
  try {
    const response = await fetch(
      `https://api.themoviedb.org/3/search/movie?query=${query}&language=es-MX&page=1`,
      options
    );
    if (!response.ok) {
      throw new Error("Error en la solicitud: " + response.statusText);
    }
    const data = await response.json();
    return data;
  } catch (err) {
    console.error(err);
    throw err;
  } 
}; 