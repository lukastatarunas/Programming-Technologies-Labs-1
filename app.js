// 1
// Lukas Tatarūnas
// PRIf-17/2
// 20173131

class LaboratorinisVienas {
    constructor() {

    }

    main = () => {
        let n = "Lukas".length
        let m = "Tatarūnas".length
        let arr = [];
        for (let i = 0; i < m; i++) {
            arr.push(new Array(n));
        }
        return arr;
    }

}

const firstLab = new LaboratorinisVienas()

firstLab.main()