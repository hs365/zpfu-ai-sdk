const http = require('http');
const crypto = require('crypto');

const PORT = 3000;
const VERIFY_TOKEN = 'YOUR_VERIFY_TOKEN';  // 设置您的验证Token

// 验证微信公众号服务器配置
function verifyWeChat(req, res) {
    const { signature, timestamp, nonce, echostr } = req.query;
    const token = VERIFY_TOKEN;
    const arr = [token, timestamp, nonce].sort();
    const result = crypto.createHash('sha1').update(arr.join('')).digest('hex');
    
    if (result === signature) {
        res.end(echostr);
    } else {
        res.end('error');
    }
}

// 接收客户消息
function handleMessage(req, res) {
    let body = '';
    req.on('data', chunk => { body += chunk; });
    req.on('end', () => {
        console.log('收到消息:', body);
        
        // 解析消息
        // const msg = JSON.parse(body);
        // const { user_id, message, timestamp } = msg;
        
        // TODO: 处理消息，如：
        // 1. 存储到数据库
        // 2. 推送到飞书/微信
        // 3. 自动回复
        
        res.end('success');
    });
}

http.createServer((req, res) => {
    if (req.url === '/wechat' && req.method === 'GET') {
        verifyWeChat(req, res);
    } else if (req.url === '/webhook' && req.method === 'POST') {
        handleMessage(req, res);
    } else {
        res.end('OK');
    }
}).listen(PORT, () => {
    console.log(`Webhook服务运行在 http://0.0.0.0:${PORT}`);
    console.log('微信验证: GET /wechat');
    console.log('消息接收: POST /webhook');
});
