import React from 'react'
const basicWorker = new Worker('../../workers/basicWorker.js', { type: 'module' })

const App = () => {
  const postMessageToWorker = () => {
    basicWorker.postMessage('Bonjour Monsieur worker, it is me the Main Thread.')
  }

  return (
    (
      <>
        <div>Look in the browser console</div>        
        <button onClick={postMessageToWorker}>Press me</button>
      </>
    )
  )
}

export default App
