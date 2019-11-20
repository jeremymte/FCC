function confirmEnding(str, target) {
    return str = str.slice(str.length - target.length) === target;
  }
  
  confirmEnding("Bastian", "n");