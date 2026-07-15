import PageHeader from '../components/PageHeader';
import NewsComponent from '../components/News';

export default function NewsPage() {
  return (
    <>
      <PageHeader 
        title="News & Updates" 
        image="https://images.unsplash.com/photo-1522064104273-500b1d033a00?ixlib=rb-4.0.3&auto=format&fit=crop&w=1740&q=80" 
      />
      <NewsComponent />
    </>
  );
}
