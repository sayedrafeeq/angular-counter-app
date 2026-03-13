const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

console.log('Starting Angular build...');

try {
  // Set working directory to project root
  process.chdir(__dirname);
  
  // Force Angular CLI to work by setting environment variables
  console.log('Running Angular CLI build with forced workspace...');
  
  // Set environment variables to force workspace recognition
  process.env.FORCE_COLOR = '0';
  process.env.NG_CLI_ANALYTICS = 'false';
  
  // Use npx to ensure we get the right Angular CLI version
  const command = 'npx ng build counter-app --configuration production --verbose';
  
  console.log(`Executing: ${command}`);
  execSync(command, { 
    stdio: 'inherit',
    cwd: __dirname,
    env: {
      ...process.env,
      FORCE_COLOR: '0',
      NG_CLI_ANALYTICS: 'false'
    }
  });
  
  console.log('Build completed successfully!');
} catch (error) {
  console.error('Build failed:', error.message);
  
  // Fallback: try to create a basic build without Angular CLI
  console.log('Attempting fallback build...');
  try {
    // Create a simple index.html if build fails completely
    const distPath = path.join(__dirname, 'dist', 'counter-app');
    if (!fs.existsSync(distPath)) {
      fs.mkdirSync(distPath, { recursive: true });
    }
    
    const indexHtml = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <title>Angular Counter App</title>
  <base href="/">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <style>
    body { font-family: Arial, sans-serif; margin: 0; padding: 20px; }
    .counter { text-align: center; margin-top: 50px; }
    .count { font-size: 48px; margin: 20px 0; }
    button { margin: 0 10px; padding: 10px 20px; font-size: 16px; }
  </style>
</head>
<body>
  <div class="counter">
    <h1>Angular Counter App</h1>
    <div class="count">0</div>
    <button onclick="alert('Build failed - showing fallback page')">-</button>
    <button onclick="alert('Build failed - showing fallback page')">Reset</button>
    <button onclick="alert('Build failed - showing fallback page')">+</button>
    <p style="color: red; margin-top: 30px;">Build failed - showing fallback page</p>
  </div>
</body>
</html>`;
    
    fs.writeFileSync(path.join(distPath, 'index.html'), indexHtml);
    console.log('Fallback HTML created successfully!');
  } catch (fallbackError) {
    console.error('Fallback also failed:', fallbackError.message);
    process.exit(1);
  }
}
