// VD3:
console.log('Bài 3:')
const $1 = document.querySelector
const $$1 = document.querySelectorAll

// console.log(document.querySelector('#heading').innerText) // Hello bind() method
// console.log($1('#heading').innerText) // Lỗi

// Khắc phục
const $2 = document.querySelector.bind(document)
const $$2 = document.querySelectorAll.bind(document)

// console.log($2('#heading').innerText) // Hello bind() method

// VD4:
console.log('Bài 4:')

const $ = document.querySelector.bind(document)
const $$ = document.querySelectorAll.bind(document)

const app = (() => {
    const cars = ['BMW']
    const root = $('#root')
    const input = $('#input')
    const submit = $('#submit')

    return {
        add(car) {
            cars.push(car)
        },
        delete(index) {
            cars.splice(index, 1)
        },
        render() {
            const html = cars.map((car, index) => `
                <li>
                    ${car}
                    <span class="delete" data-index="${index}">&times</span>
                </li>
            `)
            .join('')
            
            root.innerHTML = html
        },
        handleDelete(e) {
            const deleteBtn = e.target.closest('.delete') // closest giúp kiểm tra element đó hoặc cha của nó có chứa class delete hay không ?
            if (deleteBtn) {
                const index = deleteBtn.dataset.index // data- này sẽ tạo ra dataset
                console.log(this) // Kiểm tra this là cái nào
                this.delete(index)
                this.render()
            }
        },
        init() {

            // Handle DOM events
            submit.onclick = () => { // Arrow function không có context nên không có this
                const car = input.value
                this.add(car)
                this.render()

                input.value = null
                input.focus()
            }
            root.onclick = this.handleDelete.bind(this) // Ràng buộc this là app

            this.render()
        }
    }
})();

app.init()