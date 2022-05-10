export default async function breedList() {
    return await fetch('https://dog.ceo/api/breeds/list/all');
}

