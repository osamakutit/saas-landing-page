import { X, Sparkles } from 'lucide-react';
import SignUpForm from './SignUpForm';

interface ModalProps {
  open: boolean;
  onClose: () => void;
}

export default function Modal({ open, onClose }: ModalProps) {
  if (!open) return null;
  return (
    <div
      className="fixed inset-0 bg-gray-950/70 dark:bg-black/75 backdrop-blur-sm flex items-center justify-center z-[60] p-4 animate-fade-up"
      onClick={onClose}
    >
      <div
        className="bg-white dark:bg-surface-raised rounded-2xl shadow-2xl dark:shadow-dark-card max-w-md w-full p-8 relative border border-gray-200 dark:border-border"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-5 right-5 w-9 h-9 rounded-xl flex items-center justify-center text-gray-400 dark:text-content-faint hover:text-gray-600 dark:hover:text-content hover:bg-gray-100 dark:hover:bg-surface-overlay transition"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>
        <div className="text-center mb-6">
          <div className="w-12 h-12 rounded-xl bg-gradient-primary flex items-center justify-center mx-auto mb-4 shadow-glow dark:shadow-dark-glow">
            <Sparkles className="w-6 h-6 text-white" />
          </div>
          <h2 className="text-2xl font-bold text-gray-900 dark:text-content">Start your free trial</h2>
          <p className="text-gray-500 dark:text-content-muted text-sm mt-1">No credit card required</p>
        </div>
        <SignUpForm onSuccess={onClose} />
      </div>
    </div>
  );
}
