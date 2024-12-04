import io from 'socket.io-client';

class SocketService {
  constructor() {
    this.socket = null;
    this.baseURL = 'http://localhost:5000';
  }

  connect() {
    if (!this.socket) {
      this.socket = io(this.baseURL, {
        transports: ['websocket'],
        reconnection: true,
        reconnectionAttempts: 5,
        reconnectionDelay: 1000,
        auth: {
          token: localStorage.getItem('token')
        }
      });

      this.socket.on('connect', () => {
        console.log('Socket connected successfully');
        const userId = localStorage.getItem('userId');
        if (userId) {
          this.socket.emit('userConnected', userId);
        }
      });

      this.setupDefaultListeners();
    }
    return this.socket;
  }

  setupDefaultListeners() {
    if (!this.socket) return;

    this.socket.on('connect_error', (error) => {
      console.error('Socket connection error:', error);
      setTimeout(() => {
        this.socket.connect();
      }, 1000);
    });

    this.socket.on('disconnect', (reason) => {
      console.log('Socket disconnected:', reason);
      if (reason === 'io server disconnect') {
        this.socket.connect();
      }
    });

    this.socket.on('ping', () => {
      this.socket.emit('pong');
    });
  }

  disconnect() {
    if (this.socket) {
      this.socket.disconnect();
      this.socket = null;
    }
  }
}

export default new SocketService();
