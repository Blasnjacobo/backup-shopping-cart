import { createContext } from "react";
import { User } from '../../type/User';

const userContext = createContext<User | undefined>(undefined);
export default userContext;
