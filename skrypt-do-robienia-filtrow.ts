// this code generates filters for ublock


const collections: Array<[string, RegExp]> = [
    ["polish politics", /Tusk|Kaczyński|Sikorski|Schetyna|Ziobro|Komorowski|Kosiniak|Hołownia|Duda|Czarnek|Grodzki|Błaszczak|Nawrocki|Trzaskowski/i],
    ["big tech spam", /apple|iphone|samsung|ipad|macbook|airpods|sony|playstation|ps5|xbox|nintendo|switch|smartphone|earbuds/i],
    ["IP franchise trolls", /netflix|disney|marvel|avengers|star\s?wars|hbo|amazon\s?prime|pok[ée]mon/i],
    ["spammy brands", /nike|jordan|vans|adidas|puma|gucci|zara|h&m|shein|north\s?face|starbucks|red\s?bull|monster\s?energy/i],
    ["cars", /bmw|mercedes|audi|volkswagen|vw|porsche|toyota|lexus|honda|mazda|subaru|nissan|ford|chevrolet|chevy|dodge|jeep|cadillac|ferrari|lamborghini|maserati|fiat|aston\s?martin|bentley|rolls-?royce/i],
]

async function main(): Promise<void> {
    for (const [name, regex] of collections) {
        console.log(`! ${name.toUpperCase()} - TOPIC`)
        console.log(`! filter for starting page`)
        console.log(`youtube.com##ytd-rich-grid-media:has-text(${regex})`)
        console.log(`! filter for search results`)
        console.log(`youtube.com##ytd-video-renderer:has-text(${regex})`)
        console.log(`! filter for "propositions" on left`)
        console.log(`youtube.com##ytd-compact-video-renderer:has-text(${regex})`)
        console.log(``)
    }
}


main()
    .then()
    .catch(e => {
        throw e
    })


