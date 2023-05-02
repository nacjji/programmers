const solution = (myString) => {
    let result = myString.toLowerCase()
    for (const i of result) {
        if (i === 'a') {
            result = result.replace('a', 'A')
        }
    }
    return result
}
