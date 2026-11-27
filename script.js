/* ===== BLOG POSTS =====
   To add a post, copy one block below, paste it at the TOP of the list
   and change slug (letters, numbers, hyphens only), title, date, tag, excerpt and body.
   Each string in "body" is one paragraph. */
var POSTS = [
  {
    slug: 'black-box-is-more-than-a-metaphor',
    title: 'The black box is more than a metaphor',
    date: '27 Nov 2026',
    tag: 'Black box',
    excerpt: 'We call complex models opaque, but the phrase has a history that tells us what kind of opacity we are dealing with.',
    body: [
      'When we say a model is a “black box”, we usually mean that we cannot see inside it. But the phrase did not start with machine learning. It comes from the engineering of the Second World War and was later taken up by the cyberneticists, who used it to study systems from the outside, through their inputs and outputs.',
      'That history matters because it shows that opacity is not one thing. Systems differ in how determinate they are and in how much of them we can observe, and each combination calls for a different kind of explanation.',
      'This is a sample post: replace it with your own thoughts by editing the POSTS list at the top of script.js.'
    ]
  }
];

(function () {
  var names = ['home', 'research', 'publications', 'blog', 'contact'];
  var list = document.getElementById('blog-list');
  var box = document.getElementById('post');

  function el(tag, cls, text) {
    var e = document.createElement(tag);
    if (cls) e.className = cls;
    if (text) e.textContent = text;
    return e;
  }

  POSTS.forEach(function (p) {
    var a = el('a', 'card');
    a.href = '#post-' + p.slug;
    a.appendChild(el('span', 'n', p.date + ' · ' + p.tag));
    a.appendChild(el('h3', '', p.title));
    a.appendChild(el('p', '', p.excerpt));
    list.appendChild(a);
  });

  function renderPost(p) {
    box.textContent = '';
    box.appendChild(el('span', 'tag', p.date + ' · ' + p.tag));
    box.appendChild(el('h2', 'ptitle', p.title));
    var d = el('div', 'prose');
    p.body.forEach(function (t) { d.appendChild(el('p', '', t)); });
    box.appendChild(d);
    document.title = p.title + ' — Martina Mattioli';
  }

  function show() {
    var h = (location.hash || '#home').slice(1);
    var page = h, nav = h;
    if (h.indexOf('post-') === 0) {
      var slug = h.slice(5);
      var p = POSTS.filter(function (x) { return x.slug === slug; })[0];
      if (p) { renderPost(p); page = 'post'; nav = 'blog'; }
      else { page = nav = 'blog'; }
    } else if (names.indexOf(h) < 0) {
      page = nav = 'home';
    }
    if (page !== 'post') document.title = 'Martina Mattioli — Epistemology of Machine Learning & Explainable AI';
    ['home', 'research', 'publications', 'blog', 'post', 'contact'].forEach(function (n) {
      document.getElementById('p-' + n).classList.toggle('on', n === page);
    });
    document.querySelectorAll('a.l').forEach(function (a) {
      a.classList.toggle('on', a.dataset.p === nav);
    });
    window.scrollTo(0, 0);
  }

  window.addEventListener('hashchange', show);
  show();
})();
