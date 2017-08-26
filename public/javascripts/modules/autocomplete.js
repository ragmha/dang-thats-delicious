function autoComplete(input, latInput, lngInput) {
  if (!input) return;
  const dropDown = new google.maps.places.Autocomplete(input);

  dropDown.addListener('place_changed', () => {
    const place = dropDown.getPlace();
    latInput.value = place.geometry.location.lat();
    lngInput.value = place.geometry.location.lng();
  });

  input.on('keydown', e => {
    if (e.keyCode === 13) e.preventDefault();
  });
}

export default autoComplete;
