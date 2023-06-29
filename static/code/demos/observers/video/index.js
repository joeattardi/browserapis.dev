const video = document.querySelector('#video');

const observer = new IntersectionObserver(entries => {
  if (!entries[0].isIntersecting) {
    video.pause();
  } else {
    video.play();
  }
});

observer.observe(video);
