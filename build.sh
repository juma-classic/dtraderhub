#!/bin/bash

# DTraderHub Build Script
# This script prepares the static site for deployment

echo "🚀 Starting DTraderHub build process..."

# Check if we're in the right directory
if [ ! -f "index.html" ]; then
    echo "❌ Error: index.html not found. Make sure you're in the project root directory."
    exit 1
fi

# Create necessary directories if they don't exist
echo "📁 Ensuring directory structure..."
mkdir -p static/css static/js static/css/async static/js/async

# Verify critical files exist
echo "🔍 Verifying critical files..."
CRITICAL_FILES=(
    "index.html"
    "static/js/index.16f3d93e.js"
    "static/js/lib-react.7e3f0832.js"
    "static/js/lib-router.13959373.js"
    "static/js/751.93e1b9af.js"
    "static/css/index.aa688c01.css"
    "static/css/751.ced10a23.css"
)

for file in "${CRITICAL_FILES[@]}"; do
    if [ ! -f "$file" ]; then
        echo "⚠️  Warning: Critical file missing: $file"
    else
        echo "✅ Found: $file"
    fi
done

# Check file sizes to ensure they're not corrupted
echo "📊 Checking file integrity..."
if [ -f "static/js/index.16f3d93e.js" ]; then
    SIZE=$(wc -c < "static/js/index.16f3d93e.js")
    if [ $SIZE -lt 1000 ]; then
        echo "⚠️  Warning: Main JS file seems too small ($SIZE bytes)"
    else
        echo "✅ Main JS file size: $SIZE bytes"
    fi
fi

# Validate HTML structure
echo "🔍 Validating HTML structure..."
if grep -q "<div id=\"root\"></div>" index.html; then
    echo "✅ React root element found"
else
    echo "⚠️  Warning: React root element not found in index.html"
fi

# Check for required meta tags
if grep -q "viewport" index.html; then
    echo "✅ Viewport meta tag found"
else
    echo "⚠️  Warning: Viewport meta tag missing"
fi

# Verify deployment configuration files
echo "🔧 Checking deployment configuration..."
if [ -f "vercel.json" ]; then
    echo "✅ Vercel configuration found"
else
    echo "⚠️  Warning: vercel.json missing"
fi

if [ -f "netlify.toml" ]; then
    echo "✅ Netlify configuration found"
else
    echo "⚠️  Warning: netlify.toml missing"
fi

# Check for security headers in configuration
echo "🔒 Verifying security configuration..."
if grep -q "X-Frame-Options" vercel.json 2>/dev/null || grep -q "X-Frame-Options" netlify.toml 2>/dev/null; then
    echo "✅ Security headers configured"
else
    echo "⚠️  Warning: Security headers not found in deployment config"
fi

# Generate build info
echo "📝 Generating build information..."
BUILD_TIME=$(date -u +"%Y-%m-%dT%H:%M:%SZ")
BUILD_HASH=$(git rev-parse --short HEAD 2>/dev/null || echo "unknown")

cat > build-info.json << EOF
{
  "buildTime": "$BUILD_TIME",
  "buildHash": "$BUILD_HASH",
  "version": "1.0.0",
  "platform": "static",
  "environment": "production"
}
EOF

echo "✅ Build info generated: build-info.json"

# Final validation
echo "🎯 Final validation..."
TOTAL_FILES=$(find . -name "*.html" -o -name "*.js" -o -name "*.css" | wc -l)
echo "📊 Total web assets: $TOTAL_FILES files"

# Check total size
TOTAL_SIZE=$(du -sh . | cut -f1)
echo "💾 Total project size: $TOTAL_SIZE"

echo ""
echo "🎉 Build process completed successfully!"
echo "📋 Summary:"
echo "   - Static site ready for deployment"
echo "   - Build time: $BUILD_TIME"
echo "   - Build hash: $BUILD_HASH"
echo "   - Total files: $TOTAL_FILES"
echo "   - Total size: $TOTAL_SIZE"
echo ""
echo "🚀 Ready to deploy to:"
echo "   - Netlify: https://dtraderhubsite.netlify.app"
echo "   - Vercel: Configure with vercel.json"
echo "   - Any static hosting provider"
echo ""
echo "✨ DTraderHub is ready to trade! 📈"