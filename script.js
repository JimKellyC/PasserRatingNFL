document.getElementById("ratingForm").addEventListener("submit", function (e) {
  e.preventDefault();
  const att = parseFloat(document.getElementById("att").value);
  const comp = parseFloat(document.getElementById("comp").value);
  const yds = parseFloat(document.getElementById("yds").value);
  const td = parseFloat(document.getElementById("td").value);
  const intc = parseFloat(document.getElementById("int").value);

  if (att <= 0) {
    document.getElementById("result").textContent =
      "Attempts must be greater than 0.";
    return;
  }

  if (comp > att) {
    document.getElementById("result").textContent =
      "Completions cannot exceed attempts.";
    return;
  }

  const a = (comp / att - 0.3) * 5;
  const b = (yds / att - 3) * 0.25;
  const c = (td / att) * 20;
  const d = 2.375 - (intc / att) * 25;

  const clamp = (x) => Math.max(0, Math.min(x, 2.375));
  const rating = ((clamp(a) + clamp(b) + clamp(c) + clamp(d)) / 6) * 100;

  document.getElementById("result").textContent =
    "Passer Rating: " + rating.toFixed(1);

  if (rating <= 80) {
    document.getElementById("result").style.color = "red";
  } else if ((rating > 80) & (rating <= 99)) {
    document.getElementById("result").style.color = "orange";
  } else document.getElementById("result").style.color = "green";
});
