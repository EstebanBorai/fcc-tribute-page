'use strict';

class TimelineEntry extends HTMLElement {
  get title() {
    return this.getAttribute('title');
  }

  set title(val) {
    this.setAttribute('title', val);
  }

  get resume() {
    return this.getAttribute('resume');
  }

  set resume(val) {
    this.setAttribute('resume', val);
  }

  get image() {
    return this.getAttribute('image');
  }

  set image(src) {
    this.setAttribute('image', src);
  }

  createdCallback() {
    this.innerHTML = `
    <article class="timeline-entry">
      <div class="entry-body">
        <h3>${this.title}</h3>
        <p>${this.resume}</p>
      </div>
      <div class="entry-image">
        <img
          alt="${this.title}"
          src="${this.image}"
        />
      </div>
    </article>`;
  }
}

document.registerElement('timeline-entry', TimelineEntry);
