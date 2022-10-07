import { css } from 'styled-components'

const Variables = css`
    :root {
        /* colors */
        --color-black-pure: #000000;
        --color-black: #222222;
        --color-black-10: rgba(0, 0, 0, 0.1);
        --color-black-15: rgba(0, 0, 0, 0.15);

        --color-white: white;
        --color-white-15: rgba(255, 255, 255, 0.15);
        --color-white-25: rgba(255, 255, 255, 0.25);
        --color-white-35: rgba(255, 255, 255, 0.35);
        --color-white-70: rgba(255, 255, 255, 0.7);

        --color-blue: #158AFE;
        --color-blue-dark: #0F78E0;
        --color-grad-blue: linear-gradient(183.03deg, #00D2FF -4.2%, #2C3CFE 96.79%);

        --color-turqoise: #3BDAFF;

        --color-amber: #EEC301;

        --color-gray: gray;
        
        --color-bg-dark-page: #181818;
        --color-bg-dark-card: #282828;

        --color-bg-light-page: #EAEEF1;
        --color-bg-light-card: white;

        --color-gray-51: #333333;
        --color-gray-56: #383838;
        --color-gray-68: #444444;
        --color-gray-204: #CCCCCC;
        --color-gray-231: #E7E7E7;
        --color-gray-102: #666666;
        --color-gray-170: #AAAAAA;
        --color-gray-136: #888888;
        --color-gray-221: #DDDDDD;

        /* sizes */
        --text-size-xxs: 1.4rem;
        --text-size-xs: 1.6rem;
        --text-size-sm: 2rem;
        --text-size-md: 2.4rem;
        --text-size-lg: 3.6rem;
        --text-size-xl: 4.8rem;
        --text-size-xxl: 6rem;
    }
`

export default Variables
