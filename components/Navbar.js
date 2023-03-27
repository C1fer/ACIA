import { useSupabaseClient } from '@supabase/auth-helpers-react';
import { useState } from 'react';
import { Logo, Icon_Home, Icon_light, Icon_dark, Icon_logout, Icon_history, Icon_selection, Icon_help } from '../public/navbar_icons'

var button_format = "text-left my-1 p-2 group";
var text_format
const bt_icon_format = "flex gap-4 items-center justify-start group-hover:text-clearBlue";
const icon_format = "justify-center self-center w-6 h-6 fill-current text-boneWhite group-hover:text-clearBlue";

const Navbar = () => {
    const supabase = useSupabaseClient();
    const [themeState, changeTheme] = useState(true);
    const [navMinimized, changeNavState] = useState(false);
    var userRol = 'Profesor';

    function logout() {
        supabase.auth.signOut();
    }

    function themeHandleClick() {
        changeTheme((currentState) => !currentState);
    }

    function navbarHandleClick() {
        changeNavState((currentState) => !currentState);

        if (navMinimized === false) {
            button_format = "text-left my-1 p-2 group ";
            text_format = {};
        }
        else {
            button_format = " my-1 p-2 group";
            text_format = { display: 'none' }
        }
    }

    function Icon_Theme({ state, format, spanFormat }) {
        if (state) {
            return (
                <span className={spanFormat}>
                    <Icon_dark className={format} />
                    <p style={text_format}>Oscuro</p>
                </span>)
        }
        else {
            return (
                <span className={spanFormat}>
                    <Icon_light className={format} />
                    <p style={text_format}>Claro</p>
                </span>)
        }
    }

    function DelimetedFuntionalities({ rol, bt_format, bt_ic_format, span_format, icn_format, txt_format }) {
        if (rol === 'Admin') {
            return (<>
                <button className={bt_format}>
                    <span className={bt_ic_format}>
                        <Icon_history className={icn_format} />
                        <p style={txt_format}>Administrar Usuarios</p>
                    </span>
                </button>
                <button className={bt_format}>
                    <span className={bt_ic_format}>
                        <Icon_history className={icn_format} />
                        <p style={txt_format}>Administrar Asignatura</p>
                    </span>
                </button>
            </>)
        }
        else if (rol === 'Profesor') {
            return (<>
                <button className={bt_format}>
                    <span className={bt_ic_format}>
                        <Icon_selection className={icn_format} />
                        <p style={txt_format}>Gestión de Calificaciones</p>
                    </span>
                </button>
            </>)
        }
        else if (rol === 'Estudiante') {
            return (<>
                <button className={bt_format}>
                    <span className={bt_ic_format}>
                        <Icon_selection className={icn_format} />
                        <p style={txt_format}>Seleccionar Asignatura</p>
                    </span>
                </button>
                <button className={bt_format}>
                    <span className={bt_ic_format}>
                        <Icon_history className={icn_format} />
                        <p style={txt_format}>Historial Academico</p>
                    </span>
                </button>
            </>)
        }
    }

    return <div className="grid grid-flow-row grid-rows content-between min-h-screen w-fit px-2 bg-mainBlack text-boneWhite text-md">
        <div className='flex flex-col w-fit' onClick={navbarHandleClick}>
            <button className='justify-center self-center'>
                <Logo className='my-4' style={{ width: '3rem', height: '3rem' }}
                />
            </button>
            <button className={button_format}>
                <span className={bt_icon_format}>
                    <Icon_Home className={icon_format} />
                    <p style={text_format}>Home</p>
                </span>
            </button>
            <DelimetedFuntionalities rol={userRol} bt_format={button_format} bt_ic_format={bt_icon_format} icn_format={icon_format} txt_format={text_format} />
            <button className={button_format}>
                <span className={bt_icon_format}>
                    <Icon_help className={icon_format} />
                    <p style={text_format}>Ayuda</p>
                </span>
            </button>
        </div>
        <div className='flex flex-col'>
            <button className={button_format} onClick={themeHandleClick}>
                <Icon_Theme state={themeState} format={icon_format} spanFormat={bt_icon_format} />
            </button>
            <button className={button_format} onClick={logout}>
                <span className={bt_icon_format}>
                    <Icon_logout className={icon_format} spanFormat={bt_icon_format} />
                    <p style={text_format}>Salir</p>
                </span>
            </button>
        </div>
    </div>
}

export default Navbar;