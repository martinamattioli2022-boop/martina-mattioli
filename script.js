(function(){
var names=['home','research','publications','contact'];
function show(){
var h=(location.hash||'#home').slice(1);if(names.indexOf(h)<0)h='home';
names.forEach(function(n){document.getElementById('p-'+n).classList.toggle('on',n===h)});
document.querySelectorAll('a.l').forEach(function(a){a.classList.toggle('on',a.dataset.p===h)});
window.scrollTo(0,0);
}
window.addEventListener('hashchange',show);show();
})();
