# Git Setup Instructions for ZenTask

## Initial Git Configuration

Set up git with your credentials:

```bash
# Configure your name and email
git config --global user.name "thapaswin"
git config --global user.email "your-email@example.com"

# Initialize repository
git init
git add .
git commit -m "Initial commit: ZenTask v1.0 - Mindful Productivity App

- Revolutionary energy-based task scheduling system
- 8 comprehensive productivity tracking tabs
- AI-powered insights and recommendations  
- Real-time productivity analytics and patterns
- Beautiful glassmorphism UI with custom animations
- Circadian rhythm optimization
- Voice command integration
- Achievement system and gamification
- Environment assessment and optimization
- Neural network visualization of productivity data

Created by thapaswin"
```

## Create GitHub Repository

1. Go to GitHub and create a new repository named `zentask`
2. Set it as public/private as desired
3. Don't initialize with README (we have our own)

## Connect to GitHub

```bash
# Add remote origin
git remote add origin https://github.com/thapaswin/zentask.git

# Push to GitHub
git branch -M main
git push -u origin main
```

## Subsequent Commits

Use meaningful commit messages for future updates:

```bash
git add .
git commit -m "Feature: Add advanced productivity analytics

- Enhanced focus session tracking
- Improved AI recommendations
- Better environment assessment"

git push origin main
```

## Recommended Commit Message Format

```
Type: Brief description

- Bullet point 1
- Bullet point 2
- Bullet point 3

By thapaswin
```

**Types:**
- `Feature:` New functionality
- `Fix:` Bug fixes
- `Enhancement:` Improvements to existing features
- `Design:` UI/UX updates
- `Performance:` Speed/optimization improvements
- `Refactor:` Code restructuring
- `Documentation:` README/docs updates

## License

Make sure to add a LICENSE file:

```bash
# Create MIT License
cat > LICENSE << 'EOF'
MIT License

Copyright (c) 2024 thapaswin

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
EOF

git add LICENSE
git commit -m "Add MIT License - ZenTask by thapaswin"
git push origin main
```