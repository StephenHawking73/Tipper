import React, { createContext, useContext, useState } from "react";

type TipEntry = {
  amount: string;
  date: string;
  description: string;
};

type TipHistoryContextType = {
  tipHistory: TipEntry[];
  addTip: (amount: string, description: string) => void;
};

const TipHistoryContext = createContext<TipHistoryContextType | undefined>(undefined);

export const TipHistoryProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [tipHistory, setTipHistory] = useState<TipEntry[]>([]);

  const addTip = (amount: string, description: string) => {
    const newTip: TipEntry = {
      amount,
      date: new Date().toISOString(),
      description,
    };
    setTipHistory((prev) => [newTip, ...prev]);
  };

  return (
    <TipHistoryContext.Provider value={{ tipHistory, addTip }}>
      {children}
    </TipHistoryContext.Provider>
  );
};

export const useTipHistory = () => {
  const context = useContext(TipHistoryContext);
  if (!context) throw new Error("useTipHistory must be used within TipHistoryProvider");
  return context;
};