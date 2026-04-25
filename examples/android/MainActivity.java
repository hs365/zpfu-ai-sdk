package com.example.zpfuai;

import android.os.Bundle;
import android.webkit.WebSettings;
import android.webkit.WebView;
import android.webkit.WebViewClient;
import androidx.appcompat.app.AppCompatActivity;

public class MainActivity extends AppCompatActivity {
    private WebView webView;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);

        webView = findViewById(R.id.webView);
        
        // 配置 WebView
        WebSettings settings = webView.getSettings();
        settings.setJavaScriptEnabled(true);        // 必须启用 JavaScript
        settings.setDomStorageEnabled(true);       // 启用 DOM 存储
        settings.setUseWideViewPort(true);         // 支持viewport
        
        // 加载盈客AI客服页面
        String customerId = "YOUR_CUSTOMER_ID";   // 替换为您的客户ID
        webView.loadUrl("https://ai.zpfu.com/" + customerId);
        
        // 在 WebView 内打开链接，而不是浏览器
        webView.setWebViewClient(new WebViewClient());
    }

    @Override
    public void onBackPressed() {
        if (webView.canGoBack()) {
            webView.goBack();
        } else {
            super.onBackPressed();
        }
    }
}
