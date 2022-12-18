import { SetStateAction, useCallback, useState } from 'react'
import Editor from './editor'
import Preview from './preview'
import './App.css'

function App() {
  const [doc, setDoc] = useState<string>('# Hello World')
  const handleDocChange = useCallback( (newDoc: string) => {
    setDoc(newDoc)
  }, [])
  return (
    <div className="app">
      <Editor onChange={handleDocChange} initialDoc={doc}/>
      <Preview doc={doc}/>
    </div>
  )
}

export default App
