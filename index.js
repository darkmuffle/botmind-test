module.exports = require('./src');

async function App(context) {
    if (context.event.isText) {
      await context.sendText(`received the text message: ${context.event.text}`);
    }
  }