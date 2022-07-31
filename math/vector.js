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

  static dotProduct(vector1, vector2) {
    var result = 0;
    result += vector1.x * vector2.x;
    result += vector1.y * vector2.y;
    result += vector1.z * vector2.z;

    return result;
  }

  static multiplyByScalar(vector, scalar) {
    vector.x *= scalar;
    vector.y *= scalar;
    vector.z *= scalar;

    return new Vector3D(new Matrix2D([[vector.x], [vector.y], [vector.z]]));
  }

  static vectorLength(vector) {
    return Math.sqrt(
      Math.pow(vector.x, 2) + Math.pow(vector.y, 2) + Math.pow(vector.z, 2)
    );
  }

  static shortestDistLinePoint(
    linePositionVector,
    lineDirectionVector,
    pointPositionVector
  ) {
    const positionDiffVector = VectorMaths.subtractVectors(
      linePositionVector,
      pointPositionVector
    );

    const directoinPositionDiffDotProduct = VectorMaths.dotProduct(
      lineDirectionVector,
      positionDiffVector
    );

    const directionVectorDotProduct = VectorMaths.dotProduct(
      lineDirectionVector,
      lineDirectionVector
    );

    const lambda =
      (-1 * directoinPositionDiffDotProduct) / directionVectorDotProduct;

    const pointVectorOnViewDirectionLine = VectorMaths.addVectors(
      linePositionVector,
      VectorMaths.multiplyByScalar(lineDirectionVector, lambda)
    );

    const shortestDistanceVector = VectorMaths.subtractVectors(
      pointVectorOnViewDirectionLine,
      pointPositionVector
    );

    return VectorMaths.vectorLength(shortestDistanceVector);
  }
}
