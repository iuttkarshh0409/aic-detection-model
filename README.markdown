# Anti-India Campaign Detection System – MVP

A professional security application designed to detect, analyze, and alert on anti-India campaigns across digital platforms. This Minimum Viable Product (MVP) enables real-time monitoring and rapid assessment for security teams and government agencies.

## Table of Contents
- [Overview](#overview)
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Installation & Setup](#installation--setup)
- [Usage](#usage)
- [Directory Structure](#directory-structure)
- [Configuration](#configuration)
- [Screenshots](#screenshots)
- [Roadmap](#roadmap)
- [Support](#support)
- [FAQs](#faqs)

## Overview
The Anti-India Campaign Detection System MVP provides:
- Real-time analysis of content from Twitter, Reddit, and RSS feeds
- Keyword and hashtag detection for flagged anti-India terms
- Sentiment analysis and threat scoring
- Alert system for suspicious activity
- Comprehensive dashboard for monitoring and reporting

This MVP prioritizes usability, speed, and coverage, empowering security teams to identify and respond to threatening digital narratives efficiently.

## Features
- **Main Dashboard**: Displays system status, statistics, live feed, and threat charts
- **Content Analyzer**: Tests content for sentiment, keyword matches, and threat scores
- **Keyword Management**: Allows adding/removing flagged terms and hashtags
- **Detection Log**: Lists and filters recent detections by threat level or source
- **Alert System**: Configures and manages real-time alerts
- **Export & Reports**: Enables downloading flagged detection logs for analysis
- **Settings**: Manages user preferences and simulated API endpoints
- **Responsive Design**: Optimized for desktop, tablet, and mobile
- **High Performance**: Delivers real-time results and updates

## Technologies Used
- **Front-End**: HTML5, CSS3, JavaScript
- **Charts**: Chart.js for interactive visualizations
- **UI Framework**: Responsive UI with CSS Grid
- **Data Storage**: Local storage for persistence
- **Backend**: Simulated backend with mock data and real-time simulation
- **Styling**: Indian flag color palette with professional security-themed design
- **Optional (Production)**: Flask or React for backend integration with live data feeds

## Installation & Setup
1. **Clone the Repository**:
   ```bash
   git clone https://your-repo-url.git
   cd campaign-detector-mvp
   ```

2. **Open the Application**:
   - For local demo: Open `index.html` in a web browser.
   - For deployed site: Navigate to the provided public URL.

3. **Backend (Optional for Full Version)**:
   - Production integration with APIs (Twitter, Reddit) requires a backend setup.

## Usage
- **Dashboard**: View system summary and live detection feed.
- **Analyzer**: Paste content to test for threat score and detection.
- **Keyword Management**: Edit lists of flagged terms and hashtags.
- **Detections**: Browse, filter, and export recent detections.
- **Alerts**: Configure alert triggers and thresholds.
- **Settings**: Customize user and system preferences.

## Directory Structure
```
campaign-detector-mvp/
├── index.html
├── style.css
├── app.js
├── assets/
│   ├── images/
│   └── icons/
├── data/
│   ├── keywords.json
│   └── mock_detections.json
└── README.md
```

## Configuration
- **Keyword Database**: Located in `data/keywords.json`
- **Alert Threshold**: Configured in the settings panel of the application
- **System Stats**: Calculated from mock detection data and real-time interactions

## Screenshots
### Main Dashboard Example
(Insert Screenshot Here)

### Content Analyzer Demo
(Insert Screenshot Here)

## Roadmap
- **Phase 1**: MVP demo (current)
- **Phase 2**: API integrations, backend enhancements, advanced NLP
- **Phase 3**: Distributed architecture, machine learning-based threat detection
- **Future**: Multi-language support, external agency integration, advanced analytics

## Support
- **Technical Queries**: support@yourcompany.com
- **Security Team Liaison**: security@yourcompany.com
- **Feedback & Feature Requests**: Open a GitHub issue

## FAQs
**How do I test the system?**  
Use the Content Analyzer to paste sample text and view threat analysis results.

**Can I add new keywords for detection?**  
Yes, use the Keyword Management panel to add or remove terms and hashtags.

**Will this connect to live APIs?**  
The current MVP uses simulated data. Live integration is planned for future releases.

**How do I get alerts?**  
Set thresholds in the Alert System panel. Alerts are visible in the app; email/SMS integration is under development.

---

Copyright © 2025. All rights reserved.

This MVP serves as a foundation for demonstration and development of full-scale national security software.