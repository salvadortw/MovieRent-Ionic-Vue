const API_TOKEN_KEY = "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzMTU5NzkwMGI0MWY5NDJiMmY1MjQwNzlhYzA2MGYwMSIsIm5iZiI6MTcyOTM2MTcwNy43Njg0NzUsInN1YiI6IjY3MTNmNjU4MGNiNjI1MmY5OTA4NzA1OCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.d8v9UlQlD3OWPGUAf_ftwJvCV1l0dKxjk_fE3_bmRFg";

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
    return data;
  } catch (err) {
    console.error(err);
    throw err;
  }
};
