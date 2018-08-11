var timelineHistory = {
  y1815: {
    a1815: {
      title: 'Born',
      resume: '10 December 1815 – 27 November 1852',
      img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a4/Ada_Lovelace_portrait.jpg/800px-Ada_Lovelace_portrait.jpg'
    }
  },
  y1820: {
    a1825: {
      title: 'Example',
      resume: 'Example Resume',
      img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/de/Ada_Lovelace_child_portrait_Somerville_College.jpg/220px-Ada_Lovelace_child_portrait_Somerville_College.jpg'
    }
  }
};

var timeline = {
  year: timelineHistory['y1815'],
  subYear: 'a1815'
};

var timelineYears = () => (
  Object.keys(timelineHistory)
);

var timelineSubYears = year => (
  Object.keys(timelineHistory[year])
);

function setTimeline(year, subYear) {
  if (year) {
    timeline.year = timelineHistory[year];
  }

  if (subYear) {
    timeline.subYear = subYear;
  } else {
    timeline.subYear = timelineSubYears(year)[0];
  }
}

function updateTimeline() {
  const current = timeline.year[timeline.subYear];

  const elTitle = document.getElementById('timeline-title');
  elTitle.innerText = current.title;

  const elResume = document.getElementById('timeline-resume');
  elResume.innerText = current.resume;

  const elImage = document.getElementById('timeline-image');
  elImage.setAttribute('src', current.img);

  const elTimeline = document.getElementById('timeline');
  elTimeline.style.backgroundImage = `url(${current.img})`;
}

(function(){
  const elYears = document.getElementById('timeline-years');
  timelineYears().map(y => {
    let timelineYear = document.createElement('li');
    timelineYear.className = 'timeline-year';
    timelineYear.innerText = y.substr(1, 5);
    timelineYear.addEventListener('click', () => {
      setTimeline(y);
      updateTimeline();
    });
    elYears.appendChild(timelineYear);
  });
  updateTimeline();
})();
