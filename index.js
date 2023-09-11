const sub = document.querySelector(".sub");
const add = document.querySelector(".add");
const no = document.querySelector(".no");


let i = no.innerHTML;

// add

add.addEventListener('click',(e) => {
  i++;
  no.innerHTML = i;
})


// sub

sub.addEventListener('click',(e) => {
    i--;
    no.innerHTML = i;
})