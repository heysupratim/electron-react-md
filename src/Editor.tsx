import React, {useCallback, useEffect} from "react";
import codeMirrorImpl from "./CodeMirrorImpl";
import './Editor.css'

interface Props{
    initialDoc: string,
    onChange: (doc: string) => void
}

const Editor: React.FC<Props> = (props) => {
    const {onChange} = props
    const handleChange = useCallback (
        (state:any) => onChange(state.doc.toString()), [onChange]
    )
    const [refContainer, editorView] = codeMirrorImpl<HTMLDivElement>({
        initialDoc: "Hello World",
        onChange: handleChange
    })

    useEffect(() => {
        if (editorView){
            // Do nothing
        }
    },[editorView])

    return <div className="editor-wrapper" ref={refContainer}>Editor</div>
}

export default Editor