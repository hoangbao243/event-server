module.exports = {
    host: '127.0.0.1',
    port: 15000,          // Cổng 15000 để Nginx đẩy luồng WebSocket vào
    bridge_host: '127.0.0.1',
    bridge_port: 9998,    // Cổng giao tiếp với tiến trình runbridged của Python
    logging: 'info'
};
