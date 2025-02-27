'use client';

import { UploadButton } from '@/app/lib/utils';

export default function Upload() {
  return (
    <UploadButton
      endpoint="imageUploader"
      onClientUploadComplete={(res) => {
        console.log('Files: ', res);
        alert('Upload Completed');
      }}
      onUploadError={(error: Error) => {
        alert(`ERROR! ${error.message}`);
      }}
      className=""
    />
  );
}
