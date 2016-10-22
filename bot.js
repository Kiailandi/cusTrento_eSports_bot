var token = process.env.TOKEN;

var Bot = require('node-telegram-bot-api');
var bot;

if(process.env.NODE_ENV === 'production') {
  bot = new Bot(token);
  bot.setWebHook(process.env.HEROKU_URL + bot.token);
}
else {
  bot = new Bot(token, { polling: true });
}

console.log('Bot server started in the ' + process.env.NODE_ENV + ' mode');

// ON START

bot.onText(/\/start/, function (msg, match) {
  var name = msg.from.first_name;
  bot.sendMessage(msg.chat.id, 'Ciao, ' + name + '! Questo è il bot del CUS Trento E-Sports, progettato per rispondere alle domande più comuni.');
});

// SOCIAL LINKS

bot.onText(/\/facebook_page/, function (msg, match) {
  var chatId = msg.chat.id;
  var resp = "https://facebook.com/cusTrentoesports";
  bot.sendMessage(chatId, resp);
});

bot.onText(/\/facebook_group_open/, function (msg, match) {
  var chatId = msg.chat.id;
  var resp = "https://www.facebook.com/groups/615454828497658";
  bot.sendMessage(chatId, resp);
});

bot.onText(/\/facebook_group_closed/, function (msg, match) {
  var chatId = msg.chat.id;
  var resp = "https://www.facebook.com/groups/308618982669998/";
  bot.sendMessage(chatId, resp);
});

bot.onText(/\/twitter/, function (msg, match) {
  var chatId = msg.chat.id;
  var resp = "https://twitter.com/CUSTN_eSports";
  bot.sendMessage(chatId, resp);
});

// VIDEO AND STREAMING

bot.onText(/\/youtube/, function (msg, match) {
  var chatId = msg.chat.id;
  var resp = "https://www.youtube.com/channel/UCk9oeurOIzrcY_SgmEIe1Uw";
  bot.sendMessage(chatId, resp);
});

bot.onText(/\/twitch/, function (msg, match) {
  var chatId = msg.chat.id;
  var resp = "https://www.twitch.tv/cus_trento_esports";
  bot.sendMessage(chatId, resp);
});

bot.onText(/\/hitbox/, function (msg, match) {
  var chatId = msg.chat.id;
  var resp = "www.hitbox.tv/team/custrentoesports";
  bot.sendMessage(chatId, resp);
});

// GOOGLE FORMS

bot.onText(/\/join_league_of_legends/, function (msg, match) {
  var chatId = msg.chat.id;
  var resp = "http://goo.gl/forms/zl7QEx3OgV";
  bot.sendMessage(chatId, resp);
});

bot.onText(/\/join_hearthstone/, function (msg, match) {
  var chatId = msg.chat.id;
  var resp = "http://goo.gl/forms/yNzMn4vkuo";
  bot.sendMessage(chatId, resp);
});

bot.onText(/\/join_counter_strike_go/, function (msg, match) {
  var chatId = msg.chat.id;
  var resp = "http://goo.gl/forms/QXLRj05MbI";
  bot.sendMessage(chatId, resp);
});

bot.onText(/\/join_dota/, function (msg, match) {
  var chatId = msg.chat.id;
  var resp = "http://goo.gl/forms/xlntk8HefT";
  bot.sendMessage(chatId, resp);
});

bot.onText(/\/join_rocket_league/, function (msg, match) {
  var chatId = msg.chat.id;
  var resp = "http://goo.gl/forms/K16xm54e1V";
  bot.sendMessage(chatId, resp);
});

bot.onText(/\/join_overwatch/, function (msg, match) {
  var chatId = msg.chat.id;
  var resp = "http://goo.gl/forms/I4S8K3Jn30";
  bot.sendMessage(chatId, resp);
});

// INFO TESSERAMENTO

bot.onText(/\/tesseramento_universitari/, function(msg, match){
  var chatId = msg.chat.id;
  var resp = "Puoi trovare tutte le informazioni sulla tessera unisport (€20) qui: http://www.unisport.tn.it/unisport-card, sono inoltre richiesti €10 di contributo per la sezione";
  bot.sendMessage(chatId, resp);
});

bot.onText(/\/tesseramento_esterni/, function(msg, match){
  var chatId = msg.chat.id;
  var resp = "La tessera CUS ha un costo di €40, sono inoltre richiesti €10 di contributo per la sezione";
  bot.sendMessage(chatId, resp);
});


// INFO ALLENAMENTI

bot.onText(/\/allenamenti/, function(msg, match){
  var chatId = msg.chat.id;
  var resp = "Gli orari di allenamento sono decisi in autonomia dai team. Gli allenamenti possono essere fatti da casa o presso la nostra sede a Mattarello. Il numero di ore di allenamento minimo a settimana varia in base al livello del team.";
  bot.sendMessage(chatId, resp);
});

// EXTRA

bot.onText(/\/help/, function (msg, match) {
  var chatId = msg.chat.id;
  var commandList = [
    "/help - Lista completa dei comandi disponibili",
    "/facebook_page - Link alla pagina facebook della sezione",
    "/facebook_group_open - Link al gruppo facebook aperto a tutti",
    "/facebook_group_closed - Link al gruppo facebook aperto ai soli tesserati",
    "/twitter - Link al profilo twitter della sezione",
    "/youtube - Link al canale youtube della sezione",
    "/twitch - Link al canale twitch della sezione",
    "/hitbox - Link al team hitbox della sezione",
    "/join_league_of_legends - Link al form di iscrizione per League of Legends",
    "/join_hearthstone - Link al form di iscrizione per Hearthstone",
    "/join_counter_strike_go - Link al form di iscrizione per CS:GO",
    "/join_dota - Link al form di iscrizione per Dota",
    "/join_rocket_league - Link al form di iscrizione per Rocket League",
    "/join_overwatch - Link al form di iscrizione per Overwatch",
    "/tesseramento_universitari - Info sul tesseramento per gli universitari di Trento",
    "/tesseramento_esterni - Info sul tesseramento per gli esterni all'Università di Trento",
    "/allenamenti - Info sulle modalità di allenamento",
    "/more_info - Link al gruppo AMA della sezione",
    "/summon_the_boss - contatto diretto del caposezione [solo per cose importanti]"];
  var resp = "Ecco una lista completa dei comandi del bot:\n";
  commandList.forEach(function(command){resp = resp.concat(command).concat('\n')});
  bot.sendMessage(chatId, resp);
});

bot.onText(/\/more_info/, function (msg, match) {
  var chatId = msg.chat.id;
  var resp = "Ci puoi chiedere qualsiasi info qui -> https://telegram.me/joinchat/Ad2UfAa1QZErjRdsEuH0gg";
  bot.sendMessage(chatId, resp);
});

bot.onText(/\/summon_the_boss/, function (msg, match) {
  var chatId = msg.chat.id;
  var resp = "https://telegram.me/Kiailandi";
  bot.sendMessage(chatId, resp);
});

// MEME & DANK DARK REALM

bot.onText(/\/sticker_pack/, function (msg, match) {
  var chatId = msg.chat.id;
  var resp = "https://telegram.me/addstickers/custrentoesports";
  bot.sendMessage(chatId, resp);
});

bot.onText(/\/magliette/, function (msg, match) {
  var chatId = msg.chat.id;
  var resp = "Poor Cana";
  bot.sendMessage(chatId, resp);
});

bot.onText(/\/wall_of_text/, function (msg, match) {
  var chatId = msg.chat.id;
  var resp = "15 minuti";
  bot.sendMessage(chatId, resp);
});

bot.onText(/\/mainanza/, function (msg, match) {
  var chatId = msg.chat.id;
  var resp = "http://plays.tv/video/56ddf39e3600f135d9/gius";
  bot.sendMessage(chatId, resp);
});

bot.onText(/\/soraka/, function (msg, match) {
  var chatId = msg.chat.id;
  var resp = "No raga, niente multiq, devo arrivare a diamond";
  bot.sendMessage(chatId, resp);
});

module.exports = bot;
