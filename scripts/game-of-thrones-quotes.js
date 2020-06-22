const URL = 'https://game-of-thrones-quotes.herokuapp.com/v1/random';
const QUOTE_CLASS = "quote";

const CHARACTERS = {
    "Jon Snow": {
        image: "https://www.shutterstock.com/image-photo/bangkok-thailand-may-6-2017-character-659791249"
    },
    "Sansa Stark": {
        image: "https://www.shutterstock.com/image-vector/illustration-sansa-stark-game-thrones-1411795835"
    },
    "Eddard \"Ned\" Stark": {},
    "Jaime Lannister": {},
    "Tyrion Lannister": {},
    "Cersei Lannister": {},
    "Joffrey Baratheon": {},
    "Aerys II Targaryen": {},
    "Daenerys Targaryen": {},
    "Tywin Lannister": {},
    "Ramsay Bolton": {},
    "Arya Stark": {},
    "Robert Baratheon": {},
    "Theon Greyjoy": {},
    "Samwell Tarly": {},
    "Lord Varys": {},
    "Bran Stark": {},
    "Brienne of Tharth": {},
    "Petyr Baelish": {},
    "Tormund": {},
    "Melisandre": {}
};

const req = new Request(URL);
let resp = await req.loadJSON();
let html = parseQuote(resp);
WebView.loadHTML(html);

function parseQuote(quotePayload) {
    let quote = quotePayload.sentence;
    let character = quotePayload.character.name;
    let house = quotePayload.character.house.name;
    let html = `
        <html>
            <head>
                <style>
                    body {
                        margin: 1em;
                        font: 1.2rem/1.4 Georgia, serif;
                    }
                    .quote {
                        margin: 0;
                        background: #eee;
                        padding: 1em;
                        border-radius: 1em; 
                    }
                    .quote figcaption,
                    .quote blockquote {
                        margin: 1em;
                    }
                </style>
            </head>
            <body>
                <figure class="${QUOTE_CLASS}">
                    <blockquote>
                        ${quote}
                    </blockquote>
                    <figcaption>
                        &mdash; ${character}, <cite>${house}</cite>
                    </figcaption>
                </figure>
                <img src="${CHARACTERS['Jon Snow'].image}" width = "128" height = "128">
            </body>
        </html>
    `
    return html;
}