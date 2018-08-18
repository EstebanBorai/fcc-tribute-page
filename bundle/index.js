'use strict';

var timelineHistory = [{
  year: 1815,
  title: 'Augusta Ada King-Noel, Countess of Lovelace',
  resume: '10 December 1815 - London, England 🇬🇧󠁧󠁢󠁥󠁮󠁧󠁿 - 27 November 1852 Marylebone (aged 36), London, England 🇬🇧',
  img: 'https://raw.githubusercontent.com/estebanborai/fcc-tribute-page/master/assets/img/800px-Ada_Lovelace_portrait.jpg'
}, {
  year: 1816,
  title: 'Early life',
  resume: 'On 16 January 1816 Ada\'s mother, Annabella, at Byron\'s behest, left for her parents\' home at Kirkby Mallory, taking one-month-old Ada with her. Although English law at the time gave fathers full custody of their children in cases of separation, Byron made no attempt to claim his parental rights but did request that his sister keep him informed of Ada\'s welfare',
  img: 'https://raw.githubusercontent.com/estebanborai/fcc-tribute-page/master/assets/img/589px-Miniature_of_Ada_Byron.jpg'
}, {
  year: 1828,
  title: 'Looking forward to Fly',
  resume: 'At age 12 this future "Lady Fairy", as Charles Babbage affectionately called her, decided she wanted to fly. Ada went about the project methodically, thoughtfully, with imagination and passion. Her first step, in February 1828, was to construct wings. She investigated different material and sizes. She considered various materials for the wings: paper, oilsilk, wires, and feathers. She examined the anatomy of birds to determine the right proportion between the wings and the body.',
  img: 'https://raw.githubusercontent.com/estebanborai/fcc-tribute-page/master/assets/img/Ada_Lovelace_child_portrait_Somerville_College.jpg'
}, {
  year: 1831,
  title: 'By 1831, she was able to walk with crutches.',
  resume: 'She decided to write a book, Flyology, illustrating, with plates, some of her findings. She decided what equipment she would need; for example, a compass, to "cut across the country by the most direct road", so that she could surmount mountains, rivers, and valleys. Her final step was to integrate steam with the "art of flying".',
  img: 'https://raw.githubusercontent.com/estebanborai/fcc-tribute-page/master/assets/img/Ada_Byron_aged_seventeen_(1832).jpg'
}, {
  year: 1833,
  title: 'Ada had an affair with a tutor and, after being caught, tried to elope with him.',
  resume: 'The tutor\'s relatives recognised her and contacted her mother. Annabella and her friends covered the incident up to prevent a public scandal.',
  img: 'https://raw.githubusercontent.com/estebanborai/fcc-tribute-page/master/assets/img/Ada_Lovelace.jpg'
}, {
  yar: 1835,
  title: 'Wedding',
  resume: 'On 8 July 1835, she married William, 8th Baron King, becoming Lady King. They spent their honeymoon at Worthy Manor in Ashley Combe near Porlock Weir, Somerset. They had three children: Byron (born 12 May 1836); Anne Isabella (called Annabella; born 22 September 1837); and Ralph Gordon (born 2 July 1839).',
  img: 'https://raw.githubusercontent.com/estebanborai/fcc-tribute-page/master/assets/img/William_King_Noel_(H_Hering_NPG_x197973).jpg'
}, {
  yar: 1837,
  title: 'A tedious and suffering illness, which took months to cure',
  resume: 'Immediately after the birth of Annabella, Lady King experienced "a tedious and suffering illness, which took months to cure."',
  img: 'https://raw.githubusercontent.com/estebanborai/fcc-tribute-page/master/assets/img/Ada_Byron_daguerreotype_by_Antoine_Claudet_1843_or_1850.jpg'
}, {
  year: 1841,
  title: 'Lovelace and Medora Leigh',
  resume: 'In 1841 Lovelace and Medora Leigh (the daughter of Lord Byron\'s half-sister Augusta Leigh) were told by Ada\'s mother that her father was also Medora\'s father. On 27 February 1841, Ada wrote to her mother: "I am not in the least astonished. In fact, you merely confirm what I have for years and years felt scarcely a doubt about, but should have considered it most improper in me to hint to you that I in any way suspected."',
  img: 'https://raw.githubusercontent.com/estebanborai/fcc-tribute-page/master/assets/img/Ada_Lovelace_in_1852.jpg'
}, {
  year: 1842,
  title: 'Babbage\'s newest proposed machine, the Analytical Engine.',
  resume: 'During a nine-month period in 1842–43, Lovelace translated the Italian mathematician Luigi Menabrea\'s article on Babbage\'s newest proposed machine, the Analytical Engine. With the article, she appended a set of notes. The notes are around three times longer than the article itself and include (in Section G), in complete detail, a method for calculating a sequence of Bernoulli numbers with the Engine, which could have run correctly had Babbage\'s Analytical Engine been built. (Only his Difference Engine has been built, completed in London in 2002.) Based on this work Lovelace is now widely considered the first computer programmer and her method is recognised as the world\'s first computer program.',
  img: 'https://raw.githubusercontent.com/estebanborai/fcc-tribute-page/master/assets/img/Diagram_for_the_computation_of_Bernoulli_numbers.jpg'
}, {
  year: 1852,
  title: 'Final Years',
  resume: 'In 1852 at the age of 36, Ada Lovelance died of uterine cancer.',
  img: 'https://raw.githubusercontent.com/estebanborai/fcc-tribute-page/master/assets/img/600px-AdaLovelaceplaque.jpg'
}];
'use strict';

var timeline = document.getElementById('timeline-articles');

timelineHistory.map(function (entry) {
  // eslint-disable-line
  var timelineEntry = document.createElement('timeline-entry');
  timelineEntry.title = entry.title;
  timelineEntry.image = entry.img;
  timelineEntry.resume = entry.resume;
  timeline.appendChild(timelineEntry);
});
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var TimelineEntry = function (_HTMLElement) {
  _inherits(TimelineEntry, _HTMLElement);

  function TimelineEntry() {
    _classCallCheck(this, TimelineEntry);

    return _possibleConstructorReturn(this, (TimelineEntry.__proto__ || Object.getPrototypeOf(TimelineEntry)).apply(this, arguments));
  }

  _createClass(TimelineEntry, [{
    key: 'createdCallback',
    value: function createdCallback() {
      this.innerHTML = '\n    <article class="timeline-entry">\n      <div class="entry-body">\n        <h3>' + this.title + '</h3>\n        <p>' + this.resume + '</p>\n      </div>\n      <div class="entry-image">\n        <img\n          alt="' + this.title + '"\n          src="' + this.image + '"\n        />\n      </div>\n    </article>';
    }
  }, {
    key: 'title',
    get: function get() {
      return this.getAttribute('title');
    },
    set: function set(val) {
      this.setAttribute('title', val);
    }
  }, {
    key: 'resume',
    get: function get() {
      return this.getAttribute('resume');
    },
    set: function set(val) {
      this.setAttribute('resume', val);
    }
  }, {
    key: 'image',
    get: function get() {
      return this.getAttribute('image');
    },
    set: function set(src) {
      this.setAttribute('image', src);
    }
  }]);

  return TimelineEntry;
}(HTMLElement);

document.registerElement('timeline-entry', TimelineEntry);