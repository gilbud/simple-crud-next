'use client'
import { useFormStatus } from 'react-dom'
import { clsx } from 'clsx'

export const SubmitButton = ({ label }: { label: string }) => {
  const { pending } = useFormStatus()
  return (
    <button
      type='submit'
      disabled={pending}
      className={clsx(
        'bg-blue-700 text-white w-full font-medium py-2.5 px-6 text-base rounded-sm hover:bg-blue-600',
        { 'opacity-50 cursor-progress': pending }
      )}
    >
      {label === 'upload' ? (
        <>{pending ? 'Uploading...' : 'Upload'}</>
      ) : (
        <>{pending ? 'Updating...' : 'Update'}</>
      )}
    </button>
  )
}
