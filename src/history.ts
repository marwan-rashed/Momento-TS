import EditorState from "./editorState";

class CareTaker {
    private states: EditorState[] = [];

    public push(state: EditorState) {
        this.states.push(state);
    }

    public pop(): EditorState {
        return this.states.pop()!;
    }
}

export default CareTaker;