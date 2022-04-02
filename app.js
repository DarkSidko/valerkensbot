require('dotenv').config();

const { Telegraf } = require('telegraf')
let waterCounter = 0;

const bot = new Telegraf(process.env.TELEGRAM_TOKEN)
bot.start((ctx) => ctx.reply('Бери кримсоду'))
bot.hears([/анек/ig,'анекдот'], (ctx) => ctx.reply('Один мальчик родился с гайкой вместо пупка.\n' +
    '\n' +
    'И он спросил у родителей, почему у него там гайка. Родители пообещали ему рассказать об этом на его 14-летие.\n' +
    '\n' +
    'Ему исполнилось 14. И он опять подошёл и спросил у родителей, почему у него вместо пупка гайка. Родители пообещали рассказать ему об этом когда ему будет 18 лет.\n' +
    '\n' +
    'В 18 лет он спросил снова и родители рассказали ему, что есть один остров на котором растет пальма, а под этой пальмой зарыт сундук.\n' +
    '\n' +
    'Парень долго копил денег и всё таки приехал на этот остров. Нашёл пальму, откопал сундук, в котором лежала отвёртка. Он открутил гайку отвёрткой и у него отвалилась ЖОПА.'))
bot.hears(['Что по табачку?',/табак/ig, /табач/ig], (ctx) => ctx.reply('Грейпсода'))
bot.hears(/грейпсод/ig, ctx => ctx.reply('кримсода'))
bot.hears(/кримсод/i, ctx => ctx.reply('Крим наш!'))
bot.hears(/айфон/i, ctx => ctx.reply('по поводу айфона, Витюша самый дорогой взял'))
bot.hears(/деньги/i, ctx => ctx.reply('за деньгами к Витюше'))
bot.hears(/суперновую/i, ctx => ctx.reply('для свежести'))
bot.hears(/выпечк/i, ctx => ctx.reply('только орская печенька'))
bot.hears(/воды/i, ctx => ctx.reply('Можно Саше стакан воды?'))
bot.hears(/лимонад/i, ctx => ctx.reply('Цитрусовый'))
bot.hears(/коворк/i, ctx => ctx.reply('Копыхинг'))
bot.hears(/можно/i, ctx => ctx.reply('нужно'))
bot.hears(/шамин/i, ctx => ctx.reply('мамин'))
bot.hears(/мамин/i, ctx => ctx.reply('папин'))
bot.hears(/папин/i, ctx => ctx.reply('панин'))
bot.hears(/пасту/i, ctx => ctx.reply('Мой батя ебашит вообще адовые блюда. \n' +
    'Ну такой вот примерно рецепт усредненный, потому что вариаций масса. \n' +
    'Берется суп, он не греется, греть - это не про моего батю. Он берет это суп, вываливает его на сковороду и начинает жарить. Добавляет в него огромное количество лука, чеснока, перца черного и красного МУКИ! для вязкости, томатная паста сверху. Все это жарится до дыма. Потом снимается с огня и остужается на балконе. Потом батя заносит и щедро полив майонезом начинает есть. При этом ест со сковороды шкрябая по ней ложкой. Ест и приговаривает полушепотом ух бля. При этом у него на лбу аж пот выступает. Любезно мне иногда предлагает, но я отказываюсь. Надо ли говорить о том какой дичайший пердеж потом? Вонища такая, что обои от стен отклеиваются.'))
bot.hears(/фортинаит или бабадже/i, ctx => ctx.reply('бабадже'))
bot.hears(/бабдже или экос бокос сериес экэс/i, ctx => ctx.reply('экос бокос сериес экэс'))
bot.hears(/экос бокос сериес экэс или маластейша файв/i, ctx => ctx.reply('маластейша файв'))
bot.hears(/маластейша файв или лоджытык/i, ctx => ctx.reply('лоджытык'))
bot.hears(/лоджытык или хайпер икес икес икес икес/i, ctx => ctx.reply('хайпер икес икес икес икес'))
bot.hears(/хайпер икес икес икес икес или грандзерауто диди/i, ctx => ctx.reply('градзерауто диди'))
bot.hears(/рональду или рокьроки/i, ctx => ctx.reply('СУУУУУУУ'))
bot.hears([/забивоч/i, /крепос/i], ctx => ctx.reply(`тебе сегодня забиваем на ${Math.round(Math.random()*10)}/10💨️😶‍🌫️`))
bot.hears([/крас/i], ctx => ctx.reply(`каркадэ мусорской, давай улун`))
bot.hears([/чай/i, /чаеч/i], ctx => ctx.reply(`молочный улунчик уже готов`))
bot.hears(/служ/i, ctx => ctx.reply(`я не хочу, мне надо`))
bot.hears(/аралба/i, ctx => ctx.reply(`аналбаев`))
bot.hears(/утро/i, ctx => ctx.reply(`вечер в хату`))
bot.hears(/ваканс/i, ctx => ctx.reply(`просто выстави #open_to_work в LinkedIn`))
bot.command('water', ctx => {
    waterCounter++;
    if (waterCounter >= 5) {
        waterCounter=0;
        return ctx.reply('Саша, держи стакан водички💦💦💦')
    }
    return ctx.reply(`Вам нужно помочь Саше набрать на стакан водички, пока собрано только ${waterCounter}/5`)
})
bot.hears(/курс/i, ctx => ctx.reply('мне пока курс цеплять западло, я считаю он 5.3'))
/*
bot.on('inline_query', ctx => {
    if (!Number(ctx.message)) {
        return ctx.answerInlineQuery(`Ты охуел, цифры пиши дон, какой бля ${ctx.message}`)
    }
    return ctx.answerInlineQuery(`${parseInt(ctx.message) * 5.3} тенге дон`)
    ctx.answerInlineQuery([
        { "type": "photo",
            "id": "4049646",
            "photo_url": "https://pixabay.com/get/g60377705db16ca6d3f664a985594f0c63762a2f18b59ba2c08b2eab0c0d30b2218a3ce32e2fe69c24ba999be0de9a45b43f3535a63f324f58983eabc59e9836c_640.jpg",
            "thumb_url": "https://cdn.pixabay.com/photo/2019/03/11/22/14/roses-4049646_150.jpg",
            "title": "blo",
            "description": "roses, bouquet, blo"
        }])
})
 */
bot.on('inline_query', async (ctx) => {
    return  ctx.answerInlineQuery({
        type: 'article',
        id: '13',
        title: 'zalupa',
        description: 'popa',
        thumb_url: 'zalupa',
        input_message_content: {
            message_text: 'test'
        },
    })
})

bot.on('chosen_inline_result', ({ chosenInlineResult }) => {
    console.log('chosen inline result', chosenInlineResult)
})
bot.launch()
