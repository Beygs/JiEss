const input = document.querySelector('input');
const answer = document.getElementById('answer');

function translateARN(arn) {
  if (arn.length % 3 !== 0) {
    return 'ARN Invalide !';
  }
  const sequence = [];

  for (let i = 0; i < arn.length; i += 3) {
    sequence.push(arn.slice(i, i + 3));
  }

  const translatedSequence = [];
  sequence.forEach(codon => {
    let protein;
    switch (true) {
      case /UCU|UCC|UCA|UCG|AGU|AGC/.test(codon):
        protein = 'Sérine';
        break;
      case /CCU|CCC|CCA|CCG/.test(codon):
        protein = 'Proline';
        break;
      case /UUA|UUG/.test(codon):
        protein = 'Leucine';
        break;
      case /UUU|UUC/.test(codon):
        protein = 'Phenylalanine';
        break;
      case /CGU|CGC|CGA|CGG|AGA|AGG/.test(codon):
        protein = 'Arginine';
        break;
      case /UAU|UAC/.test(codon):
        protein = 'Tyrosine';
        break;
      default:
        protein = undefined;
        break;
    }
    translatedSequence.push(protein);
  })

  return translatedSequence.includes(undefined) ? 'ARN Invalide !' : translatedSequence.join('-');
}


input.addEventListener('keyup', () => {
  input.value = input.value.toUpperCase().replace(/[^AUGC]/, '');

  answer.innerText = '';

  answer.innerText = translateARN(input.value);
})

answer.innerText = translateARN(input.value);