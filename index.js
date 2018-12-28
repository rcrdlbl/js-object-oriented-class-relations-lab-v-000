let driverID = 0
let passengerID = 0
let tripID = 0
let store = {drivers: [], passengers: [], trips: []}
class Driver {
  constructor(name) {
    this.id = ++driverID
    this.name = name
    store.drivers.push(this)
  }
  trips() {
    return store.trips.filter(
      function(trip) {
        return trip.driverId == this.id
      }.bind(this)
    )
  }
  passengers() {
    return this.trips().map(function(trip) {
      return trip.passenger()
    })
  }
}
class Passenger {
  constructor(name) {
    this.id = ++passengerID
    this.name = name
    store.passengers.push(this)
  }
  trips() {
    return store.trips.filter(
      function(trip) {
        return trip.passengerId == this.id
      }.bind(this)
    )
  }
  drivers() {
    return this.trips().map(function(trip) {
      return trip.driver()
    })
  }
}

class Trip {
  constructor(driver, passenger) {
    this.id = ++tripID
    if (driver) {
      this.driverId = driver.id
    }
    if (passenger) {
      this.passengerId = passenger.id
    }
    store.trips.push(this)
  }

  driver() {
    return store.drivers.find(
      function(driver) {
        return driver.id == this.driverId
      }.bind(this)
    )
  }

  passenger() {
    return store.passengers.find(
      function(passenger) {
        return passenger.id == this.passengerId
      }.bind(this)
    )
  }

}
