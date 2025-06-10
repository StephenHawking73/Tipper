import AsyncStorage from "@react-native-async-storage/async-storage";
import React, { createContext, useContext, useEffect, useState } from "react";
import { Alert } from "react-native";

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

  const _storeData = async (data: TipEntry[]) => {
    try {
      await AsyncStorage.setItem('tipHistory', JSON.stringify(data));
    } catch (err) {
      console.log(err);
      Alert.alert("An error occured", String(err));
    }
  };

  const _getData = async () => {
    try {
      const data = await AsyncStorage.getItem('tipHistory');
      if (data !== null) {
        setTipHistory(JSON.parse(data));
      }
    } catch (err) {
      console.log(err);
      Alert.alert("An error occured", String(err));
    }
  };

  useEffect(() => {
    _getData();
  }, []);

  const addTip = (tip: string, total: string, description: string) => {
    const newTip: TipEntry = {
      tip,
      total,
      date: new Date().toISOString(),
      description,
    };
    setTipHistory(prev => {
      const updated = [newTip, ...prev];
      _storeData(updated);
      return updated;
    });
  };

  // Remove a tip by matching all fields (tip, total, date, description)
  const removeTip = (tipToRemove: TipEntry) => {
    setTipHistory(prev => {
      const updated = prev.filter(
        tip =>
          !(
            tip.tip === tipToRemove.tip &&
            tip.total === tipToRemove.total &&
            tip.date === tipToRemove.date &&
            tip.description === tipToRemove.description
          )
      );
      _storeData(updated);
      return updated;
    });
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