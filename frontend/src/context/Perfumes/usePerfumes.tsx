import { useContext } from 'react';
import PerfumesContext from './PerfumeContext';

export default function usePerfumes() {
    return useContext(PerfumesContext)
}