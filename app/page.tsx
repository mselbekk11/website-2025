'use client';

import ExperimentCard from '@/app/components/experiment-card';
import PageLayout from '@/app/components/page-layout';
import { projectData } from '@/data/project-data';

export default function Home() {
  return (
    <PageLayout>
      {/* Experiments */}
      <ul className='col-span-full grid grid-cols-subgrid'>
        {projectData.map((experiment, index) => (
          <ExperimentCard
            key={index}
            id={`ui-experiment-${index + 1}`}
            title={experiment.title}
            image={experiment.image}
            description={experiment.description}
            boom={experiment.boom}
          />
        ))}
      </ul>
    </PageLayout>
  );
}
