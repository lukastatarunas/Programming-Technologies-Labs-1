/* 1
Lukas Tatarūnas
PRIf-17/2
20173131 */

class LaboratorinisVienas {
    constructor(name, surname) {
        this.name = name
        this.surname = surname
    }

    main() {
        let n = this.name.length
        let m = this.surname.length
        let arr = []

        for (let i = 0; i < n; i++) {
            arr.push(new Array(m))
        }

        return arr
    }

    countLetterA() {
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
        
        return a
    }

    generateRandomNumber(start, end) {
        return Math.floor(Math.random() * (end - start + 1) + start)
    }

    fillArray(arr) {
        for (let i = 0; i < arr.length; i++) {
            let random = this.generateRandomNumber(this.countLetterA(), this.name.length + this.surname.length)
            arr.push(random)
        }
        
        return arr
    }

}

const firstLab = new LaboratorinisVienas("Lukas", "Tatarūnas")

firstLab.fillArray(firstLab.main())