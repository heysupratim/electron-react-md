import { SetStateAction, useCallback, useState } from 'react'
import Editor from './Editor'
import './App.css'

function App() {
  const [doc, setDoc] = useState<string>('# Hello World')
  const handleDocChange = useCallback( (newDoc: string) => {
    setDoc(newDoc)
  }, [])
  return (
    <div className="App">
      <Editor onChange={handleDocChange} initialDoc={doc}/>
    </div>
  )
}

export default App
