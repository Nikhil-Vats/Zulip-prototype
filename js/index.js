document.getElementsByClassName('sidenav-logo')[0].style.display = 'none';
window.onresize = resize;

function resize()
{
    var w = window, d = document, e = d.documentElement,
    g = d.getElementsByTagName('body')[0];
 console.log(w.innerWidth);   
 if(w.innerWidth > 500 || e.clientWidth > 500 || g.clientWidth > 500)
 document.getElementsByClassName('sidenav-logo')[0].style.display = 'none';
 else 
 document.getElementsByClassName('sidenav-logo')[0].style.display = 'flex';
}
function showSidenav() {
    console.log('clicked');
    document.getElementById('sidenav').classList.add('show');
    document.getElementsByClassName('sidenav-logo')[0].style.display = 'flex';
}

function closeSidenav() {
    document.getElementsByClassName('sidenav-logo')[0].style.display = 'none';
    document.getElementById('sidenav').classList.remove('show');
}