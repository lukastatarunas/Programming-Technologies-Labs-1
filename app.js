// 2
/* 
Lukas Tatarūnas
PRIf-17/2
20173131
*/

main = () => {

    // 3
    let n = `Lukas`.length
    let m = `Tatarūnas`.length
    let b = n + m
    let arr = []

    for (let i = 0; i < n; i++) {
        arr.push(new Array(m))
    }

    // 4
    countLetterA = () => {
        let a = 0
        
        for (let i = 0; i < n; i++) {
            if (`Lukas`.charAt(i) === "a") {
                a++
            }
        }
        
        for (let i = 0; i < m; i++) {
            if (`Tatarūnas`.charAt(i) === "a") {
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
                console.log(`${ i + 1 } row has: ${ count } numbers bigger than the average!`)
                count = 0
            }
        }
    }

    // 8
    let maxNumber = 0

    for (let i = 0; i < n; i++) {
        for (let j = 0; j < m; j++) {
            if (i !== countLetterA() - 1 && j !== countLetterA() - 1 && arr[i][j] > maxNumber) {
                maxNumber = arr[i][j]
            }
        }
    }

    console.log(`Max number: ${ maxNumber }`)

    // 9
    let sortedRow = []

    for (let i = 0; i < n; i++) {
        for (let j = 0; j < m; j++) {
            if (i === countLetterA() - 1) {
                sortedRow.push(arr[i][j])
            }
        }
    }

    sort = arrayForSort => {
        const length = arrayForSort.length

        for (let i = 0; i < length; i++) {
          let currentValue = arrayForSort[i]
          let j
      
          for (j = i - 1; j >= 0 && arrayForSort[j] > currentValue; j--) {
            arrayForSort[j + 1] = arrayForSort[j]
          }

          arrayForSort[j + 1] = currentValue
        }

        return arrayForSort
    }

    console.log(sort(sortedRow))

    // 10
    let sortedColumn = []

    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (i === countLetterA() - 1) {
                sortedColumn.push(arr[j][i])
            }
        }
    }

    console.log(sort(sortedColumn).reverse())

    // 11
    let minNumber = averageColumns[0]
    let index = 0

    for (let i = 0; i < averageColumns.length; i++) {
        if (averageColumns[i] < minNumber) {
            minNumber = averageColumns[i]
            index = i
        }
    }

    console.log(`Min number is: ${ minNumber } and it's index is ${ index }`)
}

main()