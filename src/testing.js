async function getCountry() {
  const countryCol = collection(db, 'country');
  const countrysnapshot = await getDocs(countryCol);
  const countryList = countrysnapshot.docs.map(doc => doc.data());
  return countryList;
}
