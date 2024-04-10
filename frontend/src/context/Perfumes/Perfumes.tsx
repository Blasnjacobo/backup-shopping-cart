import { useEffect, useState, ReactNode } from 'react';
import { Perfume } from '../../type/Perfume';
import PerfumesContext from './PerfumeContext';
// Provider component to wrap your application
export default function PerfumesProvider({ children }: { children: ReactNode }) {
    const [perfumes, setPerfumes] = useState<Perfume[]>([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const fetchStoreItems = async () => {
            setLoading(true);
            try {
            const response = await fetch('https://shopping-cart-production-4ea1.up.railway.app/perfumes/')
                if (!response.ok) {
                    throw new Error('Failed to fetch perfumes from the server');
                }
                const data = await response.json();
                setPerfumes(data.data);
            } catch (error) {
                console.error('Error fetching store items:', error);
            } finally {
                setLoading(false);
            }
        };
        fetchStoreItems();
    }, []);
    return (
        <PerfumesContext.Provider value={{ perfumes, loading }}>
            {children}
        </PerfumesContext.Provider>
    );
}
