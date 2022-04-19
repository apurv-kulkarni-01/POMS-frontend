import { extendTheme , theme as base} from "@chakra-ui/react";


const theme = extendTheme({
    fonts:{
        heading: `Inter,${base.fonts?.heading}`,
        body: `Inter,${base.fonts?.body}`,
    },
    colors:{
        accept:{
            50: '#d9f2e5',
            100: '#a1bebd',
            200: '#B0CEC7',
            300: '#8AABAB',
            400: '#42bd7b',
            500: '#38A169',
            600: '#009176',
            700: '#007F7C',
            800: '#006D78',
            900: '#1E5A6B',
        },
        reject:{
            50: '#FFE5DD',
            100: '#a1bebd',
            200: '#B0CEC7',
            300: '#A3666C',
            400: '#E79F96',
            500: '#E53E3E',
            600: '#936569',
            700: '#6B0000',
            800: '#006D78',
            900: '#1E5A6B',
        },
        darkGray:'#293C54',
        tableCell:'#2D3748',
        tableHeader:'#4A5568'
    }
}
)

export default theme