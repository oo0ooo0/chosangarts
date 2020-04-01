export function createTitle(text) {
  if (text) {
    const sentences = text.split('\n');
    if (sentences.length > 1) {
      return `${sentences[0]}`.trim();
    }
  }
  return '';
}

export function createInfo(text) {
  if (text) {
    const sentences = text.split('\n');
    if (sentences.length > 1) {
      return `${(sentences[1], sentences[2])}`.trim();
    }
  }
  return '';
}

export function calcColumn() {
  if (window.innerWidth < 600) {
    return 2;
  } else if (window.innerWidth < 1024) {
    return 3;
  } else {
    return 4;
  }
}
