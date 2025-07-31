export class Matrix {
  constructor(input_matrix) {
    // Create rows, separate on new lines, separate on spaces and convert to numbers
    this._rows = [];
    let tmp = input_matrix.split("\n");
    for (let row of tmp) {
      let tmp_row = row.split(" ");
      let num_row = [];
      for (let num of tmp_row) {
        num_row.push(Number(num));
      }
      this._rows.push(num_row);
    }

    // Use the rows to save the columns
    this._columns = [];
    for (let n of this._rows[0]) {
      this._columns.push([]);
    }
    for (let i = 0; i < this._rows.length; i++) {
      for (let j = 0; j < this._rows[i].length; j++) {
        this._columns[j].push(this._rows[i][j]);
      }
    }
      
  }

  get rows() {
    return this._rows;
  }

  get columns() {
    return this._columns;
  }
}
