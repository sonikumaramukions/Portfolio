#!/bin/bash

# Portfolio Website - Quick Start Script
# This script helps you get started with your portfolio website

echo "================================"
echo "🚀 Portfolio Website Quick Start"
echo "================================"
echo ""

# Check if Python is installed
if command -v python3 &> /dev/null; then
    echo "✅ Starting local server with Python..."
    echo ""
    echo "📌 Your portfolio will be available at:"
    echo "   http://localhost:8000"
    echo ""
    echo "Press Ctrl+C to stop the server"
    echo ""
    cd "$(dirname "$0")"
    python3 -m http.server 8000
elif command -v python &> /dev/null; then
    echo "✅ Starting local server with Python..."
    cd "$(dirname "$0")"
    python -m http.server 8000
elif command -v php &> /dev/null; then
    echo "✅ Starting local server with PHP..."
    echo ""
    echo "📌 Your portfolio will be available at:"
    echo "   http://localhost:8000"
    echo ""
    echo "Press Ctrl+C to stop the server"
    echo ""
    cd "$(dirname "$0")"
    php -S localhost:8000
else
    echo "❌ No compatible server found."
    echo ""
    echo "Please install one of the following:"
    echo "  • Python 3 (sudo apt-get install python3)"
    echo "  • PHP (sudo apt-get install php)"
    echo "  • Node.js (npm install -g http-server)"
    echo ""
    echo "Or manually open index.html in your browser."
    exit 1
fi
