const images = Array.from(document.querySelectorAll('.carrousel-container>img'));
const maxImages = images.length - 1;
let current = 0;
let next = 1;

function RemoveClass() {
  images[current].classList.add('hidde');
  images[next].classList.remove('hidde');
}

function GetCurrent(back = false){
  images.forEach((element, index) => {
    if (!element.classList.contains('hidde'))
      current = index;
    if (back) next = current - 1;
    else next = current + 1;
  });
}

function Next() {
  GetCurrent();
  if (current == maxImages) next = 0;
  RemoveClass();
}

function Back() {
  GetCurrent(true);
  if (current == 0) next = maxImages;
  RemoveClass();
}
