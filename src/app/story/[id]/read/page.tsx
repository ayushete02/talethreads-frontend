import ReadingInterface from "./reading-interface";

interface ReadPageProps {
  params: Promise<{
    id: string;
  }>;
}


export default async function ReadPage({ params }: ReadPageProps) {
  const { id: storyId } = await params;

  return <ReadingInterface storyId={storyId} />;
}
