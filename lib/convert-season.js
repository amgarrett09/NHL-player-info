const convertSeason = (st) => {
  const chars = st.split('');
  const left = chars.slice(0, 4);
  const right = chars.slice(4);

  return `${left.join('')}-${right.join('')}`;
};

export default convertSeason;
