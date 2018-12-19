console.log('*** I AM WORKER ***')

addEventListener('message', event => {
  console.log('WORKER received this message: ', event.data)
})
