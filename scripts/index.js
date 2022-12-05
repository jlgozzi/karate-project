let selectedFile;
console.log(window.XLSX);
document.getElementById("input").addEventListener("change", (event) => {
  selectedFile = event.target.files[0];
});

let data = [
  {
    name: "jayanth",
    data: "scd",
    abc: "sdef",
  },
];

export function getDocument() {
  document.getElementById("button").addEventListener("click", () => {
    XLSX.utils.json_to_sheet(data, "out.xlsx");

    if (selectedFile) {
      let fileReader = new FileReader();
      fileReader.readAsBinaryString(selectedFile);

      fileReader.onload = (event) => {
        let data = event.target.result;
        let workbook = XLSX.read(data, { type: "binary" });

        workbook.SheetNames.forEach((sheet) => {
          let rowObject = XLSX.utils.sheet_to_row_object_array(
            workbook.Sheets[sheet]
          );

          database = formatArray(rowObject);

          makeKeys(database);

          document.getElementById("jsondata").innerHTML = JSON.stringify(
            rowObject,
            undefined,
            4
          );
        });
      };
    }
  });
}

// --------------------------------------------------------------

function formatArray(array) {
  array.forEach((element) => {
    element.Nasc = new Date((element.Nasc - (25567 + 1)) * 86400 * 1000);
  });
  return array;
}

function getAge(dateString) {
  const today = new Date();
  const birthDate = new Date(dateString);
  let age = today.getFullYear() - birthDate.getFullYear();
  const m = today.getMonth() - birthDate.getMonth();

  if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
    age--;
  }

  return age;
}

function makeKeys(array) {
  const range_5_below = [];
  const range_6_9 = [];
  const range_10_13 = [];
  const range_14_17 = [];
  const range_18_above = [];

  array.forEach((element) => {
    let age = getAge(element.Nasc);
    if (age <= 5) {
      range_5_below.push(element);
    }
    if (age >= 6 && age <= 9) {
      range_6_9.push(element);
    }
    if (age >= 10 && age <= 13) {
      range_10_13.push(element);
    }
    if (age >= 14 && age <= 17) {
      range_14_17.push(element);
    }
    if (age >= 18) {
      range_18_above.push(element);
    }
  });
  console.log({
    range_5_below,
    range_6_9,
    range_10_13,
    range_14_17,
    range_18_above,
  });
  return { range_5_below, range_6_9, range_10_13, range_14_17, range_18_above };
}
