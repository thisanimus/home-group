function highlightDate() {
	const dateRows = document.querySelectorAll('[data-date]');

	// Parse as local time (no Z)
	const dates = Array.from(dateRows).map((r) => new Date(`${r.dataset.date}T23:59`));

	const today = new Date();

	// Sort ascending
	const nextDate = dates.sort((a, b) => a - b).find((d) => d >= today);

	console.log(nextDate);

	if (nextDate) {
		// Build a local YYYY-MM-DD string
		const yyyy = nextDate.getFullYear();
		const mm = String(nextDate.getMonth() + 1).padStart(2, '0');
		const dd = String(nextDate.getDate()).padStart(2, '0');
		const localDateString = `${yyyy}-${mm}-${dd}`;

		const nextRow = document.querySelector(`[data-date="${localDateString}"]`);
		if (nextRow) {
			nextRow.classList.add('highlight');
			nextRow.scrollIntoView({ behavior: 'smooth', block: 'end', inline: 'nearest' });
		}
	}
}
highlightDate();
