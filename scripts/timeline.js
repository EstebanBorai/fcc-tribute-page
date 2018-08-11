var timeline = {
  year: timelineHistory['y1815'],
  yearString: 'y1815',
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
    timeline.yearString = year;
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

  const elTimelineYears = document.getElementsByClassName('timeline-year');

  for (let i = 0; i < elTimelineYears.length; i++) {
    if (elTimelineYears.item(i).innerText === timeline.yearString.substr(1, 5)) {
      elTimelineYears.item(i).className = 'timeline-year current';
      continue;
    }
    elTimelineYears.item(i).className = 'timeline-year';
    continue;
  }

  const elTimelineSubYears = document.getElementById('subyears-list');

  while (elTimelineSubYears.firstChild) {
    elTimelineSubYears.removeChild(elTimelineSubYears.firstChild);
  }

  timelineSubYears(timeline.yearString).map(sy => {
    const subYear = document.createElement('li');
    subYear.className = 'timeline-sub-year';
    subYear.innerText = sy.substr(1, 5);
    subYear.addEventListener('click', () => {
      setTimeline(null, sy);
      updateTimeline();
    });
    elTimelineSubYears.appendChild(subYear);
  });

  const elTimelineSubYearsList = document.getElementsByClassName('timeline-sub-year');

  for (let i = 0; i < elTimelineSubYears.length; i++) {
    if (elTimelineSubYearsList.item(i).innerText === timeline.subYear.substr(1, 5)) {
      elTimelineSubYearsList.item(i).className = 'timeline-sub-year current';
      continue;
    }
    elTimelineSubYearsList.item(i).className = 'timeline-sub-year';
    continue;
  }
}

(function(){
  const elYears = document.getElementById('years-list');
  timelineYears().map(y => {
    let timelineYear = document.createElement('li');
    timelineYear.className = `timeline-year`;
    timelineYear.innerText = y.substr(1, 5);
    timelineYear.addEventListener('click', () => {
      setTimeline(y);
      updateTimeline();
    });
    elYears.appendChild(timelineYear);
  });

  const elSubYears = document.getElementById('subyears-list');
  timelineSubYears(timeline.yearString).map(y => {
    let timelineSubYear = document.createElement('li');
    timelineSubYear.className = 'timeline-year';
    timelineSubYear.innerText = y.substr(1, 5);
    timelineSubYear.addEventListener('click', () => {
      setTimeline(null, y);
      updateTimeline();
    });
    elSubYears.appendChild(timelineSubYear);
  });

  updateTimeline();
})();
