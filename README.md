# AstroTracker
This project is a playground for exploring Vite, Vue 3 (Option API), TypeScript, PrimeVue, Chart.js, and a sprinkle of NASA API.

## Recommended Setup
Here's how to set up the project using a common Vite create project approach:

1. **Clone the repository** and navigate to the project folder:
   ```
   cd AstroTracker_asm/AstroTracker
   ```

2. **Install it** :
   ```
   npm install
   ```

3. **Launch it** :
   ```
   npm run dev
   ```

4. **Enjoy**

## API Doc
Mostly used "https://api.nasa.gov/" 
- APOD (instead of image.nasa, that gave me problems);
- Asteroids - NeoWs (mapped all 3 but used, Neo - Feed for most of the time);

## Consideration (Info + Rant)
While PrimeVue was initially chosen for its built-in Chart.js integration, it's recommended to explore alternative UI libraries for future projects. Here's why:

 - Limited theming options: PrimeVue's theming system is still under development, requiring significant CSS overrides to achieve the desired look and feel;

 - Chart.js implementation challenges: Using Chart.js within PrimeVue wasn't as smooth as expected, and referring to Chart.js's native documentation was often necessary.

 - Chart.js suitability: Chart.js might not be the most suitable library for this specific project's needs. Passing a vue component to a canvas proved to be difficult and ultimately wasn't implemented. Consider exploring other charting libraries that better align with your requirements.
 
I hope this formatted README file is clearer and more informative!