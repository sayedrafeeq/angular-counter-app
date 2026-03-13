const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

console.log('Starting Angular build...');

try {
  // Set working directory to project root
  process.chdir(__dirname);
  
  // Check if angular.json exists
  if (!fs.existsSync('angular.json')) {
    throw new Error('angular.json not found');
  }
  
  // Try different build approaches
  let buildSuccess = false;
  const buildCommands = [
    'npx --yes @angular/cli build counter-app --configuration production',
    'npx ng build counter-app --configuration production',
    './node_modules/.bin/ng build counter-app --configuration production',
    'npm run ng build counter-app --configuration production'
  ];
  
  for (const command of buildCommands) {
    try {
      console.log(`Trying: ${command}`);
      execSync(command, { stdio: 'inherit' });
      buildSuccess = true;
      break;
    } catch (error) {
      console.log(`Failed: ${command}`);
      continue;
    }
  }
  
  if (!buildSuccess) {
    throw new Error('All build attempts failed');
  }
  
  console.log('Build completed successfully!');
} catch (error) {
  console.error('Build failed:', error.message);
  process.exit(1);
}
