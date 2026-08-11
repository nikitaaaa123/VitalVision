import React from 'react';
import { AlertTriangle, Activity, ThermometerIcon } from 'lucide-react';

const RiskDisplay = ({ analysis }) => {
  const getRiskColor = (label) => {
    switch (label.toLowerCase()) {
      case 'high':
        return 'text-red-500';
      case 'medium':
        return 'text-yellow-500';
      case 'low':
        return 'text-green-500';
      default:
        return 'text-gray-500';
    }
  };

  return (
    <div className="p-4 border rounded-lg shadow-md bg-white">
      <h2 className="text-lg font-semibold mb-2">Risk Assessment</h2>
      <div className="flex items-center gap-2">
        <span className={`font-bold ${getRiskColor(analysis.risk_label)}`}>
          Risk Level: {analysis.risk_label}
        </span>
        <span>({analysis.risk_percentage}%)</span>
      </div>
      <div className="mt-4">
        <h3 className="font-semibold">Detected Symptoms:</h3>
        <ul className="list-disc pl-4">
          {analysis.symptoms.map((symptom, index) => (
            <li key={index}>{symptom}</li>
          ))}
        </ul>
      </div>
      <div className="mt-4">
        <h3 className="font-semibold">Possible Conditions:</h3>
        <ul className="list-disc pl-4">
          {analysis.possible_conditions.map((condition, index) => (
            <li key={index}>{condition}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default RiskDisplay;
