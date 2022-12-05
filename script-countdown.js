const myDate = new Date("Jan 1, 2023 00:00:00").getTime();

// Update the count down every 1 second
const x = setInterval(function () {
  // Get today's date and time
  const now = new Date().getTime();

  // Find the distance between now and the count down date
  const distance = myDate - now;

  // Time calculations for days, hours, minutes and seconds
  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor(
    (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Output the result in an elements, with leading zeros
  document.getElementById("days").innerHTML = days.toLocaleString("en-US", {
    minimumIntegerDigits: 2,
    useGrouping: false,
  });
  document.getElementById("hours").innerHTML = hours.toLocaleString("en-US", {
    minimumIntegerDigits: 2,
    useGrouping: false,
  });
  document.getElementById("minutes").innerHTML = minutes.toLocaleString(
    "en-US",
    {
      minimumIntegerDigits: 2,
      useGrouping: false,
    }
  );
  document.getElementById("seconds").innerHTML = seconds.toLocaleString(
    "en-US",
    {
      minimumIntegerDigits: 2,
      useGrouping: false,
    }
  );

  // If the count down is over, write some text
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("title").innerHTML = "EXPIRED";
  }
}, 1000);
