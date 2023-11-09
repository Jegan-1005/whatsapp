export const RemoveCountryCode = phoneNumber => {
  // Remove the country code "+91" using a regular expression
  if (phoneNumber?.startsWith('+91') || phoneNumber?.startsWith('+46')) {
    // If it starts with either of these country codes, remove them
    phoneNumber = phoneNumber?.slice(3);
  }
  let numericPart = phoneNumber?.replace(/\D/g, '');
  numericPart =
    numericPart?.charAt(0) === '0' ? numericPart?.slice(1) : numericPart;

  return numericPart;
};
