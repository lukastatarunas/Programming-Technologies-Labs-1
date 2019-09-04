/* 1
Lukas Tatarūnas
PRIf-17/2
20173131 */

let n = "Lukas".length
let m = "Tatarūnas".length

main = () => {
    let arr = []

    for (let i = 0; i < n; i++) {
        arr.push(new Array(m))
    }

    return arr
}


countLetterA = () => {
    let a = 0
    
    for (let i = 0; i < n; i++) {
        if ("Lukas".charAt(i) === "a") {
            a++
        }
    }
    
    for (let i = 0; i < m; i++) {
        if ("Tatarūnas".charAt(i) === "a") {
            a++
        }
    }
    
    return a
}

generateRandomNumber = (start, end) => {
    return Math.floor(Math.random() * (end - start + 1) + start)
}

fillArray = arr => {
    for (let i = 0; i < arr.length; i++) {
        let random = generateRandomNumber(countLetterA(), n + m)
        arr.push(random)
    }
    
    return arr
}

fillArray(main())