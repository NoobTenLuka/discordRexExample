import { config } from "https://deno.land/x/dotenv/mod.ts";
import { Client, ClientOptions } from "https://raw.githubusercontent.com/NoobTenLuka/discordRex/master/mod.ts";

const options: ClientOptions = {debug: true} 

const client = new Client(options);

client.registerHandler("MESSAGE_CREATE", message => {
  if(message.author.bot) {
    return;
  }

  if(!message.content.startsWith('!ping')) {
    return;
  }

  message.reply("Pong!");
})

client.login(config({ safe:true })["DISCORD_TOKEN"]);