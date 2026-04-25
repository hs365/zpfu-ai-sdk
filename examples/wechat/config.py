# 微信公众号 Webhook 配置
# 在 vip.zpfu.com 控制台获取以下配置

CONFIG = {
    # 你的客户ID (在控制台获取)
    'CUSTOMER_ID': 'YOUR_CUSTOMER_ID',
    
    # 微信公众号后台配置的 Token
    'WX_TOKEN': 'YOUR_WX_TOKEN',
    
    # 微信公众号后台配置的 EncodingAESKey (可选)
    'WX_AES_KEY': 'YOUR_WX_AES_KEY',
    
    # 消息接收地址 (必须是 HTTPS)
    'WEBHOOK_URL': 'https://your-domain.com/wechat',
}

# 消息类型映射
MESSAGE_TYPES = {
    'text': '文本消息',
    'image': '图片消息',
    'voice': '语音消息',
    'video': '视频消息',
    'shortvideo': '小视频消息',
    'location': '位置消息',
    'link': '链接消息',
    'event': '事件消息',
}
