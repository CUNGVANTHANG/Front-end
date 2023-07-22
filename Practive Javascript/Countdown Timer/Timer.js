// class
export default class Timer {
    constructor (root) {
        // Render HTML
        root.innerHTML = Timer.getHTML()
        // console.log(root)

        // Get element
        this.elements = {
            minutes: document.querySelector('.timer__part--minutes'),
            seconds: document.querySelector('.timer__part--seconds'),
            control: document.querySelector('.timer__btn--control'),
            reset: document.querySelector('.timer__btn--reset')
        }
        // console.log(this.elements.minutes)

        // Initialization value 
        this.interval = null // interval(Khoảng thời gian)
        this.remainingSeconds = 0 // remainingSeconds(Giây còn lại)

        // Listen for click event
        this.elements.control.onclick = () => {
            if (this.interval === null) {
                this.play()
            }
            else {
                this.pause()
            }
        }
        this.elements.reset.onclick = () => {
            const resetValue = prompt('Enter number of minutes::')
            if (resetValue < 60) {
                this.pause()
                this.remainingSeconds = resetValue * 60
                this.updateInterfaceTime()
            }
        }
    }
 
    // Cập nhật thời gian giao diện
    updateInterfaceTime() {
        const minutes = Math.floor(this.remainingSeconds / 60)
        const seconds = this.remainingSeconds % 60
        // console.log(minutes, seconds)
        this.elements.minutes.textContent = minutes.toString().padStart(2, "0")
        this.elements.seconds.textContent = seconds.toString().padStart(2, "0")
    }

    // Cập nhật nút bấm giao diện
    updateInterfaceControl() {
        if (this.interval === null) {
            this.elements.control.innerHTML = `<img src="./play.svg" alt="">`
            this.elements.control.classList.add('timer__btn--play')
            this.elements.control.classList.remove('timer__btn--pause')
        } else {
            this.elements.control.innerHTML = `<img src="./pause.svg" alt="">`
            this.elements.control.classList.add('timer__btn--pause')
            this.elements.control.classList.remove('timer__btn--play')
        }
    }

    // play()
    play() {
        if (this.remainingSeconds == 0) return;
        this.interval = setInterval(() => {
            this.remainingSeconds--
            if (this.remainingSeconds == 0) {
                this.pause()
            }
            this.updateInterfaceTime()
        }, 1000)

        this.updateInterfaceControl()
    }

    // pause()
    pause() {
        clearInterval(this.interval)
        this.interval = null
        this.updateInterfaceControl()
    }

    // Get HTML & Return HTML
    static getHTML() {
        return `
        <span class="timer__part timer__part--minutes">00</span>
        <span class="timer__part">:</span>
        <span class="timer__part timer__part--seconds">00</span>
        <button type="button" class="timer__btn timer__btn--control timer__btn--play">
            <img src="./play.svg" alt="">
        </button>
        <button type="button" class="timer__btn timer__btn--reset">
            <img src="./timer.svg" alt="">
        </button>
        `
    }
}