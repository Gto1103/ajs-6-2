export default function displayedAttack({ special }) {
  const attacks = [];
  special.forEach((item) => {
    if (!Object.keys(item).includes('description')) {
      item.description = 'Описание недоступно';
    }
    attacks.push(item);
  });
  return attacks;
}
