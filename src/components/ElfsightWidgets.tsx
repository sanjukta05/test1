
import React from "react";

/**
 * Elfsight click-to-call and WhatsApp widgets — sticky bottom right
 * This component must be rendered globally (inside App.tsx)
 */
const ElfsightWidgets: React.FC = () => (
  <div className="fixed z-50 right-4 bottom-6 flex flex-col items-end space-y-3 lg:space-y-4" style={{ pointerEvents: 'none' }}>
    <div
      className="elfsight-app-75568a53-9d16-45b5-966f-65fc4c73a8e1"
      data-elfsight-app-lazy
      style={{ pointerEvents: 'auto' }}
    />
    <div
      className="elfsight-app-f07d86dc-6bb2-445d-9b82-ffa7fed533d1"
      data-elfsight-app-lazy
      style={{ pointerEvents: 'auto' }}
    />
  </div>
);

export default ElfsightWidgets;
