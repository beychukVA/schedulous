export function overlappingEvents(events) {
  const sortedEvents = events.sort(
    (a, b) => a.militaryStartTime - b.militaryStartTime
  );
  let maxOverlaps = 0;
  let currentOverlaps = 0;
  let currentEnd = 0;
  sortedEvents.forEach((event) => {
    if (event.militaryStartTime < currentEnd) {
      currentOverlaps += 1;
    } else {
      currentOverlaps = 1;
      currentEnd = event.militaryEndTime;
    }
    maxOverlaps = Math.max(maxOverlaps, currentOverlaps);
  });
  return maxOverlaps;
}

export function addLeftIndex(events) {
  const sortedEvents = events.sort(
    (a, b) => a.militaryStartTime - b.militaryStartTime
  );
  let currentEnd = 0;
  let currentIndex = 0;

  return sortedEvents.map((event) => {
    if (event.militaryStartTime < currentEnd) {
      currentIndex += 1;
    } else {
      currentIndex = 0;
      currentEnd = event.militaryEndTime;
    }

    console.log("Index", currentIndex);

    const newEvent = {
      ...event,
      leftIndex: currentIndex,
    };

    return newEvent;
  });
}

export function addLeftIndexAndSortByEventLength(events) {
  const sortedEvents = addLeftIndex(events);
  return sortedEvents.sort(
    (a, b) =>
      b.militaryEndTime -
      b.militaryStartTime -
      (a.militaryEndTime - a.militaryStartTime)
  );
}
