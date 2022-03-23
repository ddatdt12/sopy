import React, {useState} from 'react';

interface refreshContextType {}
const RefreshContext = React.createContext<refreshContextType>(null!);

const RefreshProvider: React.FC = ({children}) => {
    const [refresh, setRefresh] = useState(false);

    const value = [refresh, setRefresh];
    return <RefreshContext.Provider value={value}>{children}</RefreshContext.Provider>;
};
export default RefreshProvider;

export function useRefresh() {
    return React.useContext(RefreshContext);
}
