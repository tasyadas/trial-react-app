let limit = 20

for (let i = 1; i <= limit; i++) {
    let kata;

    if (i % 2 !== 0 && i % 3 === 0) {
        kata = 'I Love Coding'
    } else if (i % 2 !== 0) {
        kata = 'Santai'
    } else if (i % 2 === 0) {
        kata = 'Berkualitas'
    }

    console.log(`${i} - ${kata}`);
    
}