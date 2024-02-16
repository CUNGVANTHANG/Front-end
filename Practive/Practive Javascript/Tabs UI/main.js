const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

const tabs = $$('.tab-item');
const panes = $$('.tab-pane');

const tabActive = $('.tab-item.active');
const line = $('.tabs .line');

console.log(tabActive);

line.style.left = tabActive.offsetLeft + "px";
line.style.width = tabActive.offsetWidth + "px";

tabs.forEach((tab, index) => {
    const pane = panes[index];

    tab.onclick = function () {
        $('.tab-item.active').classList.remove('active'); // Kiểm tra xem thằng nào có avtice thì gỡ bỏ
        $('.tab-pane.active').classList.remove('active'); // Kiểm tra xem thằng nào có avtice thì gỡ bỏ
        
        line.style.left = this.offsetLeft + 'px';
        line.style.width = this.offsetWidth + 'px';

        this.classList.add('active'); // Chèn active vào thằng khi click
        pane.classList.add('active'); 
    };
});