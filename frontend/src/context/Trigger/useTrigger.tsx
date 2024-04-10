import { useContext } from "react";
import TriggerContext from "./TriggerContext";

export default function useTrigger() {
    return useContext(TriggerContext);
}