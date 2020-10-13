import styled from 'styled-components';
import { shade } from 'polished';


// export const Component = styled.div`
//     /* width: 100%; */
//     /* max-width: 450px;
//     min-width: 300px; */
//     /* flex: 1 1 300px;  Descomentar esse*/ 
//     width: 300px;
//     padding: 10px;
//     font-size: 62,5%;
    
//     div{
//         background: #FFF;
//         border-radius: 20px;
//         box-shadow: 0px 2px 23px #26395338;
        
//         width: 100%;
//         /* max-width: 450px;
//         min-width: 300px; */
//         /* display: grid; */

//         div  {
//             background: url("https://cdn.shopify.com/s/files/1/2327/5701/articles/Omega-3-For-Dogs_1200x.jpg?v=1561351694") center/cover;
//             height: 200px;
//             width: 100%;
//             border-radius: 20px;
        
//         }

//         div{
            
//             /* padding: 20px; */
//             width: 100%;
//             padding: 10px;
//             font-weight: bold;
//             font-size: 1.2rem;

//             p{

//             }

//             div{
//                 display:flex;
//                 justify-content: space-between;

//                 span{
//                     font-size: 1rem;
//                     font-weight: normal;
//                     padding-top: 5px;
//                 }
//             }


//             div{
//                 margin-top: 15px;
//                 width: 100%;
//                 /* padding: 10px; */
//                 /* background: tomato; */
                
//                 button{
//                     width: calc(50% - 5px);
//                     /* margin: 5px; */
//                     background: white;
//                     border: 1px solid black;
//                     border-radius: 5px;
//                     padding: 5px 20px;
//                     transition: background-color 0.5s;

//                 }
                
//                 button:first-child{
//                     margin-right: 10px;
//                 }
                
//                 button:hover{
//                     background: black;
//                     color: white;
//                     background: ${shade(0.2, '#000')};
//                 }
//             }
//         }
//         /* .topCard {
//             padding: 20px;
//             padding-top: 0px;
//         } */   

//     }



// `;



/* -------------------------------------------------------------- */  

export const Component = styled.div`
    /* width: 100%; */
    /* max-width: 450px;
    min-width: 300px; */
    /* flex: 1 1 300px;  Descomentar esse*/ 
    width: 300px;
    padding: 10px;
    font-size: 62,5%;
    
    .card {
        background: #FFF;
        border-radius: 20px;
        box-shadow: 0px 2px 23px #26395338;
        
        width: 100%;
        /* max-width: 450px;
        min-width: 300px; */
        /* display: grid; */

        .mediaCard{
        background: url("https://cdn.shopify.com/s/files/1/2327/5701/articles/Omega-3-For-Dogs_1200x.jpg?v=1561351694") center/cover;
        height: 200px;
        width: 100%;
        border-radius: 20px;
        
        }

        .topCard {
            padding: 20px;
            padding-top: 0px;
        }

        .bottomCard {
            /* padding: 20px; */
            width: 100%;
            padding: 10px;
            font-weight: bold;
            font-size: 1.2rem;
        }
        
        .description{
            display:flex;
            justify-content: space-between;

        }

        .descriptionSpan{
            font-size: 1rem;
            font-weight: normal;
            padding-top: 5px;
        }

        .actionCard{
            margin-top: 15px;
            width: 100%;
            /* padding: 10px; */
            /* background: tomato; */
            
        }
        button{
            width: calc(50% - 5px);
            /* margin: 5px; */
            background: white;
            border: 1px solid black;
            border-radius: 5px;
            padding: 5px 20px;
            transition: background-color 0.5s;

        }
        
        button:first-child{
            margin-right: 10px;
        }
        
        button:hover{
            background: black;
            color: white;
            background: ${shade(0.2, '#000')};
        }
        

    }



`;