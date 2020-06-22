const URL = 'https://game-of-thrones-quotes.herokuapp.com/v1/random';
const QUOTE_CLASS = "quote";

const req = new Request(URL);
let resp = await req.loadString();
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
            </body>
        </html>
    `
    return html;
}