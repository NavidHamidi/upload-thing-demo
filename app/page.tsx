import Upload from './components/upload-button';

export default function Home() {
  return (
    <div className="flex flex-col justify-center items-center  h-screen p-4 gap-y-8">
      <h1 className="text-6xl font-bold">UploadThing Demo</h1>
      <p className="text-2xl">
        Test an easy upload file implementation product!
      </p>

      <Upload />
    </div>
  );
}
