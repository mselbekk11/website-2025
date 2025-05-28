'use client';

import ExperimentCard from '@/app/components/experiment-card';
import PageLayout from '@/app/components/page-layout';
import { projectData } from '@/data/project-data';

export default function Home() {
  return (
    <PageLayout>
      {/* Experiments */}
      <ul className='col-span-full grid grid-cols-subgrid'>
        {projectData.map((projectData, index) => (
          <ExperimentCard
            key={index}
            id={projectData.id}
            title={projectData.title}
            image={projectData.image}
            description={projectData.description}
            boom={projectData.boom}
            PageLink={projectData.PageLink}
          />
        ))}
      </ul>
    </PageLayout>
  );
}
