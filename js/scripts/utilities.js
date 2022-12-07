export function shuffleArray(arr) {
  //Código para ordenar o Array de forma aletória
  for (let i = 0; i < arr.length; i++) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

export function getAge(dateString) {
  const today = new Date();
  const birthDate = new Date(dateString);
  let age = today.getFullYear() - birthDate.getFullYear();
  const m = today.getMonth() - birthDate.getMonth();

  if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
    age--;
  }

  return age;
}

export function formatArray(array) {
  array.forEach((element, index) => {
    element.id = index + 1;
    element.Nasc = new Date((element.Nasc - (25567 + 1)) * 86400 * 1000);

    let cat;
    let age = getAge(element.Nasc);
    if (age <= 5 && element.Sexo == "MASCULINO") {
      cat = "E";
    }
    if (age >= 6 && age <= 9 && element.Sexo == "MASCULINO") {
      cat = "D";
    }
    if (age >= 10 && age <= 13 && element.Sexo == "MASCULINO") {
      cat = "C";
    }
    if (age >= 14 && age <= 17 && element.Sexo == "MASCULINO") {
      cat = "B";
    }
    if (age >= 18 && element.Sexo == "MASCULINO") {
      cat = "A";
    }
    if (age <= 5 && element.Sexo == "FEMININO") {
      cat = "E";
    }
    if (age >= 6 && age <= 9 && element.Sexo == "FEMININO") {
      cat = "D";
    }
    if (age >= 10 && age <= 13 && element.Sexo == "FEMININO") {
      cat = "C";
    }
    if (age >= 14 && age <= 17 && element.Sexo == "FEMININO") {
      cat = "B";
    }
    if (age >= 18 && element.Sexo == "FEMININO") {
      cat = "A";
    }
    element.cat = cat;
  });
  return array;
}

export function makeKeys(array) {
  const range_5_below_M = [];
  const range_5_below_F = [];
  const range_6_9_M = [];
  const range_6_9_F = [];
  const range_10_13_M = [];
  const range_10_13_F = [];
  const range_14_17_M = [];
  const range_14_17_F = [];
  const range_18_above_M = [];
  const range_18_above_F = [];

  array.forEach((element) => {
    let age = getAge(element.Nasc);
    if (age <= 5 && element.Sexo == "MASCULINO") {
      range_5_below_M.push(element);
    }
    if (age >= 6 && age <= 9 && element.Sexo == "MASCULINO") {
      range_6_9_M.push(element);
    }
    if (age >= 10 && age <= 13 && element.Sexo == "MASCULINO") {
      range_10_13_M.push(element);
    }
    if (age >= 14 && age <= 17 && element.Sexo == "MASCULINO") {
      range_14_17_M.push(element);
    }
    if (age >= 18 && element.Sexo == "MASCULINO") {
      range_18_above_M.push(element);
    }
    if (age <= 5 && element.Sexo == "FEMININO") {
      range_5_below_F.push(element);
    }
    if (age >= 6 && age <= 9 && element.Sexo == "FEMININO") {
      range_6_9_F.push(element);
    }
    if (age >= 10 && age <= 13 && element.Sexo == "FEMININO") {
      range_10_13_F.push(element);
    }
    if (age >= 14 && age <= 17 && element.Sexo == "FEMININO") {
      range_14_17_F.push(element);
    }
    if (age >= 18 && element.Sexo == "FEMININO") {
      range_18_above_F.push(element);
    }
  });

  const keys = [
    range_5_below_M,
    range_6_9_M,
    range_10_13_M,
    range_14_17_M,
    range_18_above_M,
    range_5_below_F,
    range_6_9_F,
    range_10_13_F,
    range_14_17_F,
    range_18_above_F,
  ];

  const chaveamentos = keys.map((element) => makePair(element));
  chaveamentos.forEach((element) => {
    element.name;
  });
  //console.log(keys);
  //console.log(chaveamentos);

  return chaveamentos;
}

function makePair(array) {
  const shuffledArray = shuffleArray(array);

  const pairs = [];

  for (let i = 0; i < shuffledArray.length; i += 2) {
    pairs.push({
      challenger1: shuffledArray[i],
      challenger2: shuffledArray[i + 1] ?? "Sem oponente.",
    });
  }

  return pairs;
}
