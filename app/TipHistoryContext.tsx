import React, { createContext, useContext, useState } from "react";

type TipEntry = {
  tip: string;
  total: string;
  date: string;
  description: string;
};

type TipHistoryContextType = {
  tipHistory: TipEntry[];
  addTip: (tip: string, total: string, description: string) => void;
  removeTip: (tip: TipEntry) => void; // Added removeTip to context type
};

const TipHistoryContext = createContext<TipHistoryContextType | undefined>(undefined);

export const TipHistoryProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [tipHistory, setTipHistory] = useState<TipEntry[]>([]);

  const addTip = (tip: string, total: string, description: string) => {
    const newTip: TipEntry = {
      tip,
      total,
      date: new Date().toISOString(),
      description,
    };
    setTipHistory((prev) => [newTip, ...prev]);
  };

  // Remove a tip by matching all fields (tip, total, date, description)
  const removeTip = (tipToRemove: TipEntry) => {
    setTipHistory((prev) =>
      prev.filter(
        (tip) =>
          !(
            tip.tip === tipToRemove.tip &&
            tip.total === tipToRemove.total &&
            tip.date === tipToRemove.date &&
            tip.description === tipToRemove.description
          )
      )
    );
  };

  return (
    <TipHistoryContext.Provider value={{ tipHistory, addTip, removeTip }}>
      {children}
    </TipHistoryContext.Provider>
  );
};

export const useTipHistory = () => {
  const context = useContext(TipHistoryContext);
  if (!context) throw new Error("useTipHistory must be used within TipHistoryProvider");
  return context;
};