const URL = 'https://game-of-thrones-quotes.herokuapp.com/v1/random';
const QUOTE_CLASS = "quote";

const CHARACTERS = {
    "Jon Snow": {
        image: "https://i.imgur.com/3k0gUjU.jpg"
    },
    "Sansa Stark": {
        image: "https://i.imgur.com/wBif6v5.jpeg"
    },
    "Eddard \"Ned\" Stark": {
        image: "https://i.imgur.com/gcBwQZV.jpeg"
    },
    "Jaime Lannister": {
        image: "https://i.imgur.com/sO074Wy.png"
    },
    "Tyrion Lannister": {
        image: "https://i.imgur.com/1QfCOmI.jpeg"
    },
    "Cersei Lannister": {
        image: "https://i.imgur.com/2ZlebJ0.jpg"
    },
    "Joffrey Baratheon": {
        image: "https://i.imgur.com/RqGeomt.jpeg"
    },
    "Aerys II Targaryen": {
        image: "https://i.imgur.com/RKXGJBZ.png"
    },
    "Daenerys Targaryen": {
        image: "https://i.imgur.com/4c8njSb.jpeg"
    },
    "Tywin Lannister": {
        image: "https://i.imgur.com/YIMms65.jpeg"
    },
    "Ramsay Bolton": {
        image: "https://i.imgur.com/eJiL74r.jpg"
    },
    "Arya Stark": {
        image: "https://i.imgur.com/Kup8o73.jpeg"
    },
    "Robert Baratheon": {
        image: "https://i.imgur.com/6rEDoVL.jpeg"
    },
    "Theon Greyjoy": {
        image: "https://i.imgur.com/18v6ONj.jpeg"
    },
    "Samwell Tarly": {
        image: "https://i.imgur.com/c7jNy4v.gif"
    },
    "Lord Varys": {
        image: "https://i.imgur.com/A5SN6Wd.jpg"
    },
    "Bran Stark": {
        image: "https://i.imgur.com/IOARmQb.png"
    },
    "Brienne of Tharth": {
        image: "https://i.imgur.com/Jd5GS9Y.jpeg"
    },
    "Petyr Baelish": {
        image: "https://i.imgur.com/1GhGwiB.jpg"
    },
    "Tormund": {
        image: "https://i.imgur.com/zzh8iww.jpeg"
    },
    "Melisandre": {
        image: "https://i.imgur.com/r3VsE5J.jpg"
    }
};

const req = new Request(URL);
let resp = await req.loadJSON();
let html = parseQuote(resp);
console.log(html);
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

                    .imgContainer {
                        flex: 1;
                    }
                    .quoteContainer {
                        flex: 9;
                    }
                    .quoteDisplayContainer {
                        display: flex;
                    }
                </style>
            </head>
            <body>
                <figure class="${QUOTE_CLASS}">
                    <div class="quoteDisplayContainer">
                        <div class="imgContainer">
                            <img src="${CHARACTERS[character].image}" width="100"/>
                        </div>
                    </div>
                    <div class="quoteContainer">
                        <blockquote>${quote}</blockquote>
                        <figcaption>
                            &mdash; ${character}, <cite>${house}</cite>
                        </figcaption>
                    </div>
                </figure>
            </body>
        </html>
    `
    return html;
}