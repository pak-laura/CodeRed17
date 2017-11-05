import math from 'mathjs';

export default (case_size, weight, grade, nom_id, drift_id) => {
  const a2h2 = Math.pow(case_size, 2) - Math.pow(nom_id, 2);

  const max_OD = 1.01 * case_size;
  const PEW = 2.67004584 * a2h2;
  const min_OD = 0.995 * case_size;
  const max_ID = math.sqrt(Math.pow(max_OD, 2) - 0.361875 * PEW);
  const min_ID = math.sqrt(Math.pow(min_OD, 2) - 0.399375 * PEW);
  const max_cap = 0.0009714 * Math.pow(max_ID, 2);
  const nom_cap = 0.0009714 * Math.pow(nom_id, 2);
  const min_cap = 0.0009714 * Math.pow(min_ID, 2);
  const nom_wall_thick = (case_size - nom_id) / 2;

  const myarr = [
    {
      name: 'max_OD',
      value: max_OD,
    },
    {
      name: 'min_OD',
      value: min_OD,
    },
    {
      name: 'PEW',
      value: PEW,
    },
    {
      name: 'max_ID',
      value: max_ID,
    },
    {
      name: 'min_ID',
      value: min_ID,
    },
    {
      name: 'max_cap',
      value: max_cap,
    },
    {
      name: 'nom_cap',
      value: nom_cap,
    },
    {
      name: 'min_cap',
      value: min_cap,
    },
    {
      name: 'nom_wall_thick',
      value: nom_wall_thick,
    },
  ];

  let burst_press = 0;
  if (nom_wall_thick / case_size > 0.05) {
    burst_press = grade * a2h2 / (Math.pow(case_size, 2) + Math.pow(nom_id, 2));
  } else {
    burst_press = 2 * grade * nom_wall_thick / (case_size + nom_wall_thick);
  }
  let collapse = 0;
  if (nom_wall_thick / case_size > 0.05) {
    collapse = grade * a2h2 / (2 * Math.pow(case_size, 2));
  } else {
    collapse = 2 * grade * nom_wall_thick / (case_size + nom_wall_thick);
  }
  const tensile = grade * a2h2 * Math.PI / 4 - (grade * a2h2 * Math.PI / 4) % 1000;

  myarr.push({ name: 'burst_press', value: burst_press });
  myarr.push({ name: 'collapse', value: collapse });
  myarr.push({ name: 'tensile', value: tensile });

  return myarr;
};
