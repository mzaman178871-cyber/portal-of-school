import React from 'react';
import { 
  GraduationCap, 
  BookMarked, 
  Languages, 
  Sparkles, 
  Check, 
  ShieldCheck, 
  Compass 
} from 'lucide-react';
import { SCHOOL_INFO } from '../data/schoolInfo';

export const AcademicContext: React.FC = () => {
  const academicPillars = [
    {
      title: 'Cambridge Curricular System',
      description: 'Structured educational framework emphasizing conceptual understanding, inquiry-based learning, and academic rigor.',
      icon: <GraduationCap className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />,
      tag: 'Curriculum Standard',
    },
    {
      title: 'English Medium of Instruction',
      description: 'Comprehensive instruction delivered in English across core subjects to build strong linguistic and analytical competencies.',
      icon: <Languages className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />,
      tag: 'Language Medium',
    },
    {
      title: 'Foundation Starting at Nursery',
      description: 'Early childhood foundation starting from Nursery onward, fostering early numeracy, literacy, and structured cognitive development.',
      icon: <BookMarked className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />,
      tag: 'Grade Entry Span',
    },
    {
      title: 'Government Institutional Affiliation',
      description: 'State-affiliated institution providing standard, monitored public educational access with quality instructional oversight.',
      icon: <ShieldCheck className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />,
      tag: 'Official Governance',
    },
  ];

  const gradeStages = [
    {
      stage: 'Early Years (Nursery Onward)',
      focus: 'Foundational literacy, phonetics, sensory activities, social adaptation, and early number concepts.',
    },
    {
      stage: 'Primary Cambridge Foundation',
      focus: 'Core English language skills, mathematics, general science exploration, and structured inquiry.',
    },
    {
      stage: 'Progressive Secondary Levels',
      focus: 'Analytical thinking, scientific methodology, comprehensive assessments, and structured Cambridge curriculum objectives.',
    },
  ];

  return (
    <section id="academic-context-section" className="py-16 sm:py-20 bg-white dark:bg-zinc-900 border-b border-zinc-200 dark:border-zinc-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Section Header */}
        <div className="max-w-3xl space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-100 dark:bg-emerald-950/80 border border-emerald-300 dark:border-emerald-800 text-emerald-800 dark:text-emerald-300 text-xs font-semibold uppercase tracking-wider">
            <Compass className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
            <span>Academic Framework</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-zinc-900 dark:text-white tracking-tight">
            Cambridge System Educational Structure
          </h2>
          <p className="text-zinc-600 dark:text-zinc-300 text-base leading-relaxed">
            {SCHOOL_INFO.name} delivers structured English-medium education under the Cambridge System, structured progressively starting from Nursery onward.
          </p>
        </div>

        {/* 4 Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {academicPillars.map((pillar, idx) => (
            <div
              key={idx}
              className="p-6 rounded-xl bg-zinc-50 dark:bg-zinc-800/60 border border-zinc-200 dark:border-zinc-700/80 space-y-3 hover:border-emerald-500/50 transition-colors"
            >
              <div className="flex items-center justify-between">
                <div className="p-2.5 rounded-lg bg-emerald-50 dark:bg-emerald-950/80 border border-emerald-200 dark:border-emerald-800">
                  {pillar.icon}
                </div>
                <span className="text-[11px] font-semibold text-emerald-700 dark:text-emerald-400 bg-emerald-100/60 dark:bg-emerald-950 px-2 py-0.5 rounded">
                  {pillar.tag}
                </span>
              </div>
              <h3 className="font-bold text-base text-zinc-900 dark:text-white">
                {pillar.title}
              </h3>
              <p className="text-xs text-zinc-600 dark:text-zinc-400 leading-relaxed">
                {pillar.description}
              </p>
            </div>
          ))}
        </div>

        {/* Grade Progression Spectrum */}
        <div className="rounded-2xl bg-zinc-900 dark:bg-zinc-950 text-white p-6 sm:p-8 border border-zinc-800 shadow-xl space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-zinc-800 pb-4">
            <div>
              <div className="flex items-center gap-2 text-emerald-400 text-xs font-bold uppercase tracking-wider">
                <Sparkles className="w-4 h-4" />
                <span>Instructional Pathway</span>
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-white mt-1">
                Progressive Learning Stages
              </h3>
            </div>
            <div className="text-xs text-zinc-400 font-mono">
              Cambridge System Framework
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {gradeStages.map((stage, idx) => (
              <div
                key={idx}
                className="p-5 rounded-xl bg-zinc-800/60 dark:bg-zinc-900/80 border border-zinc-700/60 space-y-2.5"
              >
                <div className="flex items-center gap-2 text-emerald-400 text-xs font-bold">
                  <span className="w-5 h-5 rounded-full bg-emerald-950 border border-emerald-500/40 flex items-center justify-center text-[10px]">
                    {idx + 1}
                  </span>
                  <span>Stage {idx + 1}</span>
                </div>
                <h4 className="font-bold text-sm text-zinc-100">
                  {stage.stage}
                </h4>
                <p className="text-xs text-zinc-400 leading-relaxed">
                  {stage.focus}
                </p>
                <div className="pt-2 flex items-center gap-1.5 text-[11px] text-emerald-400 font-medium">
                  <Check className="w-3.5 h-3.5" />
                  <span>Standardized Curriculum</span>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
