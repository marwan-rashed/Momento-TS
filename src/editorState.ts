class EditorState {
    private content: String;

    constructor(content: String) {
        this.content = content;
    }
    
    public getContent(): String {
        return this.content;
    }
}

export default EditorState;