import DragDrop from "editorjs-drag-drop";
import Undo from "editorjs-undo";
import { useCallback, useRef } from "react";
import { createReactEditorJS } from "react-editor-js";
import { defaultValue } from "./defaultValue";
import { EDITOR_JS_TOOLS } from "./constants";
import logo from './logo.svg'
import BasicDocument from "./Pdf";
const ReactEditorJS = createReactEditorJS();

function App() {

  const editorCore = useRef(null)

  const handleInitialize = useCallback((instance) => {
    editorCore.current = instance
  }, [])

  const handleReady = () => {
    const editor = editorCore.current._editorJS;
    new Undo({editor})
    new DragDrop(editor)
  }

  const handleSave = useCallback(async () => {
    const savedData = await editorCore.current.save();
    console.log(savedData)
  }, [])

  return (
    <div>
      {/* <ReactEditorJS 
        tools={EDITOR_JS_TOOLS}
        defaultValue={{
          time: 1635603431943,
          blocks: defaultValue
        }}
        readOnly={true} 
      /> */}
      <ReactEditorJS
        onReady={handleReady}
        inlineToolbar={true}
        onInitialize={handleInitialize}
        tools={EDITOR_JS_TOOLS}
        defaultValue={{
          time: 1635603431943,
          blocks: []
        }}
        placeholder={`${logo}`}
      />
      <button onClick={handleSave}>Save</button>
    </div>
  );
}

export default App;
