import { createContext } from 'react';
import { Perfume } from '../../type/Perfume';

type PerfumesContextType = {
    perfumes: Perfume[];
    loading: boolean;
};

const PerfumesContext = createContext({} as PerfumesContextType);
export default PerfumesContext;