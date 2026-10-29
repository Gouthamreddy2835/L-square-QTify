import axios from 'axios';

export const backendEndpoint = "https://qtify-backend.labs.crio.do";

export const fetchTopAlbums = async () => {
  try {
    const response = await axios.get(`${backendEndpoint}/albums/top`);
    return response.data;
  }catch (error) {
    console.error("Error fetching top albums:", error);
    return [];
  }
};

export const fetchNewAlbums = async () => {
    try {
        const response = await axios.get(`${backendEndpoint}/albums/new`);
        return response.data;
    } catch (error) {
        console.error("Error fetching new albums:", error);
        return [];
    }
};

export const fetchSongs = async () => {
    try {
        const response = await axios.get(`${backendEndpoint}/songs`);
        return response.data;
    } catch (error) {
        console.error("Error fetching songs:", error);
        return [];
    }
};

export const fetchGenres = async () => {
    try {
        const response = await axios.get(`${backendEndpoint}/genres`);
        return response.data;
    } catch (error) {
        console.error("Error fetching genres:", error);
        return [];
    }
};

export const fetchFAQs = async () => {
  try {
    const res = await axios.get(`${backendEndpoint}/faq`);
    return res.data;
  } catch (err) {
    console.error("Error fetching FAQs:", err);
    return { data: [] };
  }
};