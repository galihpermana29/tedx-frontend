import Button from '@/components/shared/Button';

function ComingSoon() {
  return (
    <main className="w-full px-5 text-center flex flex-col gap-16 justify-center items-center h-screen bg-wall-texture">
      <h1 className="text-cream text-7xl sm:text-9xl linux-libertine-slanted">
        Segera Hadir
      </h1>
      <Button as="client-link" type="primary" href="/">
        Kembali
      </Button>
    </main>
  );
}

export default ComingSoon;
