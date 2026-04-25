import UIKit
import WebKit

class ViewController: UIViewController {
    
    private var webView: WKWebView!
    
    override func viewDidLoad() {
        super.viewDidLoad()
        
        // 创建 WKWebView
        let webConfiguration = WKWebViewConfiguration()
        webConfiguration.preferences.javaScriptEnabled = true    // 必须启用 JavaScript
        webConfiguration.preferences.domStorageEnabled = true   // 启用 DOM 存储
        
        webView = WKWebView(frame: .zero, configuration: webConfiguration)
        webView.translatesAutoresizingMaskIntoConstraints = false
        view.addSubview(webView)
        
        // 设置布局约束
        NSLayoutConstraint.activate([
            webView.topAnchor.constraint(equalTo: view.topAnchor),
            webView.bottomAnchor.constraint(equalTo: view.bottomAnchor),
            webView.leadingAnchor.constraint(equalTo: view.leadingAnchor),
            webView.trailingAnchor.constraint(equalTo: view.trailingAnchor)
        ])
        
        // 加载盈客AI客服页面
        let customerId = "YOUR_CUSTOMER_ID"  // 替换为您的客户ID
        if let url = URL(string: "https://ai.zpfu.com/" + customerId) {
            let request = URLRequest(url: url)
            webView.load(request)
        }
    }
}
