/* 1
Lukas Tatarūnas
PRIf-17/2
20173131 */

let n = "Lukas".length
let m = "Tatarūnas".length
let arr = []

main = () => {
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

fillArray = () => {
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < m; j++) {
            let random = generateRandomNumber(countLetterA(), n + m)
            arr[i][j] = random
        }
    }
    
    return arr
}

fillArray(main())