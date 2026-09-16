export interface EquipmentCategory {
  id: string
  title: string
  items: string[]
}

export const equipmentCategories: EquipmentCategory[] = [
  {
    id: 'pumps',
    title: 'Pumps',
    items: [
      'Centrifugal single-stage pumps',
      'Centrifugal multi-stage pumps',
      'Dosing pumps',
      'RO pumps',
      'Submersible pumps',
      'Troubleshooting',
      'Overhauling',
      'Maintenance',
    ],
  },
  {
    id: 'ahu',
    title: 'Air Handling Units',
    items: [
      'Variable Fresh Air AHU',
      '100% Fresh Air AHU',
      'Troubleshooting',
      'Overhauling',
      'Maintenance',
    ],
  },
  {
    id: 'tfa',
    title: 'Treated Fresh Air Units',
    items: [
      'TFA Units',
      'Assembly',
      'Reconditioning',
      'Troubleshooting',
      'Overhauling',
      'Maintenance',
    ],
  },
  {
    id: 'exhaust',
    title: 'Exhaust & Ventilation',
    items: [
      'Exhaust Fans',
      'Multiple Airflow Capacities',
      'Centrifugal Fans',
      'Vane Axial Fans',
      'Troubleshooting',
      'Overhauling',
      'Maintenance',
    ],
  },
  {
    id: 'low-capacity',
    title: 'Low Capacity HVAC & Refrigeration',
    items: [
      'Package Units',
      'Split Package Units',
      'Window AC',
      'Water Cooler',
      'Bottle Cooler',
      'Incubator',
      'Refrigerator',
      'Deep Freezer',
      'Ice Maker',
    ],
  },
  {
    id: 'central',
    title: 'Central HVAC & Chillers',
    items: [
      'Reciprocating Chillers',
      'Rotary Screw Chillers',
      'Centrifugal Chillers',
      'VRF / VRV Systems',
      'High-Capacity HVAC Systems',
      'Central Air Conditioning',
    ],
  },
  {
    id: 'controls',
    title: 'Controls & Mechanical Systems',
    items: [
      'Pneumatic Controls',
      'Electric Controls',
      'Digital Controls',
      'Boilers',
      'Commercial Refrigeration',
      'High Static / High Capacity Ducted Systems',
    ],
  },
]