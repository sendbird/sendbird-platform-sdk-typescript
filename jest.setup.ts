// jest.setup.ts
import * as dotenv from 'dotenv';

// Load .env.integration_test if it exists, fallback to .env
dotenv.config({ path: '.env.test' });
console.log('setup file');