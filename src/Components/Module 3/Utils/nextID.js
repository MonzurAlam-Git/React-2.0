export const generateNextId = (data) => {
  const nextId = data.reduce((prev, next) =>
    prev && prev.id > next.id ? prev.id : next.id
  );
  return nextId + 1;
};
