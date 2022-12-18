import { useEffect, useState, useRef } from "react"
import { EditorState} from "@codemirror/state"
import { EditorView, keymap, highlightActiveLine } from "@codemirror/view"
import { defaultKeymap } from "@codemirror/commands"
import { history, historyKeymap } from "@codemirror/commands"
import { indentOnInput } from "@codemirror/language"
import { bracketMatching } from "@codemirror/language"
import { lineNumbers, highlightActiveLineGutter } from "@codemirror/view"
import {syntaxHighlighting, defaultHighlightStyle } from "@codemirror/language"
import { javascript } from "@codemirror/lang-javascript"
import type React from "react"

interface Props {
    initialDoc : string,
    onChange?: (state: EditorState) => void
}

const codeMirrorImpl = <T extends Element>(
    props: Props
): [React.MutableRefObject<T | null>, EditorView?] => {
    const refContainer  = useRef<T> (null)
    const [editorView, setEditorView] = useState<EditorView>()
    const onChange = props.onChange

    useEffect(()=>{
        if(!refContainer.current) return
        const startState = EditorState.create({
            doc: props.initialDoc,
            extensions: [
                keymap.of([...defaultKeymap, ...historyKeymap]),
                lineNumbers(),
                highlightActiveLineGutter(),
                history(),
                indentOnInput(),
                bracketMatching(),
                syntaxHighlighting(defaultHighlightStyle),
                highlightActiveLine(),
                javascript(),
                EditorView.lineWrapping,
                EditorView.updateListener.of(update => {
                    if(update.changes){
                        onChange && onChange(update.state)
                    }
                })
            ]
        })

        const view  = new EditorView({
            state: startState,
            parent: refContainer.current
        })

        setEditorView(view)
    }, [refContainer])

    return [refContainer, editorView]
}

export default codeMirrorImpl