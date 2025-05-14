const enToThMapping: Record<string, string> = {
  // English QWERTY 
  // Thai Kedmanee 
  'q': 'ๆ', 'w': 'ไ', 'e': 'ำ', 'r': 'พ', 't': 'ะ', 
  'y': 'ั', 'u': 'ี', 'i': 'ร', 'o': 'น', 'p': 'ย', 
  '[': 'บ', ']': 'ล', '\\': 'ฃ',
  
  'a': 'ฟ', 's': 'ห', 'd': 'ก', 'f': 'ด', 'g': 'เ', 
  'h': '้', 'j': '่', 'k': 'า', 'l': 'ส', ';': 'ว', 
  '\'': 'ง',
  
  'z': 'ผ', 'x': 'ป', 'c': 'แ', 'v': 'อ', 'b': 'ิ', 
  'n': 'ื', 'm': 'ท', ',': 'ม', '.': 'ใ', '/': 'ฝ',
  
  'Q': '๐', 'W': '"', 'E': 'ฎ', 'R': 'ฑ', 'T': 'ธ', 
  'Y': 'ํ', 'U': '๊', 'I': 'ณ', 'O': 'ฯ', 'P': 'ญ', 
  '{': 'ฐ', '}': ',', '|': 'ฅ',
  
  'A': 'ฤ', 'S': 'ฆ', 'D': 'ฏ', 'F': 'โ', 'G': 'ฌ', 
  'H': '็', 'J': '๋', 'K': 'ษ', 'L': 'ศ', ':': 'ซ', 
  '"': '.',
  
  'Z': '(', 'X': ')', 'C': 'ฉ', 'V': 'ฮ', 'B': 'ฺ', 
  'N': '์', 'M': '?', '<': 'ฒ', '>': 'ฬ', '?': 'ฦ',
  
  '1': 'ๅ', '2': '/', '3': '-', '4': 'ภ', '5': 'ถ', 
  '6': 'ุ', '7': 'ึ', '8': 'ค', '9': 'ต', '0': 'จ', 
  '-': 'ข', '=': 'ช',
  
  '!': '+', '@': '๑', '#': '๒', '$': '๓', '%': '๔', 
  '^': 'ู', '&': '฿', '*': '๕', '(': '๖', ')': '๗', 
  '_': '๘', '+': '๙',
  
  ' ': ' ',
};

// Thai to English mapping (reverse of enToThMapping)
const thToEnMapping: Record<string, string> = {};

for (const [enChar, thChar] of Object.entries(enToThMapping)) {
  thToEnMapping[thChar] = enChar;
}

export function convertText(text: string, direction: string): string {
  if (!text) return '';

  const mapping = direction === 'en-to-th' ? enToThMapping : thToEnMapping;
  
  return Array.from(text).map(char => {
    return mapping[char] || char;
  }).join('');
}