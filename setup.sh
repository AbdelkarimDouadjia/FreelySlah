#!/bin/bash
sudo apt-get update
sudo apt-get install -y curl gnupg

touch /var/log/setup.log
# Install NVM if not already installed
if [ ! -f "$HOME/.nvm/nvm.sh" ]; then
  curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.40.0/install.sh | \
    bash >> /var/log/setup.log 2>&1
fi

# Load NVM and install Node.js version 20 if not already installed
if [ -s "$HOME/.nvm/nvm.sh" ]; then
  . "$HOME/.nvm/nvm.sh"
  if ! nvm ls 20 | grep -q "v20"; then
    nvm install 20
  fi
else
  echo "NVM installation failed or is not properly set up." >> /var/log/setup.log
  exit 1
fi

# Check if MongoDB is already installed
if ! command -v mongod &> /dev/null; then
  echo "MongoDB is not installed. Proceeding with installation..." >> /var/log/setup.log

  # Add MongoDB GPG key
  curl -fsSL https://www.mongodb.org/static/pgp/server-8.0.asc | \
    sudo gpg -o /usr/share/keyrings/mongodb-server-8.0.gpg \
      --dearmor >> /var/log/setup.log 2>&1

  # Add MongoDB to sources list
  echo "deb [ arch=amd64,arm64 signed-by=/usr/share/keyrings/mongodb-server-8.0.gpg ] \
    https://repo.mongodb.org/apt/ubuntu $(lsb_release -cs)/mongodb-org/8.0 multiverse" | \
      sudo tee /etc/apt/sources.list.d/mongodb-org-8.0.list >> /var/log/setup.log 2>&1

  sudo apt-get update
  sudo apt-get install -y mongodb-org
  echo "MongoDB installation complete." >> /var/log/setup.log
else
  echo "MongoDB is already installed. Skipping installation." >> /var/log/setup.log
fi

# Enable MongoDB
if [ $(ps --no-headers -o comm 1) == "systemd" ]; then
  sudo systemctl daemon-reload
  sudo systemctl enable monogd
  sudo systemctl start mongod
else
  chkconfig mongod on
  sudo service mongod start
fi

cd frontend || { echo "Failed to navigate to 'frontend' directory" >> /var/log/setup.log; exit 1; }
npm install
npm run dev

cd ../api || { echo "Failed to navigate to 'api' directory" >> /var/log/setup.log; exit 1; }
npm install
npm start
