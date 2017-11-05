import math from 'mathjs';

export default (case_size, weight, grade, nom_id, drift_id, length) => {
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

  const max_vol = math.round(max_cap * length, 4);
  const nom_vol = math.round(nom_cap * length, 4);
  const min_vol = math.round(min_cap * length, 4);

  const myarr = [
    {
      name: 'Max ID',
      value: math.round(max_ID, 3),
    },
    { name: 'Nominal ID', value: nom_id },
    { name: 'Drift ID', value: drift_id },
    {
      name: 'Min ID',
      value: math.round(min_ID, 3),
    },
    {
      name: 'Max Capacity',
      value: math.round(max_cap, 4),
    },
    { name: 'Max Volume', value: max_vol },
    {
      name: 'Nominal Capacity',
      value: math.round(nom_cap, 4),
    },
    { name: 'Nominal Volume', value: nom_vol },
    {
      name: 'Minimum Capacity',
      value: math.round(min_cap, 4),
    },
    { name: 'Min Volume', value: min_vol },
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

  const tensile = grade * a2h2 * Math.PI / 4;

  myarr.push({ name: 'Burst Pressure', value: math.round(burst_press) });
  myarr.push({ name: 'Collapse Pressure', value: math.round(collapse) });
  myarr.push({ name: 'Tensile Limit', value: math.round(tensile / 1000) * 1000 });

  return myarr;
};
