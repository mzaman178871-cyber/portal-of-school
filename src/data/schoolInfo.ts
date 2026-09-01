import { SchoolContextData } from '../types';

/**
 * Authoritative School Information Source
 * Strictly reflecting confirmed project facts:
 * - PSP School (EMS), Sanghar
 * - Near High School, Nawabshah Road, Sanghar, Sindh, Pakistan
 * - Government English Medium School in Cambridge System
 * - Beginning from Nursery onward
 */
export const SCHOOL_INFO: SchoolContextData = {
  name: 'PSP School (EMS), Sanghar',
  shortName: 'PSP School (EMS)',
  designation: 'Government English Medium School',
  curriculumSystem: 'Cambridge System',
  levelSpan: 'Nursery Onward',
  location: {
    address: 'Near High School, Nawabshah Road, Sanghar',
    landmark: 'Government High School Campus vicinity',
    road: 'Nawabshah Road',
    city: 'Sanghar',
    district: 'Sanghar',
    province: 'Sindh',
    country: 'Pakistan',
  },
};

export const CORE_FACTS = [
  {
    label: 'Institutional Type',
    value: 'Government English Medium School',
    detail: 'State-affiliated English medium institution',
  },
  {
    label: 'Curricular Framework',
    value: 'Cambridge System',
    detail: 'Modern pedagogical standards and learning progression',
  },
  {
    label: 'Grade Structure',
    value: 'Beginning from Nursery Onward',
    detail: 'Foundation education leading to progressive secondary levels',
  },
  {
    label: 'Geographic Location',
    value: 'Nawabshah Road, Sanghar',
    detail: 'Central educational hub near High School, Sanghar, Sindh',
  },
];
