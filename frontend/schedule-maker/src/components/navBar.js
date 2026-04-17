import React, { useState, useEffect } from 'react';
import { Colours, FontSizes } from './styles';
import { useNavigate } from 'react-router-dom';
import { Flex, IconButton, Tooltip } from '@chakra-ui/react';
import { FaHome, FaCalendarAlt, FaRegCalendar, FaUsers, FaUser, FaBars, FaChevronLeft } from 'react-icons/fa';

function NavBar() {
    const navigate = useNavigate();
    const [collapsed, setCollapsed] = useState(() => {
        const stored = window.localStorage.getItem('navbarCollapsed');
        return stored === 'true';
    });

    useEffect(() => {
        window.localStorage.setItem('navbarCollapsed', collapsed.toString());
    }, [collapsed]);

    const navItems = [
        { label: 'Welcome', path: '/', icon: FaHome },
        { label: 'Schedule', path: '/schedule', icon: FaCalendarAlt },
        { label: 'Calender', path: '/calender', icon: FaRegCalendar },
        { label: 'Employee', path: '/employee', icon: FaUsers },
        { label: 'Profile', path: '/profile', icon: FaUser },
    ];

    return (
        <Flex style={{ ...styles.nav, width: collapsed ? '80px' : '15%' }}>
            <Flex direction='column' align='flex-start' w='100%'>
                <IconButton
                    aria-label={collapsed ? 'Expand navigation' : 'Collapse navigation'}
                    icon={collapsed ? <FaBars size={22} /> : <FaChevronLeft size={22} />}
                    onClick={() => setCollapsed(!collapsed)}
                    mb='20px'
                    ml={collapsed ? '10px' : '20px'}
                    bg={Colours.secondary}
                    color='white'
                    _hover={{ bg: Colours.teritary }}
                    width='50px'
                    height='50px'
                    borderRadius='12px'
                />

                <ul style={styles.ul}>
                    {navItems.map(({ label, path, icon: Icon }) => (
                        <li
                            key={path}
                            style={styles.li}
                            onClick={() => navigate(path)}
                        >
                            <Tooltip label={label} placement='right' isDisabled={!collapsed}>
                                <Flex align='center' gap='12px'>
                                    <Icon size={20} />
                                    {!collapsed && <span>{label}</span>}
                                </Flex>
                            </Tooltip>
                        </li>
                    ))}
                </ul>
            </Flex>
        </Flex>
    );
}

export default NavBar;

const styles = {
    nav: {
        display: 'flex',
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        height: '100%',
        backgroundColor: Colours.primary,
        color: 'white',
        position: 'fixed',
        top: '100px',
        left: 0,
        padding: '20px 0',
        zIndex: 1,
        transition: 'width 0.25s ease',
    },
    ul: {
        display: 'flex',
        flexDirection: 'column',
        width: '100%',
        gap: '18px',
        padding: 0,
        margin: 0,
    },
    li: {
        listStyleType: 'none',
        fontSize: FontSizes.medium,
        width: '100%',
        cursor: 'pointer',
        display: 'flex',
        alignItems: 'center',
        padding: '10px 20px',
        color: 'white',
    }
};
