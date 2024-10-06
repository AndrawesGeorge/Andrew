import express from 'express';
import cors from 'cors';
import { Amplify } from 'aws-amplify';
import awsconfig from './aws-exports.js';

// Log the AWS config for debugging purposes
console.log('AWS Config:', awsconfig);

Amplify.configure({
  ...awsconfig, 
  oauth: null // Explicitly set oauth to null here as well
});

const app = express();
app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
  res.send('Hello from the e-bike app!');
});

const PORT = process.env.PORT || 3999;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
