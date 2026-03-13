const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

console.log('Starting Angular build...');

try {
  // Set working directory to project root
  process.chdir(__dirname);
  
  // Force Angular CLI to recognize workspace by using explicit project path
  console.log('Running Angular CLI build with explicit project...');
  const ngPath = path.join(__dirname, 'node_modules', '.bin', 'ng');
  
  // Try multiple approaches to handle workspace issues
  const commands = [
    `"${ngPath}" build counter-app --configuration production`,
    `"${ngPath}" build --project counter-app --configuration production`,
    `cd "${__dirname}" && "${ngPath}" build counter-app --configuration production`
  ];
  
  for (const command of commands) {
    try {
      console.log(`Trying: ${command}`);
      execSync(command, { 
        stdio: 'inherit',
        shell: true,
        cwd: __dirname
      });
      console.log('Build completed successfully!');
      return;
    } catch (error) {
      console.log(`Failed: ${command}`);
      continue;
    }
  }
  
  throw new Error('All build attempts failed');
} catch (error) {
  console.error('Build failed:', error.message);
  process.exit(1);
}
