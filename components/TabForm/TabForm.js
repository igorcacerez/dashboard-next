import { useState } from "react";

const TabForm = ({ children, tabs }) => {

    const [activeTab, setActiveTab] = useState(0);

    return (
        <>
            <div className="conteudo-formulario">
                <nav className="menuTab">
                    <ul>
                        {tabs.map((tab, index) => (
                            <li key={index} className={activeTab === index ? 'active' : ''}>
                                <a href="#" onClick={() => setActiveTab(index)}>{tab.label}</a>
                            </li> 
                        ))}
                    </ul>
                </nav>

                <div className="conteudo">
                    {tabs[activeTab].content}
                </div>    

                <div className="paginacao">
                    <button className="btn btn-secondary" onClick={() => setActiveTab(activeTab - 1)} disabled={activeTab === 0}>Anterior</button>
                    <button className="btn btn-secondary" onClick={() => setActiveTab(activeTab + 1)} disabled={activeTab === tabs.length - 1}>Próximo</button>
                </div>
            </div>
        </>
    );
}

export default TabForm;