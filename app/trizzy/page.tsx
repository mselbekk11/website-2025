import PageCard from '../components/page-card';
import PageLayout from '../components/page-layout';
import { getProjectById } from '../../data/project-data';
import { notFound } from 'next/navigation';

export default function Trizzy() {
  const projectData = getProjectById('trizzy');

  if (!projectData) {
    notFound();
  }

  return (
    <PageLayout>
      <PageCard
        id={projectData.id}
        title={projectData.title}
        description={projectData.description}
        website={projectData.website}
        image={projectData.image}
        boom={projectData.boom}
        first={projectData.first}
        second={projectData.second}
        stack={projectData.stack}
        video={projectData.video}
      />
    </PageLayout>
  );
}
