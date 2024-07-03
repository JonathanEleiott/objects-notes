const keyValue = `height`;

const george = {
  name: `George`,
  height: 56,
  weight: 400,
  kids: [`Sally`, `Sarah`, `Sam`],
  spouse: {
    name: `Lisa`,
    age: 23,
    height: 56
  }
}

const simon = {
  name: `Simon`,
  height: 58,
  weight: 404,
  kids: [],
  spouse: {}
}

const myCar = {
  color: `green`,
  doorCount: 4,
  engine: `v8`
}

myCar.color = `blue`;
myCar.year = 2015;

myCar[`color`] = `yellow`;

delete myCar.engine;


for(const keyName in simon) {
  // console.log(`${keyName}: ${simon[keyName]}`);
}


const georgeValues = Object.values(george);
console.log(georgeValues[4].age);
