// 2
/* 
Lukas Tatarūnas
PRIf-17/2
20173131
*/

main = () => {

    // 3
    let n = "Lukas".length
    let m = "Tatarūnas".length
    let b = n + m
    let arr = []

    for (let i = 0; i < n; i++) {
        arr.push(new Array(m))
    }

    // 4
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
                let random = generateRandomNumber(countLetterA(), b)
                arr[i][j] = random
            }
        }
        
        return arr
    }

    fillArray()

    // 5
    console.log(arr)

    // 6
    let averageRows = []
    let averageColumns = []
    let rowSum = 0
    let columnSum = 0

    for (let i = 0; i < n; i++) {
        for (let j = 0; j < m; j++) {
            rowSum += arr[i][j]
            if (j === m - 1) {
                averageRows.push(Number.parseFloat(rowSum / m))
                rowSum = 0
            }
        }
    }

    console.log(averageRows)

    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            columnSum += arr[j][i]
            if (j === n - 1) {
                averageColumns.push(Number.parseFloat(columnSum / n))
                columnSum = 0
            }
        }
    }

    console.log(averageColumns)

    // 7
    let count = 0
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < m; j++) {
            if (averageRows[i] < arr[i][j]) {
                count++
            }
            if (j === m - 1) {
                console.log(`${i + 1} row has: ${count} numbers bigger than the average!`)
                count = 0
            }
        }
    }
}

main()