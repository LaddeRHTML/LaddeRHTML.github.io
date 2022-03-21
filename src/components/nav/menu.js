import { AiOutlineHome } from 'react-icons/ai'
import { AiOutlineUser } from 'react-icons/ai'
import { BiBook } from 'react-icons/bi'
import { BiMessageSquareDetail } from 'react-icons/bi'
import { BsLinkedin } from 'react-icons/bs'
import { FaGithub } from 'react-icons/fa'

export const menu = [
    {
        icon: <AiOutlineHome />,
        link: '#',
        type: 'menu'
    },
    {
        icon: <AiOutlineUser />,
        link: '#about',
        type: 'menu'
    },
    {
        icon: <BiBook />,
        link: '#experience',
        type: 'menu'
    },
    {
        icon: <BiMessageSquareDetail />,
        link: '#contact',
        type: 'menu'
    },
    {
        icon: <BsLinkedin />,
        link: 'https://www.linkedin.com/in/roman-pshenichnyy-b3a2b5213/',
        type: ''
    },
    {
        icon: <FaGithub />,
        link: 'https://github.com/LaddeRHTML',
        type: ''
    }

]