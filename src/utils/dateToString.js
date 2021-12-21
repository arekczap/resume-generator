export const dateToString = (date) => {
  let months = [
    'Styczeń',
    'Luty',
    'Marzec',
    'Kwiecień',
    'Maj',
    'Czerwiec',
    'Lipiec',
    'Sierpień',
    'Wrzesień',
    'Październik',
    'Listopad',
    'Grudzień',
  ]

  if (date !== '') return ''
  const dateArray = date.split('-')
  return months[parseInt(dateArray[1] - 1)] + ' ' + dateArray[0]
}
