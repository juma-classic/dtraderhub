# DTraderHub - Trading Bot Platform

A comprehensive trading bot platform built on D-Bot technology, featuring automated trading strategies for binary options and forex markets.

## 🚀 Features

- **129+ Pre-built Trading Bots** - Ready-to-use XML strategies
- **Visual Bot Builder** - Drag-and-drop interface using Blockly
- **Multiple Trading Strategies**:
  - Martingale Systems
  - Digit Prediction Bots
  - Rise/Fall Strategies
  - Over/Under Bots
  - Even/Odd Strategies
  - Recovery Systems
- **Risk Management** - Built-in stop loss and take profit
- **Real-time Notifications** - Trade alerts and status updates
- **Responsive Design** - Works on desktop and mobile

## 🛠️ Installation & Setup

### Local Development

1. **Clone the repository**
   ```bash
   git clone https://github.com/juma-classic/dtraderhub.git
   cd dtraderhub
   ```

2. **Start local server**
   ```bash
   # Using Python
   cd dbot.dollarprinterhub.site
   python -m http.server 8000
   
   # Or using Node.js
   npx serve dbot.dollarprinterhub.site -p 8000
   ```

3. **Open in browser**
   ```
   http://localhost:8000
   ```

## 📁 Project Structure

```
dtraderhub/
├── dbot.dollarprinterhub.site/          # Main application
│   ├── index.html                       # Entry point
│   ├── static/                          # Static assets
│   │   ├── js/                         # JavaScript bundles
│   │   └── css/                        # Stylesheets
│   └── deriv-logo.svg                  # Logo
├── extracted-bots/                     # XML bot strategies
│   ├── bot-strategies-list.txt         # Strategy index
│   └── *.xml                          # Individual bot files
└── README.md                          # This file
```

## 🤖 Available Bot Strategies

### Popular Strategies
- **BMB DIGIT DIFFER PREDICTOR** - Advanced digit prediction
- **Digit Martingale Strategy** - Classic martingale with digits
- **Expert Speed Bot** - High-frequency trading
- **Over/Under Auto Bot** - Automated over/under trading
- **Rise/Fall Switcher** - Dynamic direction switching
- **Recovery Bots** - Loss recovery systems

### Strategy Categories
1. **Profit Management**: Target-based profit systems
2. **Risk Management**: Stop-loss and recovery mechanisms  
3. **Market Analysis**: Technical indicator-based bots
4. **Automation**: Fully automated trading systems

## 🎯 How to Use

### Importing Bot Strategies
1. Navigate to the bot builder interface
2. Click "Import" or "Load Strategy"
3. Select an XML file from the `extracted-bots/` folder
4. Customize parameters (stake, target, stop loss)
5. Start trading

### Creating Custom Bots
1. Use the visual block editor
2. Drag and drop trading blocks
3. Set up conditions and logic
4. Test on demo account first
5. Export as XML for reuse

## ⚙️ Configuration

### Trading Parameters
- **Initial Stake**: Starting trade amount
- **Target Profit**: Desired profit goal
- **Stop Loss**: Maximum acceptable loss
- **Martingale Multiplier**: Loss recovery multiplier
- **Market Selection**: Choose trading instruments

### Supported Markets
- Synthetic Indices (Volatility, Crash, Boom)
- Forex Pairs (Major, Minor, Exotic)
- Commodities (Gold, Silver, Oil)
- Cryptocurrencies (Bitcoin, Ethereum)

## 🔧 Technical Details

### Frontend Technology
- **React.js** - User interface framework
- **Blockly** - Visual programming blocks
- **WebSocket** - Real-time data feeds
- **Chart.js** - Trading charts and analytics

### Bot Engine
- **XML-based** - Strategy definitions
- **Event-driven** - Reactive trading logic
- **Modular** - Reusable components
- **Extensible** - Custom block support

## 📊 Performance & Analytics

- Real-time profit/loss tracking
- Trade history and statistics
- Performance metrics and reports
- Risk analysis and recommendations

## 🛡️ Risk Management

### Important Disclaimers
- **Demo First**: Always test strategies on demo accounts
- **Risk Capital**: Only trade with money you can afford to lose
- **Market Risk**: Past performance doesn't guarantee future results
- **Responsible Trading**: Set appropriate limits and stick to them

### Built-in Safety Features
- Maximum loss limits
- Trade frequency controls
- Account balance monitoring
- Emergency stop mechanisms

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 📞 Support

- **Issues**: [GitHub Issues](https://github.com/juma-classic/dtraderhub/issues)
- **Discussions**: [GitHub Discussions](https://github.com/juma-classic/dtraderhub/discussions)
- **Documentation**: [Wiki](https://github.com/juma-classic/dtraderhub/wiki)

## 🙏 Acknowledgments

- Original D-Bot platform developers
- Trading strategy contributors
- Open source community
- Beta testers and feedback providers

---

**⚠️ Trading Disclaimer**: Trading binary options and forex involves substantial risk and may not be suitable for all investors. Past performance is not indicative of future results. Please trade responsibly and consider seeking independent financial advice.