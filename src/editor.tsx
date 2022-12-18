import React, {useCallback, useEffect} from "react";
import codeMirrorImpl from "./CodeMirrorImpl";
import './editor.css'

interface Props{
    initialDoc: string,
    onChange: (doc: string) => void
}

const Editor: React.FC<Props> = (props) => {
    const {onChange,initialDoc} = props
    const handleChange = useCallback (
        (state:any) => onChange(state.doc.toString()), [onChange]
    )
    const [refContainer, editorView] = codeMirrorImpl<HTMLDivElement>({
        initialDoc: initialDoc,
        onChange: handleChange
    })

    useEffect(() => {
        if (editorView){
            // Do nothing
        }
    },[editorView])

    return <div className="editor-wrapper" ref={refContainer}></div>
}

export default Editor