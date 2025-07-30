#!/bin/bash

echo "🚀 Heroku Deployment Script for MercadoLibre Challenge App"
echo "=========================================================="

# Check if user is logged in to Heroku
echo "Checking Heroku authentication..."
if ! heroku auth:whoami > /dev/null 2>&1; then
    echo "❌ You are not logged in to Heroku."
    echo "Please run: heroku login"
    echo "Then run this script again."
    exit 1
fi

echo "✅ Logged in to Heroku as: $(heroku auth:whoami)"

# Get app name from user
read -p "Enter your Heroku app name (or press Enter for auto-generated): " APP_NAME

# Create Heroku app
if [ -z "$APP_NAME" ]; then
    echo "Creating Heroku app with auto-generated name..."
    heroku create
else
    echo "Creating Heroku app: $APP_NAME"
    heroku create "$APP_NAME"
fi

# Get the created app name
CREATED_APP=$(heroku apps:info --json | grep -o '"name":"[^"]*' | cut -d'"' -f4)
echo "✅ Created app: $CREATED_APP"

# Deploy to Heroku
echo "Deploying to Heroku..."
git push heroku HEAD:main

# Open the app
echo "🎉 Deployment complete!"
echo "Your app is available at: https://$CREATED_APP.herokuapp.com"
echo "Opening app in browser..."
heroku open

echo "✅ Deployment successful!"