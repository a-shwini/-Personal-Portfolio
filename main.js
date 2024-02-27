var paragraph = document.getElementsByTagName('p')[0];

function textEffect(animationName) {
  var text = paragraph.innerHTML,
    chars = text.length,
    newText = '',
    animation = animationName,
    char,
    i;

  for (i = 0; i < chars; i += 1) {
    newText += '<i>' + text.charAt(i) + '</i>';
  }

  paragraph.innerHTML = newText;

  var wrappedChars = document.getElementsByTagName('i'),
    wrappedCharsLen = wrappedChars.length,
    j = 0;

  function addEffect () {
    setTimeout(function () {
      wrappedChars[j].className = animation;
      j += 1;
      if (j < wrappedCharsLen) {
        addEffect();
      }
    }, 150)
  }

  addEffect();
};

textEffect('fly-in-out');


class TextScramble {
    constructor(el) {
      this.el = el;
      this.chars = '!<>-_\\/[]{}—=+*^?#________';
      this.update = this.update.bind(this);
    }
    setText(newText) {
      const oldText = this.el.innerText;
      const length = Math.max(oldText.length, newText.length);
      const promise = new Promise(resolve => this.resolve = resolve);
      this.queue = [];
      for (let i = 0; i < length; i++) {
        const from = oldText[i] || '';
        const to = newText[i] || '';
        const start = Math.floor(Math.random() * 40);
        const end = start + Math.floor(Math.random() * 40);
        this.queue.push({ from, to, start, end });
      }
      cancelAnimationFrame(this.frameRequest);
      this.frame = 0;
      this.update();
      return promise;
    }
    update() {
      let output = '';
      let complete = 0;
      for (let i = 0, n = this.queue.length; i < n; i++) {
        let { from, to, start, end, char } = this.queue[i];
        if (this.frame >= end) {
          complete++;
          output += to;
        } else if (this.frame >= start) {
          if (!char || Math.random() < 0.28) {
            char = this.randomChar();
            this.queue[i].char = char;
          }
          output += `<span class="dud">${char}</span>`;
        } else {
          output += from;
        }
      }
      this.el.innerHTML = output;
      if (complete === this.queue.length) {
        this.resolve();
      } else {
        this.frameRequest = requestAnimationFrame(this.update);
        this.frame++;
      }
    }
    randomChar() {
      return this.chars[Math.floor(Math.random() * this.chars.length)];
    }}
  
  
  // ——————————————————————————————————————————————————
  // Example
  // ——————————————————————————————————————————————————
  
  const phrases = [
  'HI,',
  'ASHWINI PATLE',
  'Web Developer',
  'and Designer',
  'Where Ideas',
  'Become Websites',
  'I offer responsive and',
  'mobile friendly designs',
  'intuitive user interfaces', 
  'seamless navigation, and',
  'robust backend development'];
  
  
  const el = document.querySelector('.text');
  const fx = new TextScramble(el);
  
  let counter = 0;
  const next = () => {
    fx.setText(phrases[counter]).then(() => {
      setTimeout(next, 2000);
    });
    counter = (counter + 1) % phrases.length;
  };
  
  next();
  /*===resume section ==*/
  document.addEventListener('DOMContentLoaded', function () {
    function setDefaultDisplay() {
        // Hide all pages
        var pages = document.querySelectorAll('.page');
        pages.forEach(function(page) {
            page.style.display = 'none';
        });

        // Show the "Education" page by default
        document.getElementById('page-1').style.display = 'block';

        // Update the "Education" tab to be the current tab
        var tabs = document.querySelectorAll('.resume_tabs ul li a');
        tabs.forEach(function(tab) {
            tab.classList.remove('current');
        });
        document.querySelector('.resume_tabs ul li a[href="#page-1"]').classList.add('current');
    }

    // Call the function when the page loads
    setDefaultDisplay();

    const tabs = document.querySelectorAll('.resume_tabs ul li a');
    const pages = document.querySelectorAll('.page');

    tabs.forEach((tab, index) => {
        tab.addEventListener('click', function (event) {
            event.preventDefault();

            // Remove 'current' class from all tabs
            tabs.forEach(t => t.classList.remove('current'));

            // Add 'current' class to the clicked tab
            this.classList.add('current');

            // Hide all pages
            pages.forEach(function(page) {
                page.style.display = 'none';
            });

            // Show the corresponding page based on the clicked tab
            var targetPageId = this.getAttribute('href');
            document.querySelector(targetPageId).style.display = 'block';
        });
    });
});

/*====portfolio section====*/

let filterItems = document.querySelectorAll('.some-selector');
let mixPortfolio = mixitup('.portfolio_wrap_container', {
  selectors: {
    target: '.portfolio_item'
  },
  animation: {
    duration: 300
  }
});

// Active Portfolio function
function activePortfolio() {
  filterItems.forEach(el => {
    el.classList.remove('filter-active');
  });
  this.classList.add('filter-active');
}

// Add click event listener to filter items
filterItems.forEach(el => {
  el.addEventListener('click', activePortfolio);
});
/*====scroll smooth====*/

const sections = document.querySelectorAll('section[id]');

function scrollActive() {
    const scrollY = window.pageYOffset;

    sections.forEach(section => {
        const sectionHeight = section.offsetHeight;
        const sectionTop = section.offsetTop - 50;

        let sectionId = section.getAttribute('id');
        let navigationLink = document.querySelector('.navigation a[href="' + '#' + sectionId + '"]');

        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight && section.innerText.trim() !== "") {
            navigationLink.classList.add('active-link');
        } else {
            navigationLink.classList.remove('active-link');
        }
    });
}

window.addEventListener('scroll', scrollActive);



