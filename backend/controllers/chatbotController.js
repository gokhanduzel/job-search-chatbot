import { extractKeywords } from './aiController.js';
import axios from 'axios';

const ADZUNA_API_URL = 'https://api.adzuna.com/v1/api/jobs';
const ADZUNA_APP_ID = process.env.ADZUNA_APP_ID;
const ADZUNA_APP_KEY = process.env.ADZUNA_APP_KEY;
console.log(ADZUNA_APP_ID);
console.log(ADZUNA_APP_KEY);

export const handleUserPrompt = async (req, res) => {
  const { prompt } = req.body;
  console.log(prompt)

  // Simple keyword extraction (this can be replaced with a more advanced NLP service)
  const descriptions = [prompt];
  const keywords = await extractKeywords(descriptions);
  const jobTitle = keywords[0].find(keyword => keyword.toLowerCase().includes('developer')) || ''; // Example keyword extraction
  const location = keywords[0].find(keyword => keyword.toLowerCase().includes('ottawa')) || ''; // Simplified for example

  console.log('Job Title:', jobTitle);
  console.log('Location:', location);

  try {
    // Fetch job listings from Adzuna API
    const response = await axios.get(`${ADZUNA_API_URL}/ca/search/1`, {
      params: {
        app_id: ADZUNA_APP_ID,
        app_key: ADZUNA_APP_KEY,
        what: jobTitle,
        where: location,
        results_per_page: 4,
      },
    });

    console.log('Adzuna API Response:', response.data);

    const jobs = response.data.results; // Adzuna API returns job results in the 'results' field
    res.json({ message: jobs });
  } catch (error) {
    console.error('Error fetching jobs:', error);
    res.status(500).json({ message: 'Error fetching jobs' });
  }
};
