import PageHeader from '../components/PageHeader';
import Gallery from '../components/Gallery';

export default function GalleryPage() {
  return (
    <>
      <PageHeader
        title="Our Gallery"
        subtitle="Moments From Our Equestrian World"
        image="/6.png"
      />
      <Gallery hideHeader={true} />
    </>
  );
}
