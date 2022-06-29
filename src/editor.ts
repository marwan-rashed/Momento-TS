import EditorState from "./editorState";

class Editor {
    private content: String = '';

    public getContent(): String {
        return this.content;
    }

    public setContent(content: String): void {
        this.content = content;
    }

    public createState(): EditorState {
        return new EditorState(this.content);
    }

    public restore(state: EditorState): void {
        this.content = state.getContent();
    }
}

export default Editor;