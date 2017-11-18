export function isFalse(val) {
  return val === false || val === null || val === undefined || isNaN( val );
}


export function cssNames( styles, ...args ) {
  let c = [];
  let names = ( Array.isArray(args[0]) ? args[0] : args );
  for (let i=0, len=names.length; i<len; i++) {
    if ( styles[ names[i] ] ) c.push( styles[ names[i] ] );
  }
  return c.join(' ');
}


export function resolveCssProps( props, keys ) {
  let res = [];
  for (let i=0, len=keys.length; i<len; i++) {
    let k = keys[i];
    let p = props[ k ];
    res.push( (p === true) ? k : k+p );  
  }
  return res;
}

export function resolveStyleProps( props, keys ) {
  let res = {};
  for (let i=0, len=keys.length; i<len; i++) {
    let k = keys[i];
    if ( props[k] !== undefined ) res[k] = props[k];
  }
  return res;
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