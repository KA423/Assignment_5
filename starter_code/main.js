console.log('connected')
var userInput = $('#city-type').val()

  $('#submit-btn').click(function(event) {
  event.preventDefault()
  // if (userInput !=== 'sydney') {
  // $('body').css('background', 'url(images/sydney.jpg) no repeat center center fixed')
  // }
  if (userInput === "nyc") {
  $('body').css('background', 'url(images/nyc.jpg)')
  }
  else if (userInput === 'austin') {
  $('body').css('background', 'url(images/austin.jpg) no repeat center center fixed')
  }
  else if (userInput === 'sf') {
  $('body').css('background', 'url(images/sf.jpg) no repeat center center fixed')
  }
  else if (userInput === 'la') {
  $('body').css('background', 'url(images/la.jpg) no repeat center center fixed')
  }
  else if (userInput === 'sydney') {
  $('body').css('background', 'url(images/sydney.jpg) no repeat center center fixed')
  }
  })
