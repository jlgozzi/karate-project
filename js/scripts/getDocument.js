import { getAge, shuffleArray, formatArray } from "./utilities.js";

function excelToJSON(selectedFile) {
  return new Promise((resolve, reject) => {
    const fileReader = new FileReader();
    fileReader.readAsBinaryString(selectedFile);
    fileReader.onload = (event) => {
      const data = event.target.result;
      const workbook = XLSX.read(data, { type: "binary" });
      const sheet = workbook.SheetNames[0];
      const participantsList = XLSX.utils.sheet_to_row_object_array(
        workbook.Sheets[sheet]
      );
      resolve(formatArray(participantsList));
    };
  });
}

export { excelToJSON };
// --------------------------------------------------------------
