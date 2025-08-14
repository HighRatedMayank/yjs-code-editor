
import { Editor } from "@monaco-editor/react"
import { useRef } from "react"
import * as Y from "yjs"
import { WebrtcProvider } from "y-webrtc"
import { MonacoBinding } from "y-monaco"

function App() {

  const editorRef = useRef(null)

  function handleEditorDidMount(editor, monaco) {
    editorRef.current = editor;

    const doc = new Y.Doc()   //Initialize Yjs

    const provider = new WebrtcProvider("test-room", doc);    //connecxt to peers

    const type = doc.getText("monaco")    // doc {"monaco": what our ide is showing}

    const binding = new MonacoBinding(type, editorRef.current.getModel(), new Set([editorRef.current]), provider.awareness);     //MonacoBinding is what changes the value in the value
    console.log(provider.awareness)
  }

  return (
    <Editor 
    height="100vh"
    width="100vw"
    theme="vs-dark"
    onMount={handleEditorDidMount}
    />
  )
}

export default App
