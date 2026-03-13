const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

console.log('Starting Angular build...');

try {
  // Set working directory to project root
  process.chdir(__dirname);
  
  // Simple direct Angular CLI build with cross-platform path
  console.log('Running Angular CLI build...');
  const ngPath = path.join(__dirname, 'node_modules', '.bin', 'ng');
  execSync(`"${ngPath}" build`, { 
    stdio: 'inherit',
    cwd: __dirname,
    shell: true
  });
  
  console.log('Build completed successfully!');
} catch (error) {
  console.error('Build failed:', error.message);
  process.exit(1);
}
