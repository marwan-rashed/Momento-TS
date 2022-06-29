import Editor from "./editor";
import CareTaker from "./history";

const editor: Editor = new Editor();
const history: CareTaker = new CareTaker();

editor.setContent('a');
history.push(editor.createState());
console.log(editor.getContent());

editor.setContent('b');
history.push(editor.createState());
console.log(editor.getContent());

editor.setContent('c');
console.log(editor.getContent());

editor.restore(history.pop());
console.log(editor.getContent());