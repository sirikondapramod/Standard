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
      'Multi-stage pumps',
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
      'Assembly',
      'Reconditioning',
      'Troubleshooting',
      'Overhauling',
      'Maintenance',
    ],
  },
  {
    id: 'exhaust',
    title: 'Exhaust Fans',
    items: [
      'All types of flow',
      'Multiple capacities',
      'Troubleshooting',
      'Overhauling',
      'Maintenance',
    ],
  },
  {
    id: 'low-capacity',
    title: 'Low Capacity HVAC',
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
    title: 'Central HVAC',
    items: [
      'Reciprocating Chillers',
      'Rotary Screw Chillers',
      'Centrifugal Chillers',
      'Large Central Plant Applications',
    ],
  },
  {
    id: 'controls',
    title: 'Controls & Mechanical',
    items: [
      'Pneumatic Controls',
      'Electric Controls',
      'Digital Controls',
      'Boilers',
      'Centrifugal Fans',
      'Vane Axial Fans',
      'Commercial Refrigeration',
    ],
  },
]
