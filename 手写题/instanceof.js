function instanceOf(left, right) {
  while (left) {
    if (left.__proto__ === right.prototype) {
      return true;
    }
    left = left.__proto__;
  }

  return false;
}

function _instanceof(left, right) {
  if (
    right != null &&
    typeof Symbol !== "undefined" &&
    right[Symbol.hasInstance]
  ) {
    return !!right[Symbol.hasInstance](left);
  } else {
    return left instanceof right;
  }
}
