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
    landmark: 'Near Government High School',
    road: 'Nawabshah Road',
    city: 'Sanghar',
    district: 'Sanghar',
    province: 'Sindh',
    country: 'Pakistan',
  },
};

export const CORE_FACTS = [
  {
    label: 'Institutional Status',
    value: 'Government English Medium School',
    detail: 'State-designated English medium educational institution',
  },
  {
    label: 'Curricular System',
    value: 'Cambridge System',
    detail: 'Standard Cambridge academic framework and learning progression',
  },
  {
    label: 'Grade Span',
    value: 'Beginning from Nursery Onward',
    detail: 'Foundational early education progressing through grade levels',
  },
  {
    label: 'Campus Location',
    value: 'Near High School, Nawabshah Road',
    detail: 'Sanghar, Sindh, Pakistan',
  },
];
