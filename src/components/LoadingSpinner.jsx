import { motion } from 'framer-motion';

const LoadingSpinner = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-background dark:bg-slate-900">
      <div className="text-center">
        <motion.div
          className="inline-block w-12 h-12 border-4 border-gray-300 dark:border-gray-600 border-t-primary-500 rounded-full"
          animate={{ rotate: 360 }}
          transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
        />
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="mt-4 text-text-muted dark:text-slate-400"
        >
          Loading...
        </motion.p>
      </div>
    </div>
  );
};

export default LoadingSpinner;
