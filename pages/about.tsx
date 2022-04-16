import Link from 'next/link';
import { DarkLayout, MainLayout } from '../components/layouts';

export default function AboutPage() {
  return (
    <>
      <h1>About Page</h1>
      <h1 className={'title'}>
        Go to <Link href='/'>Home</Link>
      </h1>

      <p className={'description'}>
        Get started by editing <code className={'code'}>pages/about.js</code>
      </p>
    </>
  );
}

AboutPage.getLayout = function getLayout(page: JSX.Element | JSX.Element[]) {
  return (
    <MainLayout>
      <DarkLayout>{page}</DarkLayout>
    </MainLayout>
  );
};
