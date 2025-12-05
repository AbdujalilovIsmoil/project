const TelegramBot = require("node-telegram-bot-api");
const token = "8293526053:AAFlvy24iwmWD_R3zbodgxgkrrrPm6IZsMo"; // Replace with your bot token
const bot = new TelegramBot(token, { polling: true });

bot.onText(/\/start/, (msg) => {
  const chatId = msg.chat.id;

  const inlineKeyboard = {
    inline_keyboard: [
      [
        {
          text: "Open My Website",
          web_app: {
            url: "https://project-mu-silk-81.vercel.app/",
          },
        },
      ],
    ],
  };

  bot.sendMessage(chatId, "Click the button to open the website:", {
    reply_markup: inlineKeyboard,
  });
});
