import axios from 'axios';

const AI_URL = process.env.AI_URL || 'http://localhost:5001';

export const extractKeywords = async (descriptions) => {
  try {
    const response = await axios.post(`${AI_URL}/extract-keywords`, { descriptions });
    return response.data.keywords;
  } catch (error) {
    console.error('Error extracting keywords:', error);
    throw error;
  }
};
