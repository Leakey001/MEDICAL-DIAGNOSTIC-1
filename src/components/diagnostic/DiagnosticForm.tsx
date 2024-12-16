import React from 'react';
import { useForm } from 'react-hook-form';
import { Patient } from '@/types/medical';

interface DiagnosticFormProps {
  patient: Patient;
  onSubmit: (data: any) => void;
}

export const DiagnosticForm: React.FC<DiagnosticFormProps> = ({ patient, onSubmit }) => {
  const { register, handleSubmit } = useForm();

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      <div>
        <label className="block text-sm font-medium text-gray-700">
          Symptoms
        </label>
        <textarea
          {...register('symptoms')}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm"
          rows={3}
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700">
          Additional Notes
        </label>
        <textarea
          {...register('notes')}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm"
          rows={3}
        />
      </div>

      <button
        type="submit"
        className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700"
      >
        Generate Diagnostic
      </button>
    </form>
  );
};