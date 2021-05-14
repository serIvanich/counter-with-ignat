
type CarType = {
    model: string
    year: number
    on: boolean
    turnOn: () => void
    rename: (model: string) => string
}

type GarageType = {
    addCar: (car: CarType) => void
    logAllCarsNames: () => void
    getAllCars: () => Array<CarType>
}

let createGarage = (): GarageType => {
    let _cars: Array<CarType> = []

    return {
        addCar(car): void {
            _cars.push(car)
        },
        logAllCarsNames() {
            console.log('Cars in the garage: ')
            _cars.forEach(c => console.log(c.model))
        },
        getAllCars() {
            return _cars
        }
    }
}



export default 1