//設定ファイルの読み込み
const config = require("config/bot.json");
// Discord bot パッケージの読み込み
const discord = require("discord.js");

// client のインスタンス作成
const client = new discord.Client({ws : { intents: discord.Intents.ALL } });

// ログイン成功時の処理
client.on("ready", () => {
    client.user.setActivity(
      `help=${config.prefix}help | Prefix=${config.prefix} | 導入サーバー数:${client.guilds.cache.size}`
    );
    console.log(`${client.user.tag} にログインしました。`)
  });
