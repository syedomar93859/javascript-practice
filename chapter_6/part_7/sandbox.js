const paras = document.querySelectorAll('p');


paras.forEach(p => {
    console.log(p.innerText);
});

paras.forEach(p => {
    console.log(p.textContent);
});

paras.forEach(p => {
    if(p.textContent.includes('error')) {
        p.classList.add('error');
    }
    if(p.innerText.includes('success')) {
        p.classList.add('success');
    }
});

const title = document.querySelector('.title');

title.classList.toggle('test');
title.classList.toggle('test');
