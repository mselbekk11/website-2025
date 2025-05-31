import PageCard from '../components/page-card';
import PageLayout from '../components/page-layout';
import { getProjectById } from '../../data/project-data';
import { notFound } from 'next/navigation';

export default function JennyCo() {
  const projectData = getProjectById('jennyco');

  if (!projectData) {
    notFound();
  }

  return (
    <PageLayout>
      <PageCard
        id={projectData.id}
        title={projectData.title}
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
