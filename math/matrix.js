// TODO: Test this class!
class Matrix2D {
  constructor(rows) {
    this.rows = rows;
    this.numberOfRows = rows.length;
    this.numberOfColumns = rows[0].length;
  }

  getRow(index) {
    if (index >= this.rows.length) {
      return Error("Out of bound");
    }

    if (index < 0) {
      return Error("Out of bound");
    }

    return this.rows[index];
  }

  getColumn(index) {
    if (index >= this.rows[0].length) {
      return Error("Out of bound");
    }

    if (index < 0) {
      return Error("Out of bound");
    }

    const column = [];
    for (var i = 0; i < this.rows.length; i++) {
      column.push(this.rows[i][index]);
    }

    return column;
  }

  multiply(secondMatrix) {
    if (this.numberOfColumns != secondMatrix.numberOfRows) {
      return Error("Math Error: matrices have incompatable dimensions");
    }

    // creating a result matrix with dummy values
    const resultDummyMatrix = [];
    for (var i = 0; i < this.numberOfRows; i++) {
      const row = [];
      for (var j = 0; j < secondMatrix.numberOfColumns; j++) {
        row.push[0];
      }
      resultDummyMatrix.push(row);
    }

    function multiplyArrays(arr1, arr2) {
      var result = 0;
      for (let i = 0; i < arr1.length; i++) {
        result += arr1[i] * arr2[i];
      }

      return result;
    }

    // calculating values to store in the result matrix
    for (var i = 0; i < this.numberOfRows; i++) {
      const row = this.getRow(i);
      for (var j = 0; j < secondMatrix.numberOfColumns; j++) {
        const column = secondMatrix.getColumn(j);
        resultDummyMatrix[i][j] = multiplyArrays(row, column);
      }
    }

    // Finding rows
    const rows = [];
    for (let i = 0; i < resultDummyMatrix.length; i++) {
      const row = resultDummyMatrix[i];
      rows.push(row);
    }

    const resultMatrix = new Matrix2D(rows);
    return resultMatrix;
  }

  stringify() {
    var stringMatrix = "";
    for (let i = 0; i < this.rows.length; i++) {
      const row = this.rows[i];
      stringMatrix += "["
      stringMatrix += row.join(",");
      stringMatrix += "]\n";
    }

    return stringMatrix;
  }
}

export default Matrix2D;
