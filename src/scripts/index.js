const timeline = document.getElementById('timeline-articles');

timelineHistory.map((entry => { // eslint-disable-line
  let timelineEntry = document.createElement('timeline-entry');
  timelineEntry.title = entry.title;
  timelineEntry.image = entry.img;
  timelineEntry.resume = entry.resume;
  timeline.appendChild(timelineEntry);
}));
