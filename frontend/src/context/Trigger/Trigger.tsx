import { ReactNode } from 'react';
import TriggerContext from './TriggerContext';
// Provider component to wrap your application
export default function TriggerProvider({ children }: { children: ReactNode }) {
    const trigger = true
    return (
        <TriggerContext.Provider value={trigger}>
            {children}
        </TriggerContext.Provider>
    );
}
