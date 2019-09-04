/* 1
Lukas Tatarūnas
PRIf-17/2
20173131 */

main = () => {
    let n = "Lukas".length
    let m = "Tatarūnas".length
    let b = n + m
    let arr = []

    for (let i = 0; i < n; i++) {
        arr.push(new Array(m))
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
                let random = generateRandomNumber(countLetterA(), b)
                arr[i][j] = random
            }
        }
        
        return arr
    }

    fillArray()

    console.log(arr)

    let averageRows = []
    let averageColumns = []
    let rowSum = 0
    let columnSum = 0

    for (let i = 0; i < n; i++) {
        for (let j = 0; j < m; j++) {
            rowSum += arr[i][j]
            if (j == m - 1) {
                averageRows.push(Number.parseFloat(rowSum / m))
                rowSum = 0
            }
        }
    }

    console.log(averageRows)

    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            columnSum += arr[j][i]
            if (j == n - 1) {
                averageColumns.push(Number.parseFloat(columnSum / n))
                columnSum = 0
            }
        }
    }

    console.log(averageColumns)
}

main()