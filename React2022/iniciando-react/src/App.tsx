import { useState } from "react"
import { Tweet } from "./components/Tweet"

import './App.css'
import { AppRoutes } from "./Routes"

function App() {
  const [tweets, setTweets] = useState<string[]>([
      'Tweet 1',
      'Tweet 2',
      'Tweet 3',
      'Tweet 4',
  ])

  function createTweet(){
    setTweets([...tweets, 'Tweet 5'])
  }
  return (
    <AppRoutes/>
  )
}

export default App
