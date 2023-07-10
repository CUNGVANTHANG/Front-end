import html from '../core.js';
import { connect } from '../store.js'
import Header from '../component/Header.js';
import TodoList from '../component/TodoList.js'
import Footer from '../component/Footer.js';

function App({ todos }) {
    return html`
        <section class="todoapp">
            ${Header()}
            ${todos.length > 0 && TodoList()}
            ${todos.length > 0 && Footer()}
        </section>
    `
}
export default connect()(App)