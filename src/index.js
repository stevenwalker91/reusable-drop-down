import './style.css'; 

const dropdownBtns = document.querySelectorAll('dropdown-btn');
dropdownBtns.forEach(btn => addEventListener('click', console.log('click')))

const test = () => {
    console.log('test')
}