    import { useContext } from "react";
    import { Context } from "../ThemeContext/ThemeContext";

    const useThema = () => {
        const { thema, setThema } = useContext(Context);
        return [thema, setThema];
    }

    export default useThema;