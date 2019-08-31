// 1
// Lukas Tatarūnas
// PRIf-17/2
// 20173131

class LaboratorinisVienas {
    constructor(name, surname) {
        this.name = name
        this.surname = surname
    }

    main = () => {
        let n = this.name.length
        let m = this.surname.length
        let b = n + m
        let arr = []

        for (let i = 0; i < m; i++) {
            arr.push(new Array(n))
        }

        return arr
    }

    countLetterA = () => {
        let a = 0
        
        for (let i = 0; i < this.name.length; i++) {
            if (this.name.charAt(i) === "a") {
                a++
            }
        }
        
        for (let i = 0; i < this.surname.length; i++) {
            if (this.surname.charAt(i) === "a") {
                a++
            }
        }
        
        console.log(a)

        return a
    }

    generateRandomNumber = (start, end) => {
        return Math.floor(Math.random() * (end - start + 1) + start)
    }

    fillArray = () => {
        
    }

}

const firstLab = new LaboratorinisVienas("Lukas", "Tatarūnas")

firstLab.main()
firstLab.countLetterA()
firstLab.fillArray()