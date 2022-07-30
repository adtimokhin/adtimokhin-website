import Matrix2D from "./matrix";

export class Vector3D {
  constructor(matrix) {
    this.x = matrix.rows[0][0];
    this.y = matrix.rows[1][0];
    this.z = matrix.rows[2][0];
  }

  stringify() {
    return `[${this.x}, ${this.y}, ${this.z}]`;
  }
}

export class VectorMaths {
  static addVectors(vector1, vector2) {
    const newX = vector1.x + vector2.x;
    const newY = vector1.y + vector2.y;
    const newZ = vector1.z + vector2.z;

    return new Vector3D(new Matrix2D([[newX], [newY], [newZ]]));
  }

  static subtractVectors(vector1, vector2) {
    const newX = vector1.x - vector2.x;
    const newY = vector1.y - vector2.y;
    const newZ = vector1.z - vector2.z;

    return new Vector3D(new Matrix2D([[newX], [newY], [newZ]]));
  }
}
