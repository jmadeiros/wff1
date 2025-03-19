const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

// Path to the API directory
const apiDir = path.join(__dirname, 'src', 'app', 'api');

// Function to recursively delete a directory
function deleteFolderRecursive(folderPath) {
  if (fs.existsSync(folderPath)) {
    fs.readdirSync(folderPath).forEach((file) => {
      const curPath = path.join(folderPath, file);
      if (fs.lstatSync(curPath).isDirectory()) {
        // Recursive call for directories
        deleteFolderRecursive(curPath);
      } else {
        // Delete file
        fs.unlinkSync(curPath);
      }
    });
    fs.rmdirSync(folderPath);
  }
}

// Backup the API directory
console.log('Backing up API directory...');
const backupDir = path.join(__dirname, 'api-backup');
if (fs.existsSync(backupDir)) {
  deleteFolderRecursive(backupDir);
}
fs.mkdirSync(backupDir, { recursive: true });

// Copy API files to backup
if (fs.existsSync(apiDir)) {
  fs.cpSync(apiDir, backupDir, { recursive: true });
  console.log('API directory backed up to api-backup/');

  // Delete the API directory
  console.log('Temporarily removing API directory for static build...');
  deleteFolderRecursive(apiDir);
}

try {
  // Run the build
  console.log('Running Next.js build...');
  execSync('npm run build', { stdio: 'inherit' });

  // Deploy to Firebase
  console.log('Deploying to Firebase...');
  execSync('firebase deploy', { stdio: 'inherit' });

  console.log('Build and deployment completed successfully!');
} catch (error) {
  console.error('Build or deployment failed:', error);
} finally {
  // Restore the API directory
  console.log('Restoring API directory...');
  if (fs.existsSync(backupDir)) {
    fs.cpSync(backupDir, apiDir, { recursive: true });
    console.log('API directory restored.');
  }
} 