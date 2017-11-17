export function isFalse(val) {
  return val === false || val === null || val === undefined || val === NaN;
}


export function keyName(which) {
  switch (which) {
      case 8: return 'backspace';
      case 9: return 'tab';
      case 32: return 'space';
      case 37: return 'left';
      case 38: return 'up';
      case 39: return 'right';
      case 40: return 'down';
      case 16: return 'shift';
      case 17: return 'control';
      case 18: return 'alt';
      case 13: return 'enter';
      case 27: return 'esc';
      case 20: return 'caplock';
      default: return '-';
  }
}

export function charName(which) {
  switch (which) {
    case 43: return 'plus';
    case 45: return 'minus';
    case 42: return 'multiply';
    case 47: return 'divide';
    case 61: return 'equal';
    case 95: return 'underscore';
    case 46: return 'dot';
    case 40: return 'open-bracket';
    case 41: return 'close-bracket';
    case 99: return 'backspace';
    default: return '-';
  }
}