const request = require('supertest');
const app = require('./index'); // Import the app from your index.js

describe('Vercel App Routes', () => {
  
  // Test the Home Page
  it('GET / should return 200 and welcome message', async () => {
    const res = await request(app).get('/');
    expect(res.statusCode).toEqual(200);
    expect(res.text).toContain('Welcome to the Home Page');
  });

  // Test the About Page
  it('GET /about should return 200 and about message', async () => {
    const res = await request(app).get('/about');
    expect(res.statusCode).toEqual(200);
    expect(res.text).toContain('About Us');
  });

  // Test a non-existent page (404)
  it('GET /random-page should return 404', async () => {
    const res = await request(app).get('/random-page');
    expect(res.statusCode).toEqual(404);
  });
});