const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

console.log('Starting Angular build...');

try {
  // Set working directory to project root
  process.chdir(__dirname);
  
  // Run Angular build with explicit project
  console.log('Running: npx ng build counter-app --configuration production');
  execSync('npx ng build counter-app --configuration production', { stdio: 'inherit' });
  
  console.log('Build completed successfully!');
} catch (error) {
  console.error('Build failed:', error.message);
  process.exit(1);
}
