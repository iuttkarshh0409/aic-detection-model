// Anti-India Campaign Detection System MVP
class DetectionSystem {
    constructor() {
        // System data
        this.mockData = {
            keywords: {
                anti_india_terms: ["anti india", "india bad", "indian corruption", "modi dictator", "hindutva fascist", "kashmir oppression", "indian army brutal", "bjp propaganda", "india fake", "hindu extremist", "indian occupation", "modi regime", "fascist india", "india terrorist state", "indian atrocities", "break india", "disintegrate india"],
                suspicious_hashtags: ["#indiadisaster", "#antiindia", "#kashmirbleeds", "#modifascist", "#hindutvaextremism", "#indianoccupation", "#breakindia", "#indiafailed", "#stopindianoppression", "#indiaexposed"]
            },
            mock_detections: [
                {id: 1, timestamp: "2025-08-31T00:30:00Z", source: "Twitter", content: "Another failed policy by Modi government shows India's corruption #antiindia", sentiment_score: -0.8, threat_score: 0.85, keywords_found: ["failed policy", "corruption"], hashtags: ["#antiindia"], classification: "HIGH", engagement: 245},
                {id: 2, timestamp: "2025-08-31T00:25:00Z", source: "Reddit", content: "Kashmir situation is getting worse every day, Indian army brutal tactics", sentiment_score: -0.7, threat_score: 0.75, keywords_found: ["indian army brutal"], hashtags: [], classification: "HIGH", engagement: 89},
                {id: 3, timestamp: "2025-08-31T00:20:00Z", source: "RSS", content: "India's economic policies continue to fail the common man", sentiment_score: -0.4, threat_score: 0.3, keywords_found: [], hashtags: [], classification: "LOW", engagement: 12},
                {id: 4, timestamp: "2025-08-31T00:15:00Z", source: "Twitter", content: "Hindu extremist groups target minorities in india fascist state", sentiment_score: -0.9, threat_score: 0.9, keywords_found: ["hindu extremist", "fascist"], hashtags: [], classification: "HIGH", engagement: 567},
                {id: 5, timestamp: "2025-08-31T00:10:00Z", source: "Twitter", content: "Love visiting India, amazing culture and delicious food!", sentiment_score: 0.8, threat_score: 0.1, keywords_found: [], hashtags: [], classification: "LOW", engagement: 34}
            ],
            system_stats: {
                total_detections: 1247,
                high_threat: 89,
                medium_threat: 234,
                low_threat: 924,
                sources: {Twitter: 756, Reddit: 345, RSS: 146},
                avg_threat_score: 0.34,
                uptime: 99.7,
                last_updated: "2025-08-31T00:30:00Z"
            }
        };

        // System settings
        this.settings = {
            threatThreshold: 0.8,
            alertEmail: 'security@example.com',
            emailAlerts: true,
            updateInterval: 10,
            realTimeUpdates: true
        };

        // Current data
        this.currentKeywords = [...this.mockData.keywords.anti_india_terms];
        this.currentHashtags = [...this.mockData.keywords.suspicious_hashtags];
        this.detections = [...this.mockData.mock_detections];
        this.alerts = [];

        // Current active section
        this.activeSection = 'dashboard';

        // Initialize after a short delay to ensure DOM is ready
        setTimeout(() => this.init(), 200);
    }

    init() {
        console.log('🔄 Initializing Detection System...');
        
        try {
            this.setupNavigation();
            this.setupDashboard();
            this.setupAnalyzer();
            this.setupKeywords();
            this.setupDetections();
            this.setupAlerts();
            this.setupSettings();
            this.generateSampleAlerts();
            
            // Show initial section
            this.showSection('dashboard');
            
            console.log('✅ Anti-India Campaign Detection System MVP initialized successfully!');
        } catch (error) {
            console.error('❌ Initialization error:', error);
        }
    }

    // Navigation System - Simplified and robust
    setupNavigation() {
        console.log('🔧 Setting up navigation...');
        
        // Get all navigation buttons
        const navButtons = document.querySelectorAll('.nav-btn');
        console.log(`Found ${navButtons.length} navigation buttons`);

        // Add click handlers to each button
        navButtons.forEach((button, index) => {
            const sectionId = button.getAttribute('data-section');
            console.log(`Setting up button ${index}: ${sectionId}`);
            
            button.onclick = (e) => {
                e.preventDefault();
                e.stopPropagation();
                console.log(`🖱️ Navigation clicked: ${sectionId}`);
                this.showSection(sectionId);
                return false;
            };
        });

        console.log('✅ Navigation setup complete');
    }

    showSection(sectionId) {
        console.log(`📄 Showing section: ${sectionId}`);
        
        try {
            // Hide all sections
            const allSections = document.querySelectorAll('.section');
            allSections.forEach(section => {
                section.classList.remove('active');
                section.style.display = 'none';
            });

            // Show target section
            const targetSection = document.getElementById(sectionId);
            if (targetSection) {
                targetSection.classList.add('active');
                targetSection.style.display = 'block';
                this.activeSection = sectionId;
                console.log(`✅ Successfully activated section: ${sectionId}`);
            } else {
                console.error(`❌ Section not found: ${sectionId}`);
                return;
            }

            // Update navigation button states
            const navButtons = document.querySelectorAll('.nav-btn');
            navButtons.forEach(btn => {
                btn.classList.remove('active');
                if (btn.getAttribute('data-section') === sectionId) {
                    btn.classList.add('active');
                }
            });

            // Load section-specific data
            this.loadSectionData(sectionId);
            
        } catch (error) {
            console.error('❌ Error showing section:', error);
        }
    }

    loadSectionData(section) {
        console.log(`📊 Loading data for section: ${section}`);
        
        try {
            switch(section) {
                case 'dashboard':
                    this.updateDashboard();
                    this.createCharts();
                    this.updateRecentDetections();
                    break;
                case 'analyzer':
                    // Content analyzer is ready to use
                    break;
                case 'keywords':
                    this.updateKeywordsList();
                    this.updateHashtagsList();
                    break;
                case 'detections':
                    this.updateDetectionsTable();
                    break;
                case 'alerts':
                    this.updateAlertsList();
                    break;
                case 'settings':
                    this.loadSettings();
                    break;
                default:
                    console.warn(`Unknown section: ${section}`);
            }
        } catch (error) {
            console.error(`❌ Error loading data for ${section}:`, error);
        }
    }

    // Dashboard Methods
    setupDashboard() {
        console.log('🔧 Setting up dashboard...');
        this.updateDashboard();
        this.createCharts();
        this.updateRecentDetections();
    }

    updateDashboard() {
        const stats = this.mockData.system_stats;
        
        const elements = {
            totalDetections: document.getElementById('totalDetections'),
            highThreats: document.getElementById('highThreats'),
            mediumThreats: document.getElementById('mediumThreats'),
            avgThreatScore: document.getElementById('avgThreatScore'),
            lastUpdated: document.getElementById('lastUpdated')
        };
        
        if (elements.totalDetections) elements.totalDetections.textContent = stats.total_detections.toLocaleString();
        if (elements.highThreats) elements.highThreats.textContent = stats.high_threat;
        if (elements.mediumThreats) elements.mediumThreats.textContent = stats.medium_threat;
        if (elements.avgThreatScore) elements.avgThreatScore.textContent = stats.avg_threat_score.toFixed(2);
        
        if (elements.lastUpdated) {
            const date = new Date(stats.last_updated);
            elements.lastUpdated.textContent = date.toLocaleString('en-IN', {
                day: '2-digit',
                month: 'short',
                year: 'numeric',
                hour: '2-digit',
                minute: '2-digit'
            });
        }
    }

    createCharts() {
        if (typeof Chart === 'undefined') {
            console.warn('Chart.js not loaded');
            return;
        }

        // Threat Levels Chart
        const threatCtx = document.getElementById('threatChart');
        if (threatCtx) {
            new Chart(threatCtx, {
                type: 'line',
                data: {
                    labels: ['00:00', '04:00', '08:00', '12:00', '16:00', '20:00', '24:00'],
                    datasets: [{
                        label: 'High Threats',
                        data: [12, 8, 15, 23, 18, 25, 19],
                        borderColor: '#1FB8CD',
                        backgroundColor: 'rgba(31, 184, 205, 0.1)',
                        tension: 0.4,
                        fill: true
                    }, {
                        label: 'Medium Threats',
                        data: [28, 22, 35, 41, 33, 45, 38],
                        borderColor: '#FFC185',
                        backgroundColor: 'rgba(255, 193, 133, 0.1)',
                        tension: 0.4,
                        fill: true
                    }]
                },
                options: {
                    responsive: true,
                    maintainAspectRatio: false,
                    plugins: { legend: { position: 'top' } }
                }
            });
        }

        // Source Chart
        const sourceCtx = document.getElementById('sourceChart');
        if (sourceCtx) {
            new Chart(sourceCtx, {
                type: 'doughnut',
                data: {
                    labels: ['Twitter', 'Reddit', 'RSS'],
                    datasets: [{
                        data: [756, 345, 146],
                        backgroundColor: ['#1FB8CD', '#FFC185', '#B4413C']
                    }]
                },
                options: {
                    responsive: true,
                    maintainAspectRatio: false,
                    plugins: { legend: { position: 'bottom' } }
                }
            });
        }
    }

    updateRecentDetections() {
        const container = document.getElementById('recentDetections');
        if (!container) return;

        const highThreatDetections = this.detections
            .filter(d => d.classification === 'HIGH')
            .slice(0, 5);

        container.innerHTML = highThreatDetections.map(detection => `
            <div class="detection-item">
                <div class="detection-header">
                    <span class="detection-source">${detection.source}</span>
                    <span class="detection-time">${this.formatTime(detection.timestamp)}</span>
                </div>
                <div class="detection-content">${detection.content}</div>
                <div class="detection-footer">
                    <div class="threat-score">
                        <span class="threat-badge ${detection.classification.toLowerCase()}">${detection.classification}</span>
                        <span>Score: ${detection.threat_score.toFixed(2)}</span>
                    </div>
                    <div class="engagement-count">${detection.engagement} engagements</div>
                </div>
            </div>
        `).join('');
    }

    // Content Analyzer Methods
    setupAnalyzer() {
        console.log('🔧 Setting up content analyzer...');
        
        // Analyze button
        const analyzeBtn = document.getElementById('analyzeBtn');
        if (analyzeBtn) {
            analyzeBtn.onclick = (e) => {
                e.preventDefault();
                this.handleAnalyze();
                return false;
            };
        }

        // Example buttons
        document.querySelectorAll('.example-btn').forEach(btn => {
            btn.onclick = (e) => {
                e.preventDefault();
                const content = btn.getAttribute('data-content');
                const input = document.getElementById('contentInput');
                if (input && content) {
                    input.value = content;
                    this.analyzeContent(content);
                }
                return false;
            };
        });

        console.log('✅ Content analyzer setup complete');
    }

    handleAnalyze() {
        const input = document.getElementById('contentInput');
        if (input) {
            const content = input.value.trim();
            if (content) {
                this.analyzeContent(content);
            } else {
                alert('Please enter content to analyze');
            }
        }
    }

    analyzeContent(content) {
        console.log('🔍 Analyzing content:', content.substring(0, 50) + '...');
        
        const results = this.performAnalysis(content);
        this.displayAnalysisResults(results);
        
        if (results.threat_score >= this.settings.threatThreshold) {
            this.triggerAlert(results);
        }
    }

    performAnalysis(content) {
        const lowerContent = content.toLowerCase();
        
        // Find keywords
        const foundKeywords = this.currentKeywords.filter(keyword => 
            lowerContent.includes(keyword.toLowerCase())
        );
        
        // Find hashtags
        const foundHashtags = this.currentHashtags.filter(hashtag => 
            lowerContent.includes(hashtag.toLowerCase())
        );
        
        // Calculate sentiment
        const sentiment = this.calculateSentiment(content);
        const threatScore = this.calculateThreatScore(foundKeywords, foundHashtags, sentiment);
        const classification = this.classifyThreat(threatScore);
        
        return {
            content,
            sentiment_score: sentiment,
            threat_score: threatScore,
            keywords_found: foundKeywords,
            hashtags_found: foundHashtags,
            classification
        };
    }

    calculateSentiment(text) {
        const positiveWords = ['love', 'great', 'amazing', 'wonderful', 'beautiful', 'good', 'excellent', 'fantastic'];
        const negativeWords = ['hate', 'bad', 'terrible', 'awful', 'corrupt', 'failed', 'disaster', 'brutal', 'extremist'];
        
        const words = text.toLowerCase().split(/\s+/);
        let score = 0;
        
        words.forEach(word => {
            if (positiveWords.some(pos => word.includes(pos))) score += 0.1;
            if (negativeWords.some(neg => word.includes(neg))) score -= 0.1;
        });
        
        return Math.max(-1, Math.min(1, score));
    }

    calculateThreatScore(keywords, hashtags, sentiment) {
        let score = 0;
        score += keywords.length * 0.2;
        score += hashtags.length * 0.3;
        if (sentiment < 0) score += Math.abs(sentiment) * 0.3;
        return Math.min(1, score);
    }

    classifyThreat(score) {
        if (score >= 0.7) return 'HIGH';
        if (score >= 0.4) return 'MEDIUM';
        return 'LOW';
    }

    displayAnalysisResults(results) {
        const container = document.getElementById('analysisResults');
        if (!container) return;

        container.innerHTML = `
            <div class="analysis-result show">
                <div class="result-header">
                    <span class="threat-badge ${results.classification.toLowerCase()}">${results.classification} THREAT</span>
                </div>
                
                <div class="result-metrics">
                    <div class="result-metric">
                        <div class="result-metric-value">${results.sentiment_score.toFixed(2)}</div>
                        <div class="result-metric-label">Sentiment Score</div>
                    </div>
                    <div class="result-metric">
                        <div class="result-metric-value">${results.threat_score.toFixed(2)}</div>
                        <div class="result-metric-label">Threat Score</div>
                    </div>
                    <div class="result-metric">
                        <div class="result-metric-value">${results.keywords_found.length}</div>
                        <div class="result-metric-label">Keywords Found</div>
                    </div>
                    <div class="result-metric">
                        <div class="result-metric-value">${results.hashtags_found.length}</div>
                        <div class="result-metric-label">Hashtags Found</div>
                    </div>
                </div>
                
                <div class="result-details">
                    <h4>Keywords Detected:</h4>
                    <div class="keywords-found">
                        ${results.keywords_found.length > 0 
                            ? results.keywords_found.map(kw => `<span class="keyword-tag">${kw}</span>`).join('')
                            : '<span style="color: var(--color-text-secondary)">None detected</span>'
                        }
                    </div>
                    
                    <h4>Hashtags Detected:</h4>
                    <div class="hashtags-found">
                        ${results.hashtags_found.length > 0 
                            ? results.hashtags_found.map(tag => `<span class="hashtag-tag">${tag}</span>`).join('')
                            : '<span style="color: var(--color-text-secondary)">None detected</span>'
                        }
                    </div>
                </div>
            </div>
        `;
    }

    // Keywords Management
    setupKeywords() {
        console.log('🔧 Setting up keywords management...');

        const addKeywordBtn = document.getElementById('addKeywordBtn');
        if (addKeywordBtn) {
            addKeywordBtn.onclick = () => {
                const input = document.getElementById('newKeyword');
                if (input) {
                    const keyword = input.value.trim().toLowerCase();
                    if (keyword && !this.currentKeywords.includes(keyword)) {
                        this.currentKeywords.push(keyword);
                        input.value = '';
                        this.updateKeywordsList();
                    }
                }
            };
        }

        const addHashtagBtn = document.getElementById('addHashtagBtn');
        if (addHashtagBtn) {
            addHashtagBtn.onclick = () => {
                const input = document.getElementById('newHashtag');
                if (input) {
                    let hashtag = input.value.trim().toLowerCase();
                    if (hashtag && !hashtag.startsWith('#')) hashtag = '#' + hashtag;
                    if (hashtag && !this.currentHashtags.includes(hashtag)) {
                        this.currentHashtags.push(hashtag);
                        input.value = '';
                        this.updateHashtagsList();
                    }
                }
            };
        }
    }

    updateKeywordsList() {
        const container = document.getElementById('keywordsList');
        if (!container) return;

        container.innerHTML = this.currentKeywords.map(keyword => `
            <div class="keyword-item">
                <span class="keyword-text">${keyword}</span>
                <button class="remove-keyword" onclick="window.detectionSystem.removeKeyword('${keyword}')">×</button>
            </div>
        `).join('');
    }

    updateHashtagsList() {
        const container = document.getElementById('hashtagsList');
        if (!container) return;

        container.innerHTML = this.currentHashtags.map(hashtag => `
            <div class="keyword-item">
                <span class="keyword-text">${hashtag}</span>
                <button class="remove-keyword" onclick="window.detectionSystem.removeHashtag('${hashtag}')">×</button>
            </div>
        `).join('');
    }

    removeKeyword(keyword) {
        this.currentKeywords = this.currentKeywords.filter(kw => kw !== keyword);
        this.updateKeywordsList();
    }

    removeHashtag(hashtag) {
        this.currentHashtags = this.currentHashtags.filter(tag => tag !== hashtag);
        this.updateHashtagsList();
    }

    // Detections Management
    setupDetections() {
        console.log('🔧 Setting up detections management...');

        const threatFilter = document.getElementById('threatFilter');
        if (threatFilter) {
            threatFilter.onchange = () => this.updateDetectionsTable();
        }

        const sourceFilter = document.getElementById('sourceFilter');
        if (sourceFilter) {
            sourceFilter.onchange = () => this.updateDetectionsTable();
        }

        const exportBtn = document.getElementById('exportBtn');
        if (exportBtn) {
            exportBtn.onclick = (e) => {
                e.preventDefault();
                this.exportDetections();
            };
        }
    }

    updateDetectionsTable() {
        const container = document.getElementById('detectionsTable');
        if (!container) return;

        const threatFilter = document.getElementById('threatFilter')?.value || '';
        const sourceFilter = document.getElementById('sourceFilter')?.value || '';

        let filteredDetections = this.detections;
        if (threatFilter) filteredDetections = filteredDetections.filter(d => d.classification === threatFilter);
        if (sourceFilter) filteredDetections = filteredDetections.filter(d => d.source === sourceFilter);

        container.innerHTML = `
            <div class="table-header">
                <div>Content</div>
                <div>Source</div>
                <div>Threat</div>
                <div>Score</div>
                <div>Time</div>
                <div>Action</div>
            </div>
            ${filteredDetections.map(detection => `
                <div class="table-row">
                    <div class="content-preview" title="${detection.content}">${detection.content}</div>
                    <div class="source-tag">${detection.source}</div>
                    <div><span class="threat-badge ${detection.classification.toLowerCase()}">${detection.classification}</span></div>
                    <div>${detection.threat_score.toFixed(2)}</div>
                    <div>${this.formatTime(detection.timestamp)}</div>
                    <div><button class="view-details" onclick="window.detectionSystem.viewDetectionDetails(${detection.id})">View</button></div>
                </div>
            `).join('')}
        `;
    }

    viewDetectionDetails(id) {
        const detection = this.detections.find(d => d.id === id);
        if (detection) {
            alert(`Detection Details:\n\nContent: ${detection.content}\nSource: ${detection.source}\nThreat Score: ${detection.threat_score}\nKeywords: ${detection.keywords_found.join(', ')}\nHashtags: ${detection.hashtags.join(', ')}\nEngagement: ${detection.engagement}`);
        }
    }

    exportDetections() {
        const csvContent = "data:text/csv;charset=utf-8," 
            + "ID,Timestamp,Source,Content,Sentiment,Threat Score,Classification,Keywords,Hashtags,Engagement\n"
            + this.detections.map(d => 
                `${d.id},"${d.timestamp}","${d.source}","${d.content.replace(/"/g, '""')}",${d.sentiment_score},${d.threat_score},"${d.classification}","${d.keywords_found.join(';')}","${d.hashtags.join(';')}",${d.engagement}`
            ).join("\n");

        const link = document.createElement("a");
        link.setAttribute("href", encodeURI(csvContent));
        link.setAttribute("download", "detections.csv");
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    }

    // Alerts System
    setupAlerts() {
        console.log('🔧 Setting up alerts system...');

        const threatThreshold = document.getElementById('threatThreshold');
        const thresholdValue = document.getElementById('thresholdValue');
        
        if (threatThreshold && thresholdValue) {
            threatThreshold.oninput = (e) => {
                thresholdValue.textContent = e.target.value;
                this.settings.threatThreshold = parseFloat(e.target.value);
            };
        }

        const saveAlertsBtn = document.getElementById('saveAlertsBtn');
        if (saveAlertsBtn) {
            saveAlertsBtn.onclick = () => {
                const email = document.getElementById('alertEmail')?.value;
                const enabled = document.getElementById('emailAlerts')?.checked;
                
                if (email) this.settings.alertEmail = email;
                if (enabled !== undefined) this.settings.emailAlerts = enabled;
                
                alert('Alert configuration saved successfully!');
            };
        }
    }

    generateSampleAlerts() {
        this.alerts = [
            {
                id: 1,
                timestamp: new Date(Date.now() - 1800000).toISOString(),
                message: "High threat detection: 'Another failed policy by Modi government shows India's corruption #antiindia'"
            },
            {
                id: 2,
                timestamp: new Date(Date.now() - 3600000).toISOString(),
                message: "Suspicious hashtag pattern detected: Multiple posts with #antiindia from coordinated accounts"
            },
            {
                id: 3,
                timestamp: new Date(Date.now() - 7200000).toISOString(),
                message: "High threat detection: 'Hindu extremist groups target minorities in india fascist state'"
            }
        ];
    }

    updateAlertsList() {
        const container = document.getElementById('alertsList');
        if (!container) return;

        container.innerHTML = this.alerts.map(alert => `
            <div class="alert-item">
                <div class="alert-time">${this.formatTime(alert.timestamp)}</div>
                <div class="alert-message">${alert.message}</div>
            </div>
        `).join('');
    }

    triggerAlert(detection) {
        const newAlert = {
            id: Date.now(),
            timestamp: new Date().toISOString(),
            message: `High threat detection: '${detection.content.substring(0, 100)}${detection.content.length > 100 ? '...' : ''}'`
        };

        this.alerts.unshift(newAlert);
        if (this.activeSection === 'alerts') {
            this.updateAlertsList();
        }
    }

    // Settings Management
    setupSettings() {
        console.log('🔧 Setting up settings management...');

        const saveSettingsBtn = document.getElementById('saveSettingsBtn');
        if (saveSettingsBtn) {
            saveSettingsBtn.onclick = () => {
                const interval = document.getElementById('updateInterval')?.value;
                const realTime = document.getElementById('realTimeUpdates')?.checked;

                if (interval) this.settings.updateInterval = parseInt(interval);
                if (realTime !== undefined) this.settings.realTimeUpdates = realTime;

                alert('Settings saved successfully!');
            };
        }
    }

    loadSettings() {
        const elements = {
            updateInterval: document.getElementById('updateInterval'),
            realTimeUpdates: document.getElementById('realTimeUpdates'),
            threatThreshold: document.getElementById('threatThreshold'),
            thresholdValue: document.getElementById('thresholdValue'),
            alertEmail: document.getElementById('alertEmail'),
            emailAlerts: document.getElementById('emailAlerts')
        };

        if (elements.updateInterval) elements.updateInterval.value = this.settings.updateInterval;
        if (elements.realTimeUpdates) elements.realTimeUpdates.checked = this.settings.realTimeUpdates;
        if (elements.threatThreshold) elements.threatThreshold.value = this.settings.threatThreshold;
        if (elements.thresholdValue) elements.thresholdValue.textContent = this.settings.threatThreshold;
        if (elements.alertEmail) elements.alertEmail.value = this.settings.alertEmail;
        if (elements.emailAlerts) elements.emailAlerts.checked = this.settings.emailAlerts;
    }

    // Utility Methods
    formatTime(timestamp) {
        const date = new Date(timestamp);
        const now = new Date();
        const diffMinutes = Math.floor((now - date) / (1000 * 60));

        if (diffMinutes < 1) return 'Just now';
        if (diffMinutes < 60) return `${diffMinutes}m ago`;
        if (diffMinutes < 1440) return `${Math.floor(diffMinutes / 60)}h ago`;
        return date.toLocaleDateString('en-IN');
    }
}

// Global initialization
document.addEventListener('DOMContentLoaded', () => {
    console.log('🚀 DOM loaded, initializing Anti-India Campaign Detection System...');
    
    window.detectionSystem = new DetectionSystem();
    
    console.log('🛡️ Anti-India Campaign Detection System MVP loaded successfully!');
    console.log('📊 Dashboard: Real-time monitoring and statistics');
    console.log('🔍 Analyzer: Test content analysis capabilities');
    console.log('🔤 Keywords: Manage detection keywords and hashtags');
    console.log('📋 Detections: View and filter all detected content');
    console.log('🔔 Alerts: Configure and manage system alerts');
    console.log('⚙️ Settings: System configuration and preferences');
});