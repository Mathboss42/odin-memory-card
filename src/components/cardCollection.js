const images = importImages(require.context('../img', false, /\.webp/));

const cardCollection = [
    {title: 'France', src: images['france-flag.webp']},
    {title: 'Poland', src: images['poland-flag.webp']},
    {title: 'USA', src: images['usa-flag.webp']},
    {title: 'Germany', src: images['germany-flag.webp']},
    {title: 'Italy', src: images['italy-flag.webp']},
    {title: 'Spain', src: images['spain-flag.webp']},
    {title: 'Portugal', src: images['portugal-flag.webp']},
    {title: 'Canada', src: images['canada-flag.webp']},
    {title: 'UK', src: images['united-kingdom-flag.webp']},
    {title: 'Ireland', src: images['ireland-flag.webp']},
    {title: 'South Korea', src: images['south-korea-flag.webp']},
    {title: 'Japan', src: images['japan-flag.webp']},
];

function importImages(r) {
    let images = {};
    r.keys().forEach(item => { images[item.replace('./', '')] = r(item); });
    return images;
}

export default cardCollection;