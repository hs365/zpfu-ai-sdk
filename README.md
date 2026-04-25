# 盈客AI SDK

盈客AI获客系统官方SDK，3行代码即可集成到您的网站/App/微信公众号。

## 功能特性

- 🌐 **网页嵌入** - 3行代码接入AI客服
- 📱 **Android/iOS** - 原生App快速集成
- 💬 **微信公众号** - 自动回复+留资捕获
- 🔔 **Webhook** - 消息推送到您的系统
- 🌐 **100+语言** - 支持多语言切换

## 快速开始

### 网页嵌入

在网页底部加入：

```html
<script src="https://cdn.zpfu.com/{YOUR_ID}/chatbot.js"></script>
```

### Android 集成

```java
WebView webView = findViewById(R.id.webView);
webView.getSettings().setJavaScriptEnabled(true);
webView.loadUrl("https://ai.zpfu.com/{YOUR_ID}");
```

### iOS 集成

```swift
let webView = WKWebView(frame: .zero)
webView.load(URLRequest(url: URL(string: "https://ai.zpfu.com/{YOUR_ID}")!))
view.addSubview(webView)
```

## 获取接入ID

访问 [vip.zpfu.com](https://vip.zpfu.com) 注册并获取您的专属接入ID。

## 文档

完整文档：[docs.zpfu.com](https://www.zpfu.com/docs.html)

## License

MIT
