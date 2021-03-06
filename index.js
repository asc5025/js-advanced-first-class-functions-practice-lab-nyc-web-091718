// Code your solution in this file!
const logDriverNames = function (drivers) {
  drivers.forEach(function (driver) {
    console.log(driver.name);
  });
};

const logDriversByHometown = function (drivers, location) {
  drivers.forEach(function (driver) {
    if (driver.hometown === location) {
      console.log(driver.name);
    }
  });
};

const driversByRevenue = function (drivers) {
  const newArray = drivers.slice().sort(function (driverOne, driverTwo) {
    return driverOne.revenue - driverTwo.revenue;
  });
  return newArray;
};

const driversByName = function (drivers) {
  const sortedDrivers = drivers.slice().sort(function (driverA, driverB) {
    return driverA.name.localeCompare(driverB.name);
  });
  return sortedDrivers;
};

const totalRevenue = function (drivers) {
  return drivers.reduce((total, driver) => total + driver.revenue, 0);
};

const averageRevenue = function (drivers) {
  return totalRevenue(drivers) / drivers.length;
}
