export default function formatDate(date) {
  const months = [
    'Jan',
    'Fev',
    'Mar',
    'Abr',
    'Maio',
    'Jun',
    'Jul',
    'Ago',
    'Set',
    'Out',
    'Nov',
    'Dez',
  ];
  const day = date.substring(0, 2);
  const month = date.substring(3, 5);
  const year = date.substring(6, 10);
  const monthString = months[parseInt(month, 10) - 1];
  return { day, month, year, monthString };
}
