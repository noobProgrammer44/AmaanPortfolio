import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface LoadingScreenProps {
  onLoadingComplete: () => void;
}

const LoadingScreen = ({ onLoadingComplete }: LoadingScreenProps) => {
  const [currentStep, setCurrentStep] = useState(0);
  const [showCursor, setShowCursor] = useState(true);

  const loadingSteps = [
    "$ Initializing portfolio...",
    "$ Loading components...",
    "$ Fetching projects data...",
    "$ Setting up animations...",
    "$ Optimizing experience...",
    "$ Ready to showcase amazing work!",
    "$ Welcome to Amaan Khan's Portfolio"
  ];

  useEffect(() => {
    // Cursor blinking effect
    const cursorInterval = setInterval(() => {
      setShowCursor(prev => !prev);
    }, 500);

    // Step progression
    const stepInterval = setInterval(() => {
      setCurrentStep(prev => {
        if (prev < loadingSteps.length - 1) {
          return prev + 1;
        } else {
          clearInterval(stepInterval);
          setTimeout(() => {
            onLoadingComplete();
          }, 1000);
          return prev;
        }
      });
    }, 800);

    return () => {
      clearInterval(cursorInterval);
      clearInterval(stepInterval);
    };
  }, [onLoadingComplete]);

  return (
    <motion.div 
      className="fixed inset-0 bg-background z-50 flex items-center justify-center"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="bg-card rounded-lg border border-border p-8 w-full max-w-2xl mx-4">
        <div className="font-mono text-sm">
          <div className="flex items-center mb-4">
            <div className="w-3 h-3 rounded-full bg-destructive mr-2"></div>
            <div className="w-3 h-3 rounded-full bg-warning mr-2"></div>
            <div className="w-3 h-3 rounded-full bg-success mr-2"></div>
            <span className="ml-2 text-muted-foreground">terminal</span>
          </div>
          
          <div className="space-y-2 min-h-[200px]">
            {loadingSteps.slice(0, currentStep + 1).map((step, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                className="text-primary"
              >
                {step}
                {index === currentStep && (
                  <span className={`ml-1 ${showCursor ? 'opacity-100' : 'opacity-0'}`}>
                    |
                  </span>
                )}
              </motion.div>
            ))}
          </div>
          
          {currentStep === loadingSteps.length - 1 && (
            <motion.div 
              className="mt-4 flex items-center justify-center"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.5 }}
            >
              <div className="w-8 h-8 border-2 border-primary border-t-transparent rounded-full animate-spin"></div>
              <span className="ml-3 text-muted-foreground">Launching...</span>
            </motion.div>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default LoadingScreen;