import slugify from 'slugify';

const calculateAge = (date, reference = new Date()) =>
  new Date(reference - date).getFullYear() - new Date(0).getFullYear();

const slug = str => slugify(str, { lower: true });

export { calculateAge, slug };
