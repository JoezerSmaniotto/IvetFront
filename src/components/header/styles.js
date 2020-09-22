import styled from 'styled-components';
import { shade } from 'polished';

export const Component = styled.div`
    width:100vw;  
    height: 7%;
    background: red;
    display: flex;
    align-items: center;
    /* position: fixed; */
    /* z-index:1; */


        header{
            background: blue;
            width: 100%;
            height: 100%;
            display: flex;
            align-items: center;
            justify-content: space-between;

            >p{
                margin-left: 20px;
                color: #FFF;
                font-weight:700;
                font-style: oblique;
                /* font-style: italic; */
            }
            >nav{
                margin-right: 20px; 

                a{
                   text-decoration: none; 
                   color: #FFF;
                   margin: 5px;
                   transition: color 0.2s;
                }
                a:hover{
                    color: ${shade(0.2, '#FFF')};
                }
            }
        }
    }

    
`;