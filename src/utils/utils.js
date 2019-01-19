const calculateAge = (date, reference = new Date()) =>
  new Date(reference - date).getFullYear() - new Date(0).getFullYear();

export { calculateAge };
