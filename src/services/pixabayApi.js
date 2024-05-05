import axios from 'axios';

axios.defaults.baseURL = 'https://pixabay.com/api/';

const FetchImages = async (searchQuery, page) => {
  const params = new URLSearchParams({
    key: '36656035-48a6982af67e259d89e542d44',
    q: searchQuery,
    image_type: 'photo',
    orientation: 'horizontal',
    page: page,
    per_page: 12,
  });

  const response = await axios.get(`?${params}`);

  const images = response.data.hits.map(
    ({ id, webformatURL, largeImageURL, tags }) => {
      return {
        id,
        webformatURL,
        largeImageURL,
        tags,
      };
    }
  );
  return { images, totalImages: response.data.totalHits };
};

export default FetchImages;