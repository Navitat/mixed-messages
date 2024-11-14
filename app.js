// Haiku sentences

const fiveSyllablesMorning = [
  "Morning mist hangs low",
  "Dew glistens on grass",
  "Sunrise paints the sky",
  "Shadows slowly fade",
  "Birdsong greets the dawn",
];

const sevenSyllablesNoon = [
  "The sun stands high above me",
  "Shadows hide beneath the trees",
  "Fields glow in midday sunlight",
  "Warm winds drift across the fields",
  "Clouds linger in bright blue skies",
];

const fiveSyllablesAfternoon = [
  "Soft light fills the air",
  "Warm breeze through the pines",
  "bees hum in the sun",
  "Leaves sway in sunlight",
  "Birds rest in the shade",
];

//FUNCTIONALITY

//random number between 0 and 4

const randomNumGenerator = () => {
  return Math.floor(Math.random() * 5);
};

//Haiku generator

const createHaiku = () => {
  let haiku = [];

  haiku.push(
    fiveSyllablesMorning[randomNumGenerator()],
    sevenSyllablesNoon[randomNumGenerator()],
    fiveSyllablesAfternoon[randomNumGenerator()],
  );

  const formattedHaiku = haiku.join(",\n");

  return formattedHaiku;
};

console.log("Generated Haiku: \n");
console.log(createHaiku());
