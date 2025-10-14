// <![CDATA[
function highlightDate() {
	// highlight the row for next week
	const dateRows = document.querySelectorAll('[data-date]');
	const dates = Array.from(dateRows).map((r) => new Date(r.dataset.date + 'T10:00Z'));

	console.log(dates);

	const today = new Date();

	const nextDate = dates.sort((a, b) => a - b).find((d) => new Date(d) >= today);

	const nextRow = document.querySelector(`[data-date="${nextDate.toISOString().slice(0, 10)}"]`);
	if (nextRow) {
		nextRow.classList.add('highlight');
		nextRow.scrollIntoView({ behavior: 'smooth', block: 'end', inline: 'nearest' });
	}
}

highlightDate();
