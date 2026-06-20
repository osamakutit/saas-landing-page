import { useForm } from 'react-hook-form';

interface FormValues {
  name: string;
  email: string;
  company?: string;
}

interface SignUpFormProps {
  onSuccess: () => void;
}

export default function SignUpForm({ onSuccess }: SignUpFormProps) {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<FormValues>();

  const onSubmit = async (data: FormValues) => {
    await new Promise((resolve) => setTimeout(resolve, 1000));
    console.log('Form submitted', data);
    reset();
    onSuccess();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      <div>
        <label className="block text-sm font-medium text-gray-700 dark:text-content mb-1" htmlFor="signup-name">
          Name
        </label>
        <input
          id="signup-name"
          type="text"
          {...register('name', { required: 'Name is required' })}
          className="w-full px-3 py-2.5 bg-white dark:bg-surface-overlay border border-gray-300 dark:border-border text-gray-900 dark:text-content rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-primary dark:focus:ring-primary-glow focus:border-transparent placeholder:text-gray-400 dark:placeholder:text-content-faint"
        />
        {errors.name && (
          <p className="mt-1 text-sm text-red-600 dark:text-red-400" role="alert">
            {errors.name.message}
          </p>
        )}
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 dark:text-content mb-1" htmlFor="signup-email">
          Email
        </label>
        <input
          id="signup-email"
          type="email"
          {...register('email', {
            required: 'Email is required',
            pattern: {
              value: /^[^@\s]+@[^@\s]+\.[^@\s]+$/,
              message: 'Enter a valid email address',
            },
          })}
          className="w-full px-3 py-2.5 bg-white dark:bg-surface-overlay border border-gray-300 dark:border-border text-gray-900 dark:text-content rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-primary dark:focus:ring-primary-glow focus:border-transparent placeholder:text-gray-400 dark:placeholder:text-content-faint"
        />
        {errors.email && (
          <p className="mt-1 text-sm text-red-600 dark:text-red-400" role="alert">
            {errors.email.message}
          </p>
        )}
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 dark:text-content mb-1" htmlFor="signup-company">
          Company (optional)
        </label>
        <input
          id="signup-company"
          type="text"
          {...register('company')}
          className="w-full px-3 py-2.5 bg-white dark:bg-surface-overlay border border-gray-300 dark:border-border text-gray-900 dark:text-content rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-primary dark:focus:ring-primary-glow focus:border-transparent placeholder:text-gray-400 dark:placeholder:text-content-faint"
        />
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full py-3 px-4 bg-primary text-white font-semibold rounded-xl hover:bg-primary-dark dark:bg-indigo-500 dark:hover:bg-indigo-400 focus:outline-none focus:ring-2 focus:ring-primary dark:focus:ring-primary-glow focus:ring-offset-2 dark:focus:ring-offset-surface-raised transition shadow-lg shadow-indigo-500/20 dark:shadow-dark-glow"
      >
        {isSubmitting ? 'Submitting...' : 'Get Started'}
      </button>
    </form>
  );
}
