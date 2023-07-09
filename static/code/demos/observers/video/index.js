const video = document.querySelector('#video');

const observer = new IntersectionObserver(entries => {
  console.log(entries[0]);
  if (!entries[0].isIntersecting) {
    video.pause();
  } else {
    video.play();
  }
});

observer.observe(video);
