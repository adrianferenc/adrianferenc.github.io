let tooltipTriggerList = [
  ...[].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]')),
  document.querySelectorAll("#variousGames")[0],
];

const tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
  return new bootstrap.Tooltip(tooltipTriggerEl);
});