import axios from 'axios';

const apiKey = 'e926cdb4dd272fa0b0f6dba82218461b';

export const fetchMovie = async () => {
  try {
    const response = await axios.get(
      `https://api.themoviedb.org/3/trending/movie/week?api_key=${apiKey}`
    );
    return response.data;
  } catch (error) {
    console.error('Error fetching data:', error);
    throw error;
  }
};
export const fetchSearchMovie = async query => {
  const apiKey = 'e926cdb4dd272fa0b0f6dba82218461b';
  try {
    const fetchMovie = await axios.get(
      `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${query}`
    );
    return fetchMovie.data.results || [];
  } catch (error) {
    console.error('Error fetching data:', error);
  }
};
export const fetchMovieDetails = async movieId => {
  try {
    const response = await axios.get(
      `https://api.themoviedb.org/3/movie/${movieId}?api_key=${apiKey}`
    );
    return response.data;
  } catch (error) {
    console.error('Error fetching movie details:', error);
  }
};
export const fetchMovieCredits = async movieId => {
  try {
    const response = await axios.get(
      `https://api.themoviedb.org/3/movie/${movieId}/credits?api_key=${apiKey}`
    );
    return response.data.cast;
  } catch (error) {
    console.error('Error fetching movie credits:', error);
    throw error;
  }
};

export const fetchMovieReviews = async movieId => {
  try {
    const reviewsResponse = await axios.get(
      `https://api.themoviedb.org/3/movie/${movieId}/reviews?api_key=${apiKey}`
    );
    const response = reviewsResponse.data.results;

    return response;
  } catch (error) {
    console.error('Error fetching movie reviews:', error);
  }
};
