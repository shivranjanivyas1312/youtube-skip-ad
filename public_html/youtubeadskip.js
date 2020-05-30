setInterval(() => {
  let element = document.getElementsByClassName(
    "ytp-ad-skip-button ytp-button"
  );
  if (element[0]) {
    document.getElementsByClassName("ytp-ad-skip-button ytp-button")[0].click()
  }
}, 2000);

