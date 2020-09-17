import styled from 'styled-components';

export const Main = styled.div`
  height: 100vh;
  width:100%;

`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
  width:100%;
  /* background-color: yellow; */

 
  h2{
    color: black;
  }

  form{
    /* width:100%; */
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    
    div{
      
      /* width: 80%; */
      /* background-color: red; */

      .MuiFormControl-root{
        /* width: 100%; */
        /* background-color: green; */
        margin-top: 5px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;

        input{
          /* width: 100%; */
          margin-bottom: 5px;
          width: 400px;

          @media(max-width:430px){
            width: 300px;
          }
        }
      }

    }
  }

  button{
    margin-top:20px;
    padding: 10px 60px;

  }  

`;



/*

export const Container = styled.div`
      display: flex;
      flex-direction:column;
      justify-content: center;
      align-items: center;
      height: auto;
      

      @media(min-width: 481px)
      {
        height:100%;

      }
    
      h2{
        color: black;
        font-weight: bold;
        margin-top: 8vh;

      }

      form{
        width:100vw;
        display:flex;
        flex-direction: column;
        align-items: center;
      }

      .classDate{
        padding: 0 15px !important;
        
      }

      .error{
        color: red;
        
      } 

      button{
        margin-top:20px;
        padding: 10px 60px;

      }        
`;

export const CollectionInput = styled.div`
        display:flex;
        flex-direction:row;
       
        max-width: 900px;
        width: 100%;
        flex-wrap: wrap;
        justify-content: center;
        margin: 0 auto;
        align-items: center;
        @media(min-width: 1201px)
        {
          max-width: 1200px;
          margin: 0 10px;
          
        }

        .MuiFormControl-root{
          margin-top: 35px;
          flex-grow: 1;
          margin-right:20px;
          width: 300px;
         
          @media(min-width: 481px)
           {
             width: 400px;
             margin: 0 10px;
           }
           @media(min-width: 870px)
           {
             width: 400px;
             margin: 0 10px;
           }
           @media(min-width: 1200px)
           {
             width: 450px;
             margin: 0 10px;
           }
           @media(min-width: 1201px)
           {
             width: 450px;
             margin: 0 10px;
           }

        } 

      
`

export const Teste = styled.div`
  height: 100vh;
  width:100%

`; */