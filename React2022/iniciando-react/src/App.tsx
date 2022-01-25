import { useState } from "react"
import { Tweet } from "./components/Tweet"

function App() {
  const [tweets, setTweets] = useState<string[]>([
      'Tweet 1',
      'Tweet 2',
      'Tweet 3',
      'Tweet 4',
  ])

  function createTweet(){
    setTweets([...tweets, 'tweet 5'])
  }
  return (
    <div>
      {tweets.map(tweet =>{
        return <Tweet text={tweet} />
      })}

      <button onClick={createTweet}>Add Tweet</button>
    </div>
  )
}

export default App
