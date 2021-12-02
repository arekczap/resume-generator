export const dateToString = (date) => {
  var months = [
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
  const dateArray = date.split('-')
  return months[parseInt(dateArray[1] - 1)] + ' ' + dateArray[0]
}
