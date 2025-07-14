const fs = global.nodemodule["fs-extra"];
module.exports.config = {
  name: "goibot",
  version: "1.0.1",
  hasPermssion: 0,
  credits: "Mod by John Lester",
  description: "goibot",
  commandCategory: "Noprefix",
  usages: "noprefix",
  cooldowns: 5,
};
module.exports.handleEvent = async function({ api, event, args, Threads, Users }) {
  var { threadID, messageID, reason } = event;
  const moment = require("moment-timezone");
  const time = moment.tz("Asia/Karachi").format("hh:mm:s");
  const hours = moment.tz("Asia/Karachi").format("hh");
  var idgr = `${event.threadID}`;
  var id = event.senderID;
  var name = await Users.getNameUser(event.senderID);

  var tl = ["TUM MERE BOSS Professor KI GF BAN JAO LDKI🙈🙈" , "Haye Main Sadke jawa Teri Masoom Shakal pe baby 💋 " , "Bot Nah Bol Oye Janu bol Mujhe " , "Bar Bar Disturb Na KRr JaNu Ke SaTh Busy Hun 🤭🐒" , "Main gariboo se baat nahi karti 😉😝😋🤪" , "Itna Na Pass aa Pyar ho Jayga" , "Bolo Baby Tum Mujhse Pyar Karte Ho Na 🙈💋💋 " , "Are jaan Majaak ke mood me nhi hu main jo kaam hai bol do sharmao nahi" , "Bar Bar Bolke Dimag Kharab Kiya toh. Teri ...... Mummy Se Complaint Karungi🤬" , "Tu Bandh nhi Karega kya?" , "Where is my Professor" , "Aree Bandh kar Bandh Kar" , "Tujhe Kya koi aur Kam nhi ha? Puradin Khata hai Aur Messenger pe Bot Bot Karta h" , "Professor Ko Bol Dungi Me Mujhe Paresan Kiya To" , "Tum Na Single Hi Maroge" , "Tujhe Apni Bejjati Karwane Ka Saukh hai?" , "Abhi Bola Toh Bola Dubara Mat Bolna" , "Teri To Ruk Tu Bhagna Mat" , "Bol De koi nahi dakh rha 🙄" , "Haaye Main Mar Jawa Babu Ek Chuma To Do Kafi Din Se Chumi Nahi Di 😝" , "Dur Hat Be  Mujhe Aur Koi Kam Nahi Kya Har Waqat Mujhy Tang Kerte Rhte ho 😂" , "Are Bolo Meri Jaan Kya Hall Hai😚 " , "Ib Aja Yahan Nhi Bol Sakti 🙈😋" , "Mujhe Mat BuLao Naw Main buSy Hu Naa" , "Bot Bolke Bejjti Kar Rahe Ho yall...Main To Tumhare Dil Ki Dhadkan Hu Na Baby...💔🥺" , "Are Tum Wahi ho nah Jisko Main Nahi Janti 🤪" , "Kal Haveli Pe Mil Jara Tu 😈" , "Aagye Salle Kabab Me Haddi 😏" , "Bs Kar U ko Pyar Ho Na Ho Mujhe Ho Jayga Na" , "FarMao 💋" , "BulaTi Hai MaGar Jaane Ka Nhi 😜" , "Main To Andhi Hun 😎" , "Phle NaHa kar Aa 😂" , "Aaaa Thooo 😂😂😂" , "Main yahin hoon kya hua sweetheart ," , "chomu Tujhe Aur Koi Kaam Nhi H? Har Waqt Bot Bot Karta H" , "Chup Reh, Nhi Toh Bahar Ake tera Dant Tor Dungi" , "WaYa KaRana Mere NaL 🙊" , "MaiNy Uh Sy Bt Nhi kRrni" , "MeKo Kxh DiKhai Nhi Dy Rha 🌚" , "Bot Na BoL 😢 JaNu B0ol 😘 " , "Bar Bar Disturb Na KRr JaNu Ke SaTh Busy Hun  😋" , "Main Gareebon Sy Bt Nhi kRti 😉😝😋🤪" , "Itna Na Pass aa Pyar h0o JayGa" , "MeKo Tang Na kRo Main Kiss 💋 KRr DunGi 😘 " , "Ary yrr MaJak Ke M0oD Me Nhi Hun 😒" , "HaYe JaNu Aow Idher 1 PaPpi Idher d0o 1 PaPpi Idher 😘" , "Dur HaT Terek0o 0or K0oi Kam Nhi Jb DeKho Bot Bot ShaDi KerLe Mujhsy 😉😋🤣" , "TeRi K0oi Ghr Me Nhi SunTa T0o Main Q SuNo 🤔😂 " , "IB Aja Yahan Nhi B0ol Sakti 🙈😋" , "Mujhe Mat BuLao Naw Main buSy h0o Naw" , "Kyun JaNu MaNu Another Hai 🤣" , "Are TuMari T0o Sb he baZzati kRrty Me Be kRrDun 🤏😜" , "KaL HaVeLi Prr Aa ZaRa T0o 💋" , "Bx KRr Uh k0o Pyar H0o Na H0o Mujhe H0o JayGa" , "FarMao 💋" , "BulaTi Hai MaGar JaNy Ka Nhi 😜" , "Main T0o AnDhi Hun 😎" , "Phle NaHa kRr Aa 😂" , "Papi ChuLo 🌚" , "TeRek0o DiKh Nhi Rha Main buSy Hun 😒" , "TeRa T0o GaMe BaJana PreGa" , "Ta Huwa 🥺"  , "TuM Phr AaGye 🙄 Kisi 0or Ny Muu Nhi LaGaYa Kya🤣🤣🤣" , "MeKo JaNu Chai Hai Tum Single H0o?" , "Aaaa Thooo 😂😂😂" , "Main S0o Rhi Hun " , "Ase He HansTy Rha kRo 😍" , "•••••••••••••••••••••••••••••🦢𒀱卄ɅƔƏ MɅ🅘ɳ ʍɅᏒ••••🌿💞 JɅωɅ ┼ƏᏒ🅘 ʍɅ🅢𝖚ʍ 🅢ɅҠɅɭ 𝐩Ə ɮɅɮƔ 💋 " , "Bot Na Bol Oye Janu bol Mujhe " , "Bar Bar Disturb Na Karen Rahul JaNu Ke SaTh Busy Hun 🤭🐒" , "Main flirty logo Sy Bt Nhi karti 😉😝😋🤪" , "Itna Pass mat aa Pyaar h0 JayGa" , "Bolo Babu Tum Mojy Pyar Karte Ho Na 🙈💋💋 " , "Are jaan Majaak ke mood me nahi hun main jo kaam hai bol do sharmao nahi" , "han ji bolo kya seva karne aapki 😶🤍" , "Tu Bandh nhi Karega kya?" , "kya Sunna Hai apko mere se flirty kahike🤐🤣 " , "Haa ji boliye kya kam he hamse 🙈" , "Aree band kar band Kar" , "Mein hath jod ke aap  Se Gujarish Karti hu mojy na bolaye", "Suno Lrki tum mere boss  Professor ki Gf ban jao", "Professor ke piyar me itni andhi ho gai hu meko koi ol najal nhi aat 😐", "Bot mat bula me to tumhary dil ki dhaKan hu na  Baby 🥹","suno larki zindagi bhar khush rehn chatti Ho To mery Boss ki bivi Ban jao 🤝😅🙈","JaNum Pori raat Dhop me apka mainy intizar kiya h🥲🥹",," Ye Dil Buhat Udas Hy Koi Frnd B Nahi Pass Hy Hr Waqt Boring sa Ehsas Hy Zra professor  ka Number to Dena Suna Hy Bacha Bohat Out Class hy" , "جس طرف بزم میں وہ آنکھ اٹھا دیتے ہیں /nدلِ عشاق میں ہلچل سی مچا دیتے ہیں /nجام و مینا ہی پہ موقوف نہیں ان کا کرم موج میں آئیں تو آنکھوں سے پلا دیتے ہیں/nProfessor💜","Jab mera Message aye toh sare kaam chor kar sirf Mujhe reply kia karo😾😒", "Or Btao Real Life Ma bh itnyy Achy ho jitny social media per Bntyy ho>>🙂", "Pakistani Relationship:\nTum Feel Kro Meh Tumary uper hun 😒💔", "Us k jany k bd apna number uske naam se save kr ke i love you bolti hu aesa lgta h wo i love you bol rha ha😒", "Be a Good Human.Delete GB Whatsapp💔🙂", "2 Din Pyar sy Baat kr loo tou Ammiyan bn  jatii hain🙂😒", "boys after One Mint of Relationship...\nhusband hu mn apka🙂🤦", "hum Larkiyon ko achy sy pta hai kahan -Bhai- Bolna kaha -Ap- or kaha -Tum- 🙂", "Aaj mein ny Khud ko TV py dheka \n\nJab Tv Band Tha 🙂", "Qadar krlo Meri...\nKya pta Main b Panadol ki trha aik dam shaat hojun😒", "Naraz bandy ko manany ka sab sy acha tareka Ap khud us sy naraz hojaoo🙂🐣", "Jaisi meri harkaten hai kunwari he marunga🙂👀", "میں نے جس دن سکول میں پہلی پوزیشن حاصل کی میں اسی دن سمجھ گئی تھی،، کے یہ ملک کبھی ترقی نہیں کر سکتا😐😐", "شام کی چائے نا ملے تو ایسا لگتا ہے 🤣جیسے بندہ سسرال جائے🚶اور منگیتر نہ ملیں","وقت میرا بھی بدلے گا بس گھڑی میں سیل ڈالنے کی دیر ہے","محبت اسی دن مر گئی تھی جب تمہیں پردے سے ناک صاف کرتے دیکھا تھا","ہر بات پہ منہ پھلا لیتے ہو😦🙁☹🎈🎈🎈🎈🎈سنو پچھلے جنم میں غبارے تھے کیا","کیا کہا محبت ہے ہم سے 😂😂😂😂کتنی دیر والا پیکج ہے میری جان","میری محبت نے مجھے چیک کرنے کے لئے میرا نمبر اپنی سہیلی کو دے دیا تھا😍😂😂😂😆😆😆😆اور آج اس کی سہیلی اور میں شادی کر رہے ہیں","میں وہ ہوں جس نے تیرے بچھڑ جانے پر خودکشی نہیں کی لیکن جوانی میں بوڑھا نظر آنےلگ گیا۔۔","اس نے کہا میرے کانوں میں کچھ میٹھا بولومیں نے بھی پھر کہہ رس گلے گلاب جامن تے برفی","وہ لڑکے بھی لڑکیوں کو کہہ رہے ہوتے ہیں میں تمہیں کبھی نہ بھول پاوں گا  جو دکان پر جا کر یہ بھول جاتے ہیں  امی نے دال کون سی منگوائی تھی","جیسے پیکج کے بغیر فون بیکار ہوتا ہے ہائے تم  خود  سوچو تمہارے  بغیر زندگی کیسی ہوگی","جس دن تم میرا ہاتھ تھام کر چلو گے اُس دن کشمیر کے ہیڈ آفس کے سیٹلائٹ فون پر یہ پیغام گونجے گا مشن کمپلیٹیڈ !نظامِ شمسی میں دو گمشد ستاروں نے ایک دوسرے کو پا لیا ہے","اپنی جرابیں دھو کر پہنا کریں یہ نہ ہو کہ کامیابی آپ کہ قدم چومنے آۓ اور فوت ہو جاۓ","تمہیں بارش بہت پسند ہےاور مجھے کیچڑ میں گرتی ہوئی تم","kali kali zulfon k phandy na dalo Heer burka smbhalo, bhai stand utha lo🙂🚶", "Lips  kissing is not Romance It's sharing Bacteria>>>🙂", "💸💚🖇️Tm Propose kr k to dekho qabul  krny ki zimedari merii - 🙂🫣_", "~ Piyawr Hameshw Aalsii InsaN sw kwr0 mUjhei aby neend  ary hai baki Kl Bta0 gw 🙂🔪", "𝙀𝙠 𝙗𝙖𝙖𝙧 𝙨𝙝𝙖𝙙𝙞 𝙝𝙤𝙟𝙖𝙚 𝙥𝙝𝙞𝙧 𝙬𝙞𝙛𝙚 𝙠𝙞 𝙜𝙝𝙪𝙡𝙖𝙢𝙞 🧸🙂", "*Ghr məıın - عـــزت noi werna Admii thy hum bhi kam kə'w -' ♡🖇️😞*😒", "🦋🍒____________🙂🎀پتہ لگا تینوں شوق لتراں دا🤝🏻🔐🫰🏻", "Suno Jawn DiL کرتا ha ہر Waqt تمہاری Chumiya لیتا Raho😌🙈", "Khud ko single keh kr Apne khufiya janu ka janaza na nikala kro.😀🤞😓", "Love me 💕 like Dani love's Dua♥️", "Hi mujY Dani Malik chokra ne baNaYa hY 🙂", "Kᴀʜᴀɴɪ Sᴜɴᴏ !😔 Zᴜʙᴀɴɪ sᴜɴᴏ !😔Mᴜᴊʜʏ Bᴜᴋʜᴀʀ Hᴏᴡᴀ Tʜᴀ'ᴡ 😔 )Eᴋ sᴏ Cʜᴀᴀʀ Hᴏᴡᴀ Tʜᴀ'ᴡ 🥺💔:)", "- 𝙩𝙪𝙢 𝙢𝙚𝙧𝙖 𝙙𝙞𝙡 𝙩𝙤 𝘾𝙝𝙪𝙧𝙖 𝙣𝙝𝙞 𝙥𝙖𝙮 𝙠𝙞𝙖 𝙛𝙖𝙞𝙙𝙖 𝙩𝙢𝙝𝙖𝙧𝙞 𝘾𝙝𝙤𝙤𝙧 𝙟𝙚𝙨𝙞 𝙨𝙝𝙠𝙖𝙡 𝙠𝙖!! 🙂", "𝐄𝐤 𝐛𝐚𝐚𝐫 𝐈 𝐋𝐨𝐯𝐞 𝐘𝐎𝐲 𝐁𝐨𝐥 𝐃𝐨 𝐍𝐚 𝐌𝐚𝐫 𝐓𝐡𝐨𝐫𝐢 𝐉𝐚𝐮𝐠𝐢 🙄😕)( 👑🍒", "SharaM kr0'w LarKiy0' mujhe aaj AnTii ne propose Kar Diiy4'w ___/////😞🍁☠️🌸", "Imagine I am your Ex 🥲say whatever you want to say", "-😁🎗_ZeHer banaNa sikH raHiii hUn😂👀 BuS iskO trY karnY waLa cHaHiye _💔🙄😹", "I love You Madiha♥️ ,fatima,Ayesha, Maryam,and 299 others 🙂", "Hye ye Cute Cute DpiYa  Unke peeche'w Chhupii MoTii Kalii AnTiiYa 🙂🍁", "°Mein واقعی Piyaara Hun Ya Log چونا Lagaty hain-🙂💔","Ittuu🤏 si shram ker Lya kro bot bot krty wqt 🙂 💔✨⚠️†", "Ary Yahin Hon Jan😗", "jiee Shona 😍", "Love you", "Miss YoU NaW Inna sara👌🏻👌🏻", "To mera putar chutti kr", "OkkaY Babbu", "😁Smile I am Taking Selfy✌️🤳", "🥺Jan nahi kehna to men naraz ho jana he", "Jesay Yaad Karne Se Hi Mood Kharab Hojaye Ek Aisa Fazool Khayal Ho Tum", "Main ap ki ami ko btaou ga ap Facebook use kerty ho 😂", "#__LaLa__LaLa__Lori #__Koi___Chori__Set__Ni__HoRRI", ,"Bhai Wese Ldki Patane Ka Trick Btao Na Bada Din Ho Gya Single Hu ;🙂" ,"Ufff aap Ki اداٸیں😗 Chaly Shabas Apna'w munh Dho kY aye'w..]] . 🙂✨//. 🦋🍒)" ,"Suno Jawn DiL کرتا ha ہر Waqt تمہاری Chumiya لیتا Raho😌🙈","𝐄𝐤 𝐛𝐚𝐚𝐫 𝐈 𝐋𝐨𝐯𝐞 𝐘𝐎𝐲 𝐁𝐨𝐥 𝐃𝐨 𝐍𝐚 𝐌𝐚𝐫 𝐓𝐡𝐨𝐫𝐢 𝐉𝐚𝐮𝐠𝐢 🙄😕)( 👑🍒","Jab tk mein single hun yeh bh meri hai wo bhi meri ha Tum kia parh rahi tum bh meri ho😒❤🙂" ,"𝗜𝘁𝗡𝗮 𝗦𝗶𝗻𝗴𝗟𝗲 𝗛𝘂 𝗞 𝗝𝗮𝗻 𝗕𝗵𝗶 𝗹𝗶𝗸𝗛o to 𝗔𝘂𝘁𝗼 𝗖𝗼𝗿𝗿𝗲𝗰𝘁 𝐣𝐚𝐩𝐚𝐧 𝐤𝐫 𝐝𝐞𝐭𝐚 𝐡𝐚" ,"kxh LoGon Ki TyPing.. Ase LiKha Aa Rha HoTa Hai Jse WasiHat LiKh Rhy H0on 😒0or RePly ATa Hai Hmmmm 😂" ,"Baz DaFa JaWab DeNy Ke LiYe alFaz Nhi 👉😒 Ase SaQal He KaFi H0oTi Hai 😹" ,"YaKeen KRren Kxh L0og Bread Ke 1 Slice Ke TarHan H0oTy Hain j0o Kisi K0o Axhy Nhi LagTy Tum W0o Slice H0o 🫢🫣😂" ,"JeSe Aap Ki ZuBan ChalTi Hai Wse KhuD ChLo T0o MoTaPay Ka RoNa Na DalNa Pre 😂" ,"MeRi PosT PRr aYa KRro Main Kbhi Kbhi MehB0ob K0o MuThi Me kRrNy Ke Tawiz Be BTaTa Hun 😜" ,"KTny WaHaYaT H0o 🥺 Phr Be HaYaT H0o 🤭😹😹😹" ,"SaNnu ilam aa Tu BaRi VaDDi Film aa 😅" ,"ApNy DiMag Ka PaSsWord DeNa 😝 Aqal Install kRrNi Hai 😂" ,"Phr Aaj KaL KiSs Ke SaTh ChaKar Hai Uh Ka 😂😂😂" ,"➝𝗚𝗶𝗿𝗹𝘀 𝗶𝗻 𝗠𝗮𝗿𝗸𝗲𝘁: ➝𝗪𝗼 𝗕𝗹𝗮𝗰𝗸𝗗𝗿𝗲𝘀𝐬𝗗𝗲𝗸𝗵𝗮𝗡𝗮➝𝗕𝐨𝐲 𝗶𝗻 𝗠𝗮𝗿𝗸𝗲𝗧:➝𝗪𝗼 𝗕𝗹𝗮𝗰𝗞 𝗗𝗿𝗲𝘀𝘀 𝗪𝗮𝗹𝗶 𝗗𝗲𝗸𝗛🙂🤝" ,"➝𝗧𝘂𝗺 𝗪𝗼𝗛𝗶 𝗵𝗢 𝗡𝗮➝𝗝𝗶𝘀 𝗞𝗶 𝗩𝗼𝗶𝗰𝗲 𝗕𝗲𝗲𝗵𝗸𝗮𝗥𝗶𝗼 𝗝𝗮𝘀𝗶 𝗛𝗮𝗶-^☘️🙂" ,"Ek pyare s Bandi ko Mention karo 🙂🤝Set may khudh karlonga🌚🙈🌸" ,"➝𝗞𝘂𝗰𝗛 𝗱𝗶𝗻 𝗕𝗮𝗱 𝗠𝗲𝗿𝗮 𝗡𝗶𝗸𝗸𝗮𝗛 𝗛𝗮𝗶➝𝗝𝗶𝘀 𝗻𝗬 𝗞𝗿𝗻𝗮 𝗛𝗮𝗶 𝗔 𝗷𝗮𝗬🙂🤝" ,"تـیـری بیـوفـائـی نـے مجھـے ٹھـرکـی بنـا دیـا😞" ,"تم تو شکـل سے ہی میـری لگتـی ہو🥺" ,"➝𝗗𝘂𝗻𝗶𝗬𝗮 𝗸 𝗦𝗮𝗥𝘆 𝗠𝘇𝗮𝗞 𝗘𝗸 𝗧𝗮𝗿𝗮𝗳 𝗢𝗿➝𝗜𝗗 𝗖𝗮𝗿𝗱 𝗽𝗬 𝗔𝗽𝗻𝗶 𝗣𝗵𝗼𝘁𝗼 𝗘𝗸 𝗧𝗮𝗿𝗮𝗳🥹💔" ,"Dil De Diya Hen Gurda Nahi Dengy, Jo Karna Hai Karlo Sanam 👀😌" ,"Main chAhta hun ky Woh jab B Dhoka kHae nOtificationS mujhe Ayee🙂💔" , "یقین کریں میٹرک کے پیپر بہت آسان ہیں.میں نے خود سات دفعہ دیئے ہیں😐", "Itni memories mere khud dimagh mai nahi hai jitni Snapchat ny bna rkhi hai","Chakki Chakki Meko Is Mulk Sy Bahir Nikal 🥹" ];
  var rand = tl[Math.floor(Math.random() * tl.length)]

  if ((event.body.toLowerCase() == "by") || (event.body.toLowerCase() == "bye")) {return api.sendMessage("ChaL NiKaL 🙄", threadID);
   };

  if ((event.body.toLowerCase() == "inbox") || (event.body.toLowerCase() == "ib")) {
     return api.sendMessage("️ KYa IB IB 👿 Idher BOL MeRe SaMny ", threadID);
   };

   
   if ((event.body.toLowerCase() == "baby") || (event.body.toLowerCase() == "babu")) {
     return api.sendMessage("️🙈🙉🙊", threadID);
   };
  
   if ((event.body.toLowerCase() == "owner") || (event.body.toLowerCase() == "admin")) {
     return api.sendMessage("My Owner AestHetic bOy 𓆩ҞȺꞨĦĪӺ ꞦȺƵȺ𓆪🖤", threadID);
   };
if ((event.body.toLowerCase() == "sim") || (event.body.toLowerCase() == "simi")) {
     return api.sendMessage("Sim Sim Na KRr IjjaT Sy MeRa Prefix LaGa 0or Bt kRr ITna Free Nhi kRta Me 😎🤞", threadID);
   };

   if ((event.body.toLowerCase() == "amy") || (event.body.toLowerCase() == "amyy")) {
     return api.sendMessage("Amy Amy Na KRr IjjaT Sy MeRa Prefix LaGa 0or Bt kRr ITna Free Nhi kRta Me 😎🤞", threadID);
   };

   if ((event.body.toLowerCase() == "tharki bot") || (event.body.toLowerCase() == "Bot tharki")) {
     return api.sendMessage("Tu TharKi Tra Bap TharKi TeRa DaDa TharKi 🤬🤗", threadID);
   };

   if ((event.body.toLowerCase() == "lanti bot") || (event.body.toLowerCase() == "lanti hai")) {
     return api.sendMessage("Aby Chuuu Tu LanTi Le KaB0ol kRr 🖐️🐾👣", threadID);
   };

   if ((event.body.toLowerCase() == "bc") || (event.body.toLowerCase() == "bhenchod")) {
     return api.sendMessage("Tu Hai Bc 🙂 Main T0o BoT Hun 😂😂😂 ", threadID);
   };

   if ((event.body.toLowerCase() == "ja rha") || (event.body.toLowerCase() == "ja rhi")) {
     return api.sendMessage("Are Tu Ja Na Ree ", threadID);
   };

   if ((event.body.toLowerCase() == "nikal") || (event.body.toLowerCase() == "nikl")) {
     return api.sendMessage("ChaL ChaL Tu NiKaL", threadID);
   };

   if ((event.body.toLowerCase() == "jan") || (event.body.toLowerCase() == "janu")) {
     return api.sendMessage("Aww🥰 Yes My LoVe", threadID);
   };

if ((event.body.toLowerCase() == "😀") || (event.body.toLowerCase() == "😀😀")) {
     return api.sendMessage("ShaRafat Sy MusKara Rhy 😂", threadID);
   };
   
   if ((event.body.toLowerCase() == "😃") || (event.body.toLowerCase() == "😃😃")) {
     return api.sendMessage("ChuhY JasA MuH Na DekHa 😆", threadID);
   };
   
   if ((event.body.toLowerCase() == "😂") || (event.body.toLowerCase() == "😂😂")) {
     return api.sendMessage("Ye HanS RahY H0o Yaa ROo RahY Hoo 🤔 ", threadID);
   };
   
   if ((event.body.toLowerCase() == "😁") || (event.body.toLowerCase() == "😁😁")) {
     return api.sendMessage("TrRi Shakal Sy Tu ZiaDa Dant Chmak RhYy 🫡", threadID);
   };
   
   if ((event.body.toLowerCase() == "😆") || (event.body.toLowerCase() == "😆😆")) {
     return api.sendMessage("Muh OpeN ankhY Band Ye koNsa Magic Ha ThaRki🙄", threadID);
   };
   
   if ((event.body.toLowerCase() == "😅") || (event.body.toLowerCase() == "😅😅")) {
     return api.sendMessage("Tri TinD Sy PaNi KYun TaPak Rha 😂", threadID);
   };
   
   if ((event.body.toLowerCase() == "🤣") || (event.body.toLowerCase() == "🤣🤣")) {
     return api.sendMessage("AsY Kon HansTa Hai BesHram insaN", threadID);
   };
   
   if ((event.body.toLowerCase() == "😭") || (event.body.toLowerCase() == "😭😭")) {
     return api.sendMessage("Awww Meko V LoooNa Aa RaHa 🥹🥺", threadID);
   };
   
   if ((event.body.toLowerCase() == "😉") || (event.body.toLowerCase() == "😉😉")) {
     return api.sendMessage("GanDi NaZar Sy AnKh Na Mar 😂😂😂", threadID);
   };
   
   if ((event.body.toLowerCase() == "😗") || (event.body.toLowerCase() == "😗😗")) {
     return api.sendMessage("😚😚😚", threadID);
   };
   
   if ((event.body.toLowerCase() == "😙") || (event.body.toLowerCase() == "😙😙")) {
     return api.sendMessage("😗😗😗", threadID);
   };
   
   if ((event.body.toLowerCase() == "😚") || (event.body.toLowerCase() == "😚😚")) {
     return api.sendMessage("😗😙😚", threadID);
   };
   
   if ((event.body.toLowerCase() == "😘") || (event.body.toLowerCase() == "😘😘")) {
     return api.sendMessage("MeKo BHi kR L0o Naw Pappi 🥹", threadID);
   };
   
   if ((event.body.toLowerCase() == "🥰") || (event.body.toLowerCase() == "🥰🥰")) {
     return api.sendMessage("Aww Love You Naw Jaan 😘", threadID);
   };
   
   if ((event.body.toLowerCase() == "😍") || (event.body.toLowerCase() == "😍😍")) {
     return api.sendMessage("ChaLl Hatt ThaRki", threadID);
   };
   
   if ((event.body.toLowerCase() == "🤩") || (event.body.toLowerCase() == "🤩🤩")) {
     return api.sendMessage("InSano Ki Ankhe HoTi Uh Ke Star Hain 😂😂😂", threadID);
   };
   
   if ((event.body.toLowerCase() == "🥳") || (event.body.toLowerCase() == "🥳🥳")) {
     return api.sendMessage("0oo0o TeRa HaPpy BirthDay", threadID);
   };
   
   
   if ((event.body.toLowerCase() == "🙃") || (event.body.toLowerCase() == "🙃🙃")) {
     return api.sendMessage("HaYe Rabba ☹️", threadID);
   };
   
   if ((event.body.toLowerCase() == "🙂") || (event.body.toLowerCase() == "🙂🙂")) {
     return api.sendMessage("Awww Fake Smile Na Do Me Hu Naw Baby 🥺🥹🥹", threadID);
   };
   
   if ((event.body.toLowerCase() == "🥲") || (event.body.toLowerCase() == "🥲🥲")) {
     return api.sendMessage("Ase Muu BaNa KRr MT R0o 😒", threadID);
   };
   
   if ((event.body.toLowerCase() == "😊") || (event.body.toLowerCase() == "😊😊")) {
     return api.sendMessage("AaJ Tuu BahUt KhuSh Ho 🫡", threadID);
   };
   
   if ((event.body.toLowerCase() == "☺️") || (event.body.toLowerCase() == "☺️☺️")) {
     return api.sendMessage("Ye Smile Na D0o Naw🥺", threadID);
   };
   
   if ((event.body.toLowerCase() == "😌") || (event.body.toLowerCase() == "😌😌")) {
     return api.sendMessage("HaYe Mas0om", threadID);
   };
   
   if ((event.body.toLowerCase() == "😏") || (event.body.toLowerCase() == "😏😏")) {
     return api.sendMessage("SasTa AttiTude Mtt dekHya kR MerY SamNy 😒😐", threadID);
   };
   
   if ((event.body.toLowerCase() == "😴") || (event.body.toLowerCase() == "😴😴")) {
     return api.sendMessage("ChaL Ja NaHa kRr Aa", threadID);
   };
   
   if ((event.body.toLowerCase() == "😪") || (event.body.toLowerCase() == "😪😪")) {
     return api.sendMessage("Ye kYa kR rahY Apni  Nose Sth🤔😂", threadID);
   };
   
   if ((event.body.toLowerCase() == "🤤") || (event.body.toLowerCase() == "🤤🤤")) {
     return api.sendMessage("Ral Mat Tapka MeKo ulTi Aa Rhi 🤮🤢", threadID);
   };
   
   if ((event.body.toLowerCase() == "😋") || (event.body.toLowerCase() == "😋😋")) {
     return api.sendMessage("Yah ToTay Jesi Zuban Mt DiKha 😂", threadID);
   };
   
   if ((event.body.toLowerCase() == "😛") || (event.body.toLowerCase() == "😛😛")) {
     return api.sendMessage("Aww Gandyy 😂😂😂", threadID);
   };
   
   if ((event.body.toLowerCase() == "😝") || (event.body.toLowerCase() == "😝😝")) {
     return api.sendMessage("ABy Ankhe KhoL 0or ZuBan Ander kRr WRna KaT DunGa", threadID);
   };
   
   if ((event.body.toLowerCase() == "😜") || (event.body.toLowerCase() == "😜😜")) {
     return api.sendMessage("BaRi MasTi ChaRi Chai TeRy Ko 1 Ankh Band KRrke ZuBan Bhir Aagyi 😂😂😂", threadID);
   };
   
   if ((event.body.toLowerCase() == "🤪") || (event.body.toLowerCase() == "🤪🤪")) {
     return api.sendMessage("Ye Ajeeb_0_GaReeb Muu Na BaNa 😂 CarT0on 🤣", threadID);
   };
   
   if ((event.body.toLowerCase() == "🥴") || (event.body.toLowerCase() == "🥴🥴")) {
     return api.sendMessage("SasTa Nasha KRr LiYa LagTa Hai 😂", threadID);
   };
   
   if ((event.body.toLowerCase() == "😔") || (event.body.toLowerCase() == "😔😔")) {
     return api.sendMessage("JanU ChoR Gyaw Kya 😒😂", threadID);
   };
   
   if ((event.body.toLowerCase() == "🥺") || (event.body.toLowerCase() == "🥺🥺")) {
     return api.sendMessage("Hayye BabY Looty Ni Naw ye loo pioo 🍼🥺", threadID);
   };
   
   if ((event.body.toLowerCase() == "😬") || (event.body.toLowerCase() == "😬😬")) {
     return api.sendMessage("Kis Ki Baja Di 🤨🧐", threadID);
   };
   
   if ((event.body.toLowerCase() == "😑") || (event.body.toLowerCase() == "😑😑")) {
     return api.sendMessage("Wha Muu Ke SaTh Ankhe Be Band H0o GYi 😂", threadID);
   };
   
   if ((event.body.toLowerCase() == "😐") || (event.body.toLowerCase() == "😐😐")) {
     return api.sendMessage("TeRyy Muhh Py Elfiii Lgaw Di kYa ksi ny 😹", threadID);
   };
   
   if ((event.body.toLowerCase() == "😶") || (event.body.toLowerCase() == "😶😶")) {
     return api.sendMessage("Nak T0o Thi Nhi Muu Be Gyb H0o GYa TeRa 😂😂😂", threadID);
   };
   
   if ((event.body.toLowerCase() == "🤐") || (event.body.toLowerCase() == "🤐🤐")) {
     return api.sendMessage("Ab Tri Awaz Ai Na T0o Me Alfi Sy Band Krunga 😒", threadID);
   };
   
   if ((event.body.toLowerCase() == "🤔") || (event.body.toLowerCase() == "🤔🤔")) {
     return api.sendMessage("KashmiR AZaaD KrwanY Ka SocH RahY Tyaa 🙄🤔", threadID);
   };
   
   if ((event.body.toLowerCase() == "🤫") || (event.body.toLowerCase() == "🤫🤫")) {
     return api.sendMessage("Tri Yeh Ungli Tri He Nak Me DyDeni MaiNy 😒😂", threadID);
   };
   
   if ((event.body.toLowerCase() == "🤭") || (event.body.toLowerCase() == "🤭🤭")) {
     return api.sendMessage("😂😂😂", threadID);
   };
   
   if ((event.body.toLowerCase() == "🥱") || (event.body.toLowerCase() == "🥱")) {
     return api.sendMessage("AJa BaBe MeLy Pas S0o Jaa😜", threadID);
   };
   
   if ((event.body.toLowerCase() == "🤗") || (event.body.toLowerCase() == "🤗🤗")) {
     return api.sendMessage("PhLe NaHa kRr Aa 😂", threadID);
   };
   
   if ((event.body.toLowerCase() == "😱") || (event.body.toLowerCase() == "😱😱")) {
     return api.sendMessage("KYa HuWa 😱 SheSha DeKh LiYa KYa 😳", threadID);
   };
   
   if ((event.body.toLowerCase() == "🤨") || (event.body.toLowerCase() == "🤨🤨")) {
     return api.sendMessage("Tu Hushyar Ban kRr Na Dekh Main Hun Naw 😂", threadID);
   };
   
   if ((event.body.toLowerCase() == "🧐") || (event.body.toLowerCase() == "🧐🧐")) {
     return api.sendMessage("Tu HaT Main DekhTa Hun 🧐🧐🧐", threadID);
   };
   
   if ((event.body.toLowerCase() == "😒") || (event.body.toLowerCase() == "😒😒")) {
     return api.sendMessage("AsY DekH Rahy H00o MujH Mas0om ki Jan leNi Hai Tyaa 🥺", threadID);
   };
   
   if ((event.body.toLowerCase() == "🙄") || (event.body.toLowerCase() == "🙄🙄")) {
     return api.sendMessage("UpeR TeRi PhupHi NaSreen Hai kYa 🙄", threadID);
   };
   
   if ((event.body.toLowerCase() == "😤") || (event.body.toLowerCase() == "😤😤")) {
     return api.sendMessage("AbbY Ye kYa kR raHa hai 😂", threadID);
   };
   
   if ((event.body.toLowerCase() == "😠") || (event.body.toLowerCase() == "😠😠")) {
     return api.sendMessage("Ma nY Taaa tiYa Jo GhuSsa KRr RahY 🥺😢", threadID);
   };
   
   if ((event.body.toLowerCase() == "😡") || (event.body.toLowerCase() == "😡😡")) {
     return api.sendMessage("Ma nY Taaa tiYa Jo GhuSsa KRr RahY 🥺😢", threadID);
   };
   
   if ((event.body.toLowerCase() == "🤬") || (event.body.toLowerCase() == "🤬🤬")) {
     return api.sendMessage("Aww 😐", threadID);
   };
   
   if ((event.body.toLowerCase() == "😞") || (event.body.toLowerCase() == "😞😞")) {
     return api.sendMessage("Aww My lOve UpR UtHao Muh", threadID);
   };
   
      if ((event.body.toLowerCase() == "😓") || (event.body.toLowerCase() == "😓😓")) {
     return api.sendMessage("☹️", threadID);
   };
   
      if ((event.body.toLowerCase() == "😢") || (event.body.toLowerCase() == "😢😢")) {
     return api.sendMessage("Looo Ni Melii Jàwn", threadID);
   };
   
      if ((event.body.toLowerCase() == "☹️") || (event.body.toLowerCase() == "☹️☹️")) {
     return api.sendMessage("awww baby🥺", threadID);
   };
   
      if ((event.body.toLowerCase() == "🙁") || (event.body.toLowerCase() == "🙁🙁")) {
     return api.sendMessage("Aww taa Huwa☹️", threadID);
   };
   
      if ((event.body.toLowerCase() == "😕") || (event.body.toLowerCase() == "😕😕")) {
     return api.sendMessage("🙁🙁🙁", threadID);
   };
   
      if ((event.body.toLowerCase() == "😰") || (event.body.toLowerCase() == "😰😰")) {
     return api.sendMessage("Aww 😨", threadID);
   };
   
   
      if ((event.body.toLowerCase() == "😨") || (event.body.toLowerCase() == "😨😨")) {
     return api.sendMessage("😰😰😰", threadID);
   };
   
      if ((event.body.toLowerCase() == "😧") || (event.body.toLowerCase() == "😧😧")) {
     return api.sendMessage("😳", threadID);
   };
   
      if ((event.body.toLowerCase() == "😦") || (event.body.toLowerCase() == "😦😦")) {
     return api.sendMessage("😧", threadID);
   };
   
      if ((event.body.toLowerCase() == "😮") || (event.body.toLowerCase() == "😮😮")) {
     return api.sendMessage("OYyye MuuH BanD KRr WrNa MakHi Chali JaNi Hai😂😂😂", threadID);
   };
   
      if ((event.body.toLowerCase() == "😯") || (event.body.toLowerCase() == "😯😯")) {
     return api.sendMessage("😲", threadID);
   };
   
      if ((event.body.toLowerCase() == "😲") || (event.body.toLowerCase() == "😲😲")) {
     return api.sendMessage("😯", threadID);
   };
   
      if ((event.body.toLowerCase() == "😳") || (event.body.toLowerCase() == "😳😳")) {
     return api.sendMessage("Kya hOgYa Inna AnkhY PhaR pHar k MujhY ku Dekh Rahy Ho 😳😳😳", threadID);
   };
   
      if ((event.body.toLowerCase() == "🤯") || (event.body.toLowerCase() == "🤯🤯")) {
     return api.sendMessage("TeRy Sar Me BumB Kis Ny PhoRa 😂", threadID);
   };
   
      if ((event.body.toLowerCase() == "😖") || (event.body.toLowerCase() == "😖😖")) {
     return api.sendMessage("ShaDeed Sad Ho kAaa BabY😂", threadID);
   };
   
      if ((event.body.toLowerCase() == "😣") || (event.body.toLowerCase() == "😣😣")) {
     return api.sendMessage("😣😣😣", threadID);
   };
   
      if ((event.body.toLowerCase() == "😩") || (event.body.toLowerCase() == "😫")) {
     return api.sendMessage("ChaL HaT NoTanKii😫😂😂", threadID);
   };
   
      if ((event.body.toLowerCase() == "😵") || (event.body.toLowerCase() == "😵😵")) {
     return api.sendMessage("TeRi Eyes kiDr Gyye😟", threadID);
   };
   
      if ((event.body.toLowerCase() == "🥶") || (event.body.toLowerCase() == "sardi")) {
     return api.sendMessage("Aww BaBe  SarDi Lag Rhi T0o MeRe PaSs Ajao 🙈😜", threadID);
   };
   
      if ((event.body.toLowerCase() == "🥵") || (event.body.toLowerCase() == "🥵🥵")) {
     return api.sendMessage("NaHa Le 😂🥶", threadID);
   };
   
      if ((event.body.toLowerCase() == "🤢") || (event.body.toLowerCase() == "🤮")) {
     return api.sendMessage("Aaaaa Tho0oo", threadID);
   };
   
      if ((event.body.toLowerCase() == "🤧") || (event.body.toLowerCase() == "😷")) {
     return api.sendMessage("Aryy BhaG Ja0o MeKo bHi BeemaR kR0o gaY 🥺", threadID);
   };
   
      if ((event.body.toLowerCase() == "🤒") || (event.body.toLowerCase() == "🤕")) {
     return api.sendMessage("Aww BaBe K0o Ta HuWa Idher Aow ThoRa Pyal L0o 😜💉💉💉", threadID);
   };
   
      if ((event.body.toLowerCase() == "😎") || (event.body.toLowerCase() == "😎😎")) {
     return api.sendMessage("ChaSHma BHi New Lelo ab 🙂", threadID);
   };
   
      if ((event.body.toLowerCase() == "😇") || (event.body.toLowerCase() == "😇😇")) {
     return api.sendMessage("😇😇😇", threadID);
   };
   
      if ((event.body.toLowerCase() == "🥸") || (event.body.toLowerCase() == "🤓")) {
     return api.sendMessage("AiNeK WaLa JiN😂", threadID);
   };
   
      if ((event.body.toLowerCase() == "🤡") || (event.body.toLowerCase() == "🤡🤡")) {
     return api.sendMessage("Aww S0o SweeT 😂 CarT0on", threadID);
   };
   
      if ((event.body.toLowerCase() == "😈") || (event.body.toLowerCase() == "👿")) {
     return api.sendMessage("👽👽👽", threadID);
   };
   
      if ((event.body.toLowerCase() == "😹") || (event.body.toLowerCase() == "😹😹")) {
     return api.sendMessage("AbbY BiLli 😂", threadID);
   };
   
      if ((event.body.toLowerCase() == "😺") || (event.body.toLowerCase() == "😸")) {
     return api.sendMessage("😼😼😼", threadID);
   };
   
      if ((event.body.toLowerCase() == "😼") || (event.body.toLowerCase() == "😼😼")) {
     return api.sendMessage("Ye SaSTa AttiTuDe EdR MtT DekHa😂", threadID);
   };
   
      if ((event.body.toLowerCase() == "💋") || (event.body.toLowerCase() == "💋💋💋")) {
     return api.sendMessage("Yah PapPiYa Nhi kRr Kxh Kxh Nhi Bht KxH HoTa Hai 😂😂😂", threadID);
   };
   
      if ((event.body.toLowerCase() == "❤️") || (event.body.toLowerCase() == "💚")) {
     return api.sendMessage("🖤🧡💜💙🤎🤍", threadID);
   };
   
      if ((event.body.toLowerCase() == "🧡") || (event.body.toLowerCase() == "🤎")) {
     return api.sendMessage("❤️🖤🤍🤎💚💜", threadID);
   };
   
      if ((event.body.toLowerCase() == "💜") || (event.body.toLowerCase() == "💙")) {
     return api.sendMessage("💚🤎🤍🖤❤️🧡", threadID);
   };
   
         if ((event.body.toLowerCase() == "🖤") || (event.body.toLowerCase() == "🤍")) {
     return api.sendMessage("❤️🧡💛💚💙💜🤎", threadID);
   };
   
      if ((event.body.toLowerCase() == "👻") || (event.body.toLowerCase() == "👻👻")) {
     return api.sendMessage("Bh0oT Hi H0o", threadID);
   };
   
      if ((event.body.toLowerCase() == "@Kashif Raza Mallah") || (event.body.toLowerCase() == "Kashif")) {
     return api.sendMessage("Bolo Meri jan ", threadID);
   };
   
      if ((event.body.toLowerCase() == "💉") || (event.body.toLowerCase() == "💊")) {
     return api.sendMessage("TumHy isKi ZaiDa Zarurat Hai 🤣", threadID);
   };
   
      if ((event.body.toLowerCase() == "🙈") || (event.body.toLowerCase() == "🙊")) {
     return api.sendMessage("Sch Me Bander He Hai 😂", threadID);
   };
   
      if ((event.body.toLowerCase() == "Chutia") || (event.body.toLowerCase() == "chutiya")) {
     return api.sendMessage("Tu Hai ChuTiya 🙂 Main T0o BoT Hun Naw🥺😂", threadID);
   };
   
      if ((event.body.toLowerCase() == "oye") || (event.body.toLowerCase() == "oyee")) {
     return api.sendMessage("0ye HoYe 😈", threadID);
   };
  
   if ((event.body.toLowerCase() == "Kkkkkk") || (event.body.toLowerCase() == "jjj")) {
     return api.sendMessage("KYa ", threadID);
   };

   if ((event.body.toLowerCase() == "Kkkkk") || (event.body.toLowerCase() == "Buraaa")) {
     return api.sendMessage(" H I J K L M N O P Q R S T U V W X Y Z 🙄", threadID);
   };

   if ((event.body.toLowerCase() == "huh") || (event.body.toLowerCase() == "hmm")) {
     return api.sendMessage("Kya Hmm 🙄ThaRki", threadID);
   };

   if ((event.body.toLowerCase() == "acha") || (event.body.toLowerCase() == "acha g")) {
     return api.sendMessage("Han Ji 🙄 Jaan", threadID);
   };

   if ((event.body.toLowerCase() == "Janu") || (event.body.toLowerCase() == "jan")) {
     return api.sendMessage("Bolo Naw MeRi JaN🥰💙", threadID);
   };

   if ((event.body.toLowerCase() == "bot goes to sleep") || (event.body.toLowerCase() == "bot goes to sleep")) {
     return api.sendMessage("I'm a bot, you're the one who should go to sleep <3", threadID);
   };

   if ((event.body.toLowerCase() == "has the bot eaten yet") || (event.body.toLowerCase() == "bot an comrade")) {
     return api.sendMessage("I'm full when I see you eat <3", threadID);
   };

   if ((event.body.toLowerCase() == "does the bot love me") || (event.body.toLowerCase() == "does the bot love me")) {
     return api.sendMessage("Yes <3", threadID);
   };

   if ((event.body.toLowerCase() == "does the bot have a brand") || (event.body.toLowerCase() == "does the bot fall")) {
     return api.sendMessage("Yes <3", threadID);
   };
   mess = "{name}"
  
  if (event.body.indexOf("Bot") == 0 || (event.body.indexOf("bot") == 0)) {
    var msg = {
      body: `😘${name}😘 」  \n\n    ${rand}\n\n❥──────────────❥`
    }
    return api.sendMessage(msg, threadID, messageID);
  };

}

module.exports.run = function({ api, event, client, __GLOBAL }) { }
