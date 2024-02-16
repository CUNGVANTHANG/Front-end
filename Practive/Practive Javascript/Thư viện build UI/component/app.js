import html from '../core.js';
import { connect } from '../store.js'

const connector = connect()

function app({ cars }) {
    return html `
        <ul>
            ${cars.map(car => `<li>${car}</li>`)}
        </ul>

        <button onclick="dispatch('ADD', 'Porsche')">Add car</button>
    `
}

export default connector(app)