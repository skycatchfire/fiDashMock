export default function getRandomRating() {
    let val = Math.ceil(Math.random() * 10);
    if (val <= 1 ) {
        return 1;
    }
    if (val >= 2 && val <= 5 ) {
        return 50;
    }
    if (val >= 6 ) {
        return 99;
    }
}