import html from '../core.js';
import { connect } from '../store.js';

function Footer({ todos, filter, filters }) {
    return html`
        <footer class="footer">
            <span class="todo-count">
                <strong>${todos.filter(filters.active).length}</strong> item left
            </span>
            <ul class="filters">
                ${Object.keys(filters).map(type => html`
                    <li>
                        <a class="${filter === type && 'selected'}" href="#" onclick="dispatch('switchFilter', '${type}')">
                            ${type[0].toUpperCase() + type.slice(1)}
                        </a>
                    </li>
                `)} 
            </ul>
            ${todos.filter(filters.completed).length > 0 && 
                html`<button class="clear-completed" onclick="dispatch('clearCompleted')">Clear completed</button>`}
        </footer>
    `
}
export default connect()(Footer)