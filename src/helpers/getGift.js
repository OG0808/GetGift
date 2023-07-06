import axios from 'axios';

export const Getgifts = async (category) => {

  try {
    const response = await axios.get(`https://api.giphy.com/v1/gifs/search?api_key=BrKR3qxoI3rfL3qgfUGvx36LOAsTV4t4&q=${category}&limit=15`);
    const { data } = response.data;
    const gifs = data.map(gif => ({
      id: gif.id,
      title: gif.title,
      imageUrl: gif.images.fixed_height.url,
    }));
  
    return gifs;
  } catch (error) {
    console.log(error);
  }
};
