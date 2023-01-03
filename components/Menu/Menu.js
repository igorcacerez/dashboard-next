import { useState } from "react";
import Navbar from "../Nabar/Navbar";
import ItemMenu from "./ItemMenu";

const Menu = ({ children }) => {

    const [open, setOpen] = useState('aberto');

    const handleMenu = () => {
        (open === 'aberto') ? setOpen('fechado') : setOpen('aberto');
    };

    return (
        <>
            <div className={`menu ${open}`}>
                <h1 className="logo">Logo Aqui</h1>
                <hr className="divisor" />

                <ul className="conteudo-menu">
                    {/* Menu sem Dropdow */}
                    <li className="item-menu">
                        <a className="link-menu" href="/">
                            <i className="fa-solid fa-chart-simple"></i>
                            <span>Dashboard</span>
                        </a>
                    </li>

                    {/* Menu com Dropdow */}
                    <ItemMenu title="Cadastros" icon="fa-solid fa-user">
                        <li>
                            <a className="link-menu" href="/usuarios/cadastrar">
                                <i className="fa-solid fa-user-plus"></i>
                                <span>Usuários</span>
                            </a>
                        </li>
                        <li>
                            <a className="link-menu" href="/cadastros/clientes">
                                <i className="fa-solid fa-user-plus"></i>
                                <span>Clientes</span>
                            </a>
                        </li>
                    </ItemMenu>
                </ul>
            </div>

            <div className={`site ${open}`}>
                <Navbar
                    tipoMenu={open}
                    handleMenu={handleMenu}
                />
                <div>
                    {children}
                </div>
            </div>
        </>
    );
};

export default Menu;