let prevScrollpos = window.pageYOffset;
window.onscroll = function () {
  let currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById('navbar').style.top = '0';
  } else {
    document.getElementById('navbar').style.top = '-90px';
  }
  prevScrollpos = currentScrollPos;
};


// blogs
document.querySelector('#link-blog h5.ucl').onclick = () => location.href = '/ucl.html';false;
document.querySelector('#link-blog h5.git').onclick = () => location.href = '/gitandgithub.html';false;
document.querySelector('#link-blog h5.html').onclick = () => location.href = '/html.html';false;
document.querySelector('#link-blog h5.css').onclick = () => location.href = '/css.html';false;
document.querySelector('#link-blog h5.js').onclick = () => location.href = '/javascript.html';false;
document.querySelector('#link-blog h5.js2').onclick = () => location.href = '/javascriptinter.html';false;
